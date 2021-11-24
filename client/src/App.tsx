import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/screens/auth/login/LogIn";
import LandingPage from "./components/screens/landingPage/LandingPage";
import Main from "./components/screens/main/Main";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/landing-page' element={<LandingPage />} />
				<Route path='/login' element={<LogIn />} />
			</Routes>
		</div>
	);
}

export default App;
