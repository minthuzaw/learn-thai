import React, { useState } from 'react';
import { ArrowLeft, Volume2, MessageSquare, User, Lightbulb } from 'lucide-react';
import { immigrationQuestions } from '../data/immigrationQuestions';

interface ImmigrationPracticeProps {
  onBack: () => void;
  pronoun: 'chǎn' | 'phǒm';
}

const ImmigrationPractice: React.FC<ImmigrationPracticeProps> = ({ onBack, pronoun }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  const [practiceMode, setPracticeMode] = useState<'questions' | 'conversation'>('questions');

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'th-TH';
      utterance.rate = 0.6;
      utterance.pitch = 1.0;
      speechSynthesis.speak(utterance);
    }
  };

  const categorizeQuestions = () => {
    const categories: { [key: string]: typeof immigrationQuestions } = {};
    
    immigrationQuestions.forEach(question => {
      if (!categories[question.category]) {
        categories[question.category] = [];
      }
      categories[question.category].push(question);
    });
    
    return categories;
  };

  const categorizedQuestions = categorizeQuestions();

  const formatAnswerWithPronoun = (answer: string, phonetic: string, english: string) => {
    const thaiAnswer = answer.replace(/ฉัน\/ผม/g, pronoun === 'chǎn' ? 'ฉัน' : 'ผม');
    const phoneticAnswer = phonetic.replace(/chǎn\/phǒm|chǎn \/ phǒm/g, pronoun);
    const englishAnswer = english.replace(/\[name\]/g, 'your name').replace(/\[number\]/g, 'number').replace(/\[country\]/g, 'your country');
    
    return { thaiAnswer, phoneticAnswer, englishAnswer };
  };

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
            onClick={() => setPracticeMode('questions')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              practiceMode === 'questions'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <MessageSquare size={18} />
            <span className="font-medium">Q&A Practice</span>
          </button>
          
          <button
            onClick={() => setPracticeMode('conversation')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              practiceMode === 'conversation'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            <User size={18} />
            <span className="font-medium">Full Interview</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Immigration Interview Practice</h1>
          <p className="text-gray-600 text-lg">
            Practice common questions asked during Thai immigration interviews
          </p>
        </div>

        {practiceMode === 'questions' ? (
          <div className="space-y-8">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <Lightbulb className="text-yellow-600 mt-0.5" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Interview Tips</h3>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• Speak clearly and slowly</li>
                    <li>• Practice your pronunciation beforehand</li>
                    <li>• Have your answers ready for common questions</li>
                    <li>• Stay calm and confident</li>
                  </ul>
                </div>
              </div>
            </div>

            {Object.entries(categorizedQuestions).map(([category, questions]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-700 capitalize border-b border-gray-200 pb-2">
                  {category} Questions
                </h3>
                
                <div className="grid gap-4">
                  {questions.map((question, index) => (
                    <div
                      key={question.id}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-blue-800">Question:</h4>
                            <button
                              onClick={() => speakText(question.questionThai)}
                              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                            >
                              <Volume2 size={16} />
                            </button>
                          </div>
                          <p className="text-lg font-medium text-blue-800 mb-1">
                            {question.questionThai}
                          </p>
                          <p className="text-lg font-medium text-blue-700 mb-1">
                            {question.questionPhonetic}
                          </p>
                          <p className="text-gray-600">{question.questionEnglish}</p>
                        </div>
                        
                        {(() => {
                          const { thaiAnswer, phoneticAnswer, englishAnswer } = formatAnswerWithPronoun(
                            question.answerThai,
                            question.answerPhonetic,
                            question.answerEnglish
                          );
                          
                          return (
                            <div className="bg-green-50 rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold text-green-800">Answer:</h4>
                                <button
                                  onClick={() => speakText(thaiAnswer)}
                                  className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-200"
                                >
                                  <Volume2 size={16} />
                                </button>
                              </div>
                              <p className="text-lg font-medium text-green-800 mb-1">
                                {thaiAnswer}
                              </p>
                              <p className="text-lg font-medium text-green-700 mb-1">
                                {phoneticAnswer}
                              </p>
                              <p className="text-gray-600">{englishAnswer}</p>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Full Interview Simulation</h3>
              <p className="text-gray-600 mb-6">
                Practice answering all questions in sequence, just like a real immigration interview
              </p>
            </div>

            <div className="space-y-6">
              {immigrationQuestions.map((question, index) => {
                return (
                  <div
                    key={question.id}
                    className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center space-x-3">
                          <p className="text-xl font-bold text-gray-800">
                            {question.questionThai}
                          </p>
                          <p className="text-lg font-medium text-gray-800">
                            {question.questionPhonetic}
                          </p>
                          <button
                            onClick={() => speakText(question.questionThai)}
                            className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200"
                          >
                            <Volume2 size={16} className="text-blue-600" />
                          </button>
                        </div>
                        
                        <p className="text-gray-600 italic">
                          "{question.questionEnglish}"
                        </p>
                        
                        {(() => {
                          const { thaiAnswer, phoneticAnswer, englishAnswer } = formatAnswerWithPronoun(
                            question.answerThai,
                            question.answerPhonetic,
                            question.answerEnglish
                          );
                          
                          return (
                            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                              <div className="flex items-center space-x-3 mb-2">
                                <p className="text-green-800 font-bold">
                                  {thaiAnswer}
                                </p>
                                <p className="text-green-700 font-medium">
                                  {phoneticAnswer}
                                </p>
                                <button
                                  onClick={() => speakText(thaiAnswer)}
                                  className="p-1 bg-green-100 hover:bg-green-200 rounded-full transition-colors duration-200"
                                >
                                  <Volume2 size={14} className="text-green-600" />
                                </button>
                              </div>
                              <p className="text-gray-600 text-sm italic">
                                "{englishAnswer}"
                              </p>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8 p-6 bg-green-50 rounded-xl">
              <h4 className="text-lg font-bold text-green-800 mb-2">Ready for Your Interview!</h4>
              <p className="text-green-700">
                Practice these answers until you feel confident. Good luck! 🍀
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImmigrationPractice;