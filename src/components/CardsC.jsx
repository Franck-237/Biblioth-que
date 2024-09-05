import React from 'react';

const Data = [
    {
      id:1,
      image:"../images/image2.png",
      title: "CONCOURS PROFESSIONNELS",
      description: "L’examen professionnel est présenté par des fonctionnaires titulaires dans un but de progression de carrière."
    },
    {
      id:2,
      image:"../images/image3.png",
      title: "CONCOURS FONCTION PUBLIQUE",
      description: "Le concours a pour objectif le recrutement dans la Fonction Publique Territoriale ou l'accès à un grade en particulier."
    },
    {
      id:3,
      image:"../images/image1.png",
      title: "CONCOURS PRIVES",
      description: "Qui sont les concours lances pour entrer dans les ecoles prives."
    },
    
    
  ];

const CardsC = () => {
  return (
    <div>
    <div className='flex items-center justify-center my-10 mx-auto container'>
        <div className=''>
        <h1 className='text-center capitalize font-bold text-secondary text-shadow-sm text-2xl py-2 mt-8'>CONCOURS CAMEROUN</h1>
        <hr className='w-[100px] mx-auto border-t-2 border-secondary pb-10'/>
        <h2 className='font-bold text-xl capitalize text-center'>Bienvenue sur Concours Cameroun, la plateforme incontournable pour tous les étudiants et professionnels à la recherche de nouvelles opportunités !</h2>
        <p className='text-xl py-5 text-center '>Votre guichet unique pour les concours au Cameroun. Concours Cameroun vous donne accès à une multitude de concours dans divers categories, tels que :les concours professionnels, prives et les concours lances par la fonction publique.</p>
        <h3 className='font-bold text-2xl py-10 text-center'>LES CATEGORIES</h3>
        <div className='flex flex-col md:flex-row gap-10 flex-wrap justify-center items-center'>
            {
            Data.map(({id, image, title, description}) => {
                return (
                    <div className='bg-white drop-shadow-[12px_10px_10px_rgba(0,0,0,0.5)] rounded-3xl hover:scale-105 transition ease-in-out duration-300 w-[335px] sm:w-[375px] h-[576px]'>
                    <div className='flex flex-col'>
                    <div  className='overflow-hidden'>
                        <img src={image} alt='' className='rounded-t-3xl h-[300px] w-full object-cover'/>
                    </div>
                    <div className='p-6'>
                        <h1 className='text-xl text-primary py-2 font-bold'>{title}</h1>
                        <p className='text-xl'>{description}</p>
                        <span><p className='text-xl py-5'>Plus d'informations<a href='#' className='text-xl text-secondary px-1 py-5'>cliquez ici</a></p></span>

                    </div>
                    
                    </div>
                    </div>
                )
            })
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default CardsC;