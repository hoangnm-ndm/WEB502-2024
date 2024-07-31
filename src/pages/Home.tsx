import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import { Product } from "../interfaces/Product";
import { Cart } from "../interfaces/Cart";
import { User } from "../interfaces/User";

const Home = () => {
	const { state } = useContext(ProductContext);
	const [user, setUser] = useState({} as User);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user") || "{}");
		setUser(user);
	}, []);

	const addToCart = (product: Product) => {
		const cart = JSON.parse(localStorage.getItem("cart") || "[]");
		const index = cart.findIndex((item: Cart) => item.id === product.id);
		if (index === -1) {
			// Thêm sản phẩm mới vào giỏ hàng với số lương là 1.
			cart.push({ ...product, quantity: 1 });
		} else {
			// Nếu trong giỏ hàng đã tồn tại sản phẩm định thêm, tăng số lượng lên 1.
			cart[index].quantity += 1;
		}
		localStorage.setItem("cart", JSON.stringify(cart));
	};
	return (
		<div>
			{state.products.map((item) => (
				<div key={item.id}>
					<Link to={`/product-detail/${item.id}`}>{item.title}</Link>
					<p>{item.price}</p>
					<p>{item.description}</p>
					<button
						className="btn btn-danger"
						onClick={user?.email ? () => addToCart(item) : () => alert("Please login to add to cart")}
					>
						Add to card
					</button>
				</div>
			))}
		</div>
	);
};

export default Home;
