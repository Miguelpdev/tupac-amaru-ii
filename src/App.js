// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Directory from "./components/Directory";
import LevelInitial from "./components/LevelInitial";
import LevelPrimary from "./components/LevelPrimary";
import LevelSecondary from "./components/LevelSecondary";
import Header from "./components/Header";
import LevelInitialOverview from "./components/LevelInitialOverview";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* <nav className="bg-blue-600 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link className="text-white font-semibold" to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold" to="/directory">
                Directorio
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold" to="/level-initial">
                Nivel Inicial
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold" to="/level-primary">
                Nivel Primaria
              </Link>
            </li>
            <li>
              <Link className="text-white font-semibold" to="/level-secondary">
                Nivel Secundaria
              </Link>
            </li>
          </ul>
        </nav> */}
        <Header />
        <div className="container mx-auto p-6">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/level-initial" element={<LevelInitialOverview />} />
            <Route path="/level-primary" element={<LevelPrimary />} />
            <Route path="/level-secondary" element={<LevelSecondary />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
