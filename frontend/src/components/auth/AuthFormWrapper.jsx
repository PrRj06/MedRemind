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
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition-all duration-200 hover:border-[var(--primary)]/50 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 disabled:hover:translate-y-0"
          >
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
          <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.4-.4-3.5z"/>
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
          <path fill="#4CAF50" d="M24 45c5.5 0 10.4-2.1 14.2-5.6l-6.6-5.6C29.6 35.6 26.9 36.5 24 36.5c-5.3 0-9.7-3.1-11.3-7.6l-6.5 5C9.6 40.6 16.2 45 24 45z"/>
          <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.3 4.1-4.2 5.4l6.6 5.6C41.5 36 45 30.5 45 24c0-1.2-.1-2.4-.4-3.5z"/>
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