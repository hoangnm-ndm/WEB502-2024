import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
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
					Xem Gio hang
				</Link>
			</ul>
		</header>
	);
};

export default Header;
