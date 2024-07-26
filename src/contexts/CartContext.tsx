import { createContext, useEffect, useState } from "react";
import { Product } from "../interfaces/Product";
import instance from "../apis";

export type CartContextType = {
	cart: { productId: number | string; quantity: number }[];
	addToCart: (product: Product) => void;
	removeFromCart: (id: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cart, setCart] = useState<{ productId: number | string; quantity: number }[]>([]);
	const user = JSON.parse(localStorage.getItem("user") || "{}");
	useEffect(() => {
		(async () => {
			const { data } = await instance.get("/cart");
			console.log(data);
			console.log(user.id);
			setCart(data[0].items);
		})();
	}, []);
	const addToCart = (product: Product) => {};

	const removeFromCart = (id: number) => {};
	return <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
