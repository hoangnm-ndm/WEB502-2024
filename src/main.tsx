import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// const app = document.getElementById("root");
// ReactDOM.createRoot(app!).render(<h1>Hello</h1>);
