import { useState, useEffect } from "react";
import SearchPatient from "../../components/connection/SearchPatient";
import PatientCard from "../../components/connection/PatientCard";
import EmptyConnection from "../../components/connection/EmptyConnection";
import Skeleton from "../../components/common/Skeleton";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial mock data load
  useEffect(() => {
    const timer = setTimeout(() => {
      setPatients([
        { id: "p1", name: "Aman Sharma", email: "aman@example.com", age: 24, gender: "Male", status: "accepted" },
        { id: "p2", name: "Riya Patel", email: "riya@example.com", age: 29, gender: "Female", status: "accepted" },
      ]);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleSendRequest = async (newPatient) => {
    // Simulate API request to send connection request
    return new Promise((resolve) => {
      setTimeout(() => {
        setPatients((prev) => [
          ...prev,
          {
            id: newPatient.id,
            name: newPatient.name,
            email: newPatient.email,
            age: newPatient.age,
            gender: newPatient.gender,
            status: "pending",
          },
        ]);
        resolve();
      }, 500);
    });
  };

  const handleDisconnect = (targetPatient) => {
    const confirmed = window.confirm(`Are you sure you want to disconnect from ${targetPatient.name}?`);
    if (confirmed) {
      setPatients((prev) => prev.filter((p) => p.id !== targetPatient.id));
    }
  };

  const connectedPatients = patients.filter((p) => p.status === "accepted");
  const pendingSentPatients = patients.filter((p) => p.status === "pending");

  return (
    <div className="space-y-8">
      {/* Search Section */}
      <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-2">Connect New Patient</h2>
        <p className="text-xs text-[var(--text-muted)] mb-5">
          Enter your patient's exact email address to send them a connection request. Once they accept, they will appear in your connected patients list.
        </p>
        <SearchPatient
          onSendRequest={handleSendRequest}
          existingPatients={patients}
        />
      </section>

      {/* Connected Patients Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-[var(--text)]">
            My Patients ({connectedPatients.length})
          </h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Skeleton.Card />
            <Skeleton.Card />
          </div>
        ) : connectedPatients.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {connectedPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onDisconnect={handleDisconnect}
                status="accepted"
              />
            ))}
          </div>
        ) : (
          <EmptyConnection type="patients" />
        )}
      </section>

      {/* Pending Requests Sent Section */}
      {pendingSentPatients.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-base font-semibold text-[var(--text)]">
            Sent Requests ({pendingSentPatients.length})
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 font-normal opacity-85">
            {pendingSentPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onDisconnect={(p) => setPatients(prev => prev.filter(item => item.id !== p.id))}
                status="pending"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
