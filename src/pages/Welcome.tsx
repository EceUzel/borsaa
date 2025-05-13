import React from "react";
import Navbar from "./Navbar"; // Navbar bileşeninizin doğru yolda olduğundan emin olun
import borsaLiveLogo from '../assets/logo.png'; // Logonuzu assets klasöründen import edin

const Welcome: React.FC = () => {
  return (
    <div>
      {/* Navbar Bileşeni */}
      <Navbar />

      {/* Ana Karşılama Alanı */}
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white flex flex-col items-center justify-center p-6">
        
        {/* Logo */}
        <img
          src={borsaLiveLogo} // İçe aktarılan logo değişkenini kullanın
          alt="Borsa Live Logo"
          className="w-32 h-32 md:w-40 md:h-40 mb-6 drop-shadow-xl rounded-full"
        />
        
        {/* Başlık */}
        <h1 className="text-4xl font-bold mb-4 text-center">Borsa Live</h1>
        
        {/* Açıklama Metni */}
        <p className="text-center max-w-2xl text-lg mb-8">
          Borsa Live, anlık borsa verilerini kolay ve kullanıcı dostu bir arayüzle sunar.
          Derinlik verileri, takas ve AKD bilgileri, grafik analizleri ve yatırım simülasyonu gibi güçlü özellikleriyle
          hem yatırımcılar hem de finans meraklıları için ideal bir asistandır.
        </p>
        
        {/* Uygulamayı Başlat Butonu */}
        <a
          href="/derinlik" // Bu link uygulamanızdaki ilgili sayfaya yönlendirmeli
          className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Uygulamayı Başlat
        </a>
      </div>
    </div>
  );
};

export default Welcome;
