import React, { useState } from 'react';
import { BookOpen, MessageCircle, Trophy, Volume2, Menu, X } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'topics', label: 'Study Topics', icon: BookOpen },
    { id: 'quiz', label: 'Practice Quiz', icon: Trophy },
    { id: 'immigration', label: 'Practice Q&A', icon: MessageCircle },
    { id: 'interview-questions', label: 'Interview Questions', icon: BookOpen },
    { id: 'sample-vocabulary', label: 'Sample Vocabulary', icon: BookOpen },
    { id: 'final-questions', label: 'Final Questions', icon: Trophy },
  ];

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

  const handleNavClick = (viewId: any) => {
    setCurrentView(viewId);
    setMobileMenuOpen(false);
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
          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center flex-wrap gap-2 xl:gap-4 py-4">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center space-x-2 px-3 xl:px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                  currentView === id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium text-sm xl:text-base">{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation Header */}
          <div className="lg:hidden flex items-center justify-between py-4">
            <span className="text-gray-800 font-semibold text-base">
              {navItems.find(item => item.id === currentView)?.label}
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    currentView === id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          )}
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