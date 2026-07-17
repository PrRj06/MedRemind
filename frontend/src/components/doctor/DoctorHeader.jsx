import { Link } from "react-router-dom";
import NotificationButton from "./NotificationButton";
import ProfileAvatar from "./ProfileAvatar";
import { Pill } from "lucide-react";

export default function DoctorHeader() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)]/80 px-4 py-3 backdrop-blur-md">
      <Link to="/doctor" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-white">
          <Pill size={20} />
        </div>
        <span className="text-xl font-bold tracking-tight text-[var(--text)]">
          Med<span className="text-[var(--primary)]">Remind</span>
        </span>
      </Link>
      <div className="flex items-center gap-3">
        <NotificationButton />
        <ProfileAvatar />
      </div>
    </header>
  );
}
