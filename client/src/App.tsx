import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/screens/auth/login/LogIn";
import LandingPage from "./components/screens/landingPage/LandingPage";
import Main from "./components/screens/main/Main";
import {
	ThemeProvider,
	StyledEngineProvider,
	createTheme,
} from "@mui/material/styles";

const taskTheme = createTheme({
	palette: {
		primary: {
			main: "#129DA4",
		},
		secondary: {
			main: "rgba(0, 0, 0, 0.54)",
		},
		text: {
			primary: "rgba(0, 0, 0, 0.54)",
			secondary: "#129DA4",
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

function App() {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={taskTheme}>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/landing-page' element={<LandingPage />} />
					<Route path='/login' element={<LogIn />} />
				</Routes>
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;
