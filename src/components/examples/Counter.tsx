"use client";

import { useCounterStore } from "@/stores/atoms";

export default function Counter() {
	const { count, increment, decrement, reset } = useCounterStore();

	return (
		<div className="flex flex-col items-center gap-4 p-6 border rounded-lg bg-white shadow-sm">
			<h2 className="text-2xl font-bold text-gray-800">Counter Example</h2>
			<div className="text-4xl font-mono text-blue-600">{count}</div>
			<div className="flex gap-2">
				<button
					type="button"
					onClick={increment}
					className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
				>
					Increment
				</button>
				<button
					type="button"
					onClick={decrement}
					className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
				>
					Decrement
				</button>
				<button
					type="button"
					onClick={reset}
					className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
				>
					Reset
				</button>
			</div>
		</div>
	);
}
