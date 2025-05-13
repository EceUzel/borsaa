import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchAKDData } from "../api";

const AKD = () => {
  const [akdVerileri, setAkdVerileri] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchAKDData("THYAO");
      setAkdVerileri(data);
    };
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">AKD Verileri</h1>
        <div className="w-full max-w-3xl space-y-4">
          {akdVerileri.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur p-5 rounded-xl shadow-lg flex justify-between items-center">
              <span className="text-lg font-semibold">{item.seans}</span>
              <span className="text-green-300 font-medium">Fiyat: {item.fiyat.toFixed(2)} ₺</span>
              <span className="text-purple-300 font-medium">Hacim: {item.hacim.toLocaleString()} lot</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AKD;