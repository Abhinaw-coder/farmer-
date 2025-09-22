import React, { useState } from 'react';
import VideoCard from './VideoCard';
import { Filter, Grid, List } from 'lucide-react';

const VideoGrid = ({ searchQuery, selectedCategory }) => {
  const [viewMode, setViewMode] = useState('grid');
  
  const videos = [
    {
      id: 1,
      title: 'Introduction to Crop Rotation',
      description: 'Learn the basics of crop rotation to improve soil health and increase yields.',
      thumbnail: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '15:32',
      category: 'crops',
      level: 'Beginner',
      rating: 4.8,
      views: '12.5K',
      instructor: 'Dr. Priya Sharma',
      tags: ['rotation', 'soil health', 'yield'],
      isRecommended: true,
      progress: 0
    },
    {
      id: 2,
      title: 'Organic Pest Management Strategies',
      description: 'Discover effective and sustainable ways to protect your crops from pests.',
      thumbnail: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '22:18',
      category: 'pest',
      level: 'Intermediate',
      rating: 4.9,
      views: '18.2K',
      instructor: 'Rajesh Kumar',
      tags: ['organic', 'pest control', 'sustainable'],
      isRecommended: true,
      progress: 45
    },
    {
      id: 3,
      title: 'Smart Irrigation Techniques',
      description: 'Master water-efficient irrigation methods for maximum crop productivity.',
      thumbnail: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '18:45',
      category: 'irrigation',
      level: 'Advanced',
      rating: 4.7,
      views: '9.8K',
      instructor: 'Amit Singh',
      tags: ['irrigation', 'water management', 'efficiency'],
      isRecommended: false,
      progress: 100
    },
    {
      id: 4,
      title: 'Fertilizer Application Best Practices',
      description: 'Learn optimal timing and methods for fertilizer application.',
      thumbnail: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '14:22',
      category: 'fertilizer',
      level: 'Beginner',
      rating: 4.6,
      views: '15.3K',
      instructor: 'Sunita Devi',
      tags: ['fertilizer', 'nutrients', 'application'],
      isRecommended: false,
      progress: 0
    },
    {
      id: 5,
      title: 'Soil Testing and Analysis',
      description: 'Understanding soil composition and making data-driven decisions.',
      thumbnail: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '20:15',
      category: 'crops',
      level: 'Intermediate',
      rating: 4.8,
      views: '11.7K',
      instructor: 'Dr. Kiran Patel',
      tags: ['soil testing', 'analysis', 'ph level'],
      isRecommended: true,
      progress: 30
    },
    {
      id: 6,
      title: 'Post-Harvest Storage Solutions',
      description: 'Minimize crop losses with proper storage techniques and technologies.',
      thumbnail: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '16:40',
      category: 'storage',
      level: 'Advanced',
      rating: 4.9,
      views: '8.9K',
      instructor: 'Manoj Verma',
      tags: ['storage', 'post-harvest', 'loss prevention'],
      isRecommended: false,
      progress: 0
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = !searchQuery || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const recommendedVideos = filteredVideos.filter(video => video.isRecommended);
  const otherVideos = filteredVideos.filter(video => !video.isRecommended);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Learning Videos</h3>
          <p className="text-gray-600">
            {filteredVideos.length} videos found
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Recommended Videos */}
      {recommendedVideos.length > 0 && (
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <span>⭐ Recommended for You</span>
          </h4>
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {recommendedVideos.map(video => (
              <VideoCard key={video.id} video={video} viewMode={viewMode} />
            ))}
          </div>
        </div>
      )}

      {/* Other Videos */}
      {otherVideos.length > 0 && (
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-4">All Videos</h4>
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {otherVideos.map(video => (
              <VideoCard key={video.id} video={video} viewMode={viewMode} />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter className="text-gray-400" size={48} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No videos found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;