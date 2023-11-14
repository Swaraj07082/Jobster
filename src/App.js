import "./App.css";

import Layout from "./Components/Layout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
