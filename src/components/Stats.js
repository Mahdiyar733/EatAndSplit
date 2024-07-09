export function Stats({ items }) {
	if (!items.length) {
		return (
			<footer className="h-1/6 text-center flex justify-center items-center py-5">
				<em className="text-Dblu font-semibold">
					Start adding item to your list ! 🚀
				</em>
			</footer>
		);
	}

	const numItems = items.length;
	const numPacked = items.filter((item) => item.isPacked).length;
	const percent = Math.round((numPacked / numItems) * 100);

	return (
		<footer className="h-1/6 text-center flex justify-center items-center py-5">
			<em className="text-Dblu font-semibold">
				{percent === 100
					? `You packed all your items, Let's go ! ✈`
					: `You have ${numItems} items in your list, and you already packed
				${numPacked} item (${percent} %)`}
			</em>
		</footer>
	);
}
