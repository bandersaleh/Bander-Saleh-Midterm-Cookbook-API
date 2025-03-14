export async function fetchRecipes(ingredients) {
    if (!ingredients) return [];
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`);
      const data = await response.json();
      console.log('API Response:', data); // Debugging line
      return data.meals || [];
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return [];
    }
  }
  