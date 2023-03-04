import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLogin from '../../LoginRegisterForms/Adminform/AdminLogin'
import Login from '../../LoginRegisterForms/Login/Login'
import SuperAdminLogin from '../../LoginRegisterForms/superAdminForm/SuperAdminLogin'
import TeacherLogin from '../../LoginRegisterForms/TeacherLogin/TeacherLogin'
import About from '../../Pages/About/About'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import ManageStudent from '../../Pages/ManageStudent/ManageStudent'
import Page404 from '../../Pages/Page404/Page404'
import Staff from '../../Pages/Staff/Staff'
import Admin from '../../Rols/Admin/Admin'
import Student from '../../Rols/Student/Student'
import SuperAdmin from '../../Rols/SuperAdmin/SuperAdmin'
import Teacher from '../../Rols/Teacher/Teacher'
import AdminEnquiry from '../AdminEnquiry/AdminEnquiry'
import Branch from '../Branches/Branch'
import EnrollTopNav from '../EnrollTopNav/EnrollTopNav'
import Header from '../Header/Header'
import StudentAccount from '../StudentAccount/StudentAccount'

function Routing() {
  const [adminLogin, setadminLogin] = useState(localStorage.getItem('admin'))
  const [teacherLogin, setteacherLogin] = useState(localStorage.getItem('teacher'))
  const [superAdminLogin, setsuperAdminLogin] = useState(localStorage.getItem('superAdmin'))
  const [studentLogin, setstudentLogin] = useState(localStorage.getItem('student'))
  return (
    <>
      <BrowserRouter>
        <div className='row m-0 g-0'>
          <Routes>
            <Route path="/" element={<Student />} />
            <Route path="/" >
              <Route path="about" element={<About />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="account" element={<StudentAccount />}></Route>
            </Route>

            <Route path="/admin" element={<Admin />}>
              {
                adminLogin ?
                  <>
                    <Route path="" element={<Navigate to='dashboard' />}></Route>
                    <Route path="dashboard" element={<Dashboard />}></Route>
                    <Route path="student" element={<ManageStudent />}></Route>
                    <Route path="staff" element={<Staff />}></Route>
                    <Route path="enquiries" element={<AdminEnquiry />}></Route>
                    <Route path='*' element={<Navigate to='../dashboard' />}></Route>
                  </>
                  :
                  <>
                    <Route path="" element={<Navigate to='login' />}></Route>
                    <Route path="login" element={<AdminLogin />}></Route>
                    <Route path='*' element={<Navigate to='../login' />}></Route>
                  </>
              }
            </Route>

            <Route path="/teacher" element={<Teacher />} >
              {
                teacherLogin ?
                  <>
                    <Route path="" element={<Navigate to='dashboard' />}></Route>
                    <Route path="dashboard" element={<Dashboard />}></Route>
                    <Route path='*' element={<Navigate to='../dashboard' />}></Route>
                  </>
                  :
                  <>
                    <Route path="" element={<Navigate to='login' />}></Route>
                    <Route path="login" element={<TeacherLogin />}></Route>
                    <Route path='*' element={<Navigate to='../login' />}></Route>
                  </>
              }
            </Route>

            <Route path="/superAdmin" element={<SuperAdmin />}>
              {
                superAdminLogin ?
                  <>
                    <Route path="" element={<Navigate to='dashboard' />}></Route>
                    <Route path="dashboard" element={<Dashboard />}></Route>
                    <Route path="branch" element={<Branch />}></Route>
                  </>
                  :
                  <>
                    <Route path="" element={<Navigate to='login' />}></Route>
                    <Route path="login" element={<SuperAdminLogin />}></Route>
                    <Route path='*' element={<Navigate to='../login' />}></Route>
                  </>
              }
            </Route>

            <Route path='*' element={<Page404 />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Routing