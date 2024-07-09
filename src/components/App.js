import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItemToList(item) {
		item.des.trim()
			? setItems([...items, item])
			: alert("Enter some item name");
	}

	function handleDeleteItem(id) {
		setItems(items.filter((item) => item.id !== id));
	}

	function handleCheckBox(id) {
		setItems(
			items.map((item) =>
				item.id === id ? { ...item, isPacked: !item.isPacked } : item,
			),
		);
	}

	function handleClearList() {
		setItems([]);
	}

	return (
		<div className="flex h-screen flex-col backgrounda overflow-y-auto">
			<Logo />
			<Form onAddItemToList={handleAddItemToList} />
			<PackingList
				items={items}
				onClearList={handleClearList}
				onDeleteItem={handleDeleteItem}
				onCheckBox={handleCheckBox}
			/>
			<Stats items={items} />
		</div>
	);
}
