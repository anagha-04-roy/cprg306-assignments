"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Shopping List</h1>

          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} />
      </div>
    </main>
  );
}