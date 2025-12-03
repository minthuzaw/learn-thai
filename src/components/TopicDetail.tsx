import React, { useState } from 'react';
import { ArrowLeft, Volume2, CheckCircle, Eye, EyeOff, Circle } from 'lucide-react';
import { Topic } from '../types';

interface TopicDetailProps {
  topic: Topic;
  onComplete: () => void;
  onBack: () => void;
  isCompleted: boolean;
  pronoun: 'chǎn' | 'phǒm';
}

const TopicDetail: React.FC<TopicDetailProps> = ({ topic, onComplete, onBack, isCompleted, pronoun }) => {
  const [showPhonetics, setShowPhonetics] = useState(true);
  const [studiedItems, setStudiedItems] = useState<string[]>([]);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'th-TH';
      utterance.rate = 0.6;
      utterance.pitch = 1.0;
      speechSynthesis.speak(utterance);
    }
  };

  const updatePronounInText = (text: string) => {
    return text.replace(/chǎn \/ phǒm|chǎn\/phǒm|phǒm\/chǎn|phǒm \/ chǎn/g, pronoun);
  };
  // Convert romanized Thai to Thai script for speech synthesis
  const getThaiScriptForExample = (example: string): string => {
    // Map of complete romanized sentences to Thai script
    const completePhrasesMap: { [key: string]: string } = {
      'Sawàtdii khâ / chǎn chʉ̂ ʉ [Eva] / aayú [yîisìp sǎam] pii / chǎn pen nákrian / maacàak pràthêet [America] khâ': 
        'สวัสดีค่ะ ฉันชื่อเอวา อายุยี่สิบสามปี ฉันเป็นนักเรียน มาจากประเทศอเมริกา ค่ะ',
      'Hello, My name is Eva, I\'m 23 years old, I\'m a student from America.': 
        'สวัสดีค่ะ ฉันชื่อเอวา อายุยี่สิบสามปี ฉันเป็นนักเรียน มาจากประเทศอเมริกา ค่ะ'
    };

    // Check for complete phrases first
    if (completePhrasesMap[example]) {
      return completePhrasesMap[example];
    }

    // Map of individual romanized phrases to Thai script
    const phraseMap: { [key: string]: string } = {
      'Sawàtdii khâ': 'สวัสดีค่ะ',
      'Sawàtdii khráp': 'สวัสดีครับ',
      'chǎn chʉ̂ ʉ [Eva]': 'ฉันชื่อเอวา',
      'phǒm chʉ̂ ʉ [name]': 'ผมชื่อ',
      'aayú [yîisìp sǎam] pii': 'อายุยี่สิบสามปี',
      'chǎn pen nákrian': 'ฉันเป็นนักเรียน',
      'phǒm pen nákrian': 'ผมเป็นนักเรียน',
      'maacàak pràthêet [America]': 'มาจากประเทศอเมริกา',
      'níi khʉʉ pàakkaa': 'นี่คือปากกา',
      'nân khʉʉ kâw îi': 'นั่นคือเก้าอี้',
      'khǎw pen tamrùat': 'เขาเป็นตำรวจ',
      'chǎn yùu thîi bâan': 'ฉันอยู่ที่บ้าน',
      'khǎo yùu thîi roongrian': 'เขาอยู่ที่โรงเรียน',
      'roong rian yùu thɛ̌ ɛw tàlàat': 'โรงเรียนอยู่แถวตลาด',
      'phǒm khǒr kaafɛɛ rɔ́ɔn nòi khráp': 'ผมขอกาแฟร้อนหน่อยครับ',
      'ao khâao phàt khráp': 'เอาข้าวผัดครับ',
      'ao chaa yen khâ': 'เอาชาเย็นค่ะ',
      '46 = sìi sìp hòk → 40 + 6': 'สี่สิบหก',
      '51 = hâa sìp èt → 50 + 1': 'ห้าสิบเอ็ด',
      '106 = nùeng rói hòk → 100 + 6': 'หนึ่งร้อยหก',
      '1900 = nùeng phan kâo rói → 1000 + 9 + 100': 'หนึ่งพันเก้าร้อย'
    };

    // If it's a multi-part sentence with " / " separators
    if (example.includes(' / ')) {
      const parts = example.split(' / ');
      const thaiParts = parts.map(part => {
        const trimmedPart = part.trim();
        return phraseMap[trimmedPart] || trimmedPart;
      });
      
      // Join Thai parts with spaces (remove the "/" separators)
      const result = thaiParts.filter(part => 
        !part.includes('Hello') && 
        !part.includes('My name') && 
        !part.includes('I\'m') && 
        !part.includes('years old') &&
        !part.includes('student') &&
        !part.includes('from') &&
        !part.includes('America')
      ).join(' ');
      
      return result || example;
    }

    // Try to find single phrase match
    for (const [romanized, thaiScript] of Object.entries(phraseMap)) {
      if (example.includes(romanized)) {
        return thaiScript;
      }
    }
    
    // If no mapping found, return the original
    return example;
  };

  const toggleItemStudied = (index: number) => {
    const itemKey = `${topic.id}-${index}`;
    if (studiedItems.includes(itemKey)) {
      setStudiedItems(studiedItems.filter(item => item !== itemKey));
    } else {
      setStudiedItems([...studiedItems, itemKey]);
    }
  };

  const allItemsStudied = studiedItems.length === topic.vocabulary.length;

  const handleCompleteStudy = () => {
    onComplete();
  };

  const categorizeVocabulary = () => {
    const categories: { [key: string]: typeof topic.vocabulary } = {};
    
    topic.vocabulary.forEach(item => {
      const category = item.category || 'general';
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(item);
    });
    
    return categories;
  };

  const categorizedVocab = categorizeVocabulary();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Topics</span>
        </button>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowPhonetics(!showPhonetics)}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
          >
            {showPhonetics ? <EyeOff size={18} /> : <Eye size={18} />}
            <span className="text-sm font-medium">
              {showPhonetics ? 'Hide' : 'Show'} Pronunciation
            </span>
          </button>
          
          {allItemsStudied && !isCompleted && (
            <button
              onClick={handleCompleteStudy}
              className="flex items-center space-x-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 font-medium"
            >
              <CheckCircle size={18} />
              <span>Mark Complete</span>
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{topic.title}</h1>
          <p className="text-xl text-blue-600 font-medium mb-1">{topic.titlePhonetic}</p>
          <p className="text-gray-600">{topic.description}</p>
          {isCompleted && (
            <div className="mt-4 inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <CheckCircle size={18} />
              <span className="font-medium">Completed</span>
            </div>
          )}
        </div>

        {topic.tips && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8 rounded-r-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Learning Tips</h3>
            <p className="text-yellow-700 leading-relaxed">{updatePronounInText(topic.tips)}</p>
          </div>
        )}

        <div className="space-y-8">
          {Object.entries(categorizedVocab).map(([category, items]) => (
            <div key={category} className="space-y-4">
              {category !== 'general' && (
                <h3 className="text-xl font-bold text-gray-700 capitalize border-b border-gray-200 pb-2">
                  {category}
                </h3>
              )}
              
              <div className="grid gap-4">
                {items.map((item, index) => {
                  const globalIndex = topic.vocabulary.indexOf(item);
                  const itemKey = `${topic.id}-${globalIndex}`;
                  const isStudied = studiedItems.includes(itemKey);
                  
                  return (
                    <div
                      key={globalIndex}
                      className={`bg-gray-50 rounded-xl p-6 border-2 transition-all duration-300 ${
                        isStudied 
                          ? 'border-green-300 bg-green-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            {item.thai && (
                              <div className="text-xl font-bold text-gray-800">
                                {item.thai}
                              </div>
                            )}
                            {showPhonetics && (
                              <div className="text-lg font-semibold text-blue-600">
                                {updatePronounInText(item.phonetic)}
                              </div>
                            )}
                            <button
                              onClick={() => speakText(item.thai || item.phonetic)}
                              className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200"
                              title="Listen to pronunciation"
                            >
                              <Volume2 size={16} className="text-blue-600" />
                            </button>
                          </div>
                          <p className="text-gray-700 font-medium">{item.english}</p>
                        </div>
                        
                        <button
                          onClick={() => toggleItemStudied(globalIndex)}
                          className={`p-2 rounded-full transition-all duration-200 ${
                            isStudied
                              ? 'bg-green-100 text-green-600 hover:bg-green-200'
                              : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                          }`}
                        >
                          {isStudied ? <CheckCircle size={20} /> : <Circle size={20} />}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {topic.examples && (
          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">📚 Examples</h3>
            <div className="space-y-3">
              {topic.examples.map((example, index) => {
                // Check if this is a Thai example (contains romanized Thai) or English
                const isThaiExample = example.includes('chǎn') || example.includes('phǒm') || 
                                    example.includes('khǎo') || example.includes('níi') || 
                                    example.includes('nân') || example.includes('ao ') ||
                                    example.includes('khǒr') || example.includes('yùu');
                
                const thaiScript = isThaiExample ? getThaiScriptForExample(example) : null;
                
                return (
                  <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
                    <p className="text-gray-700 leading-relaxed">{updatePronounInText(example)}</p>
                    <div className="mt-2 flex items-center space-x-3">
                      {thaiScript && (
                        <>
                          <button
                            onClick={() => speakText(thaiScript)}
                            className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                          >
                            <Volume2 size={14} />
                            <span className="text-sm font-medium">Listen (Thai)</span>
                          </button>
                          <span className="text-sm text-gray-500">→ {thaiScript}</span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <div className="text-sm text-gray-500 mb-4">
            Progress: {studiedItems.length} / {topic.vocabulary.length} items studied
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${(studiedItems.length / topic.vocabulary.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;