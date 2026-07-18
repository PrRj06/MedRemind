import { Stethoscope } from "lucide-react";
import EmptyState from "../../components/patient/EmptyState";
import ScheduleSection from "../../components/patient/ScheduleSection";
import PillBoxPreview from "../../components/patient/PillBoxPreview";
import AnalyticsPreview from "../../components/patient/AnalyticsPreview";

// There is no Doctor Connection module yet, so every patient is
// currently "not connected" to a doctor. Once that module exists,
// replace this fixed value with real data from the API.
const isDoctorConnected = false;

export default function PatientHome() {
  return (
    <div className="flex flex-col gap-6">
      {!isDoctorConnected && (
        <EmptyState
          icon={Stethoscope}
          title="No doctor is connected to your account."
          description="Once you connect with a doctor, your prescriptions will show up here."
        />
      )}

      <ScheduleSection />

      <AnalyticsPreview />

      <PillBoxPreview />
    </div>
  );
}