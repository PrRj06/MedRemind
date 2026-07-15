import "./Dashboard.css";

function PatientDashboard({ onLogout, darkMode }) {
  return (
    <div className={`dashPage ${darkMode ? "dark" : ""}`}>
      <div className="dashCard">
        <div className="dashHeader">
          <div>
            <span className="dashBadge">🧑 Patient Portal</span>
            <h1>Welcome back!</h1>
            <p>Here's your medicine schedule for today.</p>
          </div>
          <button type="button" className="logoutBtn" onClick={onLogout}>
            Log out
          </button>
        </div>

        <div className="dashGrid">
          <div className="dashStat">
            <span className="statIcon">💊</span>
            <div className="statValue">3</div>
            <div className="statLabel">Doses remaining today</div>
          </div>
          <div className="dashStat">
            <span className="statIcon">✅</span>
            <div className="statValue">96%</div>
            <div className="statLabel">Adherence this month</div>
          </div>
          <div className="dashStat">
            <span className="statIcon">📅</span>
            <div className="statValue">Jul 22</div>
            <div className="statLabel">Next appointment</div>
          </div>
          <div className="dashStat">
            <span className="statIcon">💬</span>
            <div className="statValue">1</div>
            <div className="statLabel">New reminder on WhatsApp</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
