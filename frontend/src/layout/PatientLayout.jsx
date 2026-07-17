import { Outlet, useLocation } from "react-router-dom";
import TopNavbar from "../navigation/TopNavbar";
import Sidebar from "../navigation/Sidebar";
import BottomNavigation from "../navigation/BottomNavigation";
import { Home, Pill, Stethoscope, Inbox, User } from "lucide-react";

export default function PatientLayout() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/patient", icon: Home, end: true },
    { label: "Pill Box", path: "/patient/pillbox", icon: Pill },
    { label: "Doctors", path: "/patient/doctors", icon: Stethoscope },
    { label: "Requests", path: "/patient/requests", icon: Inbox },
    { label: "Profile", path: "/patient/profile", icon: User },
  ];

  // Derive title from active route
  const getPageTitle = (pathname) => {
    if (pathname === "/patient") return "Today's Schedule";
    if (pathname === "/patient/pillbox") return "Virtual Pill Box";
    if (pathname === "/patient/doctors") return "My Connected Doctors";
    if (pathname === "/patient/requests") return "Connection Requests";
    if (pathname === "/patient/profile") return "My Profile";
    return "Patient Dashboard";
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
