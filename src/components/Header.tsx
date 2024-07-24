import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	// const {state} = useContext(CartContext)
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
				{/* <button className="btn btn-warning">Gio hang {state.cart.products.length}</button> */}
			</ul>
		</header>
	);
};

export default Header;
