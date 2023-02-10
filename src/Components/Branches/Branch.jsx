import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TableComman from '../TableCommon/TableComman';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

function Branch() {
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters"),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters")
            .oneOf([Yup.ref("password")], "Passwords do not match")
    });

    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm({ mode: "onTouched", resolver: yupResolver(formSchema) });
    const allSchoolData = useSelector(state => state.school.school)
    const dispatch = useDispatch()
    const columnnArray = ['schoolName']
    const addNewBranch = (data) => {
        // dispatch(addSchoolData(data))
        console.log(data)
    }
    return (
        <>
            <div className='col-12 col-md-10 content_Wrapper'>
                <div className='blank_card'>
                    <h5 className='mb-3'><b>Add Branch</b></h5>

                    <form action="">
                        <div className='row align-items-center'>
                            <div className='col-6'>
                                <label htmlFor="" className='form_label mt-0'>Branch Name</label>
                                <input type="text" className='text_input' placeholder='ex: Vivekanand-2' {...register("branch", { required: true, validate: (value) => { return !!value.trim() } })} />
                                <p className='Error_Message'>{errors.branch && <span>Branch name is required</span>}</p>
                            </div>
                            <div className='col-6'>
                                <label htmlFor="" className='form_label mt-0'>Select school</label>
                                <select name='schoolId' className='text_input' {...register("schoolId", { required: true })}>
                                    <option value='' selected disabled>Selecte branch</option>
                                    {
                                        allSchoolData.map((x, i) => {
                                            return <option key={i} value={x._id}>{x.schoolName}</option>
                                        })
                                    }
                                </select>
                                <p className='Error_Message'>{errors.schoolId && <span>Select school name</span>}</p>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="" className='form_label mt-0'>Email</label>
                                <input type="email" className='text_input' placeholder='ex: example@gmail.com' {...register("email", { required: true, validate: (value) => { return !!value.trim() } })} />
                                <p className='Error_Message'>{errors.email && <span>Email is required</span>}</p>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="" className='form_label mt-0'>Password</label>
                                <input type="Password" name='password' className='text_input' placeholder='ex: example@123' {...register("password", { required: true, validate: (value) => { return !!value.trim() } })} />
                                <p className='Error_Message'>{errors.password && <span>Password is required</span>}</p>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="" className='form_label mt-0'>Confirm Password</label>
                                <input type="Password" name='confirmPassword' className='text_input' placeholder='ex: example@123' {...register("confirmPassword", {
                                    required: true, validate: (value) => {
                                        const { password } = getValues();
                                        return password === value || "Passwords should match!";
                                    }
                                })} />
                                <p className='Error_Message'>{errors.confirmPassword && <span>Confirm Password is required {errors.confirmPassword.message}</span>}</p>
                            </div>
                            <div className='col-12 mt-3'>
                                <input type='submit' className='theme_btn' value='Add' onClick={handleSubmit(addNewBranch)}></input>
                                <button type='button' className='theme_btn bg-danger ms-3'>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>

                <TableComman data={allSchoolData} columnnArray={columnnArray} />
            </div>
        </>
    )
}

export default Branch