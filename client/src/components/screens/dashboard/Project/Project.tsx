import React from "react";
import { Typography, Grid, Button, Paper, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FolderIcon from "@mui/icons-material/Folder";
import AddProject from "./AddProject";

const Project = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
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
						<FolderIcon sx={{ color: "#FC5B56" }} />
						<Typography
							variant='h6'
							component='div'
							gutterBottom
							sx={{ color: "#FC5B56", paddingTop: ".5rem" }}>
							Recent project
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
								height: "2rem",
							}}
							onClick={handleOpen}>
							Add project
						</Button>
						<AddProject open={open} handleClose={handleClose} />
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
			</Grid>
		</>
	);
};

export default Project;
