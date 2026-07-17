import { useState, useEffect } from "react";
import SearchPatient from "../../components/connection/SearchPatient";
import PatientCard from "../../components/connection/PatientCard";
import EmptyConnection from "../../components/connection/EmptyConnection";
import Skeleton from "../../components/common/Skeleton";

export default function DoctorPatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

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
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text)]">Patients</h1>
          <p className="mt-1 text-[var(--text-muted)] text-sm">
            Manage your connected patients and view their details.
          </p>
        </div>
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-4 py-2 font-medium text-white transition-colors hover:bg-[var(--primary-hover)] sm:w-auto cursor-pointer"
        >
          {showSearch ? "Hide Search" : "Connect New Patient"}
        </button>
      </div>

      {/* Search Section */}
      {showSearch && (
        <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6 shadow-sm animate-fadeIn">
          <h2 className="text-lg font-semibold text-[var(--text)] mb-2">Connect New Patient</h2>
          <p className="text-xs text-[var(--text-muted)] mb-5">
            Enter your patient's exact email address to send them a connection request. Once they accept, they will appear in your connected patients list.
          </p>
          <SearchPatient
            onSendRequest={handleSendRequest}
            existingPatients={patients}
          />
        </section>
      )}

      {/* Connected Patients Section */}
      <section className="space-y-4">
        <h2 className="text-base font-semibold text-[var(--text)]">
          My Patients ({connectedPatients.length})
        </h2>

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
          <EmptyConnection type="patients" onAction={() => setShowSearch(true)} />
        )}
      </section>

      {/* Pending Requests Sent Section */}
      {pendingSentPatients.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-[var(--border)]">
          <h2 className="text-base font-semibold text-[var(--text)]">
            Sent Requests ({pendingSentPatients.length})
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pendingSentPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onDisconnect={(p) => setPatients((prev) => prev.filter((item) => item.id !== p.id))}
                status="pending"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
