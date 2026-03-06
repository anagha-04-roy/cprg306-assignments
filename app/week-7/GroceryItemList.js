import GroceryItem from "./GroceryItem";

export default function GroceryItemList({ items }) {
  return (
    <ul className="space-y-4 mt-6">
      {items.map((item) => (
        <GroceryItem key={item.id} item={item} />
      ))}
    </ul>
  );
}