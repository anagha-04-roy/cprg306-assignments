"use client";

import { useState } from "react";
import NewGroceryItem from "./NewGroceryItem";
import GroceryItemList from "./GroceryItemList";
import MealIdeas from "./MealIdeas";
import itemsData from "./grocery-items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const mapToAPIIngredient = (name) => {
    let cleanName = name
      .toLowerCase()
      .split(",")[0]
      .trim()
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "");

    const mapping = {
      "chicken breast": "chicken",
      "chicken thighs": "chicken",
      "pasta noodles": "pasta",
      "broccoli florets": "broccoli",
    };

    return mapping[cleanName] || cleanName;
  };

  const handleItemSelect = (item) => {
    const ingredient = mapToAPIIngredient(item.name);
    setSelectedItemName(ingredient);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-400">
            Shopping List + Meal Ideas
          </h1>

          <NewGroceryItem onAddItem={handleAddItem} />

          <div className="mt-6">
            <p className="font-semibold mb-2">Sort by:</p>
            <div className="flex gap-4">
              <button
                onClick={() => setSortBy("name")}
                className={
                  sortBy === "name"
                    ? "px-4 py-2 bg-blue-600 text-white rounded dark:bg-blue-500"
                    : "px-4 py-2 bg-gray-300 text-black rounded dark:bg-gray-700 dark:text-gray-200"
                }
              >
                Name
              </button>
              <button
                onClick={() => setSortBy("category")}
                className={
                  sortBy === "category"
                    ? "px-4 py-2 bg-blue-600 text-white rounded dark:bg-blue-500"
                    : "px-4 py-2 bg-gray-300 text-black rounded dark:bg-gray-700 dark:text-gray-200"
                }
              >
                Category
              </button>
            </div>
          </div>

          <GroceryItemList items={sortedItems} onItemSelect={handleItemSelect} />
        </div>

        <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}