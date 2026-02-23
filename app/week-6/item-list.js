import Item from "./item";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name"); 

  // Sorted items for name or category
  const sortedItems =
    sortBy !== "group"
      ? [...items].sort((a, b) =>
          sortBy === "name"
            ? a.name.localeCompare(b.name)
            : a.category.localeCompare(b.category)
        )
      : items; 

  // Button styling for active state
  const buttonStyle = (type) =>
    `px-3 py-1 text-black rounded ${
      sortBy === type ? "bg-gray-400 text-white" : "bg-gray-200"
    }`;

  return (
    <div>
      {/* Sorting Buttons */}
      <div className="mb-6 flex gap-2">
        <button onClick={() => setSortBy("name")} className={buttonStyle("name")}>
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={buttonStyle("category")}
        >
          Sort by Category
        </button>
        <button onClick={() => setSortBy("group")} className={buttonStyle("group")}>
          Group by Category
        </button>
      </div>

      {/* Render Items */}
      {sortBy !== "group" ? (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      ) : (
        // Group by Category
        [...new Set(items.map((item) => item.category))]
          .sort() 
          .map((cat) => (
            <div key={cat} className="mb-6">
              <h2 className="text-xl font-bold text-black mb-2 capitalize">{cat}</h2>
              <ul>
                {items
                  .filter((item) => item.category === cat)
                  .sort((a, b) => a.name.localeCompare(b.name)) // sort items alphabetically
                  .map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
              </ul>
            </div>
          ))
      )}
    </div>
  );
}
