import React, { useState } from 'react';
import { Search, Mic, Filter, Sparkles } from 'lucide-react';

const SearchSection = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory
}) => {
  const [isListening, setIsListening] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', label: 'All Topics', emoji: '🌾' },
    { id: 'crops', label: 'Crop Management', emoji: '🌱' },
    { id: 'pest', label: 'Pest Control', emoji: '🐛' },
    { id: 'irrigation', label: 'Irrigation', emoji: '💧' },
    { id: 'fertilizer', label: 'Fertilizers', emoji: '🧪' },
    { id: 'organic', label: 'Organic Farming', emoji: '🍃' },
    { id: 'harvesting', label: 'Harvesting', emoji: '🚜' },
    { id: 'storage', label: 'Storage', emoji: '🏪' }
  ];

  const quickTopics = [
    'Soil pH management',
    'Organic pest control',
    'Drip irrigation setup',
    'Crop rotation basics',
    'Seed treatment methods'
  ];

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false);
      setSearchQuery('Pest control in tomatoes');
    }, 2000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      {/* Search Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900">Find Learning Content</h3>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            showFilters ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Filter size={16} />
          <span>Filters</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for farming topics, techniques, or ask questions..."
            className="w-full pl-12 pr-16 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder-gray-500 text-lg"
          />
          <button
            onClick={handleVoiceSearch}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-all ${
              isListening 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-green-500 hover:bg-green-600 text-white hover:scale-110'
            }`}
          >
            <Mic size={16} />
          </button>
        </div>
        {isListening && (
          <div className="absolute top-full left-0 right-0 bg-red-50 border border-red-200 rounded-b-xl p-3 animate-pulse">
            <p className="text-red-700 text-center">🎤 Listening... Speak now</p>
          </div>
        )}
      </div>

      {/* Categories */}
      {(showFilters || selectedCategory !== 'all') && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.emoji}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick Topics */}
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <Sparkles className="text-purple-500" size={16} />
          <h4 className="text-sm font-medium text-gray-700">Quick Topics</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {quickTopics.map((topic, index) => (
            <button
              key={index}
              onClick={() => setSearchQuery(topic)}
              className="px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm hover:bg-purple-100 transition-colors border border-purple-200"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;