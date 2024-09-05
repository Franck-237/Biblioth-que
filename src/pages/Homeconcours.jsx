import React from 'react';
import Footer from '../components/Footer';
import Avis from '../components/Avis';
import Search from '../components/Search';
import CardsC from '../components/CardsC';
import Banner from '../components/Banner';
import Tendance from '../components/Tendance';
import Newsletter from '../components/Newsletter';
import CardsUni from '../components/CardsUni';

const Homeconcours = () => {
  return (
    <div>
        <Search/>
        <CardsC/>
        <CardsUni/>
        <Newsletter/>
        <Tendance/>
        <Avis/>
        <Banner/>
        <Footer/>
    </div>
  )
}

export default Homeconcours;