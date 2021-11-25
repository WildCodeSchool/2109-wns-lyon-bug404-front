import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import SideBar from "../../layout/SideBar";
import Task from "../dashboard/Task/Task";

const Main = () => {
	return (
		<>
			<Grid container direction='row'>
				<Grid xs={3}>
					<SideBar></SideBar>
				</Grid>
				<Grid container xs={9}>
					{/* right section */}
					<Grid
						xs={12}
						sx={{
							bgcolor: "yellow",
						}}>
						<Typography variant='h6' component='div' gutterBottom>
							header
						</Typography>
					</Grid>
					<Grid
						xs={12}
						sx={{
							bgcolor: "#E1BEE7",
						}}>
						<Typography variant='h6' component='div' gutterBottom>
							project section
						</Typography>
					</Grid>
					<Grid xs={12}>
						<Task></Task>
					</Grid>
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
