import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Sidebar.css'

function Sidebar(props) {

  const navigate = useNavigate()

  const LogoutUser = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't Logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#F08A1D',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Successfull!',
          'You are logout.',
          'success'
        )
        localStorage.clear(props.pathName);
        window.location.reload()
      }
    })
  }


  return (
    <>
          <div className='sidebar'>
            <div className='logo d-flex justify-content-center py-3'>
              <img src="/images/logo.png" alt="" width='80%' />
            </div>
            <div className='d-flex flex-column align-items-center text-white'>
              <h3 className=''>{props.schoolName}</h3>
              <img src="/images/user.png"  alt="" width='45%' />
            </div>
            <hr className='text-white my-4' />
            <div className='menu'>
              <NavLink to={`/${props.pathName}/dashboard`}><span>Dashboard</span></NavLink>
              <NavLink to={`/${props.pathName}/staff`}><span>Staff</span></NavLink>
              <NavLink to={`/${props.pathName}/student`}><span>Students</span></NavLink>
              <NavLink to={`/${props.pathName}/staff`}><span>Fees</span></NavLink>
              <NavLink to={`/${props.pathName}/staff`}><span>Staff</span></NavLink>
            </div>
            <hr className='text-white my-4' />
            <div className='menu'>
              <span className='logout_btn' onClick={() => LogoutUser()}>Logout</span>
            </div>
          </div>
    </>
  )
}

export default Sidebar