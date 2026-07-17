import { useMemo } from "react";
import EmptyState from "./EmptyState";
import PatientCard from "./PatientCard";
import { Users } from "lucide-react";

export default function PatientList({ patients = [] }) {
  if (!patients || patients.length === 0) {
    return (
      <EmptyState
        icon={Users}
        title="No patients connected"
        description="When you connect with patients, they will appear here. Currently, the backend does not support patient connections."
      />
    );
  }

  // Build a stable key for each patient: prefer existing id fields, otherwise
  // generate a UUID once per render for each patient object using useMemo.
  const patientsWithKeys = useMemo(
    () =>
      patients.map((p) => ({
        __uid:
          p.id || p._id || p.userId || (typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2)),
        patient: p,
      })),
    [patients]
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {patientsWithKeys.map(({ __uid, patient }) => (
        <PatientCard key={__uid} patient={patient} />
      ))}
    </div>
  );
}
