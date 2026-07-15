import { useState } from "react";
import DoctorDashboard from "./pages/DoctorDashboard";
import Login from "./pages/login";
import PatientDashboard from "./pages/PatientDashboard";
import Signup from "./pages/Signup";

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

  if (view === "doctor-dashboard") {
    return <DoctorDashboard onLogout={handleLogout} />;
  }

  if (view === "patient-dashboard") {
    return <PatientDashboard onLogout={handleLogout} />;
  }

  return (
    <Login
      onSwitchToSignup={() => setView("signup")}
      onLoginSuccess={handleLoginSuccess}
    />
  );
}

export default App;
