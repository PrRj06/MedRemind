import ThemeToggle from "../common/ThemeToggle";
import logo from "../../assets/logo.png";

const FEATURES = [
  { title: "Smart Reminders", desc: "Never miss a dose with intelligent scheduling." },
  { title: "Doctor Connected", desc: "Prescriptions sync directly from your doctor." },
  { title: "Adherence Tracking", desc: "See your medication history at a glance." },
];

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full bg-[var(--background)]">
      <div className="hidden w-1/2 flex-col justify-between bg-[var(--surface)] p-12 lg:flex">
        <div className="flex items-center gap-2">
          <img src={logo} alt="MedRemind" className="h-9 w-9 rounded-lg object-contain" />
          <span className="text-lg font-semibold text-[var(--text)]">MedRemind</span>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold leading-tight text-[var(--text)]">
            Medication management, made effortless.
          </h2>
          <div className="space-y-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4"
              >
                <p className="text-sm font-medium text-[var(--text)]">{feature.title}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="text-sm text-[var(--text-muted)]">
          "MedRemind helped me stay on top of my prescriptions for the first time in years."
          <footer className="mt-1 font-medium text-[var(--text)]">— A patient, using MedRemind</footer>
        </blockquote>
      </div>

      <div className="flex w-full flex-col lg:w-1/2">
        <div className="flex justify-end p-6">
          <ThemeToggle />
        </div>
        <div className="flex flex-1 items-center justify-center px-6 pb-12">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      </div>
    </div>
  );
}