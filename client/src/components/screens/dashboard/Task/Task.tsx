import React from "react";
import { Typography, Grid, Button } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AddIcon from "@mui/icons-material/Add";

const Task = () => {
	return (
		<>
			<Grid container direction='column' sx={{ padding: "1rem" }}>
				{/* first line */}
				<Grid container direction='row'>
					<Grid
						item
						xs={3}
						container
						direction='row'
						justifyContent='flex-start'
						alignItems='center'>
						<AssignmentTurnedInIcon sx={{ color: "#FC5B56" }} />
						<Typography
							variant='h6'
							component='div'
							gutterBottom
							sx={{ color: "#FC5B56", paddingTop: ".5rem" }}>
							Task in progress
						</Typography>
					</Grid>
					<Grid item xs={6}></Grid>
					<Grid item xs={3}>
						<Button
							variant='contained'
							startIcon={<AddIcon />}
							sx={{ backgroundColor: "#FC5B56", color: "#fff" }}>
							Add task
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Task;
