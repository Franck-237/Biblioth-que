import React, { useState } from 'react';
import Banner1 from '../components/Banner1';
import Profile1 from '../components/Profile1';
import Favorites from '../components/Favorites';
import MonClasseur from '../components/Classeur';
import Historique from '../components/Historique';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile1 />;
      case 'favorites':
        return <Favorites />;
      case 'classeur':
        return <MonClasseur />;
      case 'history':
        return <Historique />;
      default:
        return <Profile1 />;
    }
  };

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-start gap-2 md:gap-10 text-md md:text-lg lg:text-xl'>
        <div>
          <Banner1 activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Profile;

