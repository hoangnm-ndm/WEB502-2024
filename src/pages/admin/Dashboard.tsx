import { Link } from "react-router-dom";
import { Product } from "../../interfaces/Product";

interface Props {
	products: Product[];
	handleRemove: (id: number) => void;
}

const Dashboard = ({ products, handleRemove }: Props) => {
	return (
		<>
			<h1>Hello</h1>
			<Link className="btn btn-success" to={`/admin/product-add`}>
				Add new product
			</Link>
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
								<button className="btn btn-danger" onClick={() => handleRemove(Number(item.id))}>
									Remove
								</button>
								<Link to={`/admin/product-edit/${item.id}`} className="btn btn-warning">
									Update
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Dashboard;
