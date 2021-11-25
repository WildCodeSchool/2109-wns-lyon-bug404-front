import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./components/screens/main/Dashboard";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			{/* <Dashboard /> */}
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();
