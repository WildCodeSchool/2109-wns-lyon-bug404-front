import { BrowserRouter, Route, Routes } from "react-router-dom";
//styles
import "./App.css";

// pages & components
import Dashboard from "./pages/dashboard/Dashboard";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/login/Login";
import { ProjectDetails } from "./pages/project/ProjectDetails";
import { Projects } from "./pages/project/Projects";
import { Redirect } from "./pages/signup/Redirect";
import { Confirm } from "./pages/signup/Confirm";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container w-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/redirect" element={<Redirect />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/user/confirm/:token" element={<Confirm />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
