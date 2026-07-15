import "./Login.css";
import { useState } from "react";
import logo from "./assests/unnamed.png";

function Login({ onSwitchToSignup, onSwitchToForgot }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login submitted", { email, password, rememberMe });
    }
  };

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      {/* Left Section */}
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
            Never let your precious ones
            <br />
            <span>Miss a dose.</span>
          </h2>


          <div className="cards">
            <div className="card">
              <h3>❤️ Family Care</h3>
              <p>Manage medicines for your parents & grandparents from anywhere.</p>
            </div>

            <div className="card">
              <h3>💬 WhatsApp Reminders</h3>
              <p>Automatic medicine alerts sent directly on WhatsApp.</p>
            </div>

            <div className="card">
              <h3>🩺 Doctor Trusted</h3>
              <p>Clinics use MedRemind to ensure patients follow prescriptions.</p>
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
              <span>★★★★★</span>
            </div>
            <small>Trusted by families & clinics for reliable medicine reminders</small>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right">
        <div className="darkModeToggle">
          <span>🌙 Dark Mode</span>
          <div className={`toggleSwitch ${darkMode ? 'active' : ''}`} onClick={() => setDarkMode(!darkMode)} />
        </div>

        <h1>Welcome back</h1>
        <p>Sign in to manage medicine reminders for your loved ones.</p>

        <button className="googleBtn">
          <span>🌐</span> Continue with Google
        </button>

        <p className="orText">or continue with email</p>

        <div className={`inputGroup ${errors.email ? "hasError" : ""}`}>
          <label>Email</label>
          <span>✉️</span>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) {
                setErrors((prev) => ({ ...prev, email: "" }));
              }
            }}
          />
          {errors.email && <p className="errorText">{errors.email}</p>}
        </div>

        <div className={`inputGroup ${errors.password ? "hasError" : ""}`}>
          <label>Password</label>
          <span>🔒</span>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) {
                setErrors((prev) => ({ ...prev, password: "" }));
              }
            }}
          />
          {errors.password && <p className="errorText">{errors.password}</p>}
        </div>

        <div className="checkboxContainer">
          <label className="checkboxLabel">
            <input 
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            {" "}Remember me
          </label>
          <a
            href="#"
            className="forgotPassword"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToForgot();
            }}
          >
            Forgot password?
          </a>
        </div>

        <button className="loginBtn" onClick={handleLogin}>
          Sign in →
        </button>

        <p className="signup">
          Don't have an account?
          <span onClick={onSwitchToSignup}> Sign up</span>
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

export default Login;