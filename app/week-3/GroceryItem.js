export default function GroceryItem( { name, quantity, category }) {
    return (
        <li className="border p-4 rounded-md">
            <p className="font-semibold">{name}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p> 
        </li>
    );
}