import React, {useState} from 'react';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Search from '../components/Search';
import Banner from '../components/Banner';
import Avis from '../components/Avis';
import Top from '../components/Top';

const Bib = () => {

  return (
    <div className='text-sm md:text-md lg:text-lg scroll-smooth'>
        <Search />
        <Main />
        <Newsletter />
        <Avis />
        <Banner />
        <Top />
        <Footer/>
    </div>
  )
}

export default Bib