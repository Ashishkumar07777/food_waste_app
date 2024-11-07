import React from 'react';
import { UtensilsCrossed, Calculator, MessageSquare, MapPin } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
      active ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-bold text-blue-600">FoodAid Hub</h1>
            <div className="flex space-x-4">
              <NavItem
                icon={<UtensilsCrossed className="w-5 h-5" />}
                label="Donate Food"
                active={activeTab === 'donate'}
                onClick={() => setActiveTab('donate')}
              />
              <NavItem
                icon={<Calculator className="w-5 h-5" />}
                label="Calories"
                active={activeTab === 'calories'}
                onClick={() => setActiveTab('calories')}
              />
              <NavItem
                icon={<MessageSquare className="w-5 h-5" />}
                label="Recipe Bot"
                active={activeTab === 'recipe'}
                onClick={() => setActiveTab('recipe')}
              />
              <NavItem
                icon={<MapPin className="w-5 h-5" />}
                label="Locations"
                active={activeTab === 'locations'}
                onClick={() => setActiveTab('locations')}
              />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};