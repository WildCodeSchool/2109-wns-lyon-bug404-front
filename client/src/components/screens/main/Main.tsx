import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import SideBar from "../../layout/SideBar";

const Main = () => {
	return (
		<>
			<Grid container direction='row'>
				<Grid xs={3}>
					<SideBar></SideBar>
				</Grid>
				<Grid
					xs={9}
					sx={{
						bgcolor: "pink",
					}}>
					<Typography variant='h6' component='div' gutterBottom>
						Right section
					</Typography>
				</Grid>
			</Grid>
			{/* <h1>Taskhub/ main</h1>
			<Link to='/landing-page'>Landing page</Link>
			<br />
			<Link to='/login'>Login</Link> */}
		</>
	);
};

export default Main;
