import { Link } from "react-router-dom";
import Card from "../../components/common/Card";
import EmptyState from "../../components/common/EmptyState";
import { Calendar, Pill, Stethoscope, Inbox } from "lucide-react";

export default function PatientHome() {
  return (
    <div className="space-y-8">
      {/* Welcome header */}
      <div>
        <h2 className="text-xl font-bold text-[var(--text)]">My Health Tracker</h2>
        <p className="text-xs text-[var(--text-muted)] mt-1">Stay on top of your daily dose schedule and prescriptions.</p>
      </div>

      {/* Grid containing Schedule & Pill Box */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Section 1: Today's Schedule */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-[var(--text)] uppercase tracking-wider flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[var(--primary)]" /> Today's Schedule
          </h3>
          <EmptyState
            title="No medicines scheduled for today"
            description="You don't have any daily intakes configured. Connect with a doctor to get prescriptions."
            icon={Calendar}
          />
        </section>

        {/* Section 2: Virtual Pill Box */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold text-[var(--text)] uppercase tracking-wider flex items-center gap-2">
            <Pill className="h-4 w-4 text-emerald-500" /> Virtual Pill Box
          </h3>
          <EmptyState
            title="No active medicines"
            description="Your virtual pill box is currently empty. Active prescriptions will sync here."
            icon={Pill}
          />
        </section>
      </div>

      {/* Quick navigation helpers */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-[var(--text)] uppercase tracking-wider">Quick Navigation</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card hoverable>
            <Link to="/patient/doctors" className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary-light)] text-[var(--primary)]">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[var(--text)]">My Connected Doctors</h4>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">View your medical team and manage shared logs access.</p>
              </div>
            </Link>
          </Card>

          <Card hoverable>
            <Link to="/patient/requests" className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                <Inbox className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[var(--text)]">Connection Requests</h4>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">Accept or decline pending connection requests from doctors.</p>
              </div>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
