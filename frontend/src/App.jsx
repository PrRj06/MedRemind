import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import ResetPassword from "./pages/auth/ResetPassword.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";

// Doctor Module
import DoctorLayout from "./components/doctor/DoctorLayout.jsx";
import DoctorDashboard from "./pages/doctor/DoctorDashboard.jsx";
import DoctorPatients from "./pages/doctor/DoctorPatients.jsx";
import DoctorProfilePage from "./pages/doctor/DoctorProfilePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/patient"
        element={
          <ProtectedRoute allowedRoles={["patient"]}>
            <div className="flex min-h-screen items-center justify-center bg-[var(--background)] text-[var(--text)]">
              Patient Dashboard — Phase 2
            </div>
          </ProtectedRoute>
        }
      />

      {/* Doctor Module Routes */}
      <Route
        path="/doctor"
        element={
          <ProtectedRoute allowedRoles={["doctor"]}>
            <DoctorLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DoctorDashboard />} />
        <Route path="patients" element={<DoctorPatients />} />
        <Route path="profile" element={<DoctorProfilePage />} />
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}