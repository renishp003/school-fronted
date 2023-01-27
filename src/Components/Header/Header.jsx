import React from 'react';
import './Header.css'
import { GiBookmarklet ,GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <>
      <div class="header">
        <div className='row m-0 h-100 align-items-center justify-content-between'>
          <div className='col-6 col-xxl-6 col-md-4 col-sm-8'>
            <div className='logo_Section'>
              {/* <GiBookmarklet size={40} color="black"/>
              <span className='ms-2 d-block'>
                <span style={{color:'darkorchid'}}>P</span>
                <span style={{color:'green'}}>r</span>
                <span style={{color:'yellow'}}>e</span>
                <span style={{color:'pink'}}> S</span>
                <span style={{color:'red'}}>c</span>
                <span style={{color:'purple'}}>h</span>
                <span style={{color:'blue'}}>O</span>
                <span style={{color:'white'}}>o</span>
                <span style={{color:'greenyellow'}}>l</span>
              </span> */}
              <img src="/images/logo1.png" alt="" height='60px' />
            </div>
          </div>
          <div className='col-8 col-xxl-6 col-sm-8 menu_Section d-none d-md-block '>
            <div className='d-flex'>
              <div className='d-flex justify-content-evenly' style={{width:'90%'}}>
                <NavLink to='/'><span>Home</span></NavLink>
                <NavLink to='/about'><span>About</span></NavLink>
                <NavLink to='/sd'><span>Our Programs</span></NavLink>
                <NavLink to='/about'><span>Activity Rooms</span></NavLink>
                <NavLink to='/about'><span>Contact</span></NavLink>
                <div className='login_btn d-flex' style={{width:'10%'}}>
                  <NavLink to='/about' ><span>Login</span></NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='col-1 d-block d-md-none cursor_pointer' style={{marginTop:'-10px'}}>
             <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header