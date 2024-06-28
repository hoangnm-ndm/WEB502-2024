import { Product } from "../interfaces/Product";

interface Props {
	products: Product[];
}

const Admin = ({ products }: Props) => {
	return (
		<>
			<h1>Hello</h1>
			<table className="table table-bordered table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{products.map((item) => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>
								<button className="btn btn-danger">Remove</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Admin;
