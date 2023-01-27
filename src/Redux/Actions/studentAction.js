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
        axios.get(`${ApiHttp}/student/get`).then(res => {
           const data = res.data.data
           dispatch(studentSuccess(data))
        })
    }
}

export const addStudentData =  (value) => {
    return (dispatch) => {
        dispatch(studentRequest());
        axios.post(`${ApiHttp}/student/addMultiple` , value , headers).then(res => {
            console.log(res)
            if(res.data.isSuccess){
                successPopup(res.data.message)
                dispatch(getStudentData())
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
            console.log(res)
            if(res.data.isSuccess){
                dispatch(getStudentData())
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
            console.log(res)
            if(res.data.isSuccess){
                successPopup(res.data.message)
                dispatch(getStudentData())
            }
            else{
                errorPopup(res.data.message)
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