import React from 'react';
import { Link } from 'react-router-dom';
import quotes from '../../images/quotes.png';
import Button from './Button';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDocumentBySousCategories1, getDocumentBySousCategories2, getDocumentBySousCategories3 } from '../hooks/useFetchQuery';
import { useQuery } from 'react-query';

const LearnMain = () => {
    const queries = [
        useQuery('documents1', getDocumentBySousCategories1),
        useQuery('documents2', getDocumentBySousCategories2),
        useQuery('documents3', getDocumentBySousCategories3),
    ];

    const isLoading = queries.some(query => query.isLoading);
    const isError = queries.some(query => query.isError);
    const data = queries.map(query => query.data || []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Il y a eu une erreur lors du chargement des catégories.</p>;
    }

    const [document, documents, documentss] = data;

    var settings = {
        dots: false,
        arrows: true,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        className: "center",
        autoplay: false,
        nextArrow: <ChevronRight color="#096197" size={150} />,
        prevArrow: <ChevronLeft color="#096197" size={150} />,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    arrows: true,
                }
            },
        ]
    };

    return (
        <div>
            <div className='container mx-auto px-5 py-20'>
                <div className='text-sm md:text-md lg:text-lg'>
                    <h2 className='text-center text-[#DE290C] font-bold'><a href="/">Bibliothèque</a> &gt;&gt; Enseignements</h2>
                    <hr className='bg-[#DE290C] w-[100px] h-1 mx-auto mt-2 mb-10' />
                    <p className='text-sm lg:text-lg'>
                        <img src={quotes} alt="" />
                        <p className='font-bold pb-3 pl-12'>Apprenez, évoluez, grandissez : notre offre d'enseignement vous accompagne vers la réussite.</p>
                        <span>Nos formations vous donnent accès aux dernières connaissances et pratiques dans votre domaine d'expertise, vous permettant de rester compétitif et performant. Le monde du travail évolue constamment. Nos formations vous donnent les outils nécessaires pour vous adapter aux changements et saisir de nouvelles opportunités. L'apprentissage est un processus continu. Notre offre d'enseignement vous permet de vous former tout au long de votre vie et de rester stimulé intellectuellement.</span>
                        <img src={quotes} alt="" className='ml-[75%] lg:ml-[65%]' />
                    </p>
                </div>
                {[{ title: 'Primaire', data: document }, { title: 'Secondaire', data: documents }, { title: 'Supérieure', data: documentss }].map((section, index) => (
                    <div key={index} className='py-5'>
                        <div className='flex justify-between items-center font-bold pb-5'>
                            <div>
                                <p className='text-md md:text-xl lg:text-2xl underline text-[#DE290C]'><a href="">{section.title}</a></p>
                            </div>
                            <div>
                                <a href=""><Button className={`bg-[#096197] text-white py-2 px-3 border border-[#2278AC] rounded-[20px] w-auto text-center hover:bg-[#2278AC] cursor-pointer pt-15`}>Voir plus &gt;&gt;</Button></a>
                            </div>
                        </div>
                        <div className='pt-3 mx-8'>
                        {section.data.length > 0 ? (
                            <Slider {...settings}>
                                {section.data.map(({ id, image, title, auteur }) => (
                                    <Link to={`/book/${id}`} key={id}>
                                        <div className='flex flex-col gap-4 h-auto md:w-[200px] ml-3 md:ml-10'>
                                            <div>
                                                <img src={image} alt={title} className='w-[150px] md:w-[200px] h-[250px]' />
                                            </div>
                                            <div>{title}</div>
                                            <div className='text-[#096197] font-semibold'>{auteur}</div>
                                        </div>
                                    </Link>
                                ))}
                            </Slider>
                        ) : (
                            <p className='font-bold text-center text-lg md:text-xl lg:text-2xl py-20'>Aucun documents disponibles</p>
                        )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LearnMain;
