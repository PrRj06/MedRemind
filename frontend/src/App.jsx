import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import ForgetPass from "./forgetpass";

function App() {
  const [page, setPage] = useState("login");
  const [stage, setStage] = useState("idle");
  const [pendingPage, setPendingPage] = useState(null);

  const navigateToPage = (targetPage) => {
    if (targetPage === page) return;
    setPendingPage(targetPage);
    setStage("outgoing");
  };

  const handleAnimationEnd = () => {
    if (stage === "outgoing") {
      setPage(pendingPage);
      setStage("incoming");
    } else if (stage === "incoming") {
      setStage("idle");
    }
  };

  const renderPage = () => {
    if (page === "login") {
      return (
        <Login
          onSwitchToSignup={() => navigateToPage("signup")}
          onSwitchToForgot={() => navigateToPage("forgot")}
        />
      );
    }

    if (page === "signup") {
      return <Signup onSwitchToLogin={() => navigateToPage("login")} />;
    }

    return <ForgetPass onBackToLogin={() => navigateToPage("login")} />;
  };

  return (
    <div className={`page-transition ${stage}`} onAnimationEnd={handleAnimationEnd}>
      <div className="page-transition-inner" key={page}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;