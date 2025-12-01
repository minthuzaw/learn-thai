import React, { useState } from 'react';
import { BookOpen, MessageCircle, Trophy, Volume2 } from 'lucide-react';
import Header from './components/Header';
import TopicList from './components/TopicList';
import TopicDetail from './components/TopicDetail';
import PracticeQuiz from './components/PracticeQuiz';
import ImmigrationPractice from './components/ImmigrationPractice';
import InterviewQuestions from './components/InterviewQuestions';
import SampleVocabulary from './components/SampleVocabulary';
import FinalQuestions from './components/FinalQuestions';
import { Topic } from './types';
import { topics } from './data/topics';

function App() {
  const [currentView, setCurrentView] = useState<'topics' | 'topic-detail' | 'quiz' | 'immigration' | 'interview-questions' | 'sample-vocabulary' | 'final-questions'>('topics');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [pronoun, setPronoun] = useState<'chǎn' | 'phǒm'>('chǎn');

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic);
    setCurrentView('topic-detail');
  };

  const handleTopicComplete = (topicId: string) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
    }
  };

  const handleBackToTopics = () => {
    setCurrentView('topics');
    setSelectedTopic(null);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'topic-detail':
        return selectedTopic ? (
          <TopicDetail
            topic={selectedTopic}
            onComplete={() => handleTopicComplete(selectedTopic.id)}
            onBack={handleBackToTopics}
            isCompleted={completedTopics.includes(selectedTopic.id)}
            pronoun={pronoun}
          />
        ) : null;
      case 'quiz':
        return (
          <PracticeQuiz
            topics={topics}
            onBack={() => setCurrentView('topics')}
          />
        );
      case 'immigration':
        return (
          <ImmigrationPractice
            onBack={() => setCurrentView('topics')}
            pronoun={pronoun}
          />
        );
      case 'interview-questions':
        return (
          <InterviewQuestions
            onBack={() => setCurrentView('topics')}
            pronoun={pronoun}
          />
        );
      case 'sample-vocabulary':
        return (
          <SampleVocabulary
            onBack={() => setCurrentView('topics')}
            pronoun={pronoun}
          />
        );
      case 'final-questions':
        return (
          <FinalQuestions
            onBack={() => setCurrentView('topics')}
            pronoun={pronoun}
          />
        );
      default:
        return (
          <TopicList
            topics={topics}
            completedTopics={completedTopics}
            onTopicSelect={handleTopicSelect}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <Header pronoun={pronoun} onPronounChange={setPronoun} />
      
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            <button
              onClick={() => setCurrentView('topics')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'topics'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <BookOpen size={18} />
              <span className="font-medium">Study Topics</span>
            </button>
            
            <button
              onClick={() => setCurrentView('quiz')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'quiz'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Trophy size={18} />
              <span className="font-medium">Practice Quiz</span>
            </button>
            
            <button
              onClick={() => setCurrentView('immigration')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'immigration'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <MessageCircle size={18} />
              <span className="font-medium">Parctice Q&A</span>
            </button>
            
            <button
              onClick={() => setCurrentView('interview-questions')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'interview-questions'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <BookOpen size={18} />
              <span className="font-medium">Interview Questions</span>
            </button>
            
            <button
              onClick={() => setCurrentView('sample-vocabulary')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'sample-vocabulary'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <BookOpen size={18} />
              <span className="font-medium">Sample Vocabulary</span>
            </button>
            
            <button
              onClick={() => setCurrentView('final-questions')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentView === 'final-questions'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <Trophy size={18} />
              <span className="font-medium">Final Questions</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderCurrentView()}
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            Practice For Thai Language!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;