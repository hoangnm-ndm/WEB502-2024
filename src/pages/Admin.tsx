import { Product } from "../interfaces/Product";

interface Props {
	products: Product[];
}

const Admin = ({ products }: Props) => {
	return (
		<>
			<h1>Hello</h1>
			{products.map((item) => (
				<div className="product-card" key={item.id}>
					<h2>{item.title}</h2>
					<p>Gia: {item.price}</p>
				</div>
			))}
		</>
	);
};

export default Admin;
