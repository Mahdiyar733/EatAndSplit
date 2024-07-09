import { useState } from "react";

export function Form({ onAddItemToList }) {
	const [des, setDes] = useState("");
	const [quantity, setQuantity] = useState(1);

	let loop = [];
	for (let i = 1; i <= 20; i++) {
		loop.push(i);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const newItem = {
			id: new Date().getTime(),
			des,
			quantity,
			isPacked: false,
		};
		onAddItemToList(newItem);
		setDes("");
		setQuantity(1);
	}

	return (
		<>
			<form
				className="border-b border-solid border-slate-400 border-opacity-30 flex flex-row items-center justify-center gap-4"
				onSubmit={handleSubmit}>
				<h3 className="text-center font-semibold py-5 text-Dblu">
					What do you need for your trip? 🤔
				</h3>
				<select
					className="select select-sm focus:outline-none max-w-xs"
					value={quantity}
					onChange={(e) => setQuantity(+e.target.value)}>
					{loop.map((item) => (
						<option
							value={item}
							key={item}>
							{item}
						</option>
					))}
				</select>
				<input
					type="text"
					value={des}
					placeholder="Type your items . . ."
					className="input  input-ghost transtion duration-200 font-konit font-normal transition-all focus:outline-none input-sm w-full max-w-xs"
					onChange={(e) => setDes(e.target.value)}
				/>
				<button className="btn hover:bg-transparent hover:text-Dblu btn-sm hover:border-Dblu">
					Add
				</button>
			</form>
		</>
	);
}
