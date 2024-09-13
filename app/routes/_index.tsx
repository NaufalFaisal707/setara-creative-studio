import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Setara Creative Studios" },
		{ name: "description", content: "Welcome to Setara Creative Studios!" },
	];
};

export default function Index() {
	return (
		<div>
			<h1>Welcome to dj Remix indo full bass</h1>
		</div>
	);
}
