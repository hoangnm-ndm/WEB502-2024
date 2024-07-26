import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
	const { state } = useContext(CartContext);
	console.log(state.products);
	const total = state.products.reduce((acc, item) => acc + item.quantity, 0);
	return (
		<div>
			<h1>Gio hang, Tong san pham: {total}</h1>

			<table className="table table-striped table-bordered">
				<thead>
					<tr>
						<th>Ten san pham</th>
						<th>Gia</th>
						<th>So luong</th>
						<th>Thanh tien</th>
					</tr>
				</thead>
				<tbody>
					{state.products.map((item) => (
						<tr>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.quantity}</td>
							<td>{item.price * item.quantity}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Cart;
