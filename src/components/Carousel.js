import React from 'react'
import Slider from "react-slick";

export const Carousel = () => {
    const settings = {
      accessibility: true,
      arrows: false,
      infinite: true,
      lazyLoad: true,
      pauseOnDotsHover: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      swipeToSlide: true
    };
    const users = [
        {
            name: 'Bernard',
            title: 'Dog Walker',
            location: '',
            testimonial: ''
        },
        {
            name: 'Sylvia',
            title: '',
            location: '',
            testimonial: ''
        },
        {
            name: 'Hugo',
            title: '',
            location: '',
            testimonial: ''
        },
        {
            name: 'Gilda',
            title: '',
            location: '',
            testimonial: ''
        },
        {
            name: 'Harold',
            title: '',
            location: '',
            testimonial: ''
        }
    ]
    return (
        <div>
            <Slider {...settings}>

            </Slider>
        </div>
    )
}
