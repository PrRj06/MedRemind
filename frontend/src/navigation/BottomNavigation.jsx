import { NavLink } from "react-router-dom";

export default function BottomNavigation({ items = [] }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md md:hidden transition-colors">
      <div className="flex h-16 items-center justify-around px-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 rounded-xl px-3 py-1.5 text-xxs font-medium transition-all ${
                  isActive
                    ? "text-[var(--primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`
              }
            >
              {Icon && <Icon className="h-5 w-5" />}
              <span className="text-[10px] tracking-wide">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
