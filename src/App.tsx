import { Route, Routes } from "react-router-dom";
import "./App.css";
import AuthForm from "./components/AuthForm";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<Routes>
				{/* Client */}
				<Route index element={<Home />} />
				<Route path="/register" element={<AuthForm />} />
				<Route path="/login" element={<AuthForm isLogin />} />

				{/* Admin */}
				<Route path="/admin" element={<Dashboard />} />
				{/* <Route path="/admin/product-add" element={<ProductForm />} />
				<Route path="/admin/product-edit/:id" element={<ProductForm />} /> */}
			</Routes>
		</>
	);
}

export default App;
