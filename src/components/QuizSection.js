import React, { useState } from 'react';
import { Brain, Trophy, Play, Star, ChevronRight, Award, Target } from 'lucide-react';

const QuizSection = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizzes = [
    {
      id: 1,
      title: 'Crop Rotation Basics',
      description: 'Test your knowledge on crop rotation principles',
      difficulty: 'Beginner',
      questions: 5,
      duration: '3 min',
      points: 50,
      category: 'Crop Management',
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Pest Identification',
      description: 'Identify common crop pests and their management',
      difficulty: 'Intermediate',
      questions: 8,
      duration: '5 min',
      points: 80,
      category: 'Pest Control',
      color: 'bg-red-500'
    },
    {
      id: 3,
      title: 'Soil Health Assessment',
      description: 'Understanding soil properties and testing',
      difficulty: 'Advanced',
      questions: 10,
      duration: '8 min',
      points: 100,
      category: 'Soil Science',
      color: 'bg-brown-500'
    }
  ];

  const sampleQuestions = [
    {
      question: "What is the primary benefit of crop rotation?",
      options: [
        "Increasing water usage",
        "Improving soil health and breaking pest cycles",
        "Reducing crop yield",
        "Making farming more complex"
      ],
      correct: 1
    },
    {
      question: "Which crops are typically rotated with cereals?",
      options: [
        "Other cereals only",
        "Legumes and root vegetables",
        "Fruits only",
        "No rotation needed"
      ],
      correct: 1
    }
  ];

  const handleStartQuiz = (quizId) => {
    setSelectedQuiz(quizId);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === sampleQuestions[currentQuestion].correct) {
      setScore(score + 10);
    }
    
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setSelectedAnswer(null);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (selectedQuiz && !quizCompleted) {
    const quiz = quizzes.find(q => q.id === selectedQuiz);
    const currentQ = sampleQuestions[currentQuestion];
    
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        {/* Quiz Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{quiz?.title}</h3>
            <p className="text-gray-600">Question {currentQuestion + 1} of {sampleQuestions.length}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">Score: {score}</div>
            <div className="text-sm text-gray-500">Points earned</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-900 mb-6">{currentQ.question}</h4>
          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left border-2 rounded-xl transition-all ${
                  selectedAnswer === index
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index ? 'border-green-500 bg-green-500' : 'border-gray-300'
                  }`}>
                    {selectedAnswer === index && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className="text-gray-900">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between">
          <button
            onClick={() => setSelectedQuiz(null)}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Exit Quiz
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white rounded-xl transition-colors flex items-center space-x-2"
          >
            <span>{currentQuestion === sampleQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const quiz = quizzes.find(q => q.id === selectedQuiz);
    const percentage = (score / (sampleQuestions.length * 10)) * 100;
    
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="text-green-600" size={40} />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Quiz Completed!</h3>
        <p className="text-gray-600 mb-6">{quiz?.title}</p>
        
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 rounded-xl p-4">
            <div className="text-2xl font-bold text-green-600">{score}</div>
            <div className="text-sm text-green-700">Points Earned</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="text-2xl font-bold text-blue-600">{percentage}%</div>
            <div className="text-sm text-blue-700">Accuracy</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-4">
            <div className="text-2xl font-bold text-purple-600">A+</div>
            <div className="text-sm text-purple-700">Grade</div>
          </div>
        </div>

        <div className="flex space-x-4 justify-center">
          <button
            onClick={handleRetakeQuiz}
            className="px-6 py-3 border border-green-600 text-green-600 rounded-xl hover:bg-green-50 transition-colors"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => setSelectedQuiz(null)}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-colors"
          >
            Try Another Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
            <Brain className="text-purple-600" size={28} />
            <span>Quick Learning Quizzes</span>
          </h3>
          <p className="text-gray-600">Test your knowledge and earn points</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-50 px-4 py-2 rounded-lg">
            <div className="flex items-center space-x-2">
              <Award className="text-yellow-600" size={16} />
              <span className="text-yellow-700 font-medium">1,250 Total Points</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${quiz.color} rounded-xl flex items-center justify-center`}>
                <Brain className="text-white" size={24} />
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(quiz.difficulty)}`}>
                {quiz.difficulty}
              </div>
            </div>
            
            <h4 className="text-lg font-bold text-gray-900 mb-2">{quiz.title}</h4>
            <p className="text-gray-600 text-sm mb-4">{quiz.description}</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Questions:</span>
                <span className="font-medium">{quiz.questions}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Duration:</span>
                <span className="font-medium">{quiz.duration}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Points:</span>
                <span className="font-medium text-green-600">{quiz.points}</span>
              </div>
            </div>
            
            <button
              onClick={() => handleStartQuiz(quiz.id)}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
            >
              <Play size={16} />
              <span>Start Quiz</span>
            </button>
          </div>
        ))}
      </div>

      {/* Achievement Section */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h4>
        <div className="flex flex-wrap gap-3">
          {[
            { name: 'First Quiz', icon: '🎯', color: 'bg-blue-100 text-blue-800' },
            { name: 'Pest Expert', icon: '🐛', color: 'bg-green-100 text-green-800' },
            { name: 'Quick Learner', icon: '⚡', color: 'bg-yellow-100 text-yellow-800' },
            { name: 'Knowledge Seeker', icon: '📚', color: 'bg-purple-100 text-purple-800' }
          ].map((achievement, index) => (
            <div key={index} className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${achievement.color}`}>
              <span>{achievement.icon}</span>
              <span className="text-sm font-medium">{achievement.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizSection;