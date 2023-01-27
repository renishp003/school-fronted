import React, { useEffect, useState } from 'react'
import './ManageStudent.css'
import { useDispatch, useSelector } from 'react-redux'
import TableComman from '../../Components/TableCommon/TableComman'
import { useForm } from 'react-hook-form';
import { addStudentData, deleteSingleStudentData } from '../../Redux/Actions/studentAction';
import AddStudentDialog from '../../Components/AddStudentDialog/AddStudentDialog';
import Swal from 'sweetalert2';
import { checkAdminPassword } from '../../Redux/Actions/adminAction';
import EditStudentDialog from '../../Components/EditStudentDialog/EditStudentDialog';
import { getStudentById } from '../../Constant';

function ManageStudent() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({});
  const allStudent= useSelector(state =>  state.student.student)
  const dispatch = useDispatch()
  const [filterArray, setfilterArray] = useState([])
  const [showAddNew, setshowAddNew] = useState(false)
  const [formValue, setformValue] = useState({recordNum:''})
  const [editObj, seteditObj] = useState({})

  // useEffect(() => {
  //   filterData({...formValue})
  // }, [allStudent])
  useEffect(() => {
    setfilterArray([...allStudent])
  }, [allStudent])
  
  

  const filterData = (data) => {
    setformValue({...data})
    if(data.standard == "All" && data.division == "All"){
      setfilterArray([...allStudent])
    }
    else{
      setfilterArray([...allStudent.filter((x) => (x.standard == data.standard) && (x.division == data.division))])
    }
    console.log(filterArray)
  }
  const addStudent = (e) => {
    e.preventDefault()
    if(formValue.recordNum != '0' && formValue.recordNum != ''){
      dispatch(addStudentData({recordNum:formValue.recordNum}))
      setformValue({recordNum:''})
    }
  }
  const getMultiFieldValue = (e) => {
    if(e.target.value <= 10){

      setformValue({recordNum : e.target.value})
    }
  }

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const handleShowAddDialog = () => {
    return setShowAddDialog(!showAddDialog)
  }
  const handleShowEditDialog = () => {
    return setShowEditDialog(!showEditDialog)
  }
  const addSingle = () => {
    setshowAddNew(false)
    handleShowAddDialog();
  }

  const editSingle = async (id) => {
    handleShowEditDialog();
    seteditObj({...await getStudentById(id)})

  }

  const deleteRecord = (id) => {
    Swal.fire({
      title: 'Enter your account password to delete record',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Delete',
      confirmButtonColor:'#fa7305',
      cancelButtonColor:'#1b2531',
      showLoaderOnConfirm: true,
      preConfirm: async (password) => {
        if(password){
          let data  = await checkAdminPassword(password)
          if(data.data.isSuccess)
          {
            dispatch(deleteSingleStudentData(id))
          }
          else{
            Swal.showValidationMessage(
              data.data.message
            )
          }
        }
        else{
          Swal.showValidationMessage(
            `Password is required`
          )
        }
      }
    })
  }
  return (
    <>
       <div className='col-12 col-md-10 content_Wrapper'>
        <div className='d-flex justify-content-between align-items-center mb-2'>
          <h2 className='page_header'>Student</h2>
          <div>
            <button className='theme_btn_outline' style={{backgroundColor:'#1b2531' ,color:'white'}} onClick={() => addSingle()}>+ Add One</button>
            <button className='theme_btn_outline ms-2' onClick={() => setshowAddNew(!showAddNew)}>+ Add Multiple</button>
          </div>
        </div>
        <div className={`filter_Student ${showAddNew ? 'd-block' : 'd-none'}`} style={{animation: "anim .3s ease-in-out"}}>
          <h5 className='mb-3'><b>Add new student</b></h5>
          <form action="">
          <div className='row align-items-center'>
            <div className='col-4'>
              <label htmlFor="" className='form_label mt-0'>Number of record</label>
              <input type="text" className='text_input' placeholder='ex: 1' value={formValue.recordNum}  onChange={getMultiFieldValue}/>
            </div>
            <div className='col-12 mt-3'>
              <input type='submit' className='theme_btn' onClick={addStudent}></input>
              <button type='button' className='theme_btn bg-danger ms-3' onClick={() => setshowAddNew(false)}>Cancel</button>
            </div>
          </div>
          </form>
        </div>

        <div className='filter_Student'>
        <h5 className='mb-3'><b>Select to filter student data</b></h5>
          <div className='row align-items-center'>
            <div className='col-4'>
              <label htmlFor="" className='form_label mt-0'>Select Standard</label>
              <select name="standard" className='text_input' {...register("standard", { required: true })}>
                {/* <option disabled selected value=''> Select Standard</option> */}
                <option value='All' selected>All</option>
                {
                  [...new Map(allStudent.map(item =>
                    [item['standard'], item])).values()]?.map((x,i) => {
                    return <option key={i} value={x.standard}>{x.standard}</option>
                  })
                }
              </select>
              <p className='Error_Message'>{errors.standard && <span>Standard is required</span>}</p>
            </div>
            <div className='col-4'>
              <label htmlFor="" className='form_label mt-0'>Select Division</label>
              <select name="division" className='text_input' {...register("division", { required: true })}>
                {/* <option disabled selected value=''> Select Division</option> */}
                <option value='All' selected>All</option>
                {
                  [...new Map(allStudent.map(item =>
                    [item['division'], item])).values()]?.map((x,i) => {
                    return <option key={i} value={x.division}>{x.division}</option>
                  })
                }
              </select>
              <p className='Error_Message'>{errors.division && <span>Division is required</span>}</p>

            </div>
            <div className='col-4'>
              <button className='float-end theme_btn' onClick={handleSubmit(filterData)}>Filter</button>
            </div>
          </div>
          
        </div>
        

        <TableComman data={filterArray} deleteRecord={deleteRecord} editSingle={editSingle} />
       </div>
       

       <AddStudentDialog show={showAddDialog} handleShow={handleShowAddDialog} />
       <EditStudentDialog show={showEditDialog} handleShow={handleShowEditDialog} editObj={editObj} />
    </>
  )
}

export default ManageStudent