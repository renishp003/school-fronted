import { STUDENT_REQUEST , STUDENT_SUCCESS , STUDENT_FAILUER } from "../types/type";
import axios from "axios";
import Swal from "sweetalert2";
import { ApiHttp, errorPopup, successPopup } from "../../Constant";

let token  = localStorage.getItem('admin')

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      }
}

export const getStudentData = () => {
    return (dispatch) => {
        dispatch(studentRequest());
        axios.get(`${ApiHttp}/student/getAll`).then(res => {
           const data = res.data.data
        //    dispatch(studentSuccess(data))
        })
    }
}

export const getStudentDataByToken = () => {
    return (dispatch) => {
        dispatch(studentRequest());
        if(token){
            axios.get(`${ApiHttp}/student/getByToken` , headers).then(res => {
               const data = res.data.data
               dispatch(studentSuccess(data))
            })
        }
    }
}

export const addStudentData =  (value) => {
    return (dispatch) => {
        dispatch(studentRequest());
        axios.post(`${ApiHttp}/student/addMultiple` , value , headers).then(res => {
            if(res.data.isSuccess){
                successPopup(res.data.message)
                dispatch(getStudentDataByToken())
            }
            else{
                errorPopup('Something wrong!!')
            }
        })
    }
}

export const addSingleStudentData =  (value) => {
    return (dispatch) => {
        dispatch(studentRequest());
        axios.post(`${ApiHttp}/student/addOne` , value , headers).then(res => {
            if(res.data.isSuccess){
                dispatch(getStudentDataByToken())
                successPopup(res.data.message)
            }
            else{
                errorPopup(res.data.message)
            }
        })
    }
}

export const deleteSingleStudentData =  (id) => {
    return (dispatch) => {
        dispatch(studentRequest());
        axios.delete(`${ApiHttp}/student/deleteOne?id=${id}`).then(res => {
            if(res.data.isSuccess){
                successPopup(res.data.message)
                dispatch(getStudentDataByToken())
            }
            else{
                errorPopup(res.data.message)
            }
        })
    }
}


export const deleteMultipleStudentData =  (data) => {
    return (dispatch) => {
        dispatch(studentRequest());
        axios.post(`${ApiHttp}/student/deleteMany` , {deleteManyId : data}).then(res => {
            if(res.data.isSuccess){
                successPopup(res.data.message)
                dispatch(getStudentDataByToken())
            }
            else{
                errorPopup(res.data.message)
            }
        })
    }
}

export const studentLogin = (value) => {
    return async (dispatch) => {
        dispatch(studentRequest());
        await axios.post(`${ApiHttp}/student/login` , value).then(res => {
           if(res.data.isSuccess == true){
               localStorage.setItem('student' , res.data.token);
                localStorage.removeItem('superAdmin');
                localStorage.removeItem('teacher');
                localStorage.removeItem('admin');
               Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login successfull',
                showConfirmButton: false,
                timer: 1500
              })
              successPopup('Login Successful.')
              setTimeout(() => {
                  window.location.href = '/';
              }, 1500);
           }
           else{
            errorPopup(res.data.message);
           }
        })
    }
}


export const studentRequest = () => {
    return {
        type: STUDENT_REQUEST
    }
}

export const studentSuccess = (data) => {
    return {
        type: STUDENT_SUCCESS,
        payload : data
    }
}

export const studentfailure = (error) => {
    return {
        type: STUDENT_FAILUER,
        payload : error
    }
}