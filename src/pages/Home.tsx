import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Home = () => {
	const { state } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);
	return (
		<div>
			{state.products.map((item) => (
				<div key={item.id}>
					<Link to={`/product-detail/${item.id}`}>
						<h1>{item.title}</h1>
					</Link>
					<p>{item.price}</p>
					<button onClick={() => addToCart(item)}>Add to cart</button>
				</div>
			))}
		</div>
	);
};

export default Home;
