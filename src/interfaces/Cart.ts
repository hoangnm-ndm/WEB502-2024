import { Product } from "./Product";

export type CartItem = {
	product: Product;
	quantity: number;
};

export interface Cart {
	id?: number | string;
	products: CartItem[];
}

const cartOfHoang = {
	id: 1,
	products: [
		{
			product: {
				id: 1,
				title: "Product 1",
				price: 100,
				thumbnail: "https://via.placeholder.com/150",
				description: "Description 1",
			},
			quantity: 3,
		},
		{
			product: {
				id: 1,
				title: "tivi",
				price: 1000,
				thumbnail: "https://via.placeholder.com/150",
				description: "Description 1",
			},
			quantity: 1,
		},
	],
};
