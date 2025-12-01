import React from 'react';
import { GraduationCap, Heart, User } from 'lucide-react';

interface HeaderProps {
  pronoun: 'chǎn' | 'phǒm';
  onPronounChange: (pronoun: 'chǎn' | 'phǒm') => void;
}

const Header: React.FC<HeaderProps> = ({ pronoun, onPronounChange }) => {
  return (
    <header className="bg-gradient-to-r from-red-600 via-blue-600 to-yellow-500 text-white shadow-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-end mb-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
            <div className="flex items-center space-x-2">
              <User size={16} className="text-white/80" />
              <span className="text-sm text-white/80 font-medium">Pronoun:</span>
              <button
                onClick={() => onPronounChange('chǎn')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  pronoun === 'chǎn'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                chǎn (♀)
              </button>
              <button
                onClick={() => onPronounChange('phǒm')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  pronoun === 'phǒm'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                phǒm (♂)
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <GraduationCap size={40} className="text-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Thai Language Practice
            </h1>
            <Heart size={32} className="text-red-300" />
          </div>
          <p className="text-xl md:text-2xl text-blue-100 font-medium">
            Study Thai in a Shortcut
          </p>
          <p className="text-lg text-yellow-100 mt-2">
            Master essential Thai for your interview
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;