import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, onDeleteItem, onCheckBox, onClearList }) {
	const [sortby, setSortby] = useState("Des");
	let sort;
	if (sortby === "Input") {
		sort = items;
	}

	if (sortby === "Des") {
		sort = items.slice().sort((a, b) => a.des.localeCompare(b.des));
	}
	if (sortby === "Packed") {
		sort = items
			.slice()
			.sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
	}
	return (
		<div className="h-5/6 border-b border-solid border-slate-400 border-opacity-30 flex flex-col gap-y-2 pb-5 items-center">
			<ul className="w-full h-full p-7 flex flex-row flex-wrap justify-center text-center gap-3 font-semibold text-Dblu">
				{sort.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onCheckBox={onCheckBox}
					/>
				))}
			</ul>
			<div className="flex flex-row gap-x-3">
				<select
					onChange={(e) => setSortby(e.target.value)}
					value={sortby}
					className="select w-full max-w-xs select-sm">
					<option value="Input">Sort by Input order</option>
					<option value="Des">Sort by Description</option>
					<option value="Packed">Sort by Packed status</option>
				</select>
				<button
					className="btn btn-sm"
					onClick={onClearList}>
					Clear list
				</button>
			</div>
		</div>
	);
}
