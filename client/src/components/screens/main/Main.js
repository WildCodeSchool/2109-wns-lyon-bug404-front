import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
	return (
		<>
			<h1>Taskhub/ main</h1>
			<Link to='/landing-page'>Landing page</Link>
			<br />
			<Link to='/login'>Login</Link>
		</>
	);
};

export default Main;
