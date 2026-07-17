import EmptyState from "../../components/common/EmptyState";
import { Pill } from "lucide-react";

export default function PillBox() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-1.5">Virtual Pill Box</h2>
        <p className="text-xs text-[var(--text-muted)]">
          Manage your active medicines here. Prescribed medicines will sync from your connected doctors.
        </p>
      </div>

      <EmptyState
        title="No active medicines"
        description="Your virtual pill box is currently empty. Connect with a doctor to get prescriptions."
        icon={Pill}
      />
    </div>
  );
}
