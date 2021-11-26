import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import Sidebar from "../../layout/Sidebar/Sidebar";
import Task from "../dashboard/Task/Task";

const Main = () => {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};
	return (
		<>
			<Grid container direction='row'>
				<Grid xs={3}>
					<Sidebar open={open} toggleDrawer={toggleDrawer} />
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
