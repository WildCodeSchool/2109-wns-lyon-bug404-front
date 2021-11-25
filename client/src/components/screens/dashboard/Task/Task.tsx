import React from "react";
import { Typography, Grid, Button, Paper, Avatar } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Calender from "../../../layout/Calender";
import user1 from "../../../../assets/user1.png";
import user2 from "../../../../assets/user2.png";
import user3 from "../../../../assets/user3.png";
import Progress from "../../../layout/Progress";
import { format } from "date-fns";

const tasks = [
	{
		assignedTo: user1,
		title: "Twitter logo research",
		progress: 50,
		color: "#FD8324",
	},
	{
		assignedTo: user2,
		title: "Finelize backlog for tesla",
		progress: 80,
		color: "#5FC199",
	},
	{
		assignedTo: user3,
		title: "Test wild app before delivery",
		progress: 30,
		color: "#ED455D",
	},
];

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
					<Grid item xs={7}></Grid>
					<Grid item xs={2} container>
						<Button
							variant='contained'
							startIcon={<AddIcon />}
							sx={{
								backgroundColor: "#FC5B56",
								color: "#fff",
								textTransform: "none",
								width: "80%",
								height: "2.5rem",
							}}>
							Add task
						</Button>
					</Grid>
				</Grid>
				{/* second line  */}
				<Grid container sx={{ marginBottom: "1rem" }}>
					<ToggleButtonGroup exclusive sx={{ borderRadius: "15px" }}>
						<ToggleButton value='list' aria-label='list'>
							<ViewListIcon />
						</ToggleButton>
						<ToggleButton value='module' aria-label='module'>
							<ViewModuleIcon />
						</ToggleButton>
					</ToggleButtonGroup>
				</Grid>
				{/* Third line */}
				<Grid container>
					{/* left */}
					<Grid xs={8}>
						{tasks.map((task) => (
							<Paper
								elevation={1}
								sx={{
									backgroundColor: "#F3F3F3",
									padding: "1rem",
									borderRadius: "15px",
									marginBottom: "1rem",
									cursor: "pointer",
									marginTop: "1rem",
								}}>
								<Grid
									container
									direction='row'
									justifyContent='center'
									alignItems='center'>
									<Grid item xs={1}>
										<Avatar alt='User' src={task.assignedTo} />
									</Grid>
									<Grid item xs={5}>
										<Typography variant='subtitle1' component='div'>
											{task.title}
										</Typography>
									</Grid>
									<Grid item xs={4}>
										<Progress color={task.color} progress={task.progress} />
									</Grid>
									<Grid item xs={2} container direction='row'>
										<Typography
											variant='subtitle2'
											component='div'
											sx={{ marginLeft: "1rem", fontWeight: 600 }}>
											{format(new Date(), "dd")}
										</Typography>
										<Typography
											variant='subtitle2'
											component='div'
											sx={{ marginLeft: ".25rem", fontWeight: 600 }}>
											{format(new Date(), "MMMM").substring(0, 3)}
										</Typography>
									</Grid>
								</Grid>
							</Paper>
						))}
					</Grid>
					{/* right */}
					<Grid xs={4}>
						<Calender />
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Task;
