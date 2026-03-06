"use client";

import { useState } from "react";
import NewGroceryItem from "./NewGroceryItem";
import GroceryItemList from "./GroceryItemList";
import itemsData from "./grocery-items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState("name");

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-gray-900 p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 text-black dark:text-gray-200 p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-400">
          Week 7 — Shopping List
        </h1>

        {/* Form to add new grocery item */}
        <NewGroceryItem onAddItem={handleAddItem} />

        {/* Sorting buttons */}
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

        {/* Grocery items list */}
        <GroceryItemList items={sortedItems} />

        {/* Wireframe section */}
        <div className="mt-8 p-4 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded">
          <h2 className="text-xl font-semibold mb-2">Wireframe</h2>
          <pre className="text-sm text-gray-700 dark:text-gray-300">
+---------------------------------+
| Grocery List                    |
+---------------------------------+
| [Item Name] [Qty] [Category] +  |
+---------------------------------+
| Milk          1     Dairy       |
| Bread         2     Bakery      |
| Bananas       6     Produce     |
+---------------------------------+
          </pre>
        </div>
      </div>
    </main>
  );
}