import * as React from "react";

/**
 * Root component
 */
export default function App() {
	const [count, setCount] = React.useState(0);

	return (
		<div className="App">
			<p>Hello Vite + React!</p>
			<button onClick={() => setCount(prevCount => prevCount + 1)} type="button">
				count is: {count}
			</button>
		</div>
	);
}
