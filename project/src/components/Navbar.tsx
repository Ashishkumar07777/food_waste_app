import React from 'react';
import { Menu, X, Heart, Calculator, Chef, MapPin } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const tabs = [
    { id: 'donate', name: 'Donate Food', icon: Heart },
    { id: 'calories', name: 'Calorie Calculator', icon: Calculator },
    { id: 'recipes', name: 'Recipe Assistant', icon: Chef },
    { id: 'locations', name: 'Find Locations', icon: MapPin },
  ];

  return (
    <nav className="bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">Food Aid Hub</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      activeTab === tab.id
                        ? 'bg-emerald-700 text-white'
                        : 'text-emerald-100 hover:bg-emerald-500'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-100 hover:bg-emerald-500"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium ${
                    activeTab === tab.id
                      ? 'bg-emerald-700 text-white'
                      : 'text-emerald-100 hover:bg-emerald-500'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;