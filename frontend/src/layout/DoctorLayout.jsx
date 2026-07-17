import { Outlet, useLocation } from "react-router-dom";
import TopNavbar from "../navigation/TopNavbar";
import Sidebar from "../navigation/Sidebar";
import BottomNavigation from "../navigation/BottomNavigation";
import { Home, Users, User } from "lucide-react";

export default function DoctorLayout() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/doctor", icon: Home, end: true },
    { label: "Patients", path: "/doctor/patients", icon: Users },
    { label: "Profile", path: "/doctor/profile", icon: User },
  ];

  // Derive title from active route
  const getPageTitle = (pathname) => {
    if (pathname === "/doctor") return "Overview";
    if (pathname === "/doctor/patients") return "Connected Patients";
    if (pathname === "/doctor/profile") return "Professional Profile";
    return "Doctor Dashboard";
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--text)]">
      <TopNavbar title={getPageTitle(location.pathname)} />
      
      <div className="flex flex-1">
        <Sidebar items={navItems} />
        
        <main className="flex-1 p-4 pb-24 md:p-6 md:pb-6 overflow-y-auto max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>

      <BottomNavigation items={navItems} />
    </div>
  );
}
