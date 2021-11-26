import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Grid, Avatar, Button } from "@mui/material";
import Header from "./Header";
import landinBg from "../../../assets/landingBg.png";
import landingImg from "../../../assets/landingImg.png";

const LandingPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<Grid
				sx={{
					backgroundImage: `url(${landinBg})`,
					width: "100vw",
					height: "100vh",
					backgroundSize: "100%",
					backgroundPosition: "center",
					padding: "0",
					margin: "0",
				}}>
				<Header></Header>
				<Grid container sx={{ height: "70vh" }}>
					<Grid
						item
						xs={7}
						container
						alignItems='center'
						sx={{
							paddingLeft: "4rem",
							marginTop: "5rem",
							height: "50%",
						}}>
						<Grid item xs={9}>
							<Typography
								variant='h1'
								component='h1'
								sx={{ fontSize: "4rem", fontWeight: 600, marginTop: "5rem" }}>
								Simplify work and get more done.
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<Typography
								variant='body2'
								component='div'
								sx={{
									fontSize: "1.2rem",
									color: "#6D7D8B",
								}}>
								Plan, track, and manage any type of work with project management
								that flexes to your team's needs.
							</Typography>
						</Grid>

						<Grid
							item
							xs={5}
							sx={{ marginTop: "1rem" }}
							container
							direction='row'
							justifyContent='space-between'
							alignItems='center'>
							<Button
								id='get-started'
								variant='contained'
								sx={{
									backgroundColor: "#E0F2F1",
									color: "#0C858B",
									borderRadius: "10px",

									width: "9rem",
									"&:hover": {
										color: "#fff",
									},
								}}
								onClick={() => {
									navigate("/dashboard");
								}}>
								Get started
							</Button>

							<Button
								variant='contained'
								sx={{
									backgroundColor: "#FC5B56",
									color: "#fff",
									borderRadius: "10px",
									width: "9rem",
									"&:hover": {
										color: "#fff",
									},
								}}>
								Learn more
							</Button>
						</Grid>
					</Grid>
					<Grid item xs={4} sx={{ paddingTop: "2rem" }}>
						<Avatar
							variant='square'
							src={landingImg}
							sx={{ height: "100%", width: "100%" }}></Avatar>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default LandingPage;
