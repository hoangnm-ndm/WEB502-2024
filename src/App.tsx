import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./interfaces/Product";
import Admin from "./pages/Admin";

// extension: Console Ninja
// state =  trang thai, tinh trang

function App() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/products")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
				console.log("tai them san pham");
			})
			.catch((error) => console.log(error));
	}, []);
	return (
		<>
			<Admin products={products} />
		</>
	);
}

export default App;
