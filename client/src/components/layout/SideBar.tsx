import React from "react";
import { Typography, Grid } from "@mui/material";

const SideBar = () => {
	return (
		<>
			<Grid>
				<Typography
					variant='body2'
					component='div'
					gutterBottom
					sx={{
						bgcolor: "#129DA4",
					}}>
					SideBar
				</Typography>
			</Grid>
		</>
	);
};

export default SideBar;
