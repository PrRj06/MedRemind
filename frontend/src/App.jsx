import { useState } from "react";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import ForgetPass from "./pages/forgetpassword";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";

function App() {
  const [view, setView] = useState("login");

  const handleLoginSuccess = (role) => {
    setView(role === "doctor" ? "doctor-dashboard" : "patient-dashboard");
  };

  const handleLogout = () => {
    setView("login");
  };

  if (view === "signup") {
    return <Signup onSwitchToLogin={() => setView("login")} />;
  }

  if (view === "forgot-password") {
    return <ForgetPass onBackToLogin={() => setView("login")} />;
  }

  if (view === "doctor-dashboard") {
    return <DoctorDashboard onLogout={handleLogout} />;
  }

  if (view === "patient-dashboard") {
    return <PatientDashboard onLogout={handleLogout} />;
  }

  return (
    <Login
      onSwitchToSignup={() => setView("signup")}
      onForgotPassword={() => setView("forgot-password")}
      onLoginSuccess={handleLoginSuccess}
    />
  );
}

export default App;
