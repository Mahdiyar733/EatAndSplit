export function Item({ item, onDeleteItem, onCheckBox }) {
	return (
		<li
			key={item.id}
			className="flex-1 min-w-80 min-h-12 flex flex-row justify-center items-center gap-x-2 font-konit font-normal bg-gray-400 bg-opacity-20 rounded-lg">
			<button
				className="bg-red-500 border border-solid border-red-800 flex items-center justify-center rounded-lg w-5 h-5 hover:bg-red-300 transition-all duration-200"
				onClick={() => onDeleteItem(item.id)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 text-white w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
			<input
				type="checkbox"
				className="checkbox checkbox-sm border-Dblu"
				onClick={() => onCheckBox(item.id)}
				value={item.isPacked}
			/>
			<span className={item.isPacked ? "line-through opacity-60" : ""}>
				{item.quantity} {item.des}
			</span>
		</li>
	);
}
