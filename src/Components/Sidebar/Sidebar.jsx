import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import './Sidebar.css';
import adminRoute from '../../json_data/admin_route.json'
import superAdminRoute from '../../json_data/super_admin_route.json'
import teacherRoute from '../../json_data/teacher_route.json'

function Sidebar(props) {
  const [RouteData, setRouteData] = useState([])
  useEffect(() => {
    if(props.pathName =='superAdmin')
    {
      setRouteData([...superAdminRoute])
    }
    else if(props.pathName =='admin'){
      setRouteData([...superAdminRoute])
    }
    else if(props.pathName =='teacher'){
      setRouteData([...teacherRoute])
    }
  }, [])
  


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
              {
                RouteData?.map((x,i) => {
                  return  <NavLink key={i} to={`/${props.pathName}/${x.link}`}><box-icon type='solid' color='#F08A1D' size='xs' name={x.icon}></box-icon><span className='ms-1'>{x.displayText}</span></NavLink>
                })
              }
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