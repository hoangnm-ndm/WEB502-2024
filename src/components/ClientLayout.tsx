import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
	return (
		<div>
			<Header />
			<main id="container">
				<Outlet />
			</main>
		</div>
	);
};

export default ClientLayout;
