import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchStockPrice } from "../api";

const Oyun = () => {
  const [symbol, setSymbol] = useState("BIST:THYAO");
  const [balance, setBalance] = useState(1000);
  const [stocks, setStocks] = useState<number[]>([]);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const getPrice = async () => {
      const sym = symbol.split(":")[1] || symbol;
      const data = await fetchStockPrice(sym);
      setPrice(data.fiyat);
    };
    getPrice();
  }, [symbol]);

  const handleBuy = () => {
    if (balance >= price) {
      setBalance(balance - price);
      setStocks([...stocks, price]);
    }
  };

  const handleSell = () => {
    if (stocks.length > 0) {
      const lastPrice = stocks[stocks.length - 1];
      setBalance(balance + lastPrice);
      setStocks(stocks.slice(0, -1));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Yatırım Simülasyonu</h1>
        <input
          type="text"
          placeholder="Hisse sembolü girin (örn: BIST:ASELS)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="mb-6 p-3 rounded bg-white/20 text-white placeholder-gray-300 w-full max-w-md outline-none"
        />
        <div className="w-full max-w-4xl mb-6">
          <iframe
            src={`https://s.tradingview.com/widgetembed/?symbol=${symbol}&interval=60&theme=dark`}
            width="100%"
            height="400"
            allowTransparency
            frameBorder="0"
            title="TradingView Oyun Grafiği"
          ></iframe>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 w-full max-w-md text-center shadow-xl">
          <p className="text-lg font-medium mb-2">Bakiye: <span className="text-green-300">{balance.toFixed(2)} ₺</span></p>
          <p className="text-lg font-medium mb-4">Güncel Fiyat: <span className="text-yellow-300">{price.toFixed(2)} ₺</span></p>
          <div className="flex justify-center space-x-4 mb-4">
            <button
              onClick={handleBuy}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
            >
              Al
            </button>
            <button
              onClick={handleSell}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Sat
            </button>
          </div>
          <h2 className="text-xl font-semibold mb-2">Portföy</h2>
          {stocks.length === 0 ? (
            <p className="text-gray-300">Henüz hisse alınmadı.</p>
          ) : (
            <ul className="space-y-1">
              {stocks.map((price, index) => (
                <li key={index} className="bg-white/20 rounded p-2">{price.toFixed(2)} ₺</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Oyun;