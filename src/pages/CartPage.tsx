const CartPage = () => {
	return (
		<div>
			<h1>Gio hang, Tong san pham: {}</h1>
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
					{/* {products.map((item) => (
						<tr>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>{item.quantity}</td>
							<td>{item.price * item.quantity}</td>
						</tr>
					))} */}
				</tbody>
			</table>
		</div>
	);
};

export default CartPage;
