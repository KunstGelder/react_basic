import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage'; // 나중에 만들 컴포넌트
import { data } from './utils/data';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return selectedRecipe ? (
    <RecipePage recipe={selectedRecipe} goBack={() => setSelectedRecipe(null)} />
  ) : (
    <RecipeListPage recipes={data.hits} onSelect={setSelectedRecipe} />
  );
};
