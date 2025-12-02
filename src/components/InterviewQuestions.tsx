import React, { useState } from 'react';
import { ArrowLeft, Volume2, BookOpen, Users, Clock, MapPin, Heart, GraduationCap, Home, Utensils, Activity, Calendar, User } from 'lucide-react';
import { interviewQuestions, additionalVocabulary } from '../data/interviewQuestions';

interface InterviewQuestionsProps {
  onBack: () => void;
  pronoun: 'chǎn' | 'phǒm';
}

const InterviewQuestions: React.FC<InterviewQuestionsProps> = ({ onBack, pronoun }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showVocabulary, setShowVocabulary] = useState(false);
  const [selectedExtension, setSelectedExtension] = useState<'all' | 'first' | 'second' | 'third'>('all');

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
    const categories: { [key: string]: typeof interviewQuestions } = {};
    
    let filteredQuestions;
    if (selectedExtension === 'all') {
      filteredQuestions = interviewQuestions;
    } else {
      filteredQuestions = interviewQuestions.filter(q => q.extension === selectedExtension);
    }
    
    filteredQuestions.forEach(question => {
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
    
    return { thaiAnswer, phoneticAnswer, englishAnswer: english };
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      introduction: <Users className="w-5 h-5" />,
      personal: <User className="w-5 h-5" />,
      background: <MapPin className="w-5 h-5" />,
      stay: <Home className="w-5 h-5" />,
      purpose: <Heart className="w-5 h-5" />,
      education: <GraduationCap className="w-5 h-5" />,
      time: <Clock className="w-5 h-5" />,
      preferences: <Heart className="w-5 h-5" />,
      vocabulary: <BookOpen className="w-5 h-5" />,
      location: <MapPin className="w-5 h-5" />,
      numbers: <BookOpen className="w-5 h-5" />,
      colors: <BookOpen className="w-5 h-5" />,
      identification: <BookOpen className="w-5 h-5" />,
      visit: <MapPin className="w-5 h-5" />,
      transportation: <MapPin className="w-5 h-5" />,
      plans: <Calendar className="w-5 h-5" />,
      food: <Utensils className="w-5 h-5" />,
      health: <Activity className="w-5 h-5" />,
      activities: <Activity className="w-5 h-5" />,
      hobbies: <Activity className="w-5 h-5" />,
      culture: <BookOpen className="w-5 h-5" />,
      family: <Users className="w-5 h-5" />
    };
    return iconMap[category] || <BookOpen className="w-5 h-5" />;
  };

  const getCategoryTitle = (category: string) => {
    const titleMap: { [key: string]: string } = {
      introduction: 'Introduction',
      personal: 'Personal Information',
      background: 'Background',
      stay: 'Stay Duration',
      purpose: 'Purpose of Visit',
      education: 'Education',
      time: 'Time & Date',
      preferences: 'Preferences',
      vocabulary: 'Vocabulary Lists',
      location: 'Location',
      numbers: 'Numbers',
      colors: 'Colors',
      identification: 'Object Identification',
      visit: 'Visit Details',
      transportation: 'Transportation',
      plans: 'Future Plans',
      food: 'Food & Dining',
      health: 'Health',
      activities: 'Activities',
      hobbies: 'Hobbies',
      culture: 'Thai Culture',
      family: 'Family'
    };
    return titleMap[category] || category;
  };

  if (showVocabulary) {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Additional Vocabulary</h1>
            <p className="text-gray-600 text-lg">
              Useful phrases for immigration interviews
            </p>
          </div>

          <div className="grid gap-4">
            {additionalVocabulary.map((item, index) => (
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

  if (selectedCategory) {
    const questions = categorizedQuestions[selectedCategory];
    
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Categories</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              {getCategoryIcon(selectedCategory)}
              <h1 className="text-4xl font-bold text-gray-800">{getCategoryTitle(selectedCategory)}</h1>
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
          className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors duration-200 font-medium"
        >
          <BookOpen size={18} />
          <span>Additional Vocabulary</span>
        </button>
      </div>
      
      {!selectedCategory && !showVocabulary && (
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Filter by Extension Level</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedExtension('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedExtension === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              All Questions ({interviewQuestions.length})
            </button>
            <button
              onClick={() => setSelectedExtension('first')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedExtension === 'first'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              First Extension (1-38) ({interviewQuestions.filter(q => q.extension === 'first').length})
            </button>
            <button
              onClick={() => setSelectedExtension('second')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedExtension === 'second'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Second Extension (39-59) ({interviewQuestions.filter(q => q.extension === 'second').length})
            </button>
            <button
              onClick={() => setSelectedExtension('third')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedExtension === 'third'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Third Extension (60-68) ({interviewQuestions.filter(q => q.extension === 'third').length})
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Possible Questions for the Interview</h1>
          <p className="text-gray-600 text-lg">
            Comprehensive list of questions commonly asked during Thai immigration interviews
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {selectedExtension === 'all' 
              ? `Total: ${interviewQuestions.length} questions across ${Object.keys(categorizedQuestions).length} categories`
              : `${selectedExtension.charAt(0).toUpperCase() + selectedExtension.slice(1)} Extension: ${Object.values(categorizedQuestions).flat().length} questions across ${Object.keys(categorizedQuestions).length} categories`
            }
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(categorizedQuestions).map(([category, questions]) => (
            <div
              key={category}
              className="group bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => setSelectedCategory(category)}
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
                    View All
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <div className="flex items-start space-x-3">
            <BookOpen className="text-yellow-600 mt-0.5" size={20} />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">How to Use This Section</h3>
              <ul className="text-yellow-700 space-y-1 text-sm">
                <li>• Click on any category to view all questions in that topic</li>
                <li>• Practice pronunciation using the audio buttons</li>
                <li>• Answers are automatically adjusted based on your selected pronoun</li>
                <li>• Check "Additional Vocabulary" for useful phrases</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewQuestions;