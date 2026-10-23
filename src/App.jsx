import { useState } from "react";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Thin Pancakes",
      ingredients: [
        "1 cup all-purpose flour",
        "1 tablespoon sugar",
        "1 teaspoon baking powder",
        "1 pinch salt",
        "1 teaspoon sugar (optional)",
        "2 large eggs",
        "1 ¼ cup whole milk",
        "1 tablespoon light oil (you can also use butter for a richer pancake)",
        "2 tablespoons unsalted butter",
      ],
      instructions:
        "In a medium bowl, sift in the flour, salt, and sugar (if using). Make a well in it and crack in two eggs. Add in about ¼ cup of milk. Whisk the eggs together, slowly incorporating in the flour. As the batter starts to thicken, slowly continue to whisk in the rest of the milk. The batter should go from lumpy to smooth. Whisk in the oil. You can also use an electric mixer on low speed to bring everything together. Preheat a 10 or 12-inch non-stick skillet or crepe pan on medium-high heat. Make sure the skillet is nice and hot before you start making the pancakes. Melt a bit of butter on the pan and swirl it around so it evenly coats the pan. Alternatively, melt the butter in a small bowl and brush it on using a silicone basting brush (see post for why I prefer to use a brush). Pour on the pancake batter and quickly swirl the pan around so the pancake batter spreads into a thin layer. I use a crepe spreader to get the perfect round and thin pancake (see post for why this is a handy tool). Cook for about 30 - 45 seconds, until the top of the pancake is no longer liquid. Gently shake pan to loosen the pancake. Carefully flip the pancake over and cook for an addition 30 - 45 seconds.Slide the pancake onto a plate, and serve warm. Top with a squeeze of lemon and a generous shake of powder sugar.",
    },
  ]);
	const handleAddRecipe = (newRecipeData) => {
		const finalRecipe = {
			id: Date.now(), title: newRecipeData.title, ingredients: newRecipeData.ingredients.split(",").map(ing => ing.trim()), instructions: newRecipeData.instructions
		};
		setRecipes([finalRecipe, ...recipes]);
	}
  return (
    <div className="app-container">
      <h1>🍽️ My Personal Recipes</h1>
      <RecipeForm onAddRecipe={handleAddRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
