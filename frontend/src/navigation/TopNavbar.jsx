import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ThemeToggle from "../components/common/ThemeToggle";
import Avatar from "../components/common/Avatar";
import logo from "../assets/logo.png";
import { Bell, LogOut } from "lucide-react";

export default function TopNavbar({ title = "MedRemind" }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const profilePath = user?.role === "doctor" ? "/doctor/profile" : "/patient/profile";

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border)] bg-[var(--smooth-surface)] backdrop-blur-md transition-colors">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left Section: Logo & Page Title */}
        <div className="flex items-center gap-3">
          <Link to={user?.role === "doctor" ? "/doctor" : "/patient"} className="flex items-center gap-2">
            <img src={logo} alt="MedRemind" className="h-8 w-8 rounded-lg object-contain" />
            <span className="hidden font-semibold text-[var(--text)] sm:block">MedRemind</span>
          </Link>
          <div className="h-4 w-px bg-[var(--border)] hidden sm:block" />
          <h1 className="text-sm font-semibold text-[var(--text)] md:text-base capitalize">
            {title}
          </h1>
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => alert("Notifications are coming soon in Phase 3!")}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] transition-colors hover:bg-[var(--surface-hover)] cursor-pointer"
            aria-label="View notifications"
          >
            <Bell size={16} />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[var(--primary)]" />
          </button>

          <ThemeToggle />

          <div className="h-6 w-px bg-[var(--border)]" />

          {/* User Profile & Logout */}
          <div className="flex items-center gap-2">
            <Link to={profilePath} title="View Profile">
              <Avatar name={user?.name || "User"} size="sm" className="hover:opacity-80 transition-opacity" />
            </Link>
            <button
              onClick={handleLogout}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/10 bg-red-500/5 text-[var(--danger)] hover:bg-red-500/10 transition-colors cursor-pointer"
              title="Log Out"
              aria-label="Log out"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
