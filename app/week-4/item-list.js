import Item from "./item";
import Items from "./items.json";

export default function ItemList() {
    const categories = [...new Set(Items.map((item) => item.category))];
    return (
        <div>
            {categories.map((cat) => (
            <div key={cat} className="mb-6">
                <h2 className="text-xl font-bold mb-2 capitalize">{cat}</h2>
                <ul>
                    {Items
                        .filter((item) => item.category === cat)
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
            ))}
        </div>
    );
}