import { BrowserRouter, Route, Routes } from 'react-router-dom';
//styles
import './App.css';

// pages & components
import Dashboard from './pages/dashboard/Dashboard';
import LandingPage from './pages/landingpage/LandingPage';
import Login from './pages/login/Login';
import { ProjectDetails } from './pages/project/ProjectDetails';
import { Projects } from './pages/project/Projects';
import { Redirect } from './pages/signup/Redirect';
import { Confirm } from './pages/signup/Confirm';
import Signup from './pages/signup/Signup';
import { ForgotPassword } from './pages/forgotPassword/ForgotPassword';
import ResetPassword from './pages/forgotPassword/ResetPassword';
import { AuthProvider } from './hooks/auth.hook';
import Test from './pages/Test';

function App() {
  return (
    <AuthProvider>
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
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route
                path="/user/reset-password/:token"
                element={<ResetPassword />}
              />
              <Route path="/test" element={<Test />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
