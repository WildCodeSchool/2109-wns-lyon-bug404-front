import React, { MouseEventHandler } from "react";
import { Grid, Drawer, Paper, Typography, Avatar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Sidelinks from "../Sidelinks/Sidelinks";
import Searchbar from "../Searchbar/Searchbar";
import SidebarLogo from "../SidebarLogo/SidebarLogo";
import logo from "../../../assets/profile-img.png";

const Sidebar = ({
	open,
	toggleDrawer,
}: {
	open: boolean;
	toggleDrawer: MouseEventHandler;
}) => {
	const links = {
		up: [
			{ name: "Home", icon: "home" },
			{ name: "Calendar", icon: "today" },
			{ name: "Projects", icon: "business_center" },
			{ name: "Progress", icon: "network_cell" },
			{ name: "Goals", icon: "mode_standby" },
		],
		down: [
			{ name: "Notification", icon: "notifications" },
			{ name: "Settings", icon: "settings" },
			{ name: "Log out", icon: "logout" },
		],
	};
	return (
		<>
			<Drawer variant='permanent' open={open} sx={{}}>
				<Toolbar
					sx={{
						display: "flex",
						alignItems: "flex-start",
						justifyContent: "flex-end",
						px: [0],
						backgroundColor: "#0B1926",
						height: "100vh",
						color: "white",
						fontFamily: "Mulish, sans-serif",
					}}>
					<Grid
						container
						direction='column'
						justifyContent='space-between'
						sx={{ height: "100%" }}>
						<Grid sx={{ padding: "0.5rem" }}>
							<SidebarLogo />
							<Searchbar />
							<List>
								{links.up.map((link) => (
									<Sidelinks link={link.name} icon={link.icon} />
								))}
							</List>
						</Grid>
						<Grid>
							<List>
								{links.down.map((link) => (
									<Sidelinks link={link.name} icon={link.icon} />
								))}
							</List>
							<Grid
								container
								direction='row'
								alignItems='center'
								sx={{
									backgroundColor: "white",
									padding: "1.5rem",
									fontFamily: "Mulish, sans-serif",
								}}>
								<Avatar src={logo} />
								<Typography
									sx={{
										color: "black",
										fontSize: "14px",
										fontWeight: "bold",
										paddingLeft: ".5rem",
									}}>
									Aurélien Leygues
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</Drawer>
		</>
	);
};

export default Sidebar;
