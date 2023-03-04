import React, { useState } from 'react'
import './AdminLogin.css'
import { useForm } from "react-hook-form";
import axios from 'axios'
import {ApiHttp} from '../../Constant'
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../../Redux/Actions/adminAction';
function AdminLogin() {
  const { register, handleSubmit, watch, formState: { errors } , setValue , getValues } = useForm();
  const allAdmin = useSelector(state =>  state.admin.admin)
  const dispatch = useDispatch()
  const LoginAdmin = (data) => {
    dispatch(adminLogin({...data }))
  }

  return (
    <>
    <div className='content_Wrapper'>
     <div className='page_card Login_Section'>
       <h4 className='page_card_header py-2'>ADMIN LOGIN</h4>
       <form action="" className='px-3 pb-4 pt-2' onSubmit={handleSubmit(LoginAdmin)}>

          <label className='form_label'>Email</label>
          <input type="email" name='email' className='text_input' placeholder='ex: example@gmail.com' {...register("email", { required: true })} />
          <p className='Error_Message'>{errors.email && <span>Email is required</span>}</p>

          <label className='form_label'>Password</label>
          <input type="password" name='password' className='text_input' placeholder='ex: abc@123' {...register("password", { required: true })}  />
          <p className='Error_Message'>{errors.password && <span>Password is required</span>}</p>

          <input type="submit" className='theme_btn mt-4' value='Continue' />
       </form>
     </div>
    </div>
    </>
  )
}

export default AdminLogin