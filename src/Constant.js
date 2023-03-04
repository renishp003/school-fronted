import axios from "axios";
import Swal from "sweetalert2";

export const ApiHttp = 'http://localhost:4000/api';
let AdminToken = localStorage.getItem('admin')
let StudentToken = localStorage.getItem('student')
let superAdminToken = localStorage.getItem('superAdmin')

export const SuperAdminHeaders = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + superAdminToken
  }
}

export const AdminHeaders = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + AdminToken
  }
}

export const StudentHeaders = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + StudentToken
  }
}


export const errorPopup = (error) => {
  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: error,
    timer: 2500
  })
}

export const successPopup = (message) => {
  return Swal.fire({
    position: 'center',
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 2500
  })
}

export const confirmDeletePopup = () => {
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be delete it!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#F08A1D',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  })
}

export const getschoolName = () => {
  if (AdminToken) {
    return axios.get(`${ApiHttp}/school/getById`, AdminHeaders).then((res) => {
      return res.data.data[0]
    })
  }
}

export const getLoginStudent = () => {
  if (StudentToken) {
    return axios.get(`${ApiHttp}/student/getLoginStudent`, StudentHeaders).then((res) => {
      return res.data.data[0]
    })
  }
}

export const getStudentById = (id) => {
  if (StudentToken) {
    return axios.get(`${ApiHttp}/student/getById?id=${id}`, StudentHeaders).then((res) => {
      return res.data.data
    })
  }
}


export const EnquiryAdd = (data) => {
  return axios.post(`${ApiHttp}/enquire/add`, data).then((res) => {
    if (res.data.isSuccess) {
      successPopup(res.data.message)
    }
    else {
      errorPopup(res.data.message)
    }
  })
}


export const getAEnquireData = async () => {
  console.log(AdminToken)
  let token = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + AdminToken
    }
  }
  if (AdminToken) {
    return await axios.get(`${ApiHttp}/enquire/getByBranch`, token).then(res => {
      return res.data.data
    })
  }
}


export const verifyToken = (token) => {
  const header = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  }
  return axios.get(`${ApiHttp}/verifyToken` , header).then((res) => {
    if(res.data.isSuccess){
      localStorage.clear();
      localStorage.setItem(res.data.role , token);
      return true
    }
    else{
      return false
    }
  })
}

export const LoginUser = async (data) => {
  await axios.post(`${ApiHttp}/login`, data).then(async (res) => {
    if (res.data.isSuccess == true) {
      // localStorage.clear();
      // localStorage.setItem('student', res.data.token);

      let tokenSuccess = await verifyToken(res.data.token)
      if(tokenSuccess){
        successPopup('Login Successful.')
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      }
    }
    else {
      errorPopup(res.data.message);
    }
  })
}