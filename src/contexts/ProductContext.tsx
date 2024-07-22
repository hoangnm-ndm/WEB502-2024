import { createContext, ReactNode, useEffect, useState } from "react";
import instance from "../apis";
import { Product } from "../interfaces/Product";
import { useNavigate } from "react-router-dom";

type ProductContextType = {
	products: Product[];
	handleRemove: (id: number) => void;
	onSubmitProduct: (data: Product) => void;
};
export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
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
		<ProductContext.Provider value={{ products, handleRemove, onSubmitProduct }}>{children}</ProductContext.Provider>
	);
};
