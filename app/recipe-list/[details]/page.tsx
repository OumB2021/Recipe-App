import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId: number) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );

    const data = await apiResponse.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

const RecipeDetails = async ({ params }) => {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);
  return (
    <div>
      <RecipeDetailsItem recipeDetails={getRecipeDetails} />
    </div>
  );
};

export default RecipeDetails;
