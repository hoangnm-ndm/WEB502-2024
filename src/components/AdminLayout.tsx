import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
	const user = JSON.parse(localStorage.getItem("user") || "{}");
	if (!user || user.role !== "admin") {
		return (
			<>
				<h1>Ban khong co quyen vao trang nay!</h1>
				<Link to="/">Quay lai trang mua sam!</Link>
			</>
		);
	}
	return (
		<div>
			<header>
				<h1>Hello, {user.email}</h1>
			</header>
			<div className="container">
				<div className="row">
					<div className="col-3">
						<ul className="list-group">
							<li className="list-group-item">
								<Link to="/">Home</Link>
							</li>
							<li className="list-group-item">
								<Link to="/admin">Dashboard</Link>
							</li>
							<li className="list-group-item">
								<Link to="/admin/products">Products</Link>
							</li>
							<li className="list-group-item">
								<Link to="/admin/users">Users</Link>
							</li>
							<li className="list-group-item">
								<Link to="/admin/orders">Orders</Link>
							</li>
						</ul>
					</div>
					<div className="col-9">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
