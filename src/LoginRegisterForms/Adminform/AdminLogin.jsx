import React, { useState } from 'react'
import './AdminLogin.css'
import { useForm } from "react-hook-form";
import axios from 'axios'
import {ApiHttp} from '../../Constant'
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../../Redux/Actions/adminAction';
function AdminLogin() {
  const { register, handleSubmit, watch, formState: { errors } , setValue , getValues } = useForm();
  const {register: register2 ,handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm({
    mode: "onBlur",
  });
  const allAdmin = useSelector(state =>  state.admin.admin)
  const allSchool = useSelector(state =>  state.school.school)
  const [schoolWiseBranch, setschoolWiseBranch] = useState([])
  const dispatch = useDispatch()
  const [nextDialog, setnextDialog] = useState(false)
  const LoginAdmin = (data) => {
    dispatch(adminLogin({...data , branchId : getValues('branchId') , schoolId :getValues('schoolId') }))
  }
  const SchoolAndBranch = (data) => {
    setnextDialog(true)
  }

  const setBranchOnSelectSchool = (e) =>  {
    let value = allAdmin.filter((x) => x.schoolId == e.target.value)
    setschoolWiseBranch([...value])
    setValue('branchId' , value[0]?._id)
  }
  return (
    <>
    <div className='content_Wrapper'>
     <div className='page_card Login_Section'>
       <h4 className='page_card_header py-2'>ADMIN LOGIN</h4>
       <form action="" className={`px-3 pb-4 pt-2 ${nextDialog ? 'd-none' : 'd-block'}`} onSubmit={handleSubmit(SchoolAndBranch)}>

          <label className='form_label'>Select School</label>
          <select name="schoolId" className='text_input' {...register("schoolId", { required: true })} onChangeCapture={setBranchOnSelectSchool}>
            <option value='' selected disabled>Selecte School Name</option>
            {
              allSchool.map((x, i) => {
                return <option key={i} value={x._id}>{x.schoolName}</option>
              })
            }
          </select>
          <p className='Error_Message'>{errors.schoolId && <span>School Name is required</span>}</p>


          <label className='form_label'>Select Branch</label>
          <select name="branchId" className='text_input' {...register("branchId", { required: true })}>
            <option value='' selected disabled>Selecte branch</option>
            {
              schoolWiseBranch?.map((x, i) => {
                return <option key={i} value={x._id}>{x.branch}</option>
              })
            }
          </select>
          <p className='Error_Message'>{errors.branchId && <span>Branch is required</span>}</p>


          <input type="submit" className='theme_btn mt-4' value='Continue' />
       </form>

       <form action="" className={`px-3 pb-4 pt-2 ${nextDialog ? 'd-block' : 'd-none'}`} onSubmit={handleSubmit2(LoginAdmin)}>

          <label className='form_label'>Email</label>
          <input type="email" name='email' className='text_input' placeholder='ex: example@gmail.com' {...register2("email", { required: true })} />
          <p className='Error_Message'>{errors2.email && <span>Email is required</span>}</p>

          <label className='form_label'>Password</label>
          <input type="password" name='password' className='text_input' placeholder='ex: abc@123' {...register2("password", { required: true })}  />
          <p className='Error_Message'>{errors2.password && <span>Password is required</span>}</p>

          <input type="submit" className='theme_btn mt-4' />
       </form>
     </div>
    </div>
    </>
  )
}

export default AdminLogin