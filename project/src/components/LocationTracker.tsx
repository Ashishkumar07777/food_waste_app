import React from 'react';
import { MapPin } from 'lucide-react';

export const LocationTracker: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
          <MapPin className="w-6 h-6" />
          <span>Nearby Food Banks</span>
        </h2>
        
        <div className="bg-gray-100 h-[400px] rounded-lg mb-6 flex items-center justify-center">
          <p className="text-gray-500">Map will be displayed here</p>
        </div>

        <div className="space-y-4">
          {[
            { name: 'Community Food Bank', distance: '0.5 miles', address: '123 Main St' },
            { name: 'Hope Kitchen', distance: '1.2 miles', address: '456 Oak Ave' },
            { name: 'Food Pantry', distance: '2.0 miles', address: '789 Pine Rd' },
          ].map((location, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium">{location.name}</h4>
                <p className="text-sm text-gray-600">{location.address}</p>
              </div>
              <span className="text-sm text-blue-600 font-medium">{location.distance}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};