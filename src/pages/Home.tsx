import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
	const { products } = useContext(ProductContext);
	console.log(products);
	return (
		<div>
			{products.map((item) => (
				<div key={item.id}>
					<h2>{item.title}</h2>
					<p>{item.price}</p>
				</div>
			))}
		</div>
	);
};

export default Home;
