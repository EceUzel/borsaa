import React, { useState } from "react";
import Navbar from "./Navbar";

const HisseYorum = () => {
  const [yorumlar, setYorumlar] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setYorumlar([input, ...yorumlar]);
      setInput("");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-700 via-indigo-800 to-purple-900 text-white p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">Hisse Yorumları</h1>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-white/10 backdrop-blur rounded-xl p-4 mb-6 shadow-lg"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Yorumunuzu yazın..."
            rows={3}
            className="w-full p-3 rounded bg-white/20 text-white placeholder-gray-300 resize-none outline-none"
            required
          />
          <button
            type="submit"
            className="mt-3 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg transition"
          >
            Gönder
          </button>
        </form>

        <div className="w-full max-w-xl space-y-4">
          {yorumlar.length === 0 ? (
            <p className="text-gray-300 text-center">Henüz yorum yok.</p>
          ) : (
            yorumlar.map((yorum, index) => (
              <div key={index} className="bg-white/10 backdrop-blur p-4 rounded-xl shadow">
                {yorum}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HisseYorum;