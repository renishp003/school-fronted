import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Student from './Rols/Student/Student';
import Admin from './Rols/Admin/Admin';
import Teacher from './Rols/Teacher/Teacher';
import Dashboard from './Pages/Dashboard/Dashboard';
import Staff from './Pages/Staff/Staff';
import Page404 from './Pages/Page404/Page404';
import About from './Pages/About/About';
import AdminLogin from './LoginRegisterForms/Adminform/AdminLogin';
import TeacherLogin from './LoginRegisterForms/TeacherLogin/TeacherLogin';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminData } from './Redux/Actions/adminAction';
import ManageStudent from './Pages/ManageStudent/ManageStudent';
import { getStudentData } from './Redux/Actions/studentAction';
import { getSchoolData } from './Redux/Actions/schoolAction';
import SuperAdminLogin from './LoginRegisterForms/superAdminForm/SuperAdminLogin';

function App() {
  const [adminLogin, setadminLogin] = useState(localStorage.getItem('admin'))
  const [teacherLogin, setteacherLogin] = useState(localStorage.getItem('teacher'))
  const [superAdminLogin, setsuperAdminLogin] = useState(localStorage.getItem('superAdmin'))
  const allAdmin = useSelector(state =>  state.admin.admin)
  const dispatch = useDispatch()
  
  useEffect(() => {
     dispatch(getAdminData())
     dispatch(getStudentData())
     dispatch(getSchoolData())
  }, [])
  
  return (
    <>
    <BrowserRouter>
    <div className='row m-0 g-0'>
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/" >
          <Route path="about" element={<About />}></Route>
        </Route>

        <Route path="/admin" element={<Admin />}>
          {
            adminLogin?
            <>
              <Route path="" element={<Navigate to='dashboard' />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
              <Route path="student" element={<ManageStudent />}></Route>
              <Route path="staff" element={<Staff />}></Route>
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

        <Route path="/superAdmin" element={<Admin />}>
          {
            superAdminLogin?
            <>
              <Route path="" element={<Navigate to='dashboard' />}></Route>
              <Route path="dashboard" element={<Dashboard />}></Route>
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
  );
}

export default App;
