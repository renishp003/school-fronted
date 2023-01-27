import React from 'react'
import { Slide } from 'react-slideshow-image';

function HomeSlider() {

    const slideImages = [
        {
          url: 'images/slide-1.png',
          caption: 'Slide 1'
        },
        {
          url: 'images/slide-1.png',
          caption: 'Slide 2'
        },
        {
          url: 'images/slide-1.png',
          caption: 'Slide 3'
        },
      ];

  return (
    <>
      <div className="slide-container" style={{marginTop:'70px' , zIndex:'1'}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" style={{height:'50vh'}} key={index}>
              <div className='h-100 w-100' style={{'backgroundImage': `url(${slideImage.url})`, backgroundRepeat:'no-repeat' , backgroundSize:'cover' , backgroundPosition:'center center'}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </>
  )
}

export default HomeSlider