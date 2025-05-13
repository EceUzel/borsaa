import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { fetchNews } from "../api";

const HisseHaberleri = () => {
  const [haberler, setHaberler] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchNews();
        setHaberler(data.articles || []);
      } catch (error) {
        console.error("Haberler çekilemedi:", error);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Haberler</h1>
        <div className="grid gap-6 w-full max-w-3xl">
          {haberler.length === 0 ? (
            <p className="text-gray-300 text-center">Yükleniyor...</p>
          ) : (
            haberler.map((haber, index) => (
              <div key={index} className="bg-white/10 backdrop-blur p-5 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold mb-2">{haber.title}</h2>
                <p className="text-gray-300 text-sm mb-2">{haber.publishedAt?.split("T")[0]}</p>
                <p className="text-white mb-2">{haber.description}</p>
                {haber.url && (
                  <a
                    href={haber.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline text-sm"
                  >
                    Haberi Görüntüle
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HisseHaberleri;