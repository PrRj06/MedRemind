import NotificationButton from "./NotificationButton";
import ProfileAvatar from "./ProfileAvatar";

// Top bar shown on every patient page: title, notifications, profile avatar.
export default function PatientHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4 py-3">
      <h1 className="text-lg font-semibold text-[var(--text)]">MedRemind</h1>

      <div className="flex items-center gap-3">
        <NotificationButton />
        <ProfileAvatar />
      </div>
    </header>
  );
}
