"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const { user } = useUserAuth();

  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [loading, setLoading] = useState(true);

  // Load items from Firestore
  const loadItems = async () => {
    try {
      setLoading(true);
      const data = await getItems(user.uid);
      setItems(data);
    } catch (err) {
      console.error("Failed to load items:", err);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    if (!user) return; 
    loadItems();
  }, [user]);

  
  if (!user) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
        <p>You must be logged in to view this page.</p>
      </main>
    );
  }

  const handleAddItem = async (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity: Number(quantity),
      category,
    };

    try {
      const id = await addItem(user.uid, newItem);
      setItems((prev) => [...prev, { id, ...newItem }]);
      setName("");
      setQuantity(1);
      setCategory("produce");
    } catch (err) {
      console.error("Failed to add item:", err);
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Week 10 – Shopping List</h1>

      {loading ? (
        <p>Loading items...</p>
      ) : (
        <>
          <ul className="mb-6 space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                {item.name} – {item.quantity} ({item.category})
              </li>
            ))}
          </ul>

          <form onSubmit={handleAddItem} className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border px-2 py-1 w-64"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border px-2 py-1 w-24"
                min="1"
                max="100"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border px-2 py-1 w-64 rounded bg-white dark:bg-black text-black dark:text-white"
              >
                <option value="produce">produce</option>
                <option value="dairy">dairy</option>
                <option value="bakery">bakery</option>
                <option value="meat">meat</option>
                <option value="frozen foods">frozen foods</option>
                <option value="canned goods">canned goods</option>
                <option value="dry goods">dry goods</option>
                <option value="beverages">beverages</option>
                <option value="snacks">snacks</option>
                <option value="household">household</option>
                <option value="other">other</option>
              </select>
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Add Item
            </button>
          </form>
        </>
      )}
    </main>
  );
}