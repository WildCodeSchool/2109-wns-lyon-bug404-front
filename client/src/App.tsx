import { BrowserRouter, Route, Routes } from "react-router-dom";
//styles
import "./App.css";

// pages & components
import Dashboard from "./pages/dashboard/Dashboard";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/login/Login";
import { Redirect } from "./pages/signup/Redirect";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/redirect" element={<Redirect />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
