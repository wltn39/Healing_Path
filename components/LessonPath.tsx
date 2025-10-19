
import React from 'react';
import { LessonNodeData, LessonNodeType, LessonNodeStatus, LessonNodeAlignment } from '../types';
import { BookIcon, StarIcon, HeadphonesIcon, CharacterChess, CharacterCampfire } from './icons';

interface LessonPathProps {
  onNodeClick: () => void;
}

const lessonPathData: LessonNodeData[] = [
  { id: 1, type: LessonNodeType.Book, status: LessonNodeStatus.Active, alignment: LessonNodeAlignment.Center },
  { id: 2, type: LessonNodeType.Star, status: LessonNodeStatus.Inactive, alignment: LessonNodeAlignment.Left },
  { id: 3, type: LessonNodeType.Headphones, status: LessonNodeStatus.Inactive, alignment: LessonNodeAlignment.Right },
  { id: 4, type: LessonNodeType.Book, status: LessonNodeStatus.Inactive, alignment: LessonNodeAlignment.Center },
  { id: 5, type: LessonNodeType.CharacterChess, status: LessonNodeStatus.Inactive, alignment: LessonNodeAlignment.Left, label: "체스" },
  { id: 6, type: LessonNodeType.Star, status: LessonNodeStatus.Inactive, alignment: LessonNodeAlignment.Right },
  { id: 7, type: LessonNodeType.CharacterCampfire, status: LessonNodeStatus.Inactive, alignment: LessonNodeAlignment.Center },
  { id: 8, type: LessonNodeType.Star, status: LessonNodeStatus.Inactive, alignment: LessonNodeAlignment.Left },
];

const getAlignmentClass = (alignment: LessonNodeAlignment): string => {
  switch (alignment) {
    case LessonNodeAlignment.Left:
      return 'justify-start ml-8';
    case LessonNodeAlignment.Right:
      return 'justify-end mr-8';
    case LessonNodeAlignment.Center:
    default:
      return 'justify-center';
  }
};

const NodeIcon: React.FC<{ type: LessonNodeType }> = ({ type }) => {
    const iconClass = "w-10 h-10 text-white";
    switch (type) {
        case LessonNodeType.Book:
            return <BookIcon className={iconClass} />;
        case LessonNodeType.Star:
            return <StarIcon className={iconClass} />;
        case LessonNodeType.Headphones:
            return <HeadphonesIcon className={iconClass} />;
        default:
            return null;
    }
}

const LessonNode: React.FC<{ node: LessonNodeData, onClick: () => void }> = ({ node, onClick }) => {
  const isActive = node.status === LessonNodeStatus.Active;
  
  const baseClasses = "relative flex flex-col items-center cursor-pointer group";
  
  if (node.type === LessonNodeType.CharacterChess || node.type === LessonNodeType.CharacterCampfire) {
      return (
        <div className={baseClasses} onClick={onClick}>
            {node.type === LessonNodeType.CharacterChess && <CharacterChess className="w-28 h-28" />}
            {node.type === LessonNodeType.CharacterCampfire && <CharacterCampfire className="w-36 h-36" />}
            {node.label && (
                <div className="mt-2 px-6 py-2 bg-lingua-green rounded-2xl text-black font-extrabold text-lg border-b-4 border-emerald-600/50">
                    {node.label}
                </div>
            )}
        </div>
      );
  }

  return (
    <div className={baseClasses} onClick={onClick}>
      <div className={`w-24 h-24 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105
        ${isActive ? 'bg-lingua-blue border-b-8 border-lingua-blue-dark' : 'bg-lingua-inactive border-b-8 border-slate-600'}`}>
          {isActive && <div className="absolute w-28 h-28 rounded-full border-4 border-lingua-blue opacity-50 animate-ping-slow"></div>}
          <div className={`absolute w-28 h-28 rounded-full border-[10px] ${isActive ? 'border-lingua-blue-dark' : 'border-transparent'}`}></div>
          <NodeIcon type={node.type} />
      </div>
    </div>
  );
};


const LessonPath: React.FC<LessonPathProps> = ({ onNodeClick }) => {
  return (
    <div className="flex flex-col space-y-8">
      {lessonPathData.map(node => (
        <div key={node.id} className={`flex ${getAlignmentClass(node.alignment)}`}>
            <LessonNode node={node} onClick={() => onNodeClick()} />
        </div>
      ))}
    </div>
  );
};

export default LessonPath;

// Custom animation for the pulsing effect
const style = document.createElement('style');
style.innerHTML = `
@keyframes ping-slow {
  75%, 100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
`;
document.head.appendChild(style);