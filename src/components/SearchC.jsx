import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";
import { useState, useEffect } from 'react';
const CardsImg = {
    backgroundImage: 'url(images/back.png)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height:'100vh',
   
  };
  const Data = [
    {
      id:1,
      Image:"images/back.png",
      title: "CONCOURS CAMEROUN: VOTRE PASSERELLE POUR LE FUTUR",
      description: "visitez notre plateforme pour en savoir plus et vous inscrire aux concours."
    },
    {
      id:2,
    Image:'images/image6.png',
      title: "VOTRE GUICHET DES CONCOURS AU CAMEROUN",
      description: "Ne manquez pas votre chance de briller sur la scène nationale!"
    },
  ]

const SearchC = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(searchTerm); 
  };
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
  };
  return (
    <div className='relative'>
    <Slider {...settings} >
      {Data.map((slide, index) => (
        <div key={index} className="w-full h-[80vh] relative">
          <div
            className="-z-50 text-white mx-auto  absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-3 sm:px-10 bg-primary filter"
            style={{ backgroundImage: `url(${slide.Image})`, backgroundPosition: 'center', backgroundSize: 'cover', height:'80vh', width:'100%',}}
          >
        
        <h1 className='text-xl md:text-3xl text-center font-extrabold leading-8 tracking-wide capitalize italic max-w-3xl'>{slide.title}</h1>
        <p className='text-xl md:text-3xl text-center font-extrabold leading-8 tracking-wide capitalize text-white italic pb-20 pt-3 max-w-3xl'>{slide.description}</p>
        </div>
          </div>
      ))}
       
      </Slider>
      <div className=' container flex bg-white rounded-3xl h-12 md:h-16 p-1 shadow-sm items-center border-primary border-4 max-w-xl md:max-w-2xl justify-center absolute bottom-20 left-0 right-0'>
          <input type='text' placeholder='Recherchez un document' className=' flex-grow w-full bg-transparent border-none focus:outline-none placeholder-primary 
          placeholder:sm:pl-4 pl-2 text-xs md:text-lg'/>
          <button className='text-xs md:text-lg px-2.5 md:px-4 py-2 md:py-2.5 rounded-2xl bg-primary text-white hover:bg-tertiary'>Rechercher</button>
        </div>
      </div>
            
  )
}

export default SearchC