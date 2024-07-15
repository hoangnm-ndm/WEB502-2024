import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./interfaces/Product";
import instance from "./apis";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import AuthForm from "./components/AuthForm";

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	const nav = useNavigate();

	const fetchProduct = async () => {
		const { data } = await instance.get(`/products`);
		setProducts(data);
	};
	useEffect(() => {
		fetchProduct();
	}, []);

	const handleRemove = async (id: number) => {
		if (confirm("Are you sure?")) {
			await instance.delete(`/products/${id}`);
			setProducts(products.filter((item) => item.id !== id));
		}
	};

	const onSubmitProduct = async (data: Product) => {
		try {
			if (data.id) {
				// logic edit
				await instance.patch(`/products/${data.id}`, data);
			} else {
				// logic add
				await instance.post(`/products`, data);
			}

			fetchProduct();
			nav("/admin");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Routes>
				{/* Client */}
				<Route index element={<Home />} />
				<Route path="/register" element={<AuthForm />} />
				<Route path="/login" element={<AuthForm isLogin />} />

				{/* Admin */}
				<Route path="/admin" element={<Dashboard products={products} handleRemove={handleRemove} />} />
				<Route path="/admin/product-add" element={<ProductForm onSubmitProduct={onSubmitProduct} />} />
				<Route path="/admin/product-edit/:id" element={<ProductForm onSubmitProduct={onSubmitProduct} />} />
			</Routes>
		</>
	);
}

export default App;
