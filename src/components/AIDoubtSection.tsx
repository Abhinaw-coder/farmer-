import React, { useState } from 'react';
import { MessageCircle, Send, Bot, User, Mic, Image, Paperclip } from 'lucide-react';

const AIDoubtSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your AI farming assistant. Ask me anything about agriculture, crop management, pest control, or any farming doubts you have. I'm here to help! 🌱",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great question! For pest control in tomatoes, I recommend using neem oil spray early in the morning or evening. It's organic and very effective against most common pests.",
        "Based on your query about soil pH, ideally tomatoes prefer slightly acidic soil with pH between 6.0-6.8. You can test your soil and adjust accordingly.",
        "For better crop yield, consider implementing crop rotation, proper spacing, and regular monitoring of plant health. Would you like specific recommendations for your crop type?"
      ];

      const botResponse = {
        id: messages.length + 2,
        type: 'bot' as const,
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const quickQuestions = [
    "How to control pests naturally?",
    "Best fertilizer for tomatoes",
    "When to harvest wheat?",
    "Soil pH testing methods"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div 
        className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 cursor-pointer hover:from-blue-100 hover:to-indigo-100 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Bot className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">AI Doubt Clearing</h3>
              <p className="text-gray-600">Ask any farming question, get instant expert advice</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
              Online
            </div>
            <MessageCircle className={`text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} size={20} />
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      {isExpanded && (
        <div className="border-t border-gray-100">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.type === 'user' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {msg.type === 'user' ? <User className="text-white" size={16} /> : <Bot className="text-white" size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    msg.type === 'user' 
                      ? 'bg-green-500 text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-900 rounded-bl-none'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                    <p className={`text-xs mt-1 opacity-75 ${msg.type === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="px-4 pb-4">
            <p className="text-sm text-gray-600 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setMessage(question)}
                  className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-100 p-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask your farming doubt..."
                  className="w-full px-4 py-3 pr-24 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Paperclip size={16} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Image size={16} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <Mic size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="p-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-xl transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIDoubtSection;