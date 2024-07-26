import { Link } from "react-router-dom";
import "./Header.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
	const { state } = useContext(CartContext);
	const [total, setTotal] = useState(0);
	console.log(state.products);
	useEffect(() => {
		const total = state.products.reduce((acc, item) => acc + item.quantity, 0);
		setTotal(total);
	}, [state.products]);
	return (
		<header>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/admin">Admin</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>

				<Link to={"/cart"} className="btn btn-warning">
					Xem Gio hang {total}
				</Link>
			</ul>
		</header>
	);
};

export default Header;
