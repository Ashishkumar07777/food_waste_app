import React from 'react';
import { Search, ChefHat, Clock, Users } from 'lucide-react';

const RecipeAssistant = () => {
  const [query, setQuery] = React.useState('');
  const [recipes, setRecipes] = React.useState<any[]>([]);

  // Simulated recipe data
  const sampleRecipes = [
    {
      id: 1,
      title: 'Healthy Quinoa Bowl',
      time: '25 mins',
      servings: 2,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      description: 'A nutritious bowl packed with proteins and vegetables',
    },
    {
      id: 2,
      title: 'Mediterranean Salad',
      time: '15 mins',
      servings: 4,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
      description: 'Fresh and light salad with olive oil dressing',
    },
    {
      id: 3,
      title: 'Grilled Chicken',
      time: '35 mins',
      servings: 3,
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435',
      description: 'Perfectly seasoned grilled chicken breast',
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate recipe search
    setRecipes(sampleRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(query.toLowerCase())
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <h2 className="text-2xl font-bold text-emerald-700 mb-6">Recipe Assistant</h2>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for recipes..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {recipe.time}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {recipe.servings} servings
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {recipes.length === 0 && (
          <div className="text-center py-12">
            <ChefHat className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-600">Search for recipes</h3>
            <p className="text-gray-500">Enter ingredients or dish names to find recipes</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeAssistant;