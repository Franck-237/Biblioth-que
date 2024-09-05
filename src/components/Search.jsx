import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";

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
        Image:"../../images/home1.png",
        description: "Tous vos documents à votre portée! Vous trouverez toutes vos ressources favorites."
    },
    {
        id:2,
        Image:'../../images/home2.png',
        description: "Notre offre d'enseignement vous permet d'acquérir des connaissances et des compétences essentielles pour réussir dans votre vie professionnelle et personnelle."
    },
  ]

const Search = () => {
  

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
    <div className='relative pt-5 z-[-10]'>
      <Slider {...settings} >
        {Data.map((slide, index) => (
          <div key={index} className="w-full h-[80vh] relative">
            <div
                className=" text-white mx-auto  absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-3 sm:px-10 bg-primary filter"
                style={{ backgroundImage: `url(${slide.Image})`, backgroundPosition: 'center', backgroundSize: 'cover', height:'80vh', width:'100%',}}
              >
                <p className='text-xl md:text-3xl text-center font-extrabold leading-8 tracking-wide capitalize text-white italic pb-20 pt-3 max-w-3xl'>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className='container mx-auto flex justify-center items-center bg-white rounded-3xl h-12 md:h-16 p-1 shadow-sm border-[#096197] border-4 max-w-lg md:max-w-xl lg:max-w-2xl absolute bottom-40 left-0 right-0'>
        <input type='text' placeholder='Recherchez un document...' className='flex-grow w-full bg-transparent border-none focus:outline-none placeholder-[#096197] 
          placeholder:sm:pl-4 pl-2 text-xs md:text-lg'/>
        <button className='text-xs md:text-lg px-2.5 md:px-4 py-2 md:py-2.5 rounded-2xl bg-[#096197] text-white'>Rechercher</button>
      </div>
    </div>
            
  )
}

export default Search;