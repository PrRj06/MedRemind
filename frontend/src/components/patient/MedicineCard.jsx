import { Pill } from "lucide-react";

// Shows one medicine: name, type, purpose and status.
// Dosage timings are intentionally NOT shown here (per Pill Box spec).
export default function MedicineCard({ medicine }) {
  const { name, type, purpose, status } = medicine;

  return (
    <div className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-light)] text-[var(--primary)]">
        <Pill size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[var(--text)]">{name}</p>
        {type && <p className="text-xs text-[var(--text-muted)]">{type}</p>}
        {purpose && (
          <p className="mt-1 text-xs text-[var(--text-muted)]">Purpose: {purpose}</p>
        )}
      </div>

      {status && (
        <span className="shrink-0 rounded-full bg-[var(--success)]/10 px-2.5 py-1 text-[11px] font-medium text-[var(--success)]">
          {status}
        </span>
      )}
    </div>
  );
}