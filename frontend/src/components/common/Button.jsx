import Loader from "./Loader";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  isLoading = false,
  disabled = false,
  onClick,
  className = "",
  ...props
}) {
  const base =
    "w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)] disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90",
    secondary:
      "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface-hover)]",
    ghost: "bg-transparent text-[var(--text)] hover:bg-[var(--surface-hover)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {isLoading && <Loader size="sm" />}
      {children}
    </button>
  );
}