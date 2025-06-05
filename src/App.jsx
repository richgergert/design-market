import { useState } from "react";

export default function App() {
  const [category, setCategory] = useState("");

  const categories = [
    { id: "cover", name: "🖼️ Обложка" },
    { id: "art", name: "🎨 Арт" },
    { id: "preview", name: "📽️ Превью" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Design Market</h1>

      <div className="w-full max-w-sm grid grid-cols-1 gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            className={\`w-full py-2 px-4 rounded-2xl shadow \${category === cat.id ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}\`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {category && (
        <div className="mt-6 text-center">
          <p className="text-lg mb-4">Вы выбрали: <strong>{categories.find(c => c.id === category)?.name}</strong></p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-xl shadow">
            Сгенерировать
          </button>
        </div>
      )}
    </div>
  );
}
