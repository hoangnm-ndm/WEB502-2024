import { Cart } from "../interfaces/Cart";

const CartPage = () => {
	const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	return (
		<table className="table table-striped table-bordered">
			<thead>
				<tr>
					<th>Title</th>
					<th>Quantity</th>
					<th>Price</th>
					<th>Sumary</th>
				</tr>
			</thead>
			<tbody>
				{cart.map((item: Cart) => (
					<tr key={item.id}>
						<td>{item.title}</td>
						<td>{item.quantity}</td>
						<td>{item.price}</td>
						<td>{item.price * item.quantity}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default CartPage;
