import React, { useState } from 'react';
import { ArrowLeft, Volume2, BookOpen, Clock, MapPin, Heart, GraduationCap, User, Calendar, Utensils, Car, Palette } from 'lucide-react';
import { finalQuestions, finalVocabulary, timeExamples, dayNames } from '../data/finalQuestions';

interface FinalQuestionsProps {
  onBack: () => void;
  pronoun: 'chǎn' | 'phǒm';
}

const FinalQuestions: React.FC<FinalQuestionsProps> = ({ onBack, pronoun }) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [showVocabulary, setShowVocabulary] = useState(false);

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
    const categories: { [key: string]: typeof finalQuestions } = {};
    
    finalQuestions.forEach(question => {
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
    const phoneticAnswer = phonetic.replace(/phǒm\/chǎn|chǎn\/phǒm/g, pronoun);
    
    return { thaiAnswer, phoneticAnswer, englishAnswer: english };
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'basic-info': <User className="w-5 h-5" />,
      'stay-info': <MapPin className="w-5 h-5" />,
      'education': <GraduationCap className="w-5 h-5" />,
      'time-date': <Clock className="w-5 h-5" />,
      'preferences': <Heart className="w-5 h-5" />
    };
    return iconMap[category] || <BookOpen className="w-5 h-5" />;
  };

  const getCategoryTitle = (category: string) => {
    const titleMap: { [key: string]: string } = {
      'basic-info': 'Basic Information',
      'stay-info': 'Stay Information',
      'education': 'Education',
      'time-date': 'Time & Date',
      'preferences': 'Preferences'
    };
    return titleMap[category] || category;
  };

  const vocabularySections = [
    { id: 'places', title: 'Places', icon: <MapPin className="w-5 h-5" />, data: finalVocabulary.places },
    { id: 'numbers', title: 'Numbers', icon: <BookOpen className="w-5 h-5" />, data: finalVocabulary.numbers },
    { id: 'colors', title: 'Colors', icon: <Palette className="w-5 h-5" />, data: finalVocabulary.colors },
    { id: 'food', title: 'Food', icon: <Utensils className="w-5 h-5" />, data: finalVocabulary.food },
    { id: 'drinks', title: 'Drinks', icon: <Utensils className="w-5 h-5" />, data: finalVocabulary.drinks },
    { id: 'fruits', title: 'Fruits', icon: <Utensils className="w-5 h-5" />, data: finalVocabulary.fruits },
    { id: 'transportation', title: 'Transportation', icon: <Car className="w-5 h-5" />, data: finalVocabulary.transportation },
    { id: 'time', title: 'Time Examples', icon: <Clock className="w-5 h-5" />, data: timeExamples },
    { id: 'days', title: 'Days of Week', icon: <Calendar className="w-5 h-5" />, data: dayNames }
  ];

  if (showVocabulary) {
    if (selectedSection) {
      const section = vocabularySections.find(s => s.id === selectedSection);
      if (!section) return null;

      return (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSelectedSection(null)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Vocabulary</span>
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {section.icon}
                </div>
                <h1 className="text-4xl font-bold text-gray-800">{section.title}</h1>
              </div>
              <p className="text-gray-600 text-lg">
                {section.data.length} items in this category
              </p>
            </div>

            <div className="grid gap-4">
              {section.data.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <div className="text-xl font-bold text-gray-800">
                          {item.thai}
                        </div>
                        <div className="text-lg font-semibold text-blue-600">
                          {item.phonetic}
                        </div>
                        <button
                          onClick={() => speakText(item.thai)}
                          className="p-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200"
                          title="Listen to pronunciation"
                        >
                          <Volume2 size={16} className="text-blue-600" />
                        </button>
                      </div>
                      <p className="text-gray-700 font-medium">{item.english}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowVocabulary(false)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Questions</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Final Exam Vocabulary</h1>
            <p className="text-gray-600 text-lg">
              Essential vocabulary for your final Thai language exam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocabularySections.map((section) => (
              <div
                key={section.id}
                className="group bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer"
                onClick={() => setSelectedSection(section.id)}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {section.data.length} items
                    </span>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                      Study
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (selectedSection) {
    const questions = categorizedQuestions[selectedSection];
    
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedSection(null)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Categories</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              {getCategoryIcon(selectedSection)}
              <h1 className="text-4xl font-bold text-gray-800">{getCategoryTitle(selectedSection)}</h1>
            </div>
            <p className="text-gray-600 text-lg">
              {questions.length} questions in this category
            </p>
          </div>

          <div className="space-y-6">
            {questions.map((question, index) => {
              const { thaiAnswer, phoneticAnswer, englishAnswer } = formatAnswerWithPronoun(
                question.answerThai,
                question.answerPhonetic,
                question.answerEnglish
              );

              return (
                <div
                  key={question.id}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-blue-800">Question {index + 1}:</h4>
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
                      {question.answerTemplate && (
                        <p className="text-sm text-green-600 mt-2 italic">
                          Template: {question.answerTemplate}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

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
        
        <button
          onClick={() => setShowVocabulary(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 font-medium"
        >
          <BookOpen size={18} />
          <span>Final Vocabulary</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Final Questions & Answers</h1>
          <p className="text-gray-600 text-lg">
            Complete preparation for your Thai language final exam
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {finalQuestions.length} essential questions across {Object.keys(categorizedQuestions).length} categories
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Object.entries(categorizedQuestions).map(([category, questions]) => (
            <div
              key={category}
              className="group bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => setSelectedSection(category)}
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {getCategoryIcon(category)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {getCategoryTitle(category)}
                  </h3>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {questions.length} questions
                  </span>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                    Practice
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <BookOpen className="text-purple-600 mt-0.5" size={20} />
            <div>
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Final Exam Preparation</h3>
              <ul className="text-purple-700 space-y-1 text-sm">
                <li>• Master all question categories for comprehensive preparation</li>
                <li>• Practice pronunciation using audio buttons</li>
                <li>• Study vocabulary sections for complete language coverage</li>
                <li>• Review time expressions, numbers, and essential vocabulary</li>
                <li>• Use the pronoun selector to match your gender preference</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalQuestions;