import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
	return (
		<div>
			<h1>Hello admin</h1>
			<div className="row">
				<div className="col-3 sideBar">
					<ul>
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
