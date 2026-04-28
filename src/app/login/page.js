"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://unireg-1.onrender.com/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Login gochuu kee Browser irratti gabaabaatti galla
        localStorage.setItem("isAdmin", "true");
        router.push("/admin"); // Gara Dashboard-itti si geessa
      } else {
        alert(data.detail || "Username ykn Password dogoggora!");
      }
    } catch (err) {
      alert("Backend hin hojjechaa hin jiru!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border-t-8 border-orange-500">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-blue-900 uppercase">Rift Valley</h1>
          <p className="text-gray-500 font-medium">Admin Central Portal</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Admin Username</label>
            <input
              type="text"
              required
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Username galchi"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              className="w-full p-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            disabled={loading}
            className={`w-full p-4 rounded-xl font-black text-white transition-all ${
              loading ? "bg-gray-400" : "bg-blue-700 hover:bg-blue-800 shadow-lg"
            }`}
          >
            {loading ? "CHECKING..." : "SECURE LOG IN"}
          </button>
        </form>
      </div>
    </div>
  );
}