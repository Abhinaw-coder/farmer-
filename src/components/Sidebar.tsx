import React from 'react';
import { 
  BookOpen, 
  Brain, 
  Sprout, 
  Zap, 
  MessageCircle, 
  AlertTriangle, 
  Award,
  Menu,
  X,
  Home
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'lessons', label: 'Lessons & Videos', icon: BookOpen },
    { id: 'quiz', label: 'Quiz & Tests', icon: Brain },
    { id: 'farm', label: 'Track My Farm', icon: Sprout },
    { id: 'nutrition', label: 'Nutrition AI', icon: Zap },
    { id: 'chat', label: 'Global Chat', icon: MessageCircle },
    { id: 'complaint', label: 'Complaint Section', icon: AlertTriangle },
    { id: 'veteran', label: 'Veteran Advice', icon: Award },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-30 p-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-25 w-80 bg-gradient-to-b from-green-800 via-green-700 to-green-900 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        shadow-xl border-r border-green-600/30
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-green-600/30">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sprout className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Farmer's Hub</h1>
                <p className="text-green-200 text-sm">Smart Agriculture Platform</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="space-y-2 px-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left
                      transition-all duration-200 group hover:scale-105
                      ${isActive 
                        ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30' 
                        : 'text-green-100 hover:bg-white/10 hover:text-white'
                      }
                    `}
                  >
                    <Icon 
                      size={20} 
                      className={`transition-transform group-hover:scale-110 ${
                        isActive ? 'text-green-200' : 'text-green-300'
                      }`} 
                    />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-green-600/30">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RS</span>
                </div>
                <div>
                  <p className="text-white font-medium">Raj Singh</p>
                  <p className="text-green-200 text-sm">Premium Farmer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;