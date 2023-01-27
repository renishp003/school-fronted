import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './Student.css'
import HomeSlider from '../../Components/HomeSlider/HomeSlider';

function Student() {
  return (
    <>
    <div class="page_Wrapper">
        <Header />
        <HomeSlider />
    </div>
    <Outlet />
    </>
  )
}

export default Student