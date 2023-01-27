import React, { useState } from 'react';
import './TableCommon.css'

function TableComman(props) {
  const data = props.data;
  // data?.push(data[0]).push(data[0]).push(data[0]).push(data[0]).push(data[0]).push(data[0]).push(data[0]);

  const convertDate = (date) => {
    return new Date(date).getDate() + '-' + (new Date(date).getMonth()+1) + '-' + new Date(date).getFullYear()
  }
  return (
    <>
       <div className='table_div'>
       <table className='common_table'>
          <thead className='common_table_header'>
            <tr>
                <th>No.</th>
                <th>GR No.</th>
                <th>Surname</th>
                <th>Name</th>
                <th>Father Name</th>
                <th>Standard</th>
                <th>Division</th>
                <th>Fees</th>
                <th>Batch</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Birth Date</th>
                <th>Admission Date</th>
                <th>Student Current Year</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.length > 0 ? 
                data?.map((x,i) => {
                  return(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{x.grno}</td>
                      <td>{x.surname}</td>
                      <td>{x.name}</td>
                      <td>{x.fatherName}</td>
                      <td>{x.standard}</td>
                      <td>{x.division}</td>
                      <td>{x.fees ? 'Complated' : 'Not Complated'}</td>
                      <td>{x.batch}</td>
                      <td>{x.email}</td>
                      <td>{x.mobile}</td>
                      <td>{x.address}</td>
                      <td>{convertDate(x.birthDate)}</td>
                      <td>{x.admissionDate}</td>
                      <td>{x.studentCurrentYear}</td>
                      <td>
                        <button className='theme_btn py-1 bg-primary text-white' onClick={() => props.editSingle(x._id)}>Edit</button>
                        <button className='theme_btn py-1 bg-danger text-white ms-2' onClick={() => props.deleteRecord(x._id)}>Delete</button>
                      </td>
                    </tr>
                  )
                }):
                <tr className='text-center'>
                  <td colSpan='16'>There is no data in the table.</td>
                </tr>

            }
          </tbody>
       </table>
       </div>
    </>
  )
}

export default TableComman