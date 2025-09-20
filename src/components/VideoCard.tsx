import React, { useState } from 'react';
import { Play, Clock, Star, Eye, User, BookOpen, Award } from 'lucide-react';

interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  category: string;
  level: string;
  rating: number;
  views: string;
  instructor: string;
  tags: string[];
  isRecommended: boolean;
  progress: number;
}

interface VideoCardProps {
  video: Video;
  viewMode: 'grid' | 'list';
}

const VideoCard: React.FC<VideoCardProps> = ({ video, viewMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
          {/* Thumbnail */}
          <div className="relative w-full lg:w-80 h-48 flex-shrink-0">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                <Play className="text-green-600 ml-1" size={24} />
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
              {video.duration}
            </div>
            {video.progress > 0 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gray-200 h-1">
                <div 
                  className="bg-green-500 h-1" 
                  style={{ width: `${video.progress}%` }}
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-green-600 cursor-pointer">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{video.description}</p>
              </div>
              {video.isRecommended && (
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-4">
                  Recommended
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center space-x-1">
                <User size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{video.instructor}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star size={16} className="text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{video.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">{video.views} views</span>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(video.level)}`}>
                {video.level}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {video.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
          <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform">
            <Play className="text-green-600 ml-1" size={24} />
          </div>
        </div>
        <div className="absolute top-2 left-2 flex space-x-2">
          {video.isRecommended && (
            <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              ⭐ Recommended
            </div>
          )}
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(video.level)}`}>
            {video.level}
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {video.duration}
        </div>
        {video.progress > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-gray-200 h-1">
            <div 
              className="bg-green-500 h-1" 
              style={{ width: `${video.progress}%` }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-green-600 cursor-pointer line-clamp-2">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{video.rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye size={16} className="text-gray-400" />
            <span className="text-sm text-gray-600">{video.views}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <User size={16} className="text-gray-400" />
          <span className="text-sm text-gray-600">{video.instructor}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {video.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-2">
            <Play size={16} />
            <span>{video.progress > 0 ? 'Continue' : 'Start'}</span>
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <BookOpen size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;