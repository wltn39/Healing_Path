
import React from 'react';
import { HomeIcon, SpeakIcon, TrophyIcon, ProfileIcon, SpecialIcon, MoreIcon } from './icons';

const NavItem: React.FC<{ icon: React.ReactNode; active?: boolean }> = ({ icon, active = false }) => (
  <button className={`p-2 rounded-xl transition-colors duration-200 ${active ? 'bg-lingua-dark' : 'hover:bg-lingua-inactive/50'}`}>
    {icon}
  </button>
);

const BottomNav: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-lg mx-auto bg-lingua-dark-light border-t-2 border-lingua-inactive z-10">
      <nav className="flex justify-around items-center h-20 px-2">
        <NavItem icon={<HomeIcon className="w-10 h-10" />} active={true} />
        <NavItem icon={<SpeakIcon className="w-10 h-10" />} />
        <NavItem icon={<TrophyIcon className="w-10 h-10" />} />
        <NavItem icon={<ProfileIcon className="w-10 h-10" />} />
        <NavItem icon={<SpecialIcon className="w-10 h-10" />} />
        <NavItem icon={<MoreIcon className="w-10 h-10" />} />
      </nav>
    </footer>
  );
};

export default BottomNav;
