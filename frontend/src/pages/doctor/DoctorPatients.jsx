import { Users } from "lucide-react";
import PatientList from "../../components/doctor/PatientList";

export default function DoctorPatients() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text)]">Patients</h1>
          <p className="mt-2 text-[var(--text-muted)]">
            Manage your connected patients and view their details.
          </p>
        </div>
        <button
          onClick={() => alert("Coming soon!")}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2 font-medium text-white transition-colors hover:bg-[var(--primary-hover)] sm:w-auto"
        >
          <Users size={20} />
          Connect New Patient
        </button>
      </div>

      <div className="mt-6">
        {/* We pass an empty array because backend doesn't support patients yet */}
        <PatientList patients={[]} />
      </div>
    </div>
  );
}
