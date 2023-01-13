import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import AuthPage from "./Pages/AuthPage";
import CreatePage from "./Pages/CreatePage";
import DashboardPage from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [auth, setAuth] = useState<Boolean>(false);

  return (
    <Router>
      <Navbar auth={auth} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/:authType" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/new" element={<CreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;
