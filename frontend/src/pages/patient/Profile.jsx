import Card from "../../components/common/Card";
import Avatar from "../../components/common/Avatar";
import { Activity, AlertTriangle, PhoneCall } from "lucide-react";

export default function PatientProfile() {
  const patient = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 555-019-2834",
    bloodGroup: "O-Negative",
    allergies: "Penicillin, Peanuts",
    chronicConditions: "Hypertension",
    emergencyContact: {
      name: "Jane Smith",
      relation: "Spouse",
      phone: "+1 555-019-9988",
    },
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <Card>
        <Card.Body className="p-6 flex flex-col sm:flex-row items-center gap-6">
          <Avatar name={patient.name} size="lg" />
          <div className="text-center sm:text-left space-y-1">
            <h2 className="text-xl font-bold text-[var(--text)]">{patient.name}</h2>
            <p className="text-sm text-[var(--text-muted)]">{patient.email}</p>
            <p className="text-xs text-[var(--text-muted)]">{patient.phone}</p>
          </div>
        </Card.Body>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Card.Header>
            <h3 className="text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <Activity className="h-4 w-4 text-[var(--primary)]" /> Medical Information
            </h3>
          </Card.Header>
          <Card.Body className="space-y-3 text-sm">
            <div className="flex justify-between py-1 border-b border-[var(--border)]/50">
              <span className="text-[var(--text-muted)]">Blood Group</span>
              <span className="font-medium">{patient.bloodGroup}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[var(--border)]/50">
              <span className="text-[var(--text-muted)]">Chronic Conditions</span>
              <span className="font-medium">{patient.chronicConditions}</span>
            </div>
            <div className="py-1">
              <span className="text-[var(--text-muted)] flex items-center gap-1 text-red-500 font-semibold mb-1">
                <AlertTriangle className="h-3.5 w-3.5" /> Allergies
              </span>
              <span className="font-medium text-xs">{patient.allergies}</span>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-[var(--primary)]" /> Emergency Contact
            </h3>
          </Card.Header>
          <Card.Body className="space-y-3 text-sm">
            <div className="flex justify-between py-1 border-b border-[var(--border)]/50">
              <span className="text-[var(--text-muted)]">Contact Name</span>
              <span className="font-medium">{patient.emergencyContact.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[var(--border)]/50">
              <span className="text-[var(--text-muted)]">Relationship</span>
              <span className="font-medium">{patient.emergencyContact.relation}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[var(--text-muted)]">Phone</span>
              <span className="font-medium font-mono">{patient.emergencyContact.phone}</span>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
