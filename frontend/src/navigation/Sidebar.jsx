import { NavLink } from "react-router-dom";

export default function Sidebar({ items = [] }) {
  return (
    <aside className="hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-[var(--border)] bg-[var(--surface)]/50 md:block transition-all sticky top-16">
      <div className="flex flex-col gap-1 p-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[var(--primary)] text-white shadow-[var(--shadow)]"
                    : "text-[var(--text-muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--text)]"
                }`
              }
            >
              {Icon && <Icon className="h-5 w-5" />}
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}
