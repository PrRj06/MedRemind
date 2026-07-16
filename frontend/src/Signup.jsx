import "./Login.css";
import { useState } from "react";
import logo from "./assests/unnamed.png";
import { GoogleLogin } from "@react-oauth/google";

function Signup({ onSwitchToLogin }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [role, setRole] = useState("patient");

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: credentialResponse.credential,
          role: role,
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert("🎉 Google Auth successful! You are now logged in as " + data.user.role);
      } else {
        console.error("Google Signup failed", data.message);
      }
    } catch (err) {
      console.error("Error connecting to server", err);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: fullName,
            email,
            password,
            role,
          }),
        });
        const data = await response.json();
        if (data.success) {
          alert("🎉 Signup successful! You are now logged in as " + data.user.role);
          // TODO: Redirect user to their dashboard or show success message 
        } else {
          setErrors((prev) => ({ ...prev, submit: data.message || "Signup failed" }));
        }
      } catch (err) {
        setErrors((prev) => ({ ...prev, submit: "Error connecting to server" }));
      }
    }
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

        <div className="roleToggle">
          <button 
            className={`roleBtn ${role === 'doctor' ? 'active' : ''}`} 
            onClick={() => setRole('doctor')}
          >
            I am a Doctor
          </button>
          <button 
            className={`roleBtn ${role === 'patient' ? 'active' : ''}`} 
            onClick={() => setRole('patient')}
          >
            I am a Patient
          </button>
        </div>

        <div className="googleLoginWrapper">
          <GoogleLogin 
            onSuccess={handleGoogleSuccess} 
            onError={() => console.log('Google Signup Failed')}
            useOneTap
          />
        </div>

        <p className="orText">or create account with email</p>

        {errors.submit && (
          <div className="errorBanner">
            {errors.submit}
          </div>
        )}

        <div className={`inputGroup ${errors.fullName ? "hasError" : ""}`}>
          <label>Full Name</label>
          <span>👤</span>
          <input
            type="text"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName) {
                setErrors((prev) => ({ ...prev, fullName: "" }));
              }
            }}
          />
          {errors.fullName && <p className="errorText">{errors.fullName}</p>}
        </div>

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

        <div className={`inputGroup ${errors.confirmPassword ? "hasError" : ""}`}>
          <label>Confirm Password</label>
          <span>🔐</span>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (errors.confirmPassword) {
                setErrors((prev) => ({ ...prev, confirmPassword: "" }));
              }
            }}
          />
          {errors.confirmPassword && <p className="errorText">{errors.confirmPassword}</p>}
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
