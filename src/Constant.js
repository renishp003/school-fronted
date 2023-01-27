import axios from "axios";
import Swal from "sweetalert2";

export const ApiHttp = 'http://localhost:4000/api';
let token  = localStorage.getItem('admin')

export const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      }
}

export const errorPopup = (error) => {
     return  Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
        timer : 2500
      })
}

export const successPopup = (message) =>{
    return Swal.fire({
        position: 'center',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 2500
      })
}


export const getschoolName = () => {
  if(token){
    return axios.get(`${ApiHttp}/school/getById` , headers).then((res) => {
      return res.data.data[0]
    })
  }
}

export const getStudentById = (id) => {
  if(token){
    return axios.get(`${ApiHttp}/student/getById?id=${id}` , headers).then((res) => {
      return res.data.data
    })
  }
}