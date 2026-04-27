// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function AdminDashboard() {
//   const router = useRouter();
//   const [students, setStudents] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCity, setSelectedCity] = useState("All");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const isAdmin = localStorage.getItem("isAdmin");
//     if (!isAdmin) {
//       router.push("/login");
//     } else {
//       fetchStudents();
//     }
//   }, [router]);

//   const fetchStudents = async () => {
//     try {
//       const res = await fetch("http://127.0.0.1:8000/students");
//       const data = await res.json();
//       setStudents(data);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error:", err);
//       setLoading(false);
//     }
//   };

//   const handleStatusUpdate = async (id, newStatus, message = "") => {
//     try {
//       const response = await fetch(`http://127.0.0.1:8000/update-student/${id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status: newStatus, adminMessage: message }),
//       });
//       if (response.ok) {
//         alert(`This student is registered under the  "${newStatus}" category!`);
//         fetchStudents();
//       }
//     } catch (err) {
//       console.error("Error:", err);s
//     }
//   };

//   // --- KUTAA DOWNLOAD (EXCEL/CSV) ---
//   const downloadCSV = () => {
//     if (filteredStudents.length === 0) {
//       alert("There is not document available for download!");
//       return;
//     }
    
//     const headers = ["Name", "Phone Number", "City", "Faculty", "Department", "Study Mode", "Status"];
//     const rows = filteredStudents.map(s => [
//       `${s.firstName} ${s.lastName}`,
//       s.phone,
//       s.city,
//       s.faculty,
//       s.department,
//       s.studyMode,
//       s.status || "Pending"
//     ]);

//     let csvContent = "data:text/csv;charset=utf-8," 
//       + headers.join(",") + "\n" 
//       + rows.map(e => e.join(",")).join("\n");

//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", `Barattoota_RVU_${selectedCity}.csv`);
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const cities = ["All", ...new Set(students.map((s) => s.city))].sort();

//   const filteredStudents = students
//     .filter((s) => {
//       const searchData = `${s.firstName} ${s.lastName} ${s.city} ${s.department} ${s.faculty} ${s.phone}`.toLowerCase();
//       const matchesSearch = searchData.includes(searchTerm.toLowerCase());
//       const matchesCity = selectedCity === "All" || s.city === selectedCity;
//       return matchesSearch && matchesCity;
//     })
//     .sort((a, b) => (a.status === "Approved" ? 1 : -1));

//   if (loading) return <div className="p-10 text-center font-bold text-blue-900 italic">We are bringing the document...</div>;

//   return (
//     <div className="p-4 md:p-8 bg-gray-50 min-h-screen text-black">
//       {/* HEADER */}
//       <div className="flex justify-between items-center mb-8 bg-white p-6 rounded-3xl shadow-sm border-b-4 border-blue-900">
//         <div>
//           <h1 className="text-2xl font-black text-blue-900 uppercase">RVU Admin Dashboard</h1>
//           <p className="text-[10px] text-orange-600 font-bold tracking-widest">RIFT VALLEY UNIVERSITY SYSTEM</p>
//         </div>
//         <div className="flex gap-3">
//           {/* DOWNLOAD BUTTON */}
//           <button 
//             onClick={downloadCSV}
//             className="bg-green-600 text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-green-700 shadow-md flex items-center gap-2 transition-all"
//           >
//             📥 Export CSV
//           </button>
//           <button 
//             onClick={() => { localStorage.removeItem("isAdmin"); router.push("/login"); }}
//             className="bg-red-600 text-white px-5 py-2 rounded-xl font-bold text-xs hover:bg-red-800 transition-all shadow-md"
//           > Logout </button>
//         </div>
//       </div>

//       {/* SEARCH & FILTERS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Name,city, Faculty,and phone Numbers Search..."
//             className="w-full p-4 pl-12 rounded-2xl border-2 border-white bg-white shadow-sm focus:border-blue-500 outline-none transition-all"
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <span className="absolute left-4 top-4 text-xl">🔍</span>
//         </div>

//         <select
//           className="w-full p-4 rounded-2xl border-2 border-white bg-white shadow-sm focus:border-blue-500 outline-none font-bold"
//           onChange={(e) => setSelectedCity(e.target.value)}
//           value={selectedCity}
//         >
//           {cities.map((city) => (
//             <option key={city} value={city}>{city === "All" ? "All city" : city}</option>
//           ))}
//         </select>
//       </div>

//       {/* TABLE */}
//       <div className="bg-white shadow-2xl rounded-[2rem] overflow-x-auto border border-gray-100">
//         <table className="min-w-full leading-normal">
//           <thead>
//             <tr className="bg-blue-900 text-white text-left uppercase text-[10px] tracking-tighter">
//               <th className="px-6 py-5">Student & Study</th>
//               <th className="px-6 py-5">Faculty & Dept</th>
//               <th className="px-6 py-5">City & Phone Number</th>
//               <th className="px-6 py-5 text-center">Status</th>
//               <th className="px-6 py-5 text-center">Documents</th>
//               <th className="px-6 py-5 text-center bg-blue-950 font-black">Work</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-50">
//             {filteredStudents.map((s) => (
//               <tr key={s._id} className="hover:bg-blue-50 transition-all">
//                 <td className="px-6 py-4">
//                   <div className="font-black text-gray-800 uppercase text-[11px]">{s.firstName} {s.lastName}</div>
//                   <div className="text-[9px] text-blue-600 font-bold bg-blue-50 px-2 rounded w-fit mt-1">{s.studyMode}</div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="text-[10px] font-black text-gray-700">{s.faculty || "Faculty Name"}</div>
//                   <div className="text-[9px] text-gray-500">{s.department}</div>
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="text-[10px] font-bold text-orange-600 uppercase">{s.city}</div>
//                   <div className="text-[10px] text-gray-400 font-mono">{s.phone}</div>
//                 </td>
//                 <td className="px-6 py-4 text-center">
//                   <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-black uppercase border 
//                     ${s.status === "Approved" ? "bg-green-100 text-green-700 border-green-200" : 
//                       s.status === "Rejected" ? "bg-red-100 text-red-700 border-red-200" : "bg-orange-100 text-orange-700 border-orange-200"}`}>
//                     {s.status === "Approved" ? "✅ Approved" : s.status === "Rejected" ? "❌ Rejected" : "⏳ Pending"}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 text-center">
//                   <div className="flex justify-center gap-1">
//                     <button onClick={() => window.open(`http://127.0.0.1:8000/${s.documents.id_card.replace(/\\/g,'/')}`, "_blank")} className="bg-gray-100 hover:bg-blue-600 hover:text-white px-2 py-1 rounded text-[9px] font-bold border border-gray-200 transition-all">ID</button>
//                     <button onClick={() => window.open(`http://127.0.0.1:8000/${s.documents.receipt.replace(/\\/g,'/')}`, "_blank")} className="bg-gray-100 hover:bg-green-600 hover:text-white px-2 py-1 rounded text-[9px] font-bold border border-gray-200 transition-all">REC</button>
//                     <button onClick={() => window.open(`http://127.0.0.1:8000/${s.documents.result.replace(/\\/g,'/')}`, "_blank")} className="bg-gray-100 hover:bg-orange-600 hover:text-white px-2 py-1 rounded text-[9px] font-bold border border-gray-200 transition-all">RES</button>
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 bg-gray-50 border-l">
//                   <div className="flex justify-center gap-2">
//                     <button onClick={() => { if(confirm(`Approve ${s.firstName}?`)) handleStatusUpdate(s._id, "Approved"); }} className="bg-green-600 text-white px-3 py-1.5 rounded-lg shadow-sm hover:bg-green-800 text-[9px] font-black">APPROVE</button>
//                     <button onClick={() => { const msg = prompt("Maaliif reject goota?"); if(msg) handleStatusUpdate(s._id, "Rejected", msg); }} className="border-2 border-red-500 text-red-500 px-3 py-1.5 rounded-lg hover:bg-red-500 hover:text-white text-[9px] font-black transition-all">REJECT</button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }