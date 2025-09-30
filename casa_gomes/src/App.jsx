import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Produtos from "./pages/Produtos";
import AOS from "aos";
import "aos/dist/aos.css"; // importante importar o CSS
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  const token = localStorage.getItem("token"); // 🔑 pega o token salvo
   useEffect(() => {
    AOS.init({
      duration: 800, // duração padrão em ms
      once: false,    // anima apenas na primeira vez que aparece
      easing: "ease-out-cubic"
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/login" element={<Login />} />

        {/* 🔒 Rota protegida: só acessa se tiver token */}
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
