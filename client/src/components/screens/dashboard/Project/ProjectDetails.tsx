import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import img from "./img.png";
import { Link, useNavigate } from "react-router-dom";
const ProjectDetails = () => {
	const navigate = useNavigate();
	return (
		<Grid container>
			<Typography
				variant='h3'
				component='div'
				gutterBottom
				sx={{ color: "#FC5B56", paddingTop: ".5rem" }}>
				Project details
			</Typography>
			<Button
				onClick={() => {
					navigate(`/dashboard`);
				}}>
				Dashboard
			</Button>
		</Grid>
	);
};

export default ProjectDetails;
