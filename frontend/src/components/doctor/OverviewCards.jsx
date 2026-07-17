import { Users, FileText, Pill, Bell } from "lucide-react";

export default function OverviewCards() {
  const cards = [
    { title: "Connected Patients", value: "0", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { title: "Active Prescriptions", value: "0", icon: FileText, color: "text-green-500", bg: "bg-green-500/10" },
    { title: "Active Medicines", value: "0", icon: Pill, color: "text-purple-500", bg: "bg-purple-500/10" },
    { title: "Pending Notifications", value: "0", icon: Bell, color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm transition-shadow hover:shadow-md md:p-6"
        >
          <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${card.bg} ${card.color}`}>
            <card.icon size={24} />
          </div>
          <p className="text-center text-xs font-medium text-[var(--text-muted)] md:text-sm">
            {card.title}
          </p>
          <h4 className="mt-1 text-2xl font-bold text-[var(--text)] md:text-3xl">
            {card.value}
          </h4>
        </div>
      ))}
    </div>
  );
}
