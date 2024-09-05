import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
    {
      id:1,
      image:"../images/Uni1.png",
      title: "UNIVERSITE DE DOUALA",
      description:'Pour voir tous les concours',
      name:'cliquez ici'
    },
    {
      id:2,
      image:"../images/Uni2.png",
      title: "UNIVERSITE DE YAOUNDE1",
      description:'Pour voir tous les concours',
      name:'cliquez ici'
    },
    {
      id:3,
      image:"../images/Uni3.png",
      title: "UNIVERSITE DE  BAMENDA",
      description:'Pour voir tous les concours',
      name:'cliquez ici'
    },
    {
        id:4,
        image:"../images/Uni4.png",
        title: "UNIVERSITE DE  YAOUNDE 2",
        description:'Pour voir tous les concours',
        name:'cliquez ici'
      },
      {
        id:5,
        image:"../images/Uni5.png",
        title: "UNIVERSITE DE BUEA",
        description:'Pour voir tous les concours',
        name:'cliquez ici'
      },
      {
        id:6,
        image:"../images/Uni6.png",
        title: "UNIVERSITE DE  NGAOUNDERE",
        description:'Pour voir tous les concours',
        name:'cliquez ici'
      },
      
  ]
  
const CardsUni = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    nextArrow: <ChevronRight color="#096197" size={100}/>,
    prevArrow: <ChevronLeft color="#096197" size={100}/>,
    responsive:[
      {
        breakpoint:1024,
        settings:{
          speed: 800,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite:true,
          dots:true,
          autoplay:true,
          pauseOnHover: true,
        }
      },
      {
        breakpoint:1400,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite:true,
          dots:true,
          autoplay:true,
          pauseOnHover: true,
        }
      }
    ]
  }
  return (
    <div className='my-10 mx-auto'> 
    <div className='container'>
      <h1 className='text-center capitalize font-bold text-secondary text-shadow-sm text-2xl pt-10 pb-6'>UNIVERSITES OU INSTITUTS</h1>
      <hr className='w-[100px] mx-auto border-t-2 border-secondary pb-10'/>
      <p className='text-xl pb-10 text-center'>Le site vous permet aussi de rechercher les concours par universite ou institut. Ici nous avons les differents universites de l’etat et les institituts prives, 
        vous pouvez cliquez pour voir les differents concours qu’ils proposent</p>
        <Slider {...settings}>
        {Data.map((data) => (
      <div className='py-10 mx-auto container'>
          <div className='bg-white drop-shadow-[12px_10px_10px_rgba(0,0,0,0.5)] rounded-3xl hover:scale-105 transition ease-in-out duration-300 w-full h-[576px]'>
            <a href='#'>
              <div className='flex flex-col justify-center items-center'>
                <div  className='overflow-hidden'>
                    <img src={data.image} alt='' className='rounded-t-3xl h-[300px] w-full object-contain py-5'/>
                </div>
                <div className='p-6'>
                    <h1 className='text-xl text-primary py-2 font-bold'>{data.title}</h1>
                    <span><p className='text-xl py-5'>{data.description}</p></span>
                    <a href='#' className='text-xl text-secondary px-1 py-5'>{data.name}</a>
                </div>
              </div>
            </a>
          </div>
        </div>
            
        ))}
    </Slider>
    </div>
    </div>
  )
}

export default CardsUni