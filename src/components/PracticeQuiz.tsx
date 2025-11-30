import React, { useState, useEffect } from 'react';
import { ArrowLeft, Volume2, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Topic, VocabularyItem } from '../types';

interface PracticeQuizProps {
  topics: Topic[];
  onBack: () => void;
}

interface QuizQuestion {
  word: VocabularyItem;
  options: string[];
  correctAnswer: string;
  topicTitle: string;
}

const PracticeQuiz: React.FC<PracticeQuizProps> = ({ topics, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const generateQuestions = () => {
    const allVocabulary: { word: VocabularyItem; topicTitle: string }[] = [];
    
    topics.forEach(topic => {
      topic.vocabulary.forEach(word => {
        allVocabulary.push({ word, topicTitle: topic.title });
      });
    });

    // Shuffle and take 10 questions
    const shuffled = allVocabulary.sort(() => Math.random() - 0.5).slice(0, 10);
    
    const quizQuestions: QuizQuestion[] = shuffled.map(({ word, topicTitle }) => {
      // Generate wrong options
      const wrongOptions = allVocabulary
        .filter(item => item.word.english !== word.english)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(item => item.word.english);
      
      const allOptions = [word.english, ...wrongOptions].sort(() => Math.random() - 0.5);
      
      return {
        word,
        options: allOptions,
        correctAnswer: word.english,
        topicTitle
      };
    });

    setQuestions(quizQuestions);
  };

  useEffect(() => {
    generateQuestions();
  }, [topics]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    generateQuestions();
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'th-TH';
      utterance.rate = 0.6;
      utterance.pitch = 1.0;
      speechSynthesis.speak(utterance);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Preparing your quiz...</p>
      </div>
    );
  }

  if (quizCompleted) {
    const percentage = (score / questions.length) * 100;
    
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200 mx-auto"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Topics</span>
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6">
            {percentage >= 80 ? (
              <div className="text-6xl mb-4">🎉</div>
            ) : percentage >= 60 ? (
              <div className="text-6xl mb-4">👍</div>
            ) : (
              <div className="text-6xl mb-4">📚</div>
            )}
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
          <p className="text-xl text-gray-600 mb-6">
            You scored <span className="font-bold text-blue-600">{score} out of {questions.length}</span>
            <span className="block text-lg mt-2">({percentage.toFixed(0)}%)</span>
          </p>
          
          <div className="w-full bg-gray-200 rounded-full h-4 mb-8 overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ease-out rounded-full ${
                percentage >= 80 ? 'bg-gradient-to-r from-green-400 to-green-500' :
                percentage >= 60 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                'bg-gradient-to-r from-red-400 to-red-500'
              }`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          <div className="space-y-4">
            <button
              onClick={restartQuiz}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 mx-auto"
            >
              <RotateCcw size={18} />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Topics</span>
        </button>
        
        <div className="text-sm text-gray-500">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="text-sm text-blue-600 font-medium mb-2">
            From: {question.topicTitle}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What does this mean in English?
          </h2>
          
          <div className="bg-blue-50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-center space-x-4">
              {question.word.thai && (
                <div className="text-3xl font-bold text-gray-800">
                  {question.word.thai}
                </div>
              )}
              <div className="text-2xl font-bold text-blue-700">
                {question.word.phonetic}
              </div>
              <button
                onClick={() => speakText(question.word.thai || question.word.phonetic)}
                className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200"
                title="Listen to pronunciation"
              >
                <Volume2 size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {question.options.map((option, index) => {
            let buttonClass = "w-full p-4 rounded-xl border-2 transition-all duration-200 text-left font-medium ";
            
            if (showResult) {
              if (option === question.correctAnswer) {
                buttonClass += "border-green-500 bg-green-50 text-green-700";
              } else if (option === selectedAnswer && option !== question.correctAnswer) {
                buttonClass += "border-red-500 bg-red-50 text-red-700";
              } else {
                buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
              }
            } else {
              if (selectedAnswer === option) {
                buttonClass += "border-blue-500 bg-blue-50 text-blue-700";
              } else {
                buttonClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700";
              }
            }

            return (
              <button
                key={index}
                onClick={() => !showResult && handleAnswerSelect(option)}
                disabled={showResult}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && option === question.correctAnswer && (
                    <CheckCircle className="text-green-600" size={20} />
                  )}
                  {showResult && option === selectedAnswer && option !== question.correctAnswer && (
                    <XCircle className="text-red-600" size={20} />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-center">
          {!showResult ? (
            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedAnswer
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          ) : (
            <div className="text-lg font-medium">
              {selectedAnswer === question.correctAnswer ? (
                <span className="text-green-600">✅ Correct!</span>
              ) : (
                <span className="text-red-600">❌ Incorrect</span>
              )}
            </div>
          )}
        </div>

        <div className="mt-8">
          <div className="text-sm text-gray-500 text-center mb-2">
            Progress: {currentQuestion + 1} / {questions.length}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-300 ease-out rounded-full"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeQuiz;