import { useContext } from "react";
import { CartContext, CartContextType } from "../contexts/CartContext";

const Cart = () => {
	const { cart } = useContext(CartContext) as CartContextType;
	console.log(cart);
	return (
		<table>
			<thead>
				<tr>
					<th>Product</th>
					<th>Quantity</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{cart.map((item) => (
					<tr key={item.productId}>
						<td>{item.productId}</td>
						<td>{item.quantity}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Cart;
