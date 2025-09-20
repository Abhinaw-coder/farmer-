import React, { useState } from 'react';
import ProfileSection from './ProfileSection';
import KnowledgeOfTheDay from './KnowledgeOfTheDay';
import SearchSection from './SearchSection';
import VideoGrid from './VideoGrid';
import AIDoubtSection from './AIDoubtSection';
import QuizSection from './QuizSection';

const LessonsAndVideos: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Lessons & Videos
          </h1>
          <p className="text-gray-600 text-lg">
            Learn from experts and grow your farming knowledge
          </p>
        </div>

        {/* Profile Section */}
        <ProfileSection />

        {/* Knowledge of the Day */}
        <KnowledgeOfTheDay />

        {/* Search Section */}
        <SearchSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Video Grid */}
        <VideoGrid 
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />

        {/* AI Doubt Section */}
        <AIDoubtSection />

        {/* Quiz Section */}
        <QuizSection />
      </div>
    </div>
  );
};

export default LessonsAndVideos;