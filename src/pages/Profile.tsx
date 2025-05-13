import React from "react";
import Navbar from "./Navbar";

const Profile = () => {
  const user = {
    id: 123456789,
    first_name: "Ahmet",
    last_name: "Yılmaz",
    username: "ahmetyilmaz"
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-6">Profil Bilgileri</h1>
        <div className="bg-white/10 backdrop-blur p-6 rounded-xl shadow-lg w-full max-w-md text-center">
          <img
            src={`https://t.me/i/userpic/320/${user.username}.jpg`}
            alt="Profil"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white shadow"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <p className="text-lg mb-2">Ad Soyad: <span className="font-semibold">{user.first_name} {user.last_name}</span></p>
          <p className="text-lg mb-2">Kullanıcı Adı: <span className="font-semibold">@{user.username}</span></p>
          <p className="text-lg">ID: <span className="font-semibold">{user.id}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;