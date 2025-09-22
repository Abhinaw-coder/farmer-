import React from 'react';
import { User, Trophy, Target, Clock, Star } from 'lucide-react';

const ProfileSection = () => {
  const stats = [
    { label: 'Videos Watched', value: '47', icon: Clock, color: 'bg-blue-500' },
    { label: 'Achievements', value: '12', icon: Trophy, color: 'bg-yellow-500' },
    { label: 'Quiz Score', value: '85%', icon: Target, color: 'bg-green-500' },
    { label: 'Streak Days', value: '23', icon: Star, color: 'bg-purple-500' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
      <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <User className="text-white" size={36} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">5</span>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900">Raj Singh</h2>
            <p className="text-gray-600">Premium Farmer • Level 5</p>
            <div className="flex items-center justify-center sm:justify-start mt-2 space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={`${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-gray-100 transition-colors">
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <Icon className="text-white" size={20} />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Progress to Level 6</span>
          <span className="text-sm text-gray-600">340/500 XP</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500"
            style={{ width: '68%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;