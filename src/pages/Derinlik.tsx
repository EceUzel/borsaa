import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchStockDepth } from "../api";

const Derinlik = () => {
  const [depth, setDepth] = useState<{ alis: any[]; satis: any[] }>({ alis: [], satis: [] });

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchStockDepth("THYAO"); // sembol sabit, sonra dinamik yapılabilir
      setDepth(data);
    };
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Derinlik Tablosu</h1>
        <div className="grid grid-cols-2 gap-8 w-full max-w-4xl bg-white/10 backdrop-blur rounded-xl p-6 shadow-xl">
          <div>
            <h2 className="text-green-400 font-semibold text-lg mb-2">Alış Emirleri</h2>
            <ul className="space-y-2">
              {depth.alis.map((emir, index) => (
                <li key={index} className="flex justify-between bg-white/10 p-3 rounded-md">
                  <span className="text-green-300 font-medium">{emir.fiyat.toFixed(2)} ₺</span>
                  <span className="text-white">{emir.miktar} lot</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-red-400 font-semibold text-lg mb-2">Satış Emirleri</h2>
            <ul className="space-y-2">
              {depth.satis.map((emir, index) => (
                <li key={index} className="flex justify-between bg-white/10 p-3 rounded-md">
                  <span className="text-red-300 font-medium">{emir.fiyat.toFixed(2)} ₺</span>
                  <span className="text-white">{emir.miktar} lot</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Derinlik;