import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export const CalorieCalculator: React.FC = () => {
  const [calories, setCalories] = useState<number>(0);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Calorie Calculator</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your age"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your weight"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your height"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Activity Level</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Sedentary</option>
              <option>Light Exercise</option>
              <option>Moderate Exercise</option>
              <option>Heavy Exercise</option>
              <option>Athlete</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Calculator className="w-5 h-5" />
            <span>Calculate</span>
          </button>
        </form>
      </div>

      {calories > 0 && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Your Daily Calories</h3>
          <div className="text-center">
            <span className="text-4xl font-bold text-blue-600">{calories}</span>
            <p className="text-gray-600 mt-2">calories per day</p>
          </div>
        </div>
      )}
    </div>
  );
};