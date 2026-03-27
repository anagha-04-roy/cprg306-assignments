export default function GroceryItem({ item, onSelect }) {
  return (
    <li
      onClick={() => onSelect(item)}
      className="p-4 border rounded-lg bg-white shadow-sm dark:bg-gray-700 dark:border-gray-600 text-black dark:text-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      <p className="text-lg font-semibold">{item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </li>
  );
}