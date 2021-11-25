import React from "react";
import { Typography, Grid, Avatar, Link, Button } from "@mui/material";
import logo from "../../../assets/logo.png";

const Header = () => {
	return (
		<>
			<Grid container sx={{ width: "100vw", padding: "1rem" }}>
				<Grid item xs={3.5}>
					<Link href='/'>
						<Avatar
							variant='square'
							src={logo}
							sx={{ height: "50px", width: "200px" }}></Avatar>
					</Link>
				</Grid>
				<Grid item xs={5.5}></Grid>
				<Grid
					item
					xs={2.5}
					container
					direction='row'
					justifyContent='space-around'
					alignItems='center'>
					<Button
						variant='contained'
						sx={{
							backgroundColor: "#E0F2F1",
							color: "#0C858B",
							borderRadius: "10px",
							width: "6rem",
						}}>
						Pricing
					</Button>
					<Button
						variant='contained'
						sx={{
							backgroundColor: "#E0F2F1",
							color: "#0C858B",
							borderRadius: "10px",
							width: "6rem",
						}}>
						About us
					</Button>
					<Button
						variant='contained'
						sx={{
							backgroundColor: "#FC5B56",
							color: "#fff",
							borderRadius: "10px",
							width: "6rem",
						}}>
						Connect
					</Button>
				</Grid>
				<Grid item xs={0.5}></Grid>
			</Grid>
		</>
	);
};

export default Header;
