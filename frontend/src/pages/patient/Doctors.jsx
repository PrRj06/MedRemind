import { useState, useEffect, useCallback } from "react";
import DoctorCard from "../../components/connection/DoctorCard";
import EmptyConnection from "../../components/connection/EmptyConnection";
import Skeleton from "../../components/common/Skeleton";
import {
  getConnections,
  disconnectConnection,
} from "../../services/connection.service";

export default function Doctors() {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const loadDoctors = useCallback(async () => {
    try {
      setError("");
      const response = await getConnections();
      setConnections(response.data || []);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to load connected doctors."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      loadDoctors();
    }, 0);
    return () => clearTimeout(t);
  }, [loadDoctors]);

  const handleDisconnect = async (targetDoctor) => {
    const confirmed = window.confirm(
      `Are you sure you want to disconnect from ${targetDoctor.name}? This will revoke their access to your schedule.`
    );
    if (!confirmed) return;

    try {
      setError("");
      setSuccessMsg("");
      const response = await disconnectConnection(targetDoctor.id);
      setSuccessMsg(response.message || "Disconnected successfully.");
      loadDoctors();
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to disconnect doctor."
      );
    }
  };

  // Map backend accepted connection objects to UI DoctorCard format
  const mappedDoctors = connections.map((conn) => {
    const doctorObj = conn.doctorId || {};
    return {
      id: conn._id, // connection ID
      name: doctorObj.userId?.name || "Unknown Doctor",
      specialization: doctorObj.specialization || "General Medicine",
      hospital: doctorObj.hospital || "N/A",
      department: doctorObj.department || "",
    };
  });

  return (
    <div className="space-y-6">
      {/* Global Success / Error Feedbacks */}
      {error && (
        <div className="rounded-lg bg-red-500/10 p-3.5 text-sm text-[var(--danger)] border border-red-500/20">
          {error}
        </div>
      )}

      {successMsg && (
        <div className="rounded-lg bg-emerald-500/10 p-3.5 text-sm text-[var(--success)] border border-emerald-500/20">
          {successMsg}
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton.Card />
        </div>
      ) : mappedDoctors.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mappedDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onDisconnect={handleDisconnect}
              status="accepted"
            />
          ))}
        </div>
      ) : (
        <EmptyConnection type="doctors" />
      )}
    </div>
  );
}
