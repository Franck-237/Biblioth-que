import React from 'react';
import profile from '../../images/profile.png';
import heart from '../../images/heart.png';
import classeur from '../../images/classeur.png';
import history from '../../images/history.png';

const Banner1 = ({ activeTab, setActiveTab }) => {

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <div>Contenu pour Modifier le profil</div>;
      case 'favorites':
        return <div>Contenu pour Mes favoris</div>;
      case 'classeur':
        return <div>Contenu pour Mon classeur</div>;
      case 'history':
        return <div>Contenu pour Historique</div>;
      default:
        return null;
    }
  };

  return (
    <div className='overflow-hidden'>
      <div className='bg-[#D9D9D9] h-auto md:h-[96vh] w-[100%] text-slate-900 p-20 flex flex-row flex-wrap md:flex-col gap-5 md:gap-10'>
        <div
          className={`flex gap-5 items-center ${activeTab === 'profile' ? 'bg-blue-100 p-2' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <img src={profile} alt="Profile" />
          <p className='cursor-pointer'>Modifier le profile</p>
        </div>
        <div
          className={`flex gap-5 items-center ${activeTab === 'favorites' ? 'bg-blue-100 p-2' : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          <img src={heart} alt="Favorites" />
          <p className='cursor-pointer'>Mes favoris</p>
        </div>
        <div
          className={`flex gap-5 items-center ${activeTab === 'classeur' ? 'bg-blue-100 p-2' : ''}`}
          onClick={() => setActiveTab('classeur')}
        >
          <img src={classeur} alt="Classeur" />
          <p className='cursor-pointer'>Mon classeur</p>
        </div>
        <div
          className={`flex gap-5 items-center ${activeTab === 'history' ? 'bg-blue-100 p-2' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          <img src={history} alt="History" />
          <p className='cursor-pointer'>Historique</p>
        </div>
      </div>
    </div>
  );
}

export default Banner1;
