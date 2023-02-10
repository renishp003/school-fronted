import axios from "axios";
import { ApiHttp } from "../../Constant";
import { SCHOOL_REQUEST , SCHOOL_SUCCESS, SCHOOL_FAILUER } from "../types/type";

export const getSchoolData = () => {
    return (dispatch) => {
        dispatch(schoolRequest());
        axios.get(`${ApiHttp}/school/get`).then(res => {
            const data = res.data.data
            console.log(data);
           dispatch(schoolSuccess(data))
        })
    }
}
export const addSchoolData = (data) => {
    return (dispatch) => {
        dispatch(schoolRequest());
        axios.post(`${ApiHttp}/school/add` , data).then(res => {
           dispatch(getSchoolData())
        })
    }
}

export const schoolRequest = () => {
    return {
        type: SCHOOL_REQUEST
    }
}

export const schoolSuccess = (data) => {
    return {
        type: SCHOOL_SUCCESS,
        payload : data
    }
}

export const schoolfailure = (error) => {
    return {
        type: SCHOOL_FAILUER,
        payload : error
    }
}