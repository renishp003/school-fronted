import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { ApiHttp, getschoolName } from '../../Constant'

function Admin() {
  const [schoolName, setschoolName] = useState('')

  useEffect(async () => {
    let schoolObj = await getschoolName();
    setschoolName(schoolObj.schoolName)
  }, [])

  
  return (
    <>
      <div className='col-2 m-0 p-0 d-none d-md-block'>
        {
          localStorage.getItem('admin') ?
          <>
            <Sidebar pathName='admin' schoolName={schoolName}/>
          </> :
          <>
          </>
        }
      </div>
    
    <Outlet />
    </>
  )
}

export default Admin