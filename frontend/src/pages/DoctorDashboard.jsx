import "./Dashboard.css";

function DoctorDashboard({ onLogout, darkMode }) {
  return (
    <div className={`dashPage ${darkMode ? "dark" : ""}`}>
      <div className="dashCard">
        <div className="dashHeader">
          <div>
            <span className="dashBadge">🩺 Doctor Portal</span>
            <h1>Welcome back, Doctor</h1>
            <p>Here's an overview of your patients today.</p>
          </div>
          <button type="button" className="logoutBtn" onClick={onLogout}>
            Log out
          </button>
        </div>

        <div className="dashGrid">
          <div className="dashStat">
            <span className="statIcon">🧑‍🤝‍🧑</span>
            <div className="statValue">128</div>
            <div className="statLabel">Active patients</div>
          </div>
          <div className="dashStat">
            <span className="statIcon">💊</span>
            <div className="statValue">42</div>
            <div className="statLabel">Prescriptions this week</div>
          </div>
          <div className="dashStat">
            <span className="statIcon">📅</span>
            <div className="statValue">9</div>
            <div className="statLabel">Appointments today</div>
          </div>
          <div className="dashStat">
            <span className="statIcon">📊</span>
            <div className="statValue">94%</div>
            <div className="statLabel">Avg. adherence rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
