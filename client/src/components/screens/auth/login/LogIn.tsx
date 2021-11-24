import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
	return (
		<div>
			<h1>Login</h1>
			<Link to='/'>Home</Link> <br />
			<Link to='/login'>Landing page</Link>
		</div>
	);
};

export default LogIn;
