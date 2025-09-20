import React from 'react';
import { Lightbulb, Calendar, Share2 } from 'lucide-react';

const KnowledgeOfTheDay: React.FC = () => {
  const knowledge = {
    title: "Optimal Watering Time",
    tip: "Water your crops early morning (6-8 AM) to reduce water evaporation by up to 30% and minimize disease risks. This timing allows plants to absorb water efficiently before the heat of the day.",
    benefit: "Save water, reduce disease, improve yield",
    date: new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  };

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-6 border border-orange-200">
      <div className="flex items-start space-x-4">
        <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
          <Lightbulb className="text-white animate-pulse" size={28} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900">Knowledge of the Day</h3>
            <div className="flex items-center space-x-2">
              <Calendar className="text-orange-600" size={16} />
              <span className="text-sm text-orange-700 font-medium">{knowledge.date}</span>
            </div>
          </div>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-2">{knowledge.title}</h4>
          <p className="text-gray-700 mb-3 leading-relaxed">{knowledge.tip}</p>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                💡 {knowledge.benefit}
              </div>
            </div>
            
            <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors group">
              <Share2 size={16} className="group-hover:scale-110 transition-transform" />
              <span>Share Tip</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeOfTheDay;