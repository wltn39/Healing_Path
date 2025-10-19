
import React from 'react';
import { FlameIcon, GemIcon, HeartIcon } from './icons';

const StatItem: React.FC<{ icon: React.ReactNode; value: number | string, colorClass: string }> = ({ icon, value, colorClass }) => (
  <div className="flex items-center space-x-2">
    {icon}
    <span className={`font-extrabold text-lg ${colorClass}`}>{value}</span>
  </div>
);


const TopBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 max-w-lg mx-auto bg-lingua-dark z-10 p-3">
      <div className="flex justify-between items-center h-12">
         <StatItem icon={<span className="text-2xl font-extrabold text-sky-400">Lv</span>} value={60} colorClass="text-white" />
         <StatItem icon={<FlameIcon className="w-7 h-7" />} value={1} colorClass="text-lingua-orange" />
         <StatItem icon={<GemIcon className="w-7 h-7" />} value={550} colorClass="text-lingua-gem" />
         <StatItem icon={<HeartIcon className="w-8 h-8" />} value={5} colorClass="text-lingua-red" />
      </div>
    </header>
  );
};

export default TopBar;
