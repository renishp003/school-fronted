import React from 'react'

function LocateAndLink() {
    return (
        <>
            <div className='py-5' style={{ backgroundColor: 'var(--bg-dark-blue)' }}>
                <div className='container'>
                    <div className='row g-3'>
                        <div className='col-12 col-md-6'>
                            <h5 className="fs-1 fsw-bold m-0 text-white  mb-5 section_heading">Locate Us</h5>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.65683882276!2d72.88383181476489!3d21.20578688708752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fcee7ad4487%3A0x2e07192cd2efaf01!2sDisha%20Pre%20School!5e0!3m2!1sen!2sin!4v1676441385192!5m2!1sen!2sin" width="90%" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='col-12 col-md-6'>
                            <h5 className="fs-1 fsw-bold m-0 text-white  mb-5 section_heading">Quick Link</h5>

                            <p className='quickLink'>About</p>
                            <p className='quickLink'>Our Programs</p>
                            <p className='quickLink'>Contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocateAndLink