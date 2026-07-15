import "./Login.css";
import { useState } from "react";
import logo from "../assests/unnamed.png";

function Signup({ onSwitchToLogin }) {
  const [role, setRole] = useState("patient");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
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
              Welcome to a calmer
              <br />
              <span>care routine.</span>
            </h2>

            <div className="cards">
              <div className="card">
                <h3>❤️ Family Care</h3>
                <p>Keep every medication schedule in one safe place.</p>
              </div>

              <div className="card">
                <h3>💬 WhatsApp Reminders</h3>
                <p>Send timely reminders straight to loved ones.</p>
              </div>

              <div className="card">
                <h3>🩺 Doctor Trusted</h3>
                <p>Support patients with reliable reminders and tracking.</p>
              </div>

              <div className="card">
                <h3>📊 Adherence Tracking</h3>
                <p>Monitor medicine-taking habits easily and confidently.</p>
              </div>

              <div className="card appointment">
                <h3>📅 Doctor Appointment</h3>
                <p>
                  Coordinate care and appointments from one simple dashboard.
                </p>
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

          <h1>Create account</h1>
          <p className="subtitle">
            Join MedRemind and start managing medicine reminders for your loved
            ones.
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
                onClick={() => setRole("doctor")}
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
                onClick={() => setRole("patient")}
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

          <p className="orText">or create account with email</p>

          <form onSubmit={handleSignup} noValidate>
            <div className="inputGroup">
              <label htmlFor="fullName">Full Name</label>
              <span className="icon" aria-hidden="true">
                👤
              </span>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

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
                placeholder="you@example.com"
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
                autoComplete="new-password"
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

            <div className="inputGroup">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <span className="icon" aria-hidden="true">
                🔐
              </span>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="passwordToggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <button type="submit" className="loginBtn">
              Create {role === "doctor" ? "Doctor" : "Patient"} Account →
            </button>
          </form>

          <p className="signup">
            Already have an account?{" "}
            <button type="button" className="link" onClick={onSwitchToLogin}>
              Sign in
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

export default Signup;
