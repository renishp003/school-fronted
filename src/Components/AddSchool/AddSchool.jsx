import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addSchoolData } from '../../Redux/Actions/schoolAction';
import TableComman from '../TableCommon/TableComman';

function AddSchool() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({});
    const allSchoolData = useSelector(state => state.school.school)
    const dispatch = useDispatch()
    const columnnArray = ['schoolName']
    const addNewSchool =(data) => {
        dispatch(addSchoolData(data))
    }
    return (
        <>
            <div className='col-12 col-md-10 content_Wrapper'>
                <div className='blank_card'>
                    <h5 className='mb-3'><b>Add new school</b></h5>

                    <form action="">
                        <div className='row align-items-center'>
                            <div className='col-4'>
                                <label htmlFor="" className='form_label mt-0'>School Name</label>
                                <input type="text" className='text_input' placeholder='ex: Vivekanand' {...register("schoolName", { required: true ,validate: (value) => { return !!value.trim()}})}/>
                                <p className='Error_Message'>{errors.schoolName && <span>School name is required</span>}</p>
                            </div>
                            <div className='col-12 mt-3'>
                                <input type='submit' className='theme_btn' value='Add' onClick={handleSubmit(addNewSchool)}></input>
                                <button type='button' className='theme_btn bg-danger ms-3'>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>

                <TableComman data={allSchoolData}  columnnArray={columnnArray}/>
            </div>
        </>
    )
}

export default AddSchool