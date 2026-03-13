"use client";

import { useState, useEffect } from "react";

// Fetch meals from TheMealDB API
async function fetchMealIdeas(ingredient) {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await res.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return null;
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!ingredient) return;

    setLoading(true);
    setError(false);

    fetchMealIdeas(ingredient)
      .then((data) => {
        if (data === null) setError(true);
        else setMeals(data);
      })
      .finally(() => setLoading(false));
  }, [ingredient]);

  if (!ingredient) return <p className="text-gray-500">Select an ingredient to see meal ideas.</p>;
  if (loading) return <p>Loading meals...</p>;
  if (error) return <p className="text-red-500">Failed to load meals.</p>;
  if (meals.length === 0) return <p>No meals found for "{ingredient}"</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="border rounded p-2 shadow">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <p className="text-center font-medium">{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  );
}