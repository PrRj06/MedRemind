import { Link } from "react-router-dom";
import Card from "../../components/common/Card";
import { Users, FileText, Pill, Bell, Plus, Eye } from "lucide-react";

export default function DoctorHome() {
  const stats = [
    { label: "Connected Patients", value: "2", icon: Users, color: "text-blue-500 bg-blue-500/10" },
    { label: "Active Prescriptions", value: "0", icon: FileText, color: "text-emerald-500 bg-emerald-500/10" },
    { label: "Active Medicines", value: "0", icon: Pill, color: "text-amber-500 bg-amber-500/10" },
    { label: "Pending Requests", value: "0", icon: Bell, color: "text-purple-500 bg-purple-500/10" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome header */}
      <div>
        <h2 className="text-xl font-bold text-[var(--text)]">Welcome back, Doctor</h2>
        <p className="text-xs text-[var(--text-muted)] mt-1">Here is a quick overview of your healthcare tracker today.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <Card.Body className="flex items-center gap-4 p-4">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xxs font-medium text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</p>
                  <p className="text-xl font-bold text-[var(--text)] mt-0.5">{stat.value}</p>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-[var(--text)] uppercase tracking-wider">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card hoverable>
            <Link to="/doctor/patients">
              <Card.Body className="space-y-3">
                <Plus className="h-6 w-6 text-[var(--primary)]" />
                <div>
                  <h4 className="font-semibold text-sm text-[var(--text)]">Connect Patient</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Search and connect with new patients using their email.</p>
                </div>
              </Card.Body>
            </Link>
          </Card>

          <Card hoverable className="opacity-75">
            <div onClick={() => alert("Creating prescriptions will be available in Phase 3!")}>
              <Card.Body className="space-y-3">
                <FileText className="h-6 w-6 text-emerald-500" />
                <div>
                  <h4 className="font-semibold text-sm text-[var(--text)]">Create Prescription</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Write digital prescriptions and set medicine schedules.</p>
                </div>
              </Card.Body>
            </div>
          </Card>

          <Card hoverable className="opacity-75">
            <div onClick={() => alert("Adding medicines will be available in Phase 3!")}>
              <Card.Body className="space-y-3">
                <Pill className="h-6 w-6 text-amber-500" />
                <div>
                  <h4 className="font-semibold text-sm text-[var(--text)]">Add Medicine</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1">Define medicine databases, categories, and dosage formats.</p>
                </div>
              </Card.Body>
            </div>
          </Card>

          <Card hoverable>
            <Link to="/doctor/patients">
              <Card.Body className="space-y-3">
                <Eye className="h-6 w-6 text-blue-500" />
                <div>
                  <h4 className="font-semibold text-sm text-[var(--text)]">View Patients</h4>
                  <p className="text-xs text-[var(--text-muted)] mt-1">List all active doctor-patient connections and profiles.</p>
                </div>
              </Card.Body>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
