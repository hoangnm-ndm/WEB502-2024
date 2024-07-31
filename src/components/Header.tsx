import { Link } from "react-router-dom";
import "./Header.scss";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Header = () => {
	const { user, handleLogout } = useContext(AuthContext);
	console.log(user);
	return (
		<header>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				{user?.role === "admin" && (
					<li>
						<Link to="/admin">Admin</Link>
					</li>
				)}
				{user ? (
					<li>
						<button className="btn btn-warning" onClick={handleLogout}>
							Logout - {user.email}
						</button>
					</li>
				) : (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</>
				)}

				{user && (
					<Link to={"/cart"} className="btn btn-warning">
						Xem Gio hang
					</Link>
				)}
			</ul>
		</header>
	);
};

export default Header;
