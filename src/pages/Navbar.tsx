import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/derinlik", label: "Derinlik" },
    { path: "/grafik", label: "Grafik" },
    { path: "/takas", label: "Takas" },
    { path: "/akd", label: "AKD" },
    { path: "/fiyat-alarm", label: "Fiyat Alarmı" },
    { path: "/hisse-yorum", label: "Yorumlar" },
    { path: "/hisse-haberleri", label: "Haberler" },
    { path: "/oyun", label: "Oyun" },
    { path: "/kullanici-id", label: "Kullanıcı" },
    { path: "/profil", label: "Profil" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 backdrop-blur-md shadow-md p-4 flex flex-wrap justify-center gap-6 text-sm md:text-base font-semibold text-white">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="hover:underline hover:text-blue-200 transition"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;