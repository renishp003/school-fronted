import React, { useEffect, useState } from "react";
import { getLoginStudent } from "../../Constant";
import Header from "../Header/Header";
import './StudentAccount.css'
import moment from "moment";
import Swal from "sweetalert2";

function StudentAccount() {
    const [LoginStudent, setLoginStudent] = useState('')

    useEffect(() => {
        GetLoginStudent();
    }, [])
    const GetLoginStudent = async () => {
        let schoolObj = await getLoginStudent();
        setLoginStudent(schoolObj)
    }
    const logOut = () => {
      localStorage.clear();
      window.location.href = '/';
    }

    const logout = () => {
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
              localStorage.clear();
              window.location.href = '/'
            }
          })
    }
  return (
    <>
    {console.log(LoginStudent)}
      <Header />
      <div className="content_Wrapper student_profile">
        <div className="bg-white container shadow-lg">
          <div className="row">
            <div className="col-12 col-lg-3 d-flex flex-column align-items-center px-5 pt-3" style={{borderRight : '1px solid lightgray'}}>
                <h2 className="display-4 mb-3">Profile</h2>
                <div className="student_Profile_Image" style={{backgroundImage:'url("images/kids/kids1.jpg")'}}></div>
                <h3 className="mt-4">{LoginStudent.name}</h3>
            </div>
            <div className="col-12 col-lg-9 p-5">
                
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label>Surname</label>
                        <span>{LoginStudent?.surname}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Name</label>
                        <span>{LoginStudent?.name}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Father Name</label>
                        <span>{LoginStudent?.fatherName}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Standard</label>
                        <span>{LoginStudent?.standard}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Batch</label>
                        <span>{LoginStudent?.batch}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Division</label>
                        <span>{LoginStudent?.division}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Gr no.</label>
                        <span>{LoginStudent?.grno}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Address</label>
                        <span>{LoginStudent?.address}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Birth Date</label>
                        <span>{moment(LoginStudent?.birthDate).format("LL")}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Mobile no.</label>
                        <span>{LoginStudent?.mobile}</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Email</label>
                        <span>{LoginStudent?.email}</span>
                    </div>
                </div>

                <div className="mt-5">
                    <button className="theme_btn" onClick={logOut}>LOGOUT</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentAccount;
