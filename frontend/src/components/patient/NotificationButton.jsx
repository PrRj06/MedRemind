import { Bell } from "lucide-react";

// The Notification Page does not exist yet, so this button
// just lets the user know it's coming soon instead of navigating anywhere.
export default function NotificationButton() {
  const handleClick = () => {
    alert("Notifications are coming soon.");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Notifications"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:bg-[var(--surface-strong)]"
    >
      <Bell size={17} />
    </button>
  );
}
