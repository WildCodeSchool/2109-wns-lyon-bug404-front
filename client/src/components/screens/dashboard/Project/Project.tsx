import { useState } from "react";
import { Typography, Grid, Button, Paper, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import FolderIcon from "@mui/icons-material/Folder";
import { BsListUl } from 'react-icons/bs'
import { CgMenuGridR } from 'react-icons/cg'
import ProjectList from '../../../layout/Projects/ProjectList';
import '../../../layout/Projects/Projects.css';

const projectData = [
    {name: 'Twitter', chipColor: '#EEEFF8', chipFont: '#5B6094', content: 'These project will need a new brand identity where they get recognized', avatar: ['jcvd.jpg'], categories: ['branding']},
    {name: 'Wild school', chipColor: '#EDF7F3', chipFont: '#60C199', content: 'The school needs a new plateform for their remote classes', avatar: ['queen.jpeg'], categories: ['design', 'code']},
    {name: 'Tesla', chipColor: '#E5F7FA', chipFont: '#28A7C7', content: 'The clients wants a news markup for their website', avatar: ['rambo.jpeg'], categories: ['accounting']},
]

const Project = () => {

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
							}}>
							Add project
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
				<Grid container direction='row'>
					<div className="projects">
						{ projectData.map(data => <ProjectList data={data} /> )}
					</div>
				</Grid>
			</Grid>
		</>
	);
};

export default Project;
