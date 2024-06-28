import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./interfaces/Product";

function App() {
	const [products, setProducts] = useState<Product[]>([]);
	// viet logic de lay du lieu

	// Promise cần thời gian để trả về.
	useEffect(() => {
		fetch("http://localhost:3000/products")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setProducts(data);
			})
			.catch((error) => console.log(error));
	}, []);

	// state = trạng thái

	return (
		<>
			<table className="table table-bordered table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Price</th>
						<th>Description</th>
						<th>Thumbnail</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{
						// mapping du lieu vao giao dien
						products.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.title}</td>
								<td>{item.price}</td>
								<td>{item.description}</td>
								<td>
									<img src={item.thumbnail} alt={item.title} width={100} />
								</td>
								<td>
									<button className="btn btn-warning">Edit</button>
									<button className="btn btn-danger">Remove</button>
								</td>
							</tr>
						))
					}
				</tbody>
			</table>
		</>
	);
}

export default App;
