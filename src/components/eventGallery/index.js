import React from 'react'
import "../../styles/slick.css"
import "../../styles/slick-theme.css"
import Slider from 'react-slick';


const EventGallery = () => {

  let settings = {
    dots: false,
    infinite: false,
    speed: 100,
    autoplay: true,
    slidesToShow: 4
  };

  return (
    <section className="FED-gallery">
    <div className="container">
      <div className="text-center">
        <h4 className="fw-bold">Event Gallery</h4>
      </div>
      <Slider className='event-slider' {...settings}>
      <div className='event-gallery'>
      </div>
      <div className='event-gallery'>
      </div>
      <div className='event-gallery'>
      </div>
      <div className='event-gallery'>
      </div>
      <div className='event-gallery'>
      </div>
      <div className='event-gallery'>
      </div>
      </Slider>
    </div>
  </section>  )
}

export default EventGallery