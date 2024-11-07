import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { DonateFood } from './components/DonateFood';
import { CalorieCalculator } from './components/CalorieCalculator';
import { RecipeBot } from './components/RecipeBot';
import { LocationTracker } from './components/LocationTracker';

function App() {
  const [activeTab, setActiveTab] = useState('donate');

  const renderContent = () => {
    switch (activeTab) {
      case 'donate':
        return <DonateFood />;
      case 'calories':
        return <CalorieCalculator />;
      case 'recipe':
        return <RecipeBot />;
      case 'locations':
        return <LocationTracker />;
      default:
        return <DonateFood />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;