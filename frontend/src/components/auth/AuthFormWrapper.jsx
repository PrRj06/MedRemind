export default function AuthFormWrapper({
  title,
  subtitle,
  showGoogle = false,
  children,
  footer,
}) {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold text-[var(--text)]">{title}</h1>
      {subtitle && <p className="mt-1.5 text-sm text-[var(--text-muted)]">{subtitle}</p>}

      {showGoogle && (
        <>
          <button
            type="button"
            disabled
            aria-label="Continue with Google (coming soon)"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--text)] opacity-60"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 11v2.8h6.5c-.3 1.6-2.1 4.7-6.5 4.7-3.9 0-7.1-3.2-7.1-7.2S8.1 4.1 12 4.1c2.2 0 3.7.9 4.6 1.7l3.1-3C17.8 1.1 15.2 0 12 0 5.4 0 0 5.4 0 12s5.4 12 12 12c6.9 0 11.5-4.9 11.5-11.7 0-.8-.1-1.4-.2-2H12z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-[var(--border)]" />
            <span className="text-xs text-[var(--text-muted)]">OR</span>
            <span className="h-px flex-1 bg-[var(--border)]" />
          </div>
        </>
      )}

      {children}

      {footer && <div className="mt-6 text-center text-sm text-[var(--text-muted)]">{footer}</div>}
    </div>
  );
}