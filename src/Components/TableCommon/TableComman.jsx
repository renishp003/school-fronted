import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import './TableCommon.css'
import {Link} from 'react-router-dom'
import moment from "moment";

function TableComman(props) {
  let data = props.data;
  return (
    <>
      <div className='table_div' style={{height: props.height ?? ''}}>
        <table className='common_table' >
          <thead className='common_table_header'>
            <tr>
              {
                props.isDeleteAll ? <th></th> : <></>
              }
              <th>No.</th>
              {
                props.columnnArray.map((x, i) => {
                  return <th key={i}>{x}</th>
                })
              }
              {
                props.isAction || props.isviewBranch ? <th>Action</th> : <></>
              }
            </tr>
          </thead>
          <tbody>
            {
              data?.length > 0 ?
                data?.map((x, i) => {
                  return (
                    <tr key={i}>
                      {
                        props.isDeleteAll ? <>
                          <td><input type="checkbox" value={x._id} name='deleteManyId' checked={props?.deleteManyIdArray?.includes(x._id)} onChange={props?.getDeleteManyId} /></td>
                        </> : <></>
                      }

                      <td>{i + 1}</td>
                      {
                        props.columnnArray.map((a) => {
                          if(a.toUpperCase().includes('DATE')){
                            // x[a] = convertDate(x[a])
                            x[a] = moment(x[a]).format("LL")
                          }
                          else if(a == 'fees'){
                            x[a] = x[a] ? 'Complated' : 'Remaining'
                          }
                          return <td>{x[a]}</td>
                        })
                      }

                      {
                        props.isAction ?
                          <>
                            <td>
                              <button className='theme_btn py-1 bg-primary text-white' onClick={() => props.editSingle(x._id)}>Edit</button>
                              <button className='theme_btn py-1 bg-danger text-white ms-2' onClick={() => props.deleteRecord(x._id)}>Delete</button>
                            </td>
                          </> : <></>
                      }
                      {
                        props.isviewBranch ?
                          <>
                            <td>
                              <Link to='../branch'><button className='theme_btn py-1 bg-danger text-white ms-2'>View branch</button></Link>
                            </td>
                          </> : <></>
                      }
                    </tr>
                  )
                }) :
                <tr className='text-center'>
                  <td colSpan='17'>There is no data in the table.</td>
                </tr>

            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default TableComman