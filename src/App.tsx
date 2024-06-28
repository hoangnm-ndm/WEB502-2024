import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./interfaces/Product";
import Admin from "./pages/Admin";
import instance from "./apis";

// extension: Console Ninja
// state =  trang thai, tinh trang

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	// <> -> Khai báo kiểu generic
	useEffect(() => {
		(async () => {
			const { data } = await instance.get(`/products`);
			setProducts(data);
		})();
	}, []);

	const handleRemove = async (id: number) => {
		if (confirm("Are you sure?")) {
			await instance.delete(`/products/${id}`);
			setProducts(products.filter((item) => item.id !== id));
		}
	};
	return (
		<>
			<Admin products={products} handleRemove={handleRemove} />
		</>
	);
}

export default App;
