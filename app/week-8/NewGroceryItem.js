"use client";
import { useState } from "react";

export default function NewGroceryItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Item Name */}
      <div>
        <label className="font-semibold">Item Name</label>
        <input
          type="text"
          placeholder="e.g., milk, 4 L 🥛"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border p-2 rounded w-full mt-1"
        />
      </div>

      {/* Quantity */}
      <div>
        <label className="font-semibold">Quantity (1–20)</label>

        {/* Current quantity text */}
        <p className="text-md text-gray-800 dark:text-gray-200 mt-1">Current: {quantity}</p>

        <div className="flex items-center gap-3 mt-1">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 rounded bg-gray-300 text-black dark:bg-gray-700 dark:text-white"
          >
            -
          </button>

          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(20, q + 1))}
            className="px-3 py-1 rounded bg-gray-300 text-black dark:bg-gray-700 dark:text-white"
          >
            +
          </button>
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="font-semibold text-gray-800 dark:text-gray-200">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="
            border 
            p-2 
            rounded 
            w-full 
            mt-1
            bg-white 
            text-gray-800 
            dark:bg-gray-800 
            dark:text-gray-200 
            dark:border-gray-600
          "
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen</option>
        </select>
      </div>

      {/* Add Item Button */}
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded text-sm dark:bg-green-600">Add Item</button>
    </form>
  );
}