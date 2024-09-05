import React from 'react';
import quotes from '../../images/quotes.png';

const HobbiesMain = () => {

    
  return (
    <div>
        <div className='container mx-auto px-5 py-20 text-sm md:text-md lg:text-lg'>
            <div className='text-sm md:text-md lg:text-lg'>
                <h2 className='text-center text-[#DE290C] font-bold'><a href="/">Bibliothèque</a> &gt;&gt; Loisirs</h2>
                <hr className='bg-[#DE290C] w-[100px] h-1 mx-auto mt-2 mb-10'/>
                <p className='text-sm lg:text-lg'>
                  <img src={quotes} alt="" />
                    <span className='pl-12'>Nos formations vous donnent accès aux dernières connaissances et pratiques dans votre domaine d'expertise, vous permettant de rester compétitif et performant. Le monde du travail évolue constamment. Nos formations vous donnent les outils nécessaires pour vous adapter aux changements et saisir de nouvelles opportunités. L'apprentissage est un processus continu. Notre offre d'enseignement vous permet de vous former tout au long de votre vie et de rester stimulé intellectuellement.</span>
                    <p className='font-bold pt-3'>Apprenez, évoluez, grandissez : notre offre d'enseignement vous accompagne vers la réussite !</p>
                  <img src={quotes} alt="" className='ml-[75%] lg:ml-[65%]'/>
                </p>
            </div>
        </div>
    </div>
  )
}

export default HobbiesMain