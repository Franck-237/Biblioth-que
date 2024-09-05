import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { getBookDetails, getDocumentsByCategory, getAccessToken } from '../hooks/useFetchQuery';
import Button from './Button';
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

const Details = () => {

    const navigate = useNavigate();
    const toast = useToast();

    const handleViewAllClick = () => {
        const token = getAccessToken(); // Vérifiez si l'utilisateur est connecté
        
        if (token) {
            navigate(`/bibliotheque/enseignements/livre/${id}`); // Redirige vers la page des détails du livre
        } else {
            toast({
                title: "Accès réservé aux abonnés",
                description: "Ce contenu est réservé aux abonnés. Veuillez vous connecter pour y accéder.",
                status: "info",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        }
    };

    const { id } = useParams();

    // Fetch details of the book
    const { data: bookData, isLoading: isBookLoading, isError: isBookError } = useQuery(['bookDetails', id], () => getBookDetails(id));

    // Fetch documents by the category of the book
    const categoryId = bookData?.category_id;  // Assurez-vous que cela correspond à la structure de votre réponse API
    const { data: categoryDocuments = [], isLoading: isCategoryLoading, isError: isCategoryError } = useQuery(
        ['documentsByCategory', categoryId],
        () => getDocumentsByCategory(categoryId),
        { enabled: !!categoryId }  // Ne fait la requête que si categoryId est disponible
      );

    if (isBookLoading) return <p>Loading...</p>;
    if (isBookError) return <p>Il y a eu une erreur lors du chargement des détails du livre.</p>;

    if (isCategoryLoading) return <p>Loading related documents...</p>;
    if (isCategoryError) return <p>Il y a eu une erreur lors du chargement des documents similaires.</p>;

    const { image, title, auteur, description } = bookData;

    return (
        <div className='container mx-auto px-10 md:px-5'>
        <div className='my-10 border-2 border-[#096197] rounded-[20px] flex flex-col lg:flex-row start gap-5 items-start h-[80vh]'>
            <div>
                <img src={image} alt="" className='rounded-t-[20px] lg:rounded-l-[20px] lg:rounded-tr-[0px] h-[300px] lg:h-[79.5vh] w-[600px] md:w-[1200px]'/>
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
                    <span>
                        <p className='text-md md:text-lg lg:text-xl py-2 lg:py-36'>
                            Tout voir..<button
                                            onClick={handleViewAllClick}
                                            className='text-[#DE290C] pl-32 py-5'
                                        >
                                            cliquez ici
                                        </button>
                        </p>
                    </span>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-start justify-start gap-24 pt-10'>
                <div className='border-2 border-[#096197] rounded-[20px] w-[100%] lg:w-[35%] h-[50vh] lg:h-[100vh] mb-3 md:mb-10'>
                    <p className='font-bold text-slate-950 p-5'>Nouveautés:</p>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <p className='font-bold text-slate-900 text-md md:text-lg lg:text-xl pb-10'>Dans la même catégorie</p>
                        <div>
                            <Button className={`bg-[#096197] text-white py-2 px-3 border border-[#2278AC] rounded-[20px] w-auto text-center hover:bg-[#2278AC] cursor-pointer pt-15`}>
                                Voir plus &gt;&gt;
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-row flex-wrap justify-center md:justify-start items-start gap-8 md:gap-10 md:items-center'>
                            {categoryDocuments.length > 0 ? categoryDocuments.map(({ id, image, title, auteur }) => (
                                <a href={`/bibliotheque/enseignements/livre/${id}`} key={id}>
                                    <div className='flex flex-col gap-5 w-[150px] md:w-[200px]'>
                                        <div>
                                            <img src={image} alt={title} className='w-auto h-[250px]' />
                                        </div>
                                        <div>
                                            {title}
                                        </div>
                                        <div className='text-[#096197] font-semibold'>
                                            {auteur}
                                        </div>
                                    </div>
                                </a>
                            )) : <p className='font-bold text-center text-lg md:text-xl lg:text-2xl py-20'>Aucun document disponible dans cette catégorie.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
