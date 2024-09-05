import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from 'react-query';
import { getAllComments } from '../hooks/useFetchQuery';

        const Avis = () => {

            const { data: comments = [], isLoading, isError } = useQuery('allComments', getAllComments);

            var settings = {
                dots: false,
                arrows: true,
                infinite: false,
                className: "center",
                speed: 800,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 3000,
                cssEase: "ease-in-out",
                pauseOnHover: true,
                pauseOnFocus: true,

                nextArrow: <ChevronRight color="#096197" size={250}/>,
                prevArrow: <ChevronLeft color="#096197" size={250}/>,
                responsive:[
                {
                    breakpoint:1300,
                    settings:{
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite:false,
                    dots:true,
                    autoplay:true,
                    pauseOnHover: true,
                    }
                },
                {
                    breakpoint:768,
                    settings:{
                    width: 800,
                    slidesToShow: 1,
                    infinite:false,
                    dots:true,
                    initialSlide: 2,
                    autoplay:true,
                    pauseOnHover: true,
                    }
                },
                {
                breakpoint:480,
                    settings:{
                    width: 800,
                    slidesToShow: 1,
                    infinite:false,
                    dots:true,
                    autoplay:true,
                    pauseOnHover: true,
                    }
                }
                ]
            };
        
        if (isLoading) return <p className='py-20 text-center'>Loading...</p>;
        if (isError) return <p className='py-20 text-center'>Il y a eu une erreur lors du chargement des commentaires.</p>;

  return (
    <div className='container mx-auto'>
        <div className=''>
            <div className='text-center mb-5 max-w-[600px] mx-auto py-5'>
                <h1 className="text-2xl font-bold pt-8">Avis de nos utilisateurs</h1>
            </div>
            <div className='md:mx-5'>
                <Slider {...settings}>
                    {comments.map((comment) => (
                        <div className='text-black flex flex-col px-4 py-4 md:ml-6' key={comment.id}>
                            <div className="flex flex-col md:flex-row gap-6 bg-[#D9D9D9] rounded-3xl shadow-lg px-6 mx-4 py-6 min-h-[380px] max-w-[350px] min-w-[200px]">
                                <div className=''>
                                    <div className='flex justify-between items-center gap-4'>
                                        <img src={comment.user.photo} alt='' className='w-1/4 h-1/4 rounded-full'></img>
                                        <img src='images/quotes.png' alt='' className='w-1/4 h-1/4 '/>
                                    </div>
                                    <div className='flex flex-col gap-10'>
                                        <div className='h-[170px] my-6 line-clamp-6 hover:overflow-auto' style={{ maxHeight: '150px' }}>
                                            <p className='max-w-xl text-ellipsis max-h-full pt-5 text-lg mb-3'>"{comment.content}" <br /> En rapport avec l'ouvrage: <span className='font-semibold underline'>{comment.book.title}</span></p>
                                        </div>
                                        <h1 className='text-xl md:text-2xl font-bold h-auto'>{comment.user.username}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

        </div>



    </div>
  )
}

export default Avis