import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

export const RecipeBot: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! I'm your recipe assistant. What would you like to cook today?", isBot: true }
  ]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-[600px] flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
        <MessageSquare className="w-6 h-6" />
        <span>Recipe Assistant</span>
      </h2>
      
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.isBot
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <form className="flex space-x-2">
        <input
          type="text"
          placeholder="Ask about any recipe..."
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};