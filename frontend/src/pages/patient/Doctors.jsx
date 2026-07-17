import { useState, useEffect } from "react";
import DoctorCard from "../../components/connection/DoctorCard";
import EmptyConnection from "../../components/connection/EmptyConnection";
import Skeleton from "../../components/common/Skeleton";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial mock data load
  useEffect(() => {
    const timer = setTimeout(() => {
      setDoctors([
        {
          id: "doc1",
          name: "Dr. Prabhat Ranjan",
          specialization: "Cardiologist",
          hospital: "City Heart Hospital",
          department: "Cardiology Division",
        },
      ]);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleDisconnect = (targetDoctor) => {
    const confirmed = window.confirm(
      `Are you sure you want to disconnect from ${targetDoctor.name}? This will revoke their access to your schedule.`
    );
    if (confirmed) {
      setDoctors((prev) => prev.filter((d) => d.id !== targetDoctor.id));
    }
  };

  return (
    <div className="space-y-6">
      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Skeleton.Card />
        </div>
      ) : doctors.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
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
