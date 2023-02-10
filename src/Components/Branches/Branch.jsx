import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TableComman from '../TableCommon/TableComman';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { addSchoolData } from '../../Redux/Actions/schoolAction';
import { addAdminData } from '../../Redux/Actions/adminAction';

function Branch() {
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be more than 6 characters"),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .min(6, "Password must be more than 6 characters")
            .oneOf([Yup.ref("password")], "Passwords do not match"),
        branch: Yup.string()
            .required("Branch is required")
           . matches(/^[a-zA-Z0-9- \s]+$/, "Only accept in number or characters "),
        schoolId: Yup.string()
            .required("Please select school"),
        email: Yup.string()
            .required("Email is required"),
    });

    const { register, handleSubmit, watch, getValues, formState: { errors } } = useForm({ mode: "onTouched", resolver: yupResolver(formSchema) });
    const allSchoolData = useSelector(state => state.school.school)
    const allBranchData = useSelector(state => state.admin.admin)
    const dispatch = useDispatch()
    const columnnArray = ['email' , 'branch']
    const addNewBranch = (data) => {
        dispatch(addAdminData(data))
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
                                <p className='Error_Message'>{errors.branch && <span>{errors.branch.message}</span>}</p>
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
                                <p className='Error_Message'>{errors.schoolId && <span>{errors.schoolId.message}</span>}</p>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="" className='form_label mt-0'>Email</label>
                                <input type="email" className='text_input' placeholder='ex: example@gmail.com' {...register("email", { required: true, validate: (value) => { return !!value.trim() } })} />
                                <p className='Error_Message'>{errors.email && <span>Email is required</span>}</p>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="" className='form_label mt-0'>Password</label>
                                <input type="Password" name='password' className='text_input' placeholder='ex: example@123' {...register("password", { required: true, validate: (value) => { return !!value.trim() } })} />
                                <p className='Error_Message'>{errors.password && <span>{errors.password.message}</span>}</p>
                            </div>
                            <div className='col-4'>
                                <label htmlFor="" className='form_label mt-0'>Confirm Password</label>
                                <input type="Password" name='confirmPassword' className='text_input' placeholder='ex: example@123' {...register("confirmPassword", {
                                    required: true, validate: (value) => {
                                        const { password } = getValues();
                                        return password === value || "Passwords should match!";
                                    }
                                })} />
                                <p className='Error_Message'>{errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}</p>
                            </div>
                            <div className='col-12 mt-3'>
                                <input type='submit' className='theme_btn' value='Add' onClick={handleSubmit(addNewBranch)}></input>
                                <button type='button' className='theme_btn bg-danger ms-3'>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>

                <TableComman data={allBranchData} columnnArray={columnnArray} />
            </div>
        </>
    )
}

export default Branch