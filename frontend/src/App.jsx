import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return isLogin ? (
    <Login onSwitchToSignup={() => setIsLogin(false)} />
  ) : (
    <Signup onSwitchToLogin={() => setIsLogin(true)} />
  );
}

export default App;