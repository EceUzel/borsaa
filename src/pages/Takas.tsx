import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchTakasData } from "../api";

const Takas = () => {
  const [takasVerileri, setTakasVerileri] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTakasData("THYAO");
      setTakasVerileri(data);
    };
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Günlük Takas Dağılımı</h1>
        <div className="w-full max-w-3xl space-y-4">
          {takasVerileri.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur p-5 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold mb-2">{item.kurum}</h2>
              <div className="flex justify-between text-sm text-gray-300">
                <p>Alış: <span className="text-green-400 font-semibold">{item.alis.toLocaleString()} ₺</span></p>
                <p>Satış: <span className="text-red-400 font-semibold">{item.satis.toLocaleString()} ₺</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Takas;