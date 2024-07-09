import Svg from "./airplane";

export function Logo() {
	return (
		<div className="flex flex-row items-center justify-center gap-6 border-b border-solid border-slate-400 border-opacity-30 ">
			<h1 className="font-konit font-semibold text-center text-5xl py-10  text-Dblu">
				Fly Away
			</h1>
			<Svg />
		</div>
	);
}
