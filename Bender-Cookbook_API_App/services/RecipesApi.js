// services/RecipesApi.js

// External API: https://www.themealdb.com/api.php
export const fetchRecipes = async (ingredient) => {
    // If function is called, fetch API results
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      
      //if no data is passed by the User, return empty array
      if (!data.meals) return [];
  
      // Fetch full details for each meal
      const detailedMeals = await Promise.all(
        data.meals.map(async (meal) => {
          const detailsResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
          const detailsData = await detailsResponse.json();
          return detailsData.meals ? detailsData.meals[0] : meal;
        })
      );
  
      return detailedMeals;
    } catch (error) {
      console.error("Error fetching recipes:", error); // Log any errors that occur during the fetch process
      return [];
    }
  };
  