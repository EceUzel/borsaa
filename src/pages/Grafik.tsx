import React, { useState } from "react";
import Navbar from "./Navbar";

const Grafik = () => {
  const [symbol, setSymbol] = useState("BIST:THYAO");

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold mb-4">Grafik</h1>
        <input
          type="text"
          placeholder="Hisse sembolü girin (örn: BIST:ASELS)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="mb-6 p-3 rounded bg-white/20 text-white placeholder-gray-300 w-full max-w-md outline-none"
        />
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur rounded-xl p-6 shadow-lg">
          <iframe
            src={`https://s.tradingview.com/widgetembed/?symbol=${symbol}&interval=60&theme=dark`}
            width="100%"
            height="500"
            allowTransparency
            frameBorder="0"
            title="TradingView Grafik"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Grafik;