import * as React from "react";
import AllProviders from "~/providers";
import { Heading, Button } from "@chakra-ui/react";

/**
 * Root component
 */
export default function App() {
	const [count, setCount] = React.useState(0);

	return (
		<AllProviders>
			<Heading>Hello Vite React Chakra!</Heading>
			<Button onClick={() => setCount(prevCount => prevCount + 1)}>count is: {count}</Button>
		</AllProviders>
	);
}
