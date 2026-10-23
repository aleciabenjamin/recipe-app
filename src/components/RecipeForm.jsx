export default function RecipeForm() {
  return (
    <form className="recipe-form">
      <h2>Add Recipe</h2>
      <input type="text" placeholder="Recipe Title" />
      <textarea placeholder="Ingredients (comma separated)"></textarea>
      <textarea placeholder="Instructions"></textarea>
      <button type="submit">Save Recipe</button>
    </form>
  );
}
