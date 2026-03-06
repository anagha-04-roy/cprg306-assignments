export default function GroceryItem({ item }) {
  return (
    <li className="p-4 border rounded-lg bg-white shadow-sm dark:bg-gray-700 dark:border-gray-600 text-black dark:text-gray-200">
      <p className="text-lg font-semibold">{item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </li>
  );
}