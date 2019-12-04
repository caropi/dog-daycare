import React from 'react'
import Slider from "react-slick";
import CarouselCard from './CarouselCard';
const Carousel = () => {
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
            title: 'House Cat',
            location: 'Still at home',
            testimonial: `A bit jealous of my fellow dog companions `
        },
        {
            name: 'Harold',
            title: '',
            location: '',
            testimonial: ''
        }
    ]
    return (
        <section className="carousel">
            <Slider {...settings}>
                <CarouselCard users={users}/>
            </Slider>
        </section>
    )
}

export default Carousel
