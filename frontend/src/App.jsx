import { useState } from "react";
import Login from "./pages/login";
import Signup from "./pages/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <Login onSwitchToSignup={() => setIsLogin(false)} />
  ) : (
    <Signup onSwitchToLogin={() => setIsLogin(true)} />
  );
}

export default App; 