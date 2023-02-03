import React from 'react'
import { useForm } from 'react-hook-form';

function SuperAdminLogin() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const LoginSuperAdmin = (data) => {
      // localStorage.setItem('superAdmin',true);
      // window.location.reload()
      console.log(data)
    }
  return (
    <>
    <div className='Teacher_Section_Wrapper'>
     <div className='page_card Teacher_Section'>
       <h4 className='page_card_header py-2'>SUPER ADMIN LOGIN</h4>
       <form action="" className='px-3 pb-4 pt-2' onSubmit={handleSubmit(LoginSuperAdmin)}>

          <label className='form_label'>Email</label>
          <input type="email" name='email' className='text_input' placeholder='ex: example@gmail.com' {...register("email", { required: true })} />
          <p className='Error_Message'>{errors.email && <span>Email is required</span>}</p>

          <label className='form_label'>Password</label>
          <input type="password" name='password' className='text_input' placeholder='ex: example@123' {...register("password", { required: true })}  />
          <p className='Error_Message'>{errors.password && <span>Password is required</span>}</p>

          <input type="submit" className='theme_btn mt-4' />
       </form>
     </div>
    </div>
    </>
  )
}

export default SuperAdminLogin