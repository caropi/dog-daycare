import React from 'react'
import Slider from "react-slick";

const Carousel = () => {
    const settings = {
      accessibility: true,
      arrows: true,
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
        id: 1,
        name: "Bernard",
        title: "Dog Walker",
        location: `Wherever my human takes me`,
        testimonial: `I like walks. Walks are very good. I like squirrels. I like WoofMama because it gives me something to do with an iphone other than chew it. Oh! A ball! Oh, boy! Oh, boy! A ball! I will go get it and then bring it back!`,
        img: `dogselfie.jpg`
      },
      {
        id: 2,
        name: "Sylvia",
        title: "Dog Minder",
        location: "Bark &amp; Fitz",
        testimonial: `When I'm not posing for photos laughing in my dogs face I am using WoofMama. Taking care of several dogs is not easy and WoofMama is a one-stop shop to let me take care of business, giving me more time to laugh in my dogs face.`,
        img: `laughing.jpg`
      },
      {
        id: 3,
        name: "Jenny",
        title: "Cheif of Eye Contact",
        location: `Happy Tails`,
        testimonial: `I spend most of my days making aggressive eye contact with every dog that comes through our doggy daycare. Where can I find the time to do basic admin work? Luckily, WoofMama has allowed me to get everything I need to get done, and still have time to stare into the eyes of every dog`,
        img: `kiss.jpg`
      },
      {
        id: 4,
        name: "Gilda",
        title: "House Cat",
        location: `Owner Still thinks I'm at home`,
        testimonial: `A bit jealous of my fellow dog companions leave every day to go to their dog daycare and use WoofMama so I took it upon myself to get a license and opened up my own dog daycare. I spend most of my days lying in a patch of sun but when I'm not doing that I'm using WoofMama.`,
        img: `gilda.jpg`
      },
      {
        id: 5,
        name: "Harold",
        title: "Chief of having a blast",
        location: "Toronto Doggo Auto Club",
        testimonial: `Dog owners and fellow dogs are jazzed about the how efficient we've become`,
        img: `havingablast.jpeg`
      }
    ];
    return (
      <section className="carousel wrapper">
        <Slider {...settings}>
          {users.map(d => {
            return (
              <div className="carousel__card" key={d.id}>
                <div className="carousel__card--copy-container">
                    <p className="carousel__card--text">{d.testimonial}</p>
                    <p className="carousel__card--info">
                        <span className="carousel__card--info-name">
                            {d.name}
                        </span>
                        , {d.title}
                    </p>
                    <p className="carousel__card--location">{d.location}</p>
                </div>
                <img src={d.img} alt={d.name} className="carousel__card--profile-img"/>
              </div>
            );
          })}
        </Slider>
      </section>
    );
}

export default Carousel
