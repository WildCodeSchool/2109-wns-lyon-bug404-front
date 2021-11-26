import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Chart from "./Chart/Chart";
import Deposits from "./Deposits/Deposits";
import Orders from "./Orders/Orders";
import Task from "../dashboard/Task/Task";
import Icon from "@mui/material/Icon";
import Project from "../dashboard/Project/Project";
import User from "./User";
import Sidebar from "../../layout/Sidebar/Sidebar";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	"& .MuiDrawer-paper": {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: "border-box",
		...(!open && {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

const taskTheme = createTheme({
	palette: {
		primary: {
			main: "#129DA4",
		},
		secondary: {
			main: "#FC5B56",
		},
		text: {
			primary: "rgba(0, 0, 0, 0.54)",
			secondary: "#FC5B56",
		},
	},
	typography: {
		fontFamily: [
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

function DashboardContent() {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<ThemeProvider theme={taskTheme}>
			<Grid container>
				<Grid item xs={2}>
					<Sidebar open={open} toggleDrawer={toggleDrawer} />
				</Grid>
				<Grid item xs={10} sx={{ padding: "1rem" }}>
					<Grid item xs={12}>
						<Grid container direction='row' justifyContent='space-between'>
							<Grid container item xs={4} direction='row'>
								<Grid>
									<IconButton
										edge='start'
										color='primary'
										aria-label='open drawer'
										onClick={toggleDrawer}
										sx={{
											marginRight: "36px",
											...(open && { display: "none" }),
										}}>
										<MenuIcon />
									</IconButton>
								</Grid>
								<Grid>
									<Typography
										component='h1'
										variant='h6'
										sx={{
											color: "black",
											fontWeight: 700,
											paddingLeft: "1rem",
										}}>
										Home
									</Typography>
								</Grid>
							</Grid>
							<Grid
								container
								direction='row'
								justifyContent='flex-end'
								alignItems='center'
								item
								xs={4}>
								<Grid>
									<IconButton sx={{ color: "black" }}>
										<Badge badgeContent={4} color='secondary'>
											<NotificationsIcon />
										</Badge>
									</IconButton>
								</Grid>
								<Grid>
									<User></User>
								</Grid>
							</Grid>
						</Grid>
					</Grid>

					<Grid
						component='main'
						sx={{
							backgroundColor: "#fff",

							height: "100vh",
						}}>
						<Grid container>
							<Project />
							<Task />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default function Dashboard() {
	return <DashboardContent />;
}
