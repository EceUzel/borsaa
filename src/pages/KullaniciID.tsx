import React from "react";
import Navbar from "./Navbar";

const KullaniciID = () => {
  const user = {
    id: 123456789,
    first_name: "TRN",
    last_name: "Media",
    username: "trnmedia"
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6">Telegram Kullanıcı Bilgisi</h1>
        <div className="bg-white/10 backdrop-blur p-6 rounded-xl shadow-lg w-full max-w-md text-center">
          <p className="text-lg mb-2">Ad: <span className="font-semibold">{user.first_name}</span></p>
          <p className="text-lg mb-2">Soyad: <span className="font-semibold">{user.last_name}</span></p>
          <p className="text-lg mb-2">Kullanıcı Adı: <span className="font-semibold">@{user.username}</span></p>
          <p className="text-lg">ID: <span className="font-semibold">{user.id}</span></p>
        </div>
      </div>
    </div>
  );
};

export default KullaniciID;