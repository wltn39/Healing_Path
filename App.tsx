
import React, { useState } from 'react';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import LessonPath from './components/LessonPath';
import PracticeModal from './components/PracticeModal';
import { ListIcon } from './components/icons';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNodeClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-lingua-dark min-h-screen text-white font-bold flex flex-col max-w-lg mx-auto">
      <div className={isModalOpen ? 'hidden' : 'contents'}>
        <TopBar />
        <main className="flex-grow pt-20 pb-24 overflow-y-auto px-4">
          <div className="bg-lingua-blue rounded-2xl p-4 flex items-center justify-between mb-8 shadow-lg">
            <div>
              <p className="text-sm text-sky-200 font-extrabold opacity-90">섹션 5, 유닛 1</p>
              <h1 className="text-2xl text-white font-extrabold">더 상처받기 전에 거리두기</h1>
            </div>
            <button className="bg-lingua-blue-dark p-3 rounded-xl border-b-4 border-sky-700/50">
              <ListIcon className="w-8 h-8 text-white" />
            </button>
          </div>
          <LessonPath onNodeClick={handleNodeClick} />
        </main>
        <BottomNav />
      </div>
      <PracticeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;