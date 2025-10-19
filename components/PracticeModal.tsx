import React, { useState } from 'react';
import { ChevronLeftIcon, DocumentTextIcon, LinkIcon, CloudArrowUpIcon } from './icons';

interface PracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'text' | 'url' | 'file';

const PracticeModal: React.FC<PracticeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<Tab>('text');
  const [inputUrl, setInputUrl] = useState('');
  const [contentUrl, setContentUrl] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleLoadClick = () => {
    if (inputUrl) {
      setContentUrl(inputUrl.trim());
    }
  };

  const handleOpenInNewTab = () => {
    if (contentUrl) {
      window.open(contentUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const getFileType = (url: string) => {
    const extension = url.split('.').pop()?.toLowerCase();
    const fileTypes: { [key: string]: string } = {
      pdf: 'PDF 문서',
      doc: 'Word 문서',
      docx: 'Word 문서',
      ppt: 'PowerPoint',
      pptx: 'PowerPoint',
      xls: 'Excel',
      xlsx: 'Excel',
      mp4: '비디오',
      avi: '비디오',
      mov: '비디오',
      mp3: '오디오',
      wav: '오디오',
    };
    return fileTypes[extension || ''] || '웹 페이지';
  };

  const TabButton: React.FC<{ tabName: Tab; label: string; icon: React.ReactNode }> = ({ tabName, label, icon }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex-1 flex items-center justify-center space-x-2 py-3 text-lg font-extrabold transition-colors duration-200 border-b-4 ${
        activeTab === tabName
          ? 'text-lingua-blue border-lingua-blue'
          : 'text-lingua-inactive border-transparent hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="fixed inset-0 bg-lingua-dark z-50 flex flex-col max-w-lg mx-auto animate-fade-in">
      <header className="flex-shrink-0 p-3 flex items-center h-16 border-b-2 border-lingua-dark-light">
        <button onClick={onClose} className="p-2 rounded-full hover:bg-lingua-dark-light transition-colors">
          <ChevronLeftIcon className="w-8 h-8 text-lingua-inactive" />
        </button>
      </header>
      
      <main className="flex-grow flex flex-col p-4 space-y-4 overflow-y-auto">
        {/* Top Section: Viewer */}
        <section className="h-1/3 bg-lingua-dark-light rounded-2xl p-4 flex flex-col border border-lingua-inactive/50">
          <h2 className="text-xl font-extrabold text-white text-center mb-2">학습 자료</h2>
          <div className="flex-grow flex flex-col items-center justify-center bg-lingua-dark rounded-lg p-4">
            {contentUrl ? (
              <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-lingua-blue/20 rounded-full mb-2">
                    <LinkIcon className="w-8 h-8 text-lingua-blue" />
                  </div>
                  <p className="text-white font-bold text-lg">{getFileType(contentUrl)}</p>
                  <p className="text-lingua-inactive text-sm break-all px-4 max-w-md">
                    {contentUrl}
                  </p>
                </div>
                <button 
                  onClick={handleOpenInNewTab}
                  className="bg-lingua-blue hover:bg-lingua-blue-dark text-white font-extrabold px-8 py-3 rounded-xl border-b-4 border-lingua-blue-dark transition-transform duration-100 active:translate-y-1 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>새 창에서 열기</span>
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <DocumentTextIcon className="w-12 h-12 text-lingua-inactive mx-auto mb-2" />
                <p className="text-lingua-inactive">링크를 업로드하여 e북이나 영상을 보세요</p>
              </div>
            )}
          </div>
          <div className="flex space-x-2 mt-4">
            <input 
              type="url" 
              placeholder="https://example.com/document.pdf"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleLoadClick();
                }
              }}
              className="flex-grow bg-lingua-dark border border-lingua-inactive rounded-xl px-4 py-3 text-white placeholder-lingua-inactive focus:outline-none focus:ring-2 focus:ring-lingua-blue"
            />
            <button 
              onClick={handleLoadClick}
              className="bg-lingua-blue hover:bg-lingua-blue-dark text-white font-extrabold px-6 py-3 rounded-xl border-b-4 border-lingua-blue-dark transition-transform duration-100 active:translate-y-1"
            >
              로드
            </button>
          </div>
        </section>

        {/* Bottom Section: Practice */}
        <section className="h-2/3 bg-lingua-dark-light rounded-2xl p-4 flex flex-col border border-lingua-inactive/50">
          <h2 className="text-xl font-extrabold text-white text-center mb-2">실습</h2>
          <div className="flex-shrink-0">
            <div className="flex justify-around border-b border-lingua-inactive/50">
              <TabButton tabName="text" label="텍스트 입력" icon={<DocumentTextIcon className="w-6 h-6"/>} />
              <TabButton tabName="url" label="URL 업로드" icon={<LinkIcon className="w-6 h-6"/>} />
              <TabButton tabName="file" label="파일 업로드" icon={<CloudArrowUpIcon className="w-6 h-6"/>} />
            </div>
          </div>
          <div className="flex-grow mt-4 overflow-y-auto">
            {activeTab === 'text' && (
              <textarea 
                className="w-full h-full bg-lingua-dark border border-lingua-inactive rounded-xl p-4 text-white resize-none focus:outline-none focus:ring-2 focus:ring-lingua-blue" 
                placeholder="이곳에 텍스트를 입력하여 연습하세요..."
              />
            )}
            {activeTab === 'url' && (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <input 
                  type="url" 
                  placeholder="https://example.com/practice"
                  className="w-full bg-lingua-dark border border-lingua-inactive rounded-xl px-4 py-3 text-white placeholder-lingua-inactive focus:outline-none focus:ring-2 focus:ring-lingua-blue"
                />
                <button className="bg-lingua-green w-full hover:bg-emerald-500 text-black font-extrabold px-6 py-3 rounded-xl border-b-4 border-emerald-700 transition-transform duration-100 active:translate-y-1">
                  실행
                </button>
              </div>
            )}
            {activeTab === 'file' && (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <label htmlFor="file-upload" className="w-full text-center bg-lingua-dark border-2 border-dashed border-lingua-inactive rounded-xl p-8 cursor-pointer hover:border-white transition-colors">
                  <CloudArrowUpIcon className="w-12 h-12 text-lingua-inactive mx-auto mb-2"/>
                  <span className="text-white">파일 선택</span>
                  <p className="text-sm text-lingua-inactive">클릭 또는 드래그 앤 드롭</p>
                </label>
                <input id="file-upload" type="file" className="hidden" />
                <button className="bg-lingua-green w-full hover:bg-emerald-500 text-black font-extrabold px-6 py-3 rounded-xl border-b-4 border-emerald-700 transition-transform duration-100 active:translate-y-1">
                  실행
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

const style = document.createElement('style');
style.innerHTML = `
@keyframes fade-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fade-in {
  animation: fade-in 0.2s ease-out forwards;
}
`;
document.head.appendChild(style);

export default PracticeModal;
