import React, { useState } from "react";
import Navbar from "./Navbar";

const FiyatAlarm = () => {
  const [symbol, setSymbol] = useState("");
  const [targetPrice, setTargetPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Alarm Kuruldu:", symbol, targetPrice);
    alert(`Alarm kuruldu: ${symbol} ${targetPrice} ₺`);
    setSymbol("");
    setTargetPrice("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Fiyat Alarmı Kur</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur p-6 rounded-xl shadow-xl w-full max-w-md"
        >
          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-300">Hisse Sembolü</label>
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              placeholder="örneğin: THYAO"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-sm text-gray-300">Hedef Fiyat (₺)</label>
            <input
              type="number"
              value={targetPrice}
              onChange={(e) => setTargetPrice(e.target.value)}
              placeholder="örneğin: 32.50"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            Alarm Kur
          </button>
        </form>
      </div>
    </>
  );
};

export default FiyatAlarm;