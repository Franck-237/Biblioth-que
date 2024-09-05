import { useState, React } from 'react';
import  CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png"
import icon3 from "../images/icon3.png"

const BannerImg = {
    backgroundColor: '#63ADDA',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',

}



const Banner = () => {

    const [ counterState, setCounterState ] = useState(false);

  return (
    
    <div className='mt-10 mb-5' style={BannerImg}>
        <div className=' backdrop-blur-sm py-10'>
            <div className='space-y-10 max-w-5xl mx-auto text-white'>
                <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() =>setCounterState(false)}>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-10 p-4 mx-auto text-sm md:text-md lg:text-lg'>
                        <div className='w-3/5 flex flex-col justify-center items-center gap-3'>
                            <img src={icon1}/>
                            <div className='flex items-center justify-center gap-4 font-bold text-xl md:text-2xl lg:text-3xl'>
                                { counterState &&
                                    <CountUp start={0} end={150} duration={2.75}></CountUp>
                                }
                                <p className=''>Utilisateurs</p>
                            </div>
                        </div>
                        <div className='w-3/5 flex flex-col justify-center items-center gap-3'>
                            <img src={icon2}/>
                            <div className='flex items-center justify-center gap-4 font-bold text-xl md:text-2xl lg:text-3xl'>
                                { counterState &&
                                    <CountUp start={0} end={200} duration={2.75}></CountUp>
                                }
                                <p className=''>Concours</p>
                            </div>
                        </div>
                        <div className='w-3/5 flex flex-col justify-center items-center gap-3'>
                            <img src={icon3}/>
                            <div className='flex items-center justify-center gap-4 font-bold text-xl md:text-2xl lg:text-3xl'>
                                { counterState &&
                                    <CountUp start={0} end={100} duration={2.75}></CountUp>
                                }
                                <p className=''>Avis utilisateurs</p>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </div>
    </div>
  )
}

export default Banner