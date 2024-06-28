import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./interfaces/Product";
import instance from "./apis";
import Dashboard from "./pages/admin/Dashboard";

function App() {
	const [products, setProducts] = useState<Product[]>([]);
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
			<Dashboard products={products} handleRemove={handleRemove} />
		</>
	);
}

export default App;
