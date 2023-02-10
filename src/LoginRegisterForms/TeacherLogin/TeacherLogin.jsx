import React from 'react'
import './TeacherLogin.css'
import { useForm } from "react-hook-form";

function TeacherLogin() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const LoginTeacher = (data) => {
    // localStorage.setItem('teacher',true);
    // window.location.reload()
    console.log(data)
  }
  return (
    <div className='content_Wrapper'>
     <div className='page_card Login_Section'>
       <h4 className='page_card_header py-2'>TEACHER LOGIN</h4>
       <form action="" className='px-3 pb-4 pt-2' onSubmit={handleSubmit(LoginTeacher)}>

          <label className='form_label'>Email</label>
          <input type="email" name='email' className='text_input' {...register("email", { required: true })} />
          <p className='Error_Message'>{errors.email && <span>Email is required</span>}</p>

          <label className='form_label'>Password</label>
          <input type="password" name='password' className='text_input' {...register("password", { required: true })}  />
          <p className='Error_Message'>{errors.password && <span>Password is required</span>}</p>

          <input type="submit" className='theme_btn mt-4' />
       </form>
     </div>
    </div>
  )
}

export default TeacherLogin