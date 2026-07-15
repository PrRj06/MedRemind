import "./Login.css";
import { useState } from "react";
import logo from "./assests/unnamed.png";

function Signup({ onSwitchToLogin }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div className="left">
        <div>
          <div className="logo">
            <img
              src={logo}
              alt="MedRemind Logo"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h1>MedRemind</h1>
              <p>Medicine Reminder Platform</p>
            </div>
          </div>

          <p className="tagline">"Because we also care about their health."</p>
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
              <p>Coordinate care and appointments from one simple dashboard.</p>
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
              <span>★★★★★</span>
            </div>
            <small>Trusted by families & clinics for reliable medicine reminders</small>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="darkModeToggle">
          <span>🌙 Dark Mode</span>
          <div
            className={`toggleSwitch ${darkMode ? "active" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
          />
        </div>

        <h1>Create account</h1>
        <p>Join MedRemind and start managing medicine reminders for your loved ones.</p>

        <button className="googleBtn">
          <span>🌐</span> Continue with Google
        </button>

        <p className="orText">or create account with email</p>

        <div className="inputGroup">
          <label>Full Name</label>
          <span>👤</span>
          <input
            type="text"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="inputGroup">
          <label>Email</label>
          <span>✉️</span>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputGroup">
          <label>Password</label>
          <span>🔒</span>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputGroup">
          <label>Confirm Password</label>
          <span>🔐</span>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="loginBtn" onClick={handleSignup}>
          Create account →
        </button>

        <p className="signup">
          Already have an account?
          <span onClick={onSwitchToLogin}> Sign in</span>
        </p>

        <div className="usageInfo">
          <strong>Managing medicines for:</strong>
          <div className="usageTypes">
            <div className="usageType">
              <span>❤️</span>
              <span>Parents / Grandparents</span>
            </div>
            <div className="usageType">
              <span>🩺</span>
              <span>Patients (for doctors)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
