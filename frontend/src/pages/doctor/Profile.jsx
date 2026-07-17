import Card from "../../components/common/Card";
import Avatar from "../../components/common/Avatar";
import { Briefcase, Mail } from "lucide-react";

export default function DoctorProfile() {
  const doctor = {
    name: "Dr. Prabhat Ranjan",
    email: "doctor@example.com",
    hospital: "City Heart Hospital",
    department: "Cardiology",
    specialization: "Interventional Cardiologist",
    license: "LIC-8829-10",
    consultationFee: "$120",
    address: "Suite 404, City Heart Tower, Medical District, NY",
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <Card>
        <Card.Body className="p-6 flex flex-col sm:flex-row items-center gap-6">
          <Avatar name={doctor.name} size="lg" />
          <div className="text-center sm:text-left space-y-1">
            <h2 className="text-xl font-bold text-[var(--text)]">{doctor.name}</h2>
            <p className="text-sm text-[var(--primary)] font-medium">{doctor.specialization}</p>
            <p className="text-xs text-[var(--text-muted)]">{doctor.hospital}</p>
          </div>
        </Card.Body>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Card.Header>
            <h3 className="text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-[var(--primary)]" /> Professional Details
            </h3>
          </Card.Header>
          <Card.Body className="space-y-3 text-sm">
            <div className="flex justify-between py-1 border-b border-[var(--border)]/50">
              <span className="text-[var(--text-muted)]">Department</span>
              <span className="font-medium">{doctor.department}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[var(--border)]/50">
              <span className="text-[var(--text-muted)]">License Number</span>
              <span className="font-medium font-mono">{doctor.license}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[var(--text-muted)]">Consultation Fee</span>
              <span className="font-medium">{doctor.consultationFee}</span>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
              <Mail className="h-4 w-4 text-[var(--primary)]" /> Contact & Location
            </h3>
          </Card.Header>
          <Card.Body className="space-y-3 text-sm">
            <div className="flex justify-between py-1 border-b border-[var(--border)]/50">
              <span className="text-[var(--text-muted)]">Email</span>
              <span className="font-medium">{doctor.email}</span>
            </div>
            <div className="py-1">
              <span className="text-[var(--text-muted)] block mb-1">Address</span>
              <span className="font-medium text-xs leading-relaxed">{doctor.address}</span>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
