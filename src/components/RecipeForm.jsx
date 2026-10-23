import { useState } from "react";

export default function RecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, ingredients, instructions });
    // Handle form submission logic here
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="submit-btn">
        Save Recipe
      </button>
    </form>
  );
}
