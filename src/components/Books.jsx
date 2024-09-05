import React from 'react';
import { MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md';
import Button from './Button';
import { getBookDetails} from '../hooks/useFetchQuery';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const Books = () => {
    const { id } = useParams();

    // Fetch details of the book
    const { data: bookData = {}, isLoading: isBookLoading, isError: isBookError } = useQuery(['bookDetails', id], () => getBookDetails(id));
    const { image, title, auteur, description, contenu, file } = bookData;

    if (isBookLoading) return <p>Loading...</p>;
    if (isBookError) return <p>Il y a eu une erreur lors du chargement des détails du livre.</p>;

    return (
        <div className='container mx-auto px-10 md:px-5 overflow-hidden'>
            <div className='my-10 border-2 border-[#096197] rounded-[20px] flex flex-col lg:flex-row start gap-5 items-start h-auto'>
                <div>
                    <img src={image} alt="" className='rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-[0px] h-auto w-[600px] md:w-[1200px]' />
                </div>
                <div className='flex flex-col gap-2 px-5 lg:px-2 lg:w-[2000px]'>
                    <div className='text-[#DE290C] pt-2 lg:pt-5'>
                        <h3 className='font-bold text-md md:text-lg lg:text-xl'>{title}</h3>
                    </div>
                    <div>
                        <p className='text-md md:text-lg lg:text-xl py-3 lg:py-10 leading-10 line-clamp-3 md:line-clamp-6 lg:line-clamp-none hover:overflow-y-scroll lg:hover:overflow-hidden'>{description}</p>
                    </div>
                    <div className='flex justify-start md:justify-end items-center gap-4 text-[#DE290C] text-md md:text-lg lg:text-3xl pr-10'>
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStarBorder />
                        <MdOutlineStarBorder />
                    </div>
                    <div className='text-[#DE290C] pt-5 lg:pt-10 pb-2 lg:pb-5 font-semibold uppercase text-md md:text-lg lg:text-xl'>
                        <p className='float-end pr-10'>{auteur}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-start justify-start gap-10 md:gap-24 pt-10'>
                <div className='border-2 border-[#096197] rounded-[20px] w-[100%] lg:w-[35%] h-[50vh] lg:h-[100vh] mb-3 md:mb-10 overflow-y-scroll'>
                    <p className='text-slate-950 p-5 text-md md:text-lg lg:text-xl'>
                        {contenu}
                    </p>
                </div>
                <div className='md:w-auto text-md md:text-lg lg:text-xl'>
                    {file}
                    <div className='py-20 flex items-center justify-between'>
                        <Button className={`bg-[#b5b9bb] text-white py-2 px-3 border rounded-[10px] w-auto text-center hover:bg-[#2278AC] cursor-pointer pt-15`}>Precedent</Button>
                        <Button className={`bg-[#b5b9bb] text-white py-2 px-3 border rounded-[10px] w-auto text-center hover:bg-[#2278AC] cursor-pointer pt-15`}>Suivant &gt;&gt;</Button>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-md md:text-lg lg:text-xl'>
                    <form>
                        <Button type="submit" className={`absolute right-[15%] mt-[220px] bg-[#096197] text-white py-3 px-8 border border-[#2278AC] rounded-[10px] w-auto text-center cursor-pointer pt-15`}>Envoyer</Button>
                        <textarea
                            className='w-[100%] h-[300px] border-2 border-[#096197] p-5 rounded-[20px] mb-10'
                            placeholder='Laisser un commentaire'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Books;
