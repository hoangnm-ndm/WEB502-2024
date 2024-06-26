import "./App.css";
import { Product } from "./interfaces/Product";
import Admin from "./pages/Admin";

const products: Product[] = [
	{ id: 1, title: "iphone 15", price: 1000 },
	{ id: 2, title: "iphone 15", price: 1000 },
	{ id: 3, title: "iphone 15", price: 1000 },
];

function App() {
	return (
		<>
			<Admin products={products} />
		</>
	);
}

export default App;
