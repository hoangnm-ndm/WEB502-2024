import "./App.css";

interface Product {
	id?: number;
	name: string;
	price: number;
	description?: string;
}

const product1: Product = {
	name: "iphone 11",
	price: 400,
	description: "mo ta chiec iphone",
};

function App() {
	return (
		<>
			<p>
				{product1.name} - {product1.price}
			</p>
		</>
	);
}

export default App;
