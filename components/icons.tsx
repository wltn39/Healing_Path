
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const FlameIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0110.5 12c0-1.425-.386-2.763-1.072-3.935a.75.75 0 00-1.214.883A8.25 8.25 0 009 12c0 2.846 1.401 5.44 3.601 6.943a.75.75 0 10.923-1.168A6.75 6.75 0 0110.5 12c0-1.03.251-2.01.7-2.867a.75.75 0 00.15-1.047.75.75 0 00-1.047-.15A9.72 9.72 0 007.5 12c0 3.844 2.158 7.207 5.373 8.684a.75.75 0 00.814-1.228A8.19 8.19 0 0112 18.75c1.426 0 2.763.386 3.935 1.071a.75.75 0 10.883-1.214A8.25 8.25 0 0015 12a6.75 6.75 0 011.668-4.443.75.75 0 00-1.168-.923A8.19 8.19 0 0112 5.25c-1.426 0-2.763.386-3.935 1.072a.75.75 0 10.883 1.214A6.75 6.75 0 0113.5 12c0 1.03-.251 2.01-.7 2.867a.75.75 0 001.2.913A9.72 9.72 0 0016.5 12c0-3.844-2.158-7.207-5.373-8.684a.75.75 0 00-1.164.963z" clipRule="evenodd" />
  </svg>
);

export const GemIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.001 2.409l8.604 4.843 0.003 9.497-8.605 4.842-8.608-4.842-0.002-9.497 8.608-4.843zM12.001 0l-10.836 6.1v11.8l10.836 6.1 10.836-6.1v-11.8l-10.836-6.1z" />
        <path d="M4.167 7.749l7.833-4.411 7.833 4.411-3.916 9.412h-7.834l-3.916-9.412zM12 10.158l-1.958 4.706h3.916l-1.958-4.706z" />
    </svg>
);

export const HeartIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

export const ListIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h.008v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.008v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.008v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);


export const BookIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19 2H6c-1.2 0-2 .8-2 2v16c0 1.2.8 2 2 2h13c1.2 0 2-.8 2-2V4c0-1.2-.8-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </svg>
);

export const StarIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
);

export const HeadphonesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 3a9 9 0 00-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1a7 7 0 0114 0v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 00-9-9z"/>
    </svg>
);


export const HomeIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" {...props} >
      <path fill="#fdd200" d="M25,3.5L3.5,20.4v26.1h15V32.3h13.1v14.2h15V20.4L25,3.5z"/>
      <polygon fill="#d93333" points="43.5,18.8 43.5,4.7 39.1,8.3 39.1,18.8 "/>
    </svg>
);

export const SpeakIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" {...props} >
        <path fill="#f57913" d="M43.7,21.5c-1.3-3-4.1-5-7.3-5c-2.8,0-5.4,1.6-6.8,4.1c-1.4-2.5-4-4.1-6.8-4.1c-3.3,0-6,2-7.3,5c-4.4,0-8.1,3.6-8.1,8.1s3.6,8.1,8.1,8.1h27.9c4.4,0,8.1-3.6,8.1-8.1S48.1,21.5,43.7,21.5z"/>
        <path fill="#f7b038" d="M13.6,35.9c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3c0.9,0,1.8,0.2,2.6,0.6c-1,3.2-0.1,6.8,2.3,9.2C16.8,35.3,15.2,35.9,13.6,35.9z"/>
        <path fill="#f7b038" d="M25,35.9c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3s6.3,2.8,6.3,6.3C31.3,33.1,28.5,35.9,25,35.9z"/>
        <path fill="#f7b038" d="M36.4,35.9c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3c0.9,0,1.8,0.2,2.6,0.6c-1,3.2-0.1,6.8,2.3,9.2C39.6,35.3,38,35.9,36.4,35.9z"/>
    </svg>
);

export const TrophyIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#a483b5" viewBox="0 0 50 50" {...props} >
        <path d="M4.3,22.3v15.1c0,1.9,1.6,3.5,3.5,3.5h34.3c1.9,0,3.5-1.6,3.5-3.5V22.3H4.3z"/>
        <path fill="#856199" d="M42.2,40.9H7.8c-1.9,0-3.5,1.6-3.5,3.5v0c0,1.9,1.6,3.5,3.5,3.5h34.3c1.9,0,3.5-1.6,3.5-3.5v0C45.7,42.4,44.1,40.9,42.2,40.9z"/>
        <path d="M37.8,22.3V14c0-7-5.7-12.7-12.7-12.7S12.3,7,12.3,14v8.3H37.8z"/>
        <path fill="#856199" d="M43.7,11.3v9.5c0,1.9-1.6,3.5-3.5,3.5h-2.5V14c0-3.8-1.5-7.2-4.1-9.8C35.9,2.1,38.8,2,40.2,3.3C43.5,6.1,43.7,11.3,43.7,11.3z"/>
        <path fill="#856199" d="M6.3,11.3v9.5c0,1.9,1.6,3.5,3.5,3.5h2.5V14c0-3.8,1.5-7.2,4.1-9.8c2.3-2.3,5.2-2.3,7-2.3C9.8,2,6.5,6.1,6.3,11.3z"/>
    </svg>
);

export const ProfileIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#30b2ff" viewBox="0 0 50 50" {...props} >
        <circle cx="25" cy="14.8" r="11.1"/>
        <path d="M43.6,48.2c0-9.9-8.4-17.9-18.6-17.9c-10.3,0-18.6,8-18.6,17.9C6.4,48.2,25,48.2,43.6,48.2z"/>
    </svg>
);

export const SpecialIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props} >
        <defs>
            <linearGradient id="special-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#42e9de', stopOpacity:1}} />
            <stop offset="50%" style={{stopColor: '#bf5af2', stopOpacity:1}} />
            <stop offset="100%" style={{stopColor: '#42e9de', stopOpacity:1}} />
            </linearGradient>
        </defs>
        <path fill="url(#special-grad)" d="M48.2,33.5c-4-8.8-10.5-8.9-13-8.9c-2.4,0-3,1.3-3,1.3l-5.6,8.8c-0.6,1-2,1.3-3,0.7L6.2,27.1c-1-0.6-1.3-2-0.7-3l12-18.8c0.6-1,2-1.3,3-0.7l18.8,12C40.2,17.2,40.6,18.5,40,19.5z"/>
        <path fill="url(#special-grad)" d="M29.5,41.2c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6S29.5,37.9,29.5,41.2z"/>
    </svg>
);

export const MoreIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#a483b5" viewBox="0 0 50 50" {...props} >
        <circle cx="9.5" cy="25" r="5.5"/>
        <circle cx="25" cy="25" r="5.5"/>
        <circle cx="40.5" cy="25" r="5.5"/>
    </svg>
);

export const CharacterChess: React.FC<IconProps> = (props) => (
 <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg" {...props}>
  <g transform="translate(5, 5)">
    <path d="M48.5 2C42.15 2 37 7.15 37 13.5V16H23V25H37V29.5C37 34.18 33.18 38 28.5 38H21C16.82 38 13.5 41.32 13.5 45.5C13.5 47.98 14.73 50.15 16.5 51.5V56.5C16.5 59.81 19.19 62.5 22.5 62.5H77.5C80.81 62.5 83.5 59.81 83.5 56.5V51.5C85.27 50.15 86.5 47.98 86.5 45.5C86.5 41.32 83.18 38 79 38H71.5C66.82 38 63 34.18 63 29.5V25H77V16H63V13.5C63 7.15 57.85 2 51.5 2H48.5Z" fill="#3A3A3A"/>
    <rect x="23" y="16" width="54" height="9" fill="#505050"/>
    <path d="M50 0H20V8H80V0H50Z" fill="#505050" transform="translate(-15, 0) scale(1.25)"/>
    <path d="M44 87C44 94.18 49.82 100 57 100H43C35.82 100 30 94.18 30 87V62.5H70V87C70 94.18 64.18 100 57 100H44Z" fill="#ffb3c6"/>
    <path d="M50 48C45.58 48 42 51.58 42 56V62.5H58V56C58 51.58 54.42 48 50 48Z" fill="#ff8fab"/>
    <ellipse cx="40" cy="55" rx="4" ry="5" fill="#3A3A3A"/>
    <ellipse cx="60" cy="55" rx="4" ry="5" fill="#3A3A3A"/>
    <path d="M45 60C45 61.1046 45.8954 62 47 62H53C54.1046 62 55 61.1046 55 60C55 58.8954 54.1046 58 53 58H47C45.8954 58 45 58.8954 45 60Z" fill="#3A3A3A"/>
    <path d="M42 47.5C41.17 47.5 40.5 46.83 40.5 46V42.5C40.5 41.67 41.17 41 42 41H45C45.83 41 46.5 41.67 46.5 42.5V46C46.5 46.83 45.83 47.5 45 47.5" fill="#3A3A3A"/>
    <path d="M58 47.5C57.17 47.5 56.5 46.83 56.5 46V42.5C56.5 41.67 57.17 41 58 41H61C61.83 41 62.5 41.67 62.5 42.5V46C62.5 46.83 61.83 47.5 61 47.5" fill="#3A3A3A"/>
  </g>
 </svg>
));

export const CharacterCampfire: React.FC<IconProps> = (props) => (
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" {...props}>
  <g opacity="0.4">
    <path fill="#4C5361" d="M 87.6 103.2 C 87.6 103.2 82.8 106.8 79.2 108 C 75.6 109.2 74.4 108 74.4 108 L 74.4 100.8 C 74.4 100.8 74.4 97.2 78 97.2 C 81.6 97.2 87.6 98.4 87.6 103.2 Z"/>
    <path fill="#4C5361" d="M 86.4 99.6 C 86.4 99.6 90 99.6 92.4 98.4 C 94.8 97.2 94.8 94.8 94.8 94.8 L 91.2 92.4 C 91.2 92.4 88.8 92.4 86.4 94.8 C 84 97.2 86.4 99.6 86.4 99.6 Z"/>
    <path fill="#4C5361" d="M 72 103.2 C 72 103.2 68.4 99.6 66 100.8 C 63.6 102 61.2 104.4 61.2 104.4 L 63.6 108 C 63.6 108 67.2 106.8 72 103.2 Z"/>
    <path fill="#4C5361" d="M 80.4,85.2 C 74.4,85.2 72,82.8 72,79.2 C 72,75.6 74.4,74.4 75.6,74.4 C 76.8,74.4 82.8,74.4 82.8,79.2 C 82.8,84 80.4,85.2 80.4,85.2 Z M 76.8,49.2 C 70.8,49.2 64.8,51.6 64.8,60 C 64.8,68.4 69.6,70.8 76.8,70.8 C 82.8,70.8 88.8,68.4 88.8,60 C 88.8,51.6 82.8,49.2 76.8,49.2 Z M 80.4,45.6 C 81.6,44.4 82.8,43.2 82.8,40.8 C 82.8,38.4 80.4,36 76.8,36 C 73.2,36 70.8,38.4 70.8,40.8 C 70.8,43.2 72,44.4 73.2,45.6 C 73.2,45.6 70.8,46.8 70.8,48 C 70.8,49.2 73.2,49.2 76.8,49.2 C 80.4,49.2 82.8,49.2 82.8,48 C 82.8,46.8 80.4,45.6 80.4,45.6 Z"/>
    <path fill="#4C5361" d="M 45.6,67.2 C 38.4,67.2 32.4,72 32.4,79.2 C 32.4,86.4 38.4,91.2 45.6,91.2 C 52.8,91.2 58.8,86.4 58.8,79.2 C 58.8,72 52.8,67.2 45.6,67.2 Z M 45.6,88.8 C 39.6,88.8 34.8,84 34.8,79.2 C 34.8,74.4 39.6,69.6 45.6,69.6 C 51.6,69.6 56.4,74.4 56.4,79.2 C 56.4,84 51.6,88.8 45.6,88.8 Z"/>
    <path fill="#4C5361" d="M 52.8,80.4 C 52.8,80.4 51.6,84 49.2,85.2 C 46.8,86.4 44.4,85.2 44.4,85.2 C 44.4,85.2 40.8,84 38.4,81.6 C 36,79.2 38.4,76.8 38.4,76.8 L 43.2,78 C 43.2,78 45.6,80.4 48,79.2 C 50.4,78 52.8,75.6 52.8,75.6 L 52.8,80.4 Z"/>
    <path fill="#4C5361" d="M 27.6,98.4 C 27.6,98.4 21.6,98.4 19.2,96 C 16.8,93.6 18,90 18,90 C 18,90 20.4,86.4 25.2,86.4 C 30,86.4 32.4,90 32.4,90 C 32.4,90 33.6,93.6 31.2,96 C 28.8,98.4 27.6,98.4 27.6,98.4 Z M 48,103.2 C 44.4,103.2 43.2,100.8 43.2,98.4 C 43.2,96 44.4,94.8 46.8,94.8 C 49.2,94.8 49.2,97.2 49.2,98.4 C 49.2,99.6 48,103.2 48,103.2 Z"/>
    <path fill="#4C5361" d="M 45.6,67.2 C 45.6,67.2 48,63.6 51.6,63.6 C 55.2,63.6 56.4,67.2 56.4,67.2"/>
    <path fill="#4C5361" d="M 34.8,67.2 C 34.8,67.2 37.2,63.6 39.6,63.6 C 42,63.6 43.2,67.2 43.2,67.2"/>
    <ellipse fill="#4C5361" cx="30" cy="93.6" rx="2.4" ry="1.2"/>
    <ellipse fill="#4C5361" cx="25.2" cy="93.6" rx="2.4" ry="1.2"/>
    <path fill="#4C5361" d="M 52.8,85.2 L 57.6,85.2 L 56.4,88.8 L 52.8,88.8 L 52.8,85.2 Z"/>
    <path fill="#4C5361" d="M 68.4,103.2 L 67.2,105.6 L 70.8,105.6 L 72,103.2 L 68.4,103.2 Z"/>
    <path fill="#4C5361" d="M 76.8,99.6 L 75.6,102 L 79.2,102 L 80.4,99.6 L 76.8,99.6 Z"/>
    <path fill="#4C5361" d="M 87.6,94.8 L 86.4,97.2 L 90,97.2 L 91.2,94.8 L 87.6,94.8 Z"/>
    <rect fill="#4C5361" x="43.2" y="94.8" width="6" height="8.4"/>
    <ellipse cx="80" cy="115" rx="10" ry="2"/>
    <path d="M78 89L60 71" stroke="#4C5361" stroke-width="4" stroke-linecap="round"/>
    <rect x="52" y="63" width="6" height="6" rx="3" fill="white"/>
    <path d="M90 85L85 80" stroke="#4C5361" stroke-width="2" stroke-linecap="round"/>
    <path d="M95 89L90 84" stroke="#4C5361" stroke-width="2" stroke-linecap="round"/>
  </g>
</svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

export const DocumentTextIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

export const LinkIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);

export const CloudArrowUpIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
    </svg>
);
