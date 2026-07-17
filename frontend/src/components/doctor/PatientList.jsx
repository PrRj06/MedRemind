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

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {patients.map((patient, index) => (
        <PatientCard key={index} patient={patient} />
      ))}
    </div>
  );
}
