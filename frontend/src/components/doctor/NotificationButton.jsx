import { Bell } from "lucide-react";

export default function NotificationButton() {
  const handleClick = () => {
    alert("Notifications coming soon!");
  };

  return (
    <button
      onClick={handleClick}
      className="relative flex h-10 w-10 items-center justify-center rounded-full text-[var(--text-muted)] transition-colors hover:bg-[var(--surface-strong)] hover:text-[var(--text)]"
      aria-label="Notifications"
    >
      <Bell size={20} />
      {/* Indicator for new notifications */}
      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[var(--primary)] ring-2 ring-[var(--surface)]"></span>
    </button>
  );
}
