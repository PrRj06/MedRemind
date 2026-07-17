import { useState, useEffect } from "react";
import PendingRequestCard from "../../components/connection/PendingRequestCard";
import EmptyConnection from "../../components/connection/EmptyConnection";
import Skeleton from "../../components/common/Skeleton";

export default function Requests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial mock data load
  useEffect(() => {
    const timer = setTimeout(() => {
      setRequests([
        {
          id: "req1",
          doctor: {
            name: "Dr. Prabhat Ranjan",
            specialization: "Cardiologist",
            hospital: "City Heart Hospital",
          },
        },
        {
          id: "req2",
          doctor: {
            name: "Dr. Sarah Jenkins",
            specialization: "Neurologist",
            hospital: "Metro Medical Center",
          },
        },
      ]);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = (requestId) => {
    // Simulate accepting request
    const request = requests.find((r) => r.id === requestId);
    if (request) {
      alert(`Accepted request from ${request.doctor.name}! They can now view and manage your prescriptions.`);
      setRequests((prev) => prev.filter((r) => r.id !== requestId));
    }
  };

  const handleReject = (requestId) => {
    // Simulate rejecting request
    const request = requests.find((r) => r.id === requestId);
    if (request) {
      const confirmed = window.confirm(`Decline connection request from ${request.doctor.name}?`);
      if (confirmed) {
        setRequests((prev) => prev.filter((r) => r.id !== requestId));
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[var(--text)] mb-1.5">Pending Connection Requests</h2>
        <p className="text-xs text-[var(--text-muted)]">
          Doctors who connect with you can prescribe medicines, set intake reminders, and view your adherence details.
        </p>
      </div>

      {loading ? (
        <Skeleton.List count={2} />
      ) : requests.length > 0 ? (
        <div className="space-y-4">
          {requests.map((request) => (
            <PendingRequestCard
              key={request.id}
              request={request}
              onAccept={handleAccept}
              onReject={handleReject}
            />
          ))}
        </div>
      ) : (
        <EmptyConnection type="requests" />
      )}
    </div>
  );
}
