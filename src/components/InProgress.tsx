import React from 'react';
import { Construction, Clock, Rocket } from 'lucide-react';

interface InProgressProps {
  sectionName: string;
}

const InProgress: React.FC<InProgressProps> = ({ sectionName }) => {
  const getSectionDetails = (section: string) => {
    const sections: Record<string, { title: string; description: string; features: string[]; icon: React.ReactNode }> = {
      dashboard: {
        title: 'Dashboard Overview',
        description: 'Get a comprehensive view of your farming activities',
        features: ['Farm Analytics', 'Weather Insights', 'Crop Health Status', 'Revenue Tracking'],
        icon: <Rocket className="text-blue-500" size={48} />
      },
      quiz: {
        title: 'Quiz & Tests',
        description: 'Interactive learning assessments and skill evaluations',
        features: ['Skill Assessments', 'Progress Tracking', 'Certification Tests', 'Leaderboards'],
        icon: <Clock className="text-purple-500" size={48} />
      },
      farm: {
        title: 'Track My Farm',
        description: 'Monitor and manage your farm operations',
        features: ['Crop Monitoring', 'Field Management', 'Equipment Tracking', 'Harvest Planning'],
        icon: <Construction className="text-green-500" size={48} />
      },
      nutrition: {
        title: 'Nutrition AI Advisor',
        description: 'AI-powered crop nutrition recommendations',
        features: ['Soil Analysis', 'Fertilizer Recommendations', 'Nutrient Deficiency Detection', 'Custom Plans'],
        icon: <Rocket className="text-orange-500" size={48} />
      },
      chat: {
        title: 'Global Chat',
        description: 'Connect with farmers worldwide',
        features: ['Community Forums', 'Expert Discussions', 'Local Groups', 'Knowledge Sharing'],
        icon: <Clock className="text-indigo-500" size={48} />
      },
      complaint: {
        title: 'Complaint Section',
        description: 'Report issues and get support',
        features: ['Issue Reporting', 'Support Tickets', 'Status Tracking', 'Resolution Updates'],
        icon: <Construction className="text-red-500" size={48} />
      },
      veteran: {
        title: 'Veteran Advice',
        description: 'Learn from experienced farmers',
        features: ['Expert Mentorship', 'Success Stories', 'Best Practices', 'One-on-One Sessions'],
        icon: <Rocket className="text-amber-500" size={48} />
      }
    };
    
    return sections[section] || {
      title: 'Coming Soon',
      description: 'This feature is under development',
      features: ['Advanced Features', 'User-Friendly Interface', 'Real-time Updates'],
      icon: <Construction className="text-gray-500" size={48} />
    };
  };

  const section = getSectionDetails(sectionName);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            {section.icon}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{section.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.description}</p>
        </div>

        {/* In Progress Card */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8 border-2 border-dashed border-orange-200 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="text-orange-600 animate-bounce" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-orange-900 mb-2">Under Development</h2>
            <p className="text-orange-700 text-lg mb-6">
              Our team is working hard to bring you this amazing feature. Stay tuned!
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-orange-600">
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Expected: Q2 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Rocket size={16} />
                <span>High Priority</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Planned Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-8 bg-blue-50 rounded-2xl p-6 border border-blue-200 text-center">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">Want to contribute?</h4>
          <p className="text-blue-700 mb-4">
            Share your ideas and feedback to help us build the best farming platform
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
            Send Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default InProgress;