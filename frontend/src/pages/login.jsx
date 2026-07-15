import "./Login.css";
import { useState } from "react";
import logo from "../assests/unnamed.png";

const DUMMY_CREDENTIALS = {
  doctor: { email: "doctor@medremind.com", password: "doctor123" },
  patient: { email: "patient@medremind.com", password: "patient123" },
};

function Login({ onSwitchToSignup, onLoginSuccess, onForgotPassword }) {
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const valid = DUMMY_CREDENTIALS[role];
    if (email === valid.email && password === valid.password) {
      setError("");
      onLoginSuccess?.(role);
    } else {
      setError(`Invalid credentials for the ${role} role.`);
    }
  };

  return (
    <div className="page">
      <div className={`container ${darkMode ? "dark" : ""}`}>
        <div className="left">
          <div>
            <div className="logo">
              <img src={logo} alt="MedRemind logo" className="logoImg" />
              <div>
                <h1>MedRemind</h1>
                <p>Medicine Reminder Platform</p>
              </div>
            </div>

            <p className="tagline">
              "Because we also care about their health."
            </p>
          </div>

          <div>
            <h2>
              Never let your precious ones
              <br />
              <span>Miss a dose.</span>
            </h2>

            <div className="cards">
              <div className="card">
                <h3>❤️ Family Care</h3>
                <p>
                  Manage medicines for your parents & grandparents from
                  anywhere.
                </p>
              </div>

              <div className="card">
                <h3>💬 WhatsApp Reminders</h3>
                <p>Automatic medicine alerts sent directly on WhatsApp.</p>
              </div>

              <div className="card">
                <h3>🩺 Doctor Trusted</h3>
                <p>
                  Clinics use MedRemind to ensure patients follow prescriptions.
                </p>
              </div>

              <div className="card">
                <h3>📊 Adherence Tracking</h3>
                <p>Track whether medicines are taken on time.</p>
              </div>

              <div className="card appointment">
                <h3>📅 Doctor Appointment</h3>
                <p>Book your doctor appointments directly in one click.</p>
              </div>
            </div>
          </div>

          <div className="testimonials">
            <div className="avatars">
              <div className="avatar">👨</div>
              <div className="avatar">👩</div>
              <div className="avatar">👴</div>
              <div className="avatar">👵</div>
            </div>
            <div>
              <div className="rating">
                <span className="stars">★★★★★</span>
                4.9 / 5
              </div>
              <div className="trustText">
                Trusted by families & clinics for reliable medicine reminders
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="darkModeToggle">
            <span>🌙 Dark Mode</span>
            <button
              type="button"
              className={`toggleSwitch ${darkMode ? "active" : ""}`}
              role="switch"
              aria-checked={darkMode}
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode(!darkMode)}
            />
          </div>

          <h1>Welcome back</h1>
          <p className="subtitle">
            Sign in to manage medicine reminders for your loved ones.
          </p>

          <div className="roleSelector">
            <p className="roleLabel">Select your role to continue</p>
            <div
              className="roleGrid"
              role="radiogroup"
              aria-label="Select your role"
            >
              <button
                type="button"
                role="radio"
                aria-checked={role === "doctor"}
                className={`roleCard ${role === "doctor" ? "active" : ""}`}
                onClick={() => {
                  setRole("doctor");
                  setError("");
                }}
              >
                <span className="roleIcon" aria-hidden="true">
                  🩺
                </span>
                <span className="roleName">I am a Doctor</span>
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={role === "patient"}
                className={`roleCard ${role === "patient" ? "active" : ""}`}
                onClick={() => {
                  setRole("patient");
                  setError("");
                }}
              >
                <span className="roleIcon" aria-hidden="true">
                  🧑
                </span>
                <span className="roleName">I am a Patient</span>
              </button>
            </div>
          </div>

          <button type="button" className="googleBtn">
            <span aria-hidden="true">🌐</span> Continue with Google
          </button>

          <p className="orText">or continue with email</p>

          <form onSubmit={handleLogin} noValidate>
            <div className="inputGroup">
              <label htmlFor="email">Email</label>
              <span className="icon" aria-hidden="true">
                ✉️
              </span>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email / Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="inputGroup">
              <label htmlFor="password">Password</label>
              <span className="icon" aria-hidden="true">
                🔒
              </span>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="passwordToggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <div className="checkboxContainer">
              <label className="checkboxLabel" htmlFor="rememberMe">
                <input
                  id="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <button
                type="button"
                className="forgotPassword"
                onClick={onForgotPassword}
              >
                Forgot password?
              </button>
            </div>

            {error && <p className="formError">{error}</p>}

            <button type="submit" className="loginBtn">
              Sign in as {role === "doctor" ? "Doctor" : "Patient"} →
            </button>
          </form>

          <p className="signup">
            Don't have an account?{" "}
            <button type="button" className="link" onClick={onSwitchToSignup}>
              Sign up
            </button>
          </p>

          <div className="trustBadge">
            <span aria-hidden="true">🔒</span>
            Protected by secure role-based authentication
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
