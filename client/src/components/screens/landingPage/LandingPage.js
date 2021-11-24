import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div>
			<h1>Landing page</h1>
			<Link to='/'>Home</Link> <br />
			<Link to='/login'>Landing page</Link>
		</div>
	);
};

export default LandingPage;
