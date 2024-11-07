import React from 'react';
import { Heart } from 'lucide-react';

export const DonateFood: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Donate Food</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Food Item</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter food item name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter quantity"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Heart className="w-5 h-5" />
            <span>Submit Donation</span>
          </button>
        </form>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Donations</h3>
        <div className="space-y-4">
          {[
            { item: 'Rice', quantity: '5kg', date: '2024-03-15' },
            { item: 'Canned Beans', quantity: '10 cans', date: '2024-03-14' },
            { item: 'Pasta', quantity: '3kg', date: '2024-03-13' },
          ].map((donation, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">{donation.item}</h4>
                <p className="text-sm text-gray-600">{donation.quantity}</p>
              </div>
              <span className="text-sm text-gray-500">{donation.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};