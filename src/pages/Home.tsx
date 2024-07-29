import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../interfaces/Product";
import { CartItem } from "../interfaces/Cart";

const Home = () => {
	const { state } = useContext(ProductContext);
	const user = JSON.parse(localStorage.getItem("user") || "{}");
	const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	const addToCart = (product: Product) => {
		const index = cart.findIndex((item: CartItem) => item.product.id === product.id);
		if (index === -1) {
			// Khi sản phẩm chưa có trong giỏ hàng, thì thêm sản phẩm vào giỏ hàng với quantity = 1
			cart.push({ product, quantity: 1 });
		} else {
			// Khi sản phẩm định mua đã có trong giỏ hàng, thì tìm sản phẩm đó và cập nhật quantity lên 1
			cart[index].quantity++;
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		alert("Add to cart successfully");
	};
	return (
		<div>
			{state.products.map((item) => (
				<div key={item.id}>
					<Link to={`/product-detail/${item.id}`}>
						<h1>{item.title}</h1>
					</Link>
					<p>{item.price}</p>
					<button
						onClick={
							user.email
								? () => addToCart(item)
								: () => {
										alert("ban phai dang nhap de thuc hien tinh nang nay!");
								  }
						}
					>
						Add to cart
					</button>
				</div>
			))}
		</div>
	);
};

export default Home;
