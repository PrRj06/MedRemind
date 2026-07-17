import { PackageOpen } from "lucide-react";
import EmptyState from "../../components/patient/EmptyState";
import MedicineCard from "../../components/patient/MedicineCard";

// There is no Medicine module yet, so this list is always empty for now.
// When medicines exist, fetch them here and pass them into the map below -
// the layout is already built to handle a full list of MedicineCards.
const activeMedicines = [];

export default function PatientPillBox() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-semibold text-[var(--text)]">Pill Box</h1>

      {activeMedicines.length === 0 ? (
        <EmptyState
          icon={PackageOpen}
          title="No active medicines."
          description="Medicines your doctor prescribes will appear here."
        />
      ) : (
        <div className="flex flex-col gap-2">
          {activeMedicines.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))}
        </div>
      )}
    </div>
  );
}
