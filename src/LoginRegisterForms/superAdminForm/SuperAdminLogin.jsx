import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { ApiHttp, errorPopup, successPopup } from '../../Constant';

function SuperAdminLogin() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const LoginSuperAdmin = (data) => {
      

      axios.post(`${ApiHttp}/superAdmin/login` , data).then((res) =>{
        if(res.data.isSuccess){
          successPopup(res.data.message)
          localStorage.setItem('superAdmin',true);
          setTimeout(() => {
            window.location.href = '/superAdmin';
          }, 2500);
        }
        else{
          errorPopup(res.data.message)
        }
      })
    }
  return (
    <>
    <div className='content_Wrapper'>
     <div className='page_card Login_Section'>
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