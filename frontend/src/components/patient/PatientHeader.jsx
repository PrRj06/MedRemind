import { Link } from "react-router-dom";
import NotificationButton from "./NotificationButton";
import ProfileAvatar from "./ProfileAvatar";
import { LogOut } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

// Top bar shown on every patient page: title, notifications, profile avatar.
export default function PatientHeader() {
  const { logout } = useAuth();

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
      <Link to="/patient" className="text-lg font-bold tracking-tight text-[var(--text)] hover:opacity-90">
        Med<span className="text-[var(--primary)]">Remind</span>
      </Link>

      <div className="flex items-center gap-3">
        <NotificationButton />
        <ProfileAvatar />
        <button
          onClick={logout}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-muted)] hover:text-[var(--danger)] hover:bg-red-500/10 transition-colors cursor-pointer"
          aria-label="Logout"
          title="Logout"
        >
          <LogOut size={17} />
        </button>
      </div>
    </header>
  );
}
