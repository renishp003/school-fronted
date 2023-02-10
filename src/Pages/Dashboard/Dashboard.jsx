import React from 'react'
import './Dashboard.css'
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard() {
  return (
    <div className='col-12 col-md-10 content_Wrapper'>
      <h2 className='page_header'>Dashboard</h2>

      <div className='row g-4'>
        <div className='col-4'>
          <div className='page_card'>
            <div className='page_card_header d-flex'>
              <h6>Page view</h6>
              <BsThreeDotsVertical className='cursor_pointer page_card_header_icon' />
              <div className='page_card_header_icon_section'>
                <h6>view all</h6>
              </div>
            </div>
          </div>
        </div>
        <div className='col-8'>
          <div className='page_card'>
            <div className='page_card_header'>
                <h6>Charts</h6>
                <BsThreeDotsVertical className='cursor_pointer page_card_header_icon'/>
                <div className='page_card_header_icon_section'>
                  <h6>view all</h6>
                </div>
            </div>
          </div>
        </div>

        <div className='col-3'>
          <div className='page_card'>
            <div className='page_card_header'>
                <h6>Charts</h6>
                <BsThreeDotsVertical className='cursor_pointer page_card_header_icon'/>
                <div className='page_card_header_icon_section'>
                  <h6>view all</h6>
                </div>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <div className='page_card'>
            <div className='page_card_header'>
                <h6>Charts</h6>
                <BsThreeDotsVertical className='cursor_pointer page_card_header_icon'/>
                <div className='page_card_header_icon_section'>
                  <h6>view all</h6>
                </div>
            </div>
          </div>
        </div>

        <div className='col-3'>
          <div className='page_card'>
            <div className='page_card_header'>
                <h6>Charts</h6>
                <BsThreeDotsVertical className='cursor_pointer page_card_header_icon'/>
                <div className='page_card_header_icon_section'>
                  <h6>view all</h6>
                </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Dashboard