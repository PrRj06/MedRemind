import "./Login.css";
import { useState } from "react";
import logo from "./assests/unnamed.png";

function ForgetPass({ onBackToLogin }) {
  const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleReset = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitted(true);
      console.log("Password reset requested", { email });
    }
  };

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <div className="left">
        <div>
          <div className="logo">
            <img src={logo} alt="MedRemind Logo" className="w-24 h-24 rounded-full" />
            <div>
              <h1>MedRemind</h1>
              <p>Medicine Reminder Platform</p>
            </div>
          </div>

          <p className="tagline">"Because we also care about their health."</p>
        </div>

        <div>
          <h2>
            Forgot your password?
            <br />
            <span>We’ll help you reset it.</span>
          </h2>

          <div className="cards">
            <div className="card">
              <h3>🔒 Secure reset</h3>
              <p>Get a one-time recovery link delivered safely to your inbox.</p>
            </div>

            <div className="card">
              <h3>✉️ Fast recovery</h3>
              <p>Reset your password quickly without losing access to your reminders.</p>
            </div>

            <div className="card">
              <h3>📱 Stay connected</h3>
              <p>Keep your account linked to the care routines you depend on.</p>
            </div>

            <div className="card appointment">
              <h3>🩺 Support on hand</h3>
              <p>If you need help, our support team is here to assist you.</p>
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
          <div className={`toggleSwitch ${darkMode ? "active" : ""}`} onClick={() => setDarkMode(!darkMode)} />
        </div>

        <h1>Reset password</h1>
        <p>Enter the email address on your account, and we’ll send a reset link.</p>

        {submitted ? (
          <div className="successMessage">
            <p>
              A password reset link has been sent to <strong>{email}</strong>. Check your inbox and follow the instructions.
            </p>
          </div>
        ) : (
          <>
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

            <button className="loginBtn" onClick={handleReset}>
              Send reset link →
            </button>
          </>
        )}

        <p className="signup">
          Remembered your password?
          <span onClick={onBackToLogin}> Back to login</span>
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

export default ForgetPass;
