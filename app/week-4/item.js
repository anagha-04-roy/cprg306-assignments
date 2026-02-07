export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white shadow-md rounded-xl p-3 mb-3 max-w-xl">
      <p className="font-semibold text-lg text-blue-900">{name}</p>
      <p className="text-gray-800 text-sm">Quantity: {quantity}</p>
      <p className="text-gray-700 text-xs">Category: {category}</p>
    </li>
  );
}
