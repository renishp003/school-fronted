import { ADMIN_REQUEST , ADMIN_SUCCESS , ADMIN_FAILUER } from "../types/type";
import axios from "axios";
import Swal from "sweetalert2";
import { ApiHttp, errorPopup, headers, successPopup } from "../../Constant";


export const getAdminData = () => {
    return (dispatch) => {
        dispatch(adminRequest());
        axios.get(`${ApiHttp}/admin/get`).then(res => {
           const data = res.data.data
           dispatch(adminSuccess(data))
        })
    }
}

export const checkAdminPassword = async(password) => {
    let aa  =  await axios.post(`${ApiHttp}/admin/checkAdminPassword` , {password:password} , headers)
    return aa
}

export const adminLogin = (value) => {
    console.log(value)
    return async (dispatch) => {
        dispatch(adminRequest());
        await axios.post(`${ApiHttp}/admin/login` , value).then(res => {
           console.log(res)
           if(res.data.isSuccess == true){
               localStorage.setItem('admin' , res.data.token);
               Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Login successfull',
                showConfirmButton: false,
                timer: 1500
              })
              successPopup('Login Successful.')
              setTimeout(() => {
                  window.location.reload();
              }, 1500);
           }
           else{
            errorPopup(res.data.message);
           }
        })
    }
}

export const adminRequest = () => {
    return {
        type: ADMIN_REQUEST
    }
}

export const adminSuccess = (data) => {
    return {
        type: ADMIN_SUCCESS,
        payload : data
    }
}

export const adminfailure = (error) => {
    return {
        type: ADMIN_FAILUER,
        payload : error
    }
}