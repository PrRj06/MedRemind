import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";

// Layouts
import AppLayout from "./layout/AppLayout.jsx";
import DoctorLayout from "./layout/DoctorLayout.jsx";
import PatientLayout from "./layout/PatientLayout.jsx";

// Pages
import DoctorHome from "./pages/doctor/Home.jsx";
import Patients from "./pages/doctor/Patients.jsx";
import DoctorProfile from "./pages/doctor/Profile.jsx";

import PatientHome from "./pages/patient/Home.jsx";
import PillBox from "./pages/patient/PillBox.jsx";
import Doctors from "./pages/patient/Doctors.jsx";
import Requests from "./pages/patient/Requests.jsx";
import PatientProfile from "./pages/patient/Profile.jsx";

export default function App() {
  return (
    <Routes>
      {/* Unauthenticated Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Authenticated Dashboard Routes */}
      <Route element={<AppLayout />}>
        {/* Patient Dashboard Scope */}
        <Route
          path="/patient"
          element={
            <ProtectedRoute allowedRoles={["patient"]}>
              <PatientLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<PatientHome />} />
          <Route path="pillbox" element={<PillBox />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="requests" element={<Requests />} />
          <Route path="profile" element={<PatientProfile />} />
        </Route>

        {/* Doctor Dashboard Scope */}
        <Route
          path="/doctor"
          element={
            <ProtectedRoute allowedRoles={["doctor"]}>
              <DoctorLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DoctorHome />} />
          <Route path="patients" element={<Patients />} />
          <Route path="profile" element={<DoctorProfile />} />
        </Route>
      </Route>

      {/* Wildcard redirects */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}