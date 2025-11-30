import React from 'react';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';
import { Topic } from '../types';

interface TopicListProps {
  topics: Topic[];
  completedTopics: string[];
  onTopicSelect: (topic: Topic) => void;
}

const TopicList: React.FC<TopicListProps> = ({ topics, completedTopics, onTopicSelect }) => {
  const progressPercentage = (completedTopics.length / topics.length) * 100;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Study Topic</h2>
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{completedTopics.length} / {topics.length} completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => {
          const isCompleted = completedTopics.includes(topic.id);
          
          return (
            <div
              key={topic.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => onTopicSelect(topic)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-blue-100 text-blue-600 text-sm font-bold px-3 py-1 rounded-full">
                      {index + 1}
                    </span>
                    {isCompleted ? (
                      <CheckCircle className="text-green-500" size={20} />
                    ) : (
                      <Circle className="text-gray-300" size={20} />
                    )}
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200" size={20} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {topic.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 font-medium">
                  {topic.titlePhonetic}
                </p>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {topic.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {topic.vocabulary.length} words
                  </span>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    isCompleted 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {isCompleted ? 'Completed' : 'Study'}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopicList;