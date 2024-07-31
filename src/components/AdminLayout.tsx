import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
	const user = JSON.parse(localStorage.getItem("user") || "{}");
	if (!user || user?.role !== "admin") {
		return <h1>Ban khong co quyen vao trang nay</h1>;
	}
	return (
		<div>
			<h1>Hello admin</h1>
			<div className="row">
				<div className="col-3 sideBar">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/admin">Dashboard</Link>
						</li>
						<li>
							<Link to="/admin">Products</Link>
						</li>
						<li>
							<Link to="/admin">Categories</Link>
						</li>
						<li>
							<Link to="/admin">Dashboard</Link>
						</li>
					</ul>
				</div>
				<div className="col-9 context">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
