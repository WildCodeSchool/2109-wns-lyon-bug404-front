import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/screens/auth/login/LogIn";
import LandingPage from "./components/screens/landingPage/LandingPage";

import {
	ThemeProvider,
	StyledEngineProvider,
	createTheme,
} from "@mui/material/styles";
import Dashboard from "./components/screens/main/Dashboard";
import ProjectDetails from "./components/screens/dashboard/Project/ProjectDetails";

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
		fontFamily: "Barlow",
		fontWeightLight: 200,
		fontWeightRegular: 400,
		fontWeightMedium: 600,
		fontWeightBold: 900,
		button: {
			textTransform: "none",
			borderRadius: "15px",
		},
	},
});

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={taskTheme}>
				<Routes>
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/' element={<LandingPage />} />
					<Route path='/login' element={<LogIn />} />
					<Route path='/dashboard/:id' element={<ProjectDetails />} />
				</Routes>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;
