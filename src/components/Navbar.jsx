import React from 'react';
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { enablePageScroll } from "scroll-lock";
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa6';
import livre from '../assets/images/livre.jfif';
import livre1 from '../assets/images/livre1.png';
import { useUser } from '../hooks/useUser';
import { logout } from '../hooks/useFetchQuery';
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({handlerOrderPopup, handlerOrder}) => {

    const [nav, setNav] = useState(false);

    const Links = [
        {
            id: 1,
            title: "Accueil",
            path: "/"
        },
        {
            id: 2,
            title: "A propos",
            path: "/about"
        }
    ];

    const { user, setUser } = useUser(); // Utilisation du hook useUser
    const isLoggedIn = !!user; // Vérifie si l'utilisateur est connecté

    const handleLogout = () => {
        logout();
      };

    const handleClick = () => {
        if (!nav) return;
    
        enablePageScroll();
        setNav(false);
      };

      const DropdownLinks = [ 
        {
            id: 1,
            title: "Enseignements",
            subtitle1: "Primaire",
            subtitle2: "Secondaire",
            subtitle3: "Superieur",
            link: "/bibliotheque/enseignements",
        },{
            id: 2,
            title: "Loisirs",
            subtitle1: "Loisir1",
            subtitle2: "Loisir2",
            subtitle3: "Loisir3",
            link: "/bibliotheque/loisirs",
        }
    ];
    
    const DropdownLink = [ 
        {
            id: 1,
            title: "Concours profesionnelles",
            subtitle1: "Ingénierie",
            subtitle2: "Médecine",
            subtitle3: "Enseignements",
            link: "/homeconcours",
        },{
            id: 2,
            title: "Concours fonction publique",
            subtitle1: "Ingénierie",
            subtitle2: "Médecine",
            subtitle3: "Enseignements",
            link: "/homeconcours",
        },{
            id: 3,
            title: "Concours privés",
            link: "/homeconcours",
        }
    ];

  return (
    <div className='text-md md:text-lg lg:text-xl lg:bg-white pb-10'>
        <div className='fixed w-[100%] px-[10%] z-[10] flex items-center justify-between py-2 bg-white border-b-2 border-[#2278AC]'>
            <div>
                <a href="/" className='cursor-pointer'>
                    <img src={logo} alt="Logo" width={130} height={80}/>
                </a>
            </div>
            <div>
                    <div>
                        <div onClick={() => setNav(!nav)} className='lg:hidden'>
                                    {
                                        nav ?
                                        <MdClose className='text-[#2278AC] w-[26px] h-[29.58px] lg:hidden'/>
                                        : 
                                        <FiMenu className='text-[#2278AC] w-[26px] h-[29.58px] lg:hidden'/>
                                    }
                        </div>
                    </div>
                <div className={`backdrop-blur-lg lg:bg-white py-20 lg:py-0 w-[98vw] h-[70vh] lg:w-auto lg:h-auto absolute top-[70px] right-[35%] lg:top-0 lg:right-0 lg:relative flex flex-col lg:flex-row items-center gap-10 md:gap-20 lg:gap-32 ${nav ? 'left-0 top-[70px] transition-all duration-700' : 'left-[-1000px] transition-all duration-700'} lg:left-0`}>
                    <div>
                        <ul className='flex flex-col lg:flex-row items-center justify-center'>
                            {
                                Links.map((data) => (
                                    <li key={data.id} className='block text-center pb-5 lg:pb-0 lg:inline-block'>
                                        <Link to={data.path} className='ml-8 hover:text-[#DE290C]  hover:font-bold' onClick={handleClick}>{data.title}</Link>
                                    </li>
                                ))
                            }
                            
                            <li className='group relative cursor-pointer ml-7 z-10'>
                                <a href="/bibliotheque" 
                                className="flex justify-center items-center gap-[2px] py-2"
                                >Bibliothèque
                                <span>
                                <FaCaretDown className="transition-all duration-500 group-hover:rotate-180"/>
                                </span>
                                </a>
                                <div className="absolute z-10 hidden group-hover:block ml-[-150px] md:ml-[-200px] lg:ml-[-600px] rounded-md bg-white p-5 text-black shadow-xl md:w-[800px] lg:w-[1000px]"> 
                                    <div className='flex items-center justify-center gap-20'>
                                        <div className='w-[130px] h-auto'>
                                            <img src={livre} alt=""  className='border rounded-lg'/>
                                        </div>
                                        <div >
                                            <ul className='flex flex-col md:flex-row gap-5 md:gap-20'>
                                                {
                                                    DropdownLinks.map((data) => (
                                                        <div key={data.id} className='flex flex-col items-start justify-between gap-5'>
                                                            <div>
                                                                <p className='text-[#2278AC]'>{data.title}</p>
                                                            </div>
                                                            <div>
                                                                <li className='flex flex-col items-start gap-2'>
                                                                    <a href={data.link} className='hover:text-[#DE290C]'>{data.subtitle1}</a>
                                                                    <a href={data.link} className='hover:text-[#DE290C]'>{data.subtitle2}</a>
                                                                    <a href={data.link} className='hover:text-[#DE290C]'>{data.subtitle3}</a>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='group relative cursor-pointer ml-7 z-10'>
                                <a href="/bibliotheque" 
                                className="flex justify-center items-center gap-[2px] py-2"
                                >Concours
                                <span>
                                <FaCaretDown className="transition-all duration-500 group-hover:rotate-180"/>
                                </span>
                                </a>
                                <div className="absolute z-10 hidden group-hover:block ml-[-150px] md:ml-[-300px] lg:ml-[-700px] rounded-md bg-white p-5 text-black shadow-xl md:w-[800px] lg:w-[1000px]"> 
                                    <div className='flex flex-col md:flex-row gap-5 md:gap-20'>
                                        <div className='w-[200px] h-auto'>
                                            <img src={livre1} alt=""  className='border rounded-lg'/>
                                        </div>
                                        <div>
                                            <ul className='flex flex-col md:flex-row gap-5 md:gap-20'>
                                                {
                                                    DropdownLink.map((data) => (
                                                        <div key={data.id} className='flex flex-col items-start justify-between gap-5'>
                                                            <div>
                                                                <p className='text-[#2278AC]'>{data.title}</p>
                                                            </div>
                                                            <div>
                                                                <li className='flex flex-col items-start gap-2'>
                                                                    <a href={data.link} className='hover:text-[#DE290C]'>{data.subtitle1}</a>
                                                                    <a href={data.link} className='hover:text-[#DE290C]'>{data.subtitle2}</a>
                                                                    <a href={data.link} className='hover:text-[#DE290C]'>{data.subtitle3}</a>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        {isLoggedIn ? (
                                    <div className='flex items-center gap-4'>
                                        {
                                            user.photo ? 
                                            (<a href="/profile"><img src={user.photo} alt="" width={25} className='rounded-full'/></a>) :
                                            (<FaUserCircle />)
                                        }
                                        <span className='text-[#2278AC]'><a href="/profile">{user.username}</a></span> /
                                        <button 
                                            onClick={handleLogout} 
                                            className='bg-[#2278AC] text-white py-1 px-3 border border-1 border-[#2278AC] rounded-[30px] hover:bg-[#096197] cursor-pointer'
                                        >
                                            Déconnexion
                                        </button>
                                    </div>
                                ) : (
                                    <button 
                                        onClick={handlerOrderPopup} 
                                        className='bg-[#2278AC] text-white py-1 px-3 border border-1 border-[#2278AC] rounded-[30px] hover:bg-[#096197] cursor-pointer'
                                    >
                                        Connexion
                                    </button>
                                )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;