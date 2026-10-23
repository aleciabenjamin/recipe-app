import RecipeCard from './RecipeCard';

export default function RecipeList({ recipes }) {
	return (
		<div className="recipe-list">
			<h2>Recipe List</h2>
			{recipes.length === 0 ? (
				<p>No recipes available.</p>
			) : (
				recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))
			)}
		</div>
	)
}
