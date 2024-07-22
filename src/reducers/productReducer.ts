import { Product } from "../interfaces/Product";

type State = {
	products: Product[];
};

type Action =
	| { type: "SET_PRODUCTS"; payload: Product[] }
	| { type: "ADD_PRODUCT"; payload: Product }
	| { type: "UPDATE_PRODUCT"; payload: Product }
	| { type: "DELETE_PRODUCT"; payload: number | string };

const productReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return {
				...state,
				products: action.payload,
			};

		case "ADD_PRODUCT":
			return {
				...state,
				products: [...state.products, action.payload],
			};

		case "UPDATE_PRODUCT":
			return {
				...state,
				products: state.products.map((item) => (item.id === action.payload.id ? action.payload : item)),
			};

		case "DELETE_PRODUCT":
			return {
				...state,
				products: state.products.filter((item) => item.id !== action.payload),
			};

		default:
			return state;
	}
};

export default productReducer;
