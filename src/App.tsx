import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./interfaces/Product";
import instance from "./apis";
import Dashboard from "./pages/admin/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProductForm from "./pages/admin/ProductForm";
import AuthForm from "./pages/AuthForm";
import Header from "./components/Header";

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

	const handleRemove = async (id: number | string) => {
		if (confirm("Are you sure?")) {
			await instance.delete(`/products/${id}`);
			setProducts(products.filter((item) => item.id !== id));
		}
	};

	const onSubmitProduct = async (data: Product) => {
		try {
			if (data.id) {
				// edit
				await instance.patch(`/products/${data.id}`, data);
			} else {
				// add
				await instance.post("/products", data);
			}
			fetchProduct();
			nav("/admin");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<Header />
			<Routes>
				{/* Client */}
				<Route path="/" element={<Home data={products} />} />
				<Route path="/login" element={<AuthForm isLogin />} />
				<Route path="/register" element={<AuthForm />} />

				{/* Admin */}
				<Route path="/admin" element={<Dashboard products={products} handleRemove={handleRemove} />} />
				<Route path="/admin/product-add" element={<ProductForm onSubmitProduct={onSubmitProduct} />} />
				<Route path="/admin/product-edit/:id" element={<ProductForm onSubmitProduct={onSubmitProduct} />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
