import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Derinlik from "./pages/Derinlik";
import Grafik from "./pages/Grafik";
import Oyun from "./pages/Oyun";
import Takas from "./pages/Takas";
import AKD from "./pages/AKD";
import FiyatAlarm from "./pages/FiyatAlarm";
import HisseYorum from "./pages/HisseYorum";
import HisseHaberleri from "./pages/HisseHaberleri";
import KullaniciID from "./pages/KullaniciID";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";

const App = () => {
  // Ana giriş sayfası welcome olarak yönlendirilecek
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/" element={<Navigate to="/derinlik" />} />
        <Route path="/derinlik" element={<Derinlik />} />
<Route path="/grafik" element={<Grafik />} />
<Route path="/oyun" element={<Oyun />} />
<Route path="/takas" element={<Takas />} />
<Route path="/akd" element={<AKD />} />
<Route path="/fiyat-alarm" element={<FiyatAlarm />} />
<Route path="/hisse-yorum" element={<HisseYorum />} />
<Route path="/hisse-haberleri" element={<HisseHaberleri />} />
<Route path="/kullanici-id" element={<KullaniciID />} />
<Route path="/profil" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;