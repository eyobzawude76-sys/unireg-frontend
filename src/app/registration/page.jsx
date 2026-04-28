"use client"
import { useState } from "react"

export default function Home() {
  const [faculty, setFaculty] = useState("")
  const [level, setLevel] = useState("")
  const [department, setDepartment] = useState("")
  const [studyMode, setStudyMode] = useState("") // Mode Barnootaa (Morning, Evening, Distance)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: ""
  })

  const API_URL = "http://unireg-1.onrender.com"

  const courseData = {
    Engineering: {
      Degree: ["Computer Science", "Civil Engineering", "Mechanical Engineering"],
      Masters: ["Computer Science (MSc)"],
      TVET: ["IT Support", "Construction", "Electricity"]
    },
    Medical: {
      Degree: ["Nursing", "Pharmacy", "Medicine"],
      Masters: ["Public Health"]
    }
  }

  const cities = [
    "Abichu", "Adama", "Adama TVET", "Ambo", "Asella", "Bahir-Dar", "Bale-Robe", 
    "Bishoftu", "Burayu", "Chiro", "Dembi-Dollo", "Drie-Daw", "Gada", "Gelon", 
    "Gimbi", "Gricha", "Gullele", "Hacaluu Hundessa", "Harar", "Hargegee", 
    "Hawasaa", "Hossanna", "Jigiga", "Jimma", "Kality", "kara alo", "Kemise", 
    "Labuu Lafto", "Lancha", "Lega Tafo", "Mer-Gor", "metal", "Mettu", "Mojoo", 
    "Negelle", "Nekemte", "Nekemte TVFT", "sebeta", "sendafa", "shambuu", 
    "shashamane", "Sidist Kilo", "Sululta", "Waliso", "Walita Sodo"
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" })
  }

  const validate = () => {
    let temp = {}
    if (!formData.firstName) temp.firstName = "First name required"
    if (!formData.phone) temp.phone = "Phone number required"
    if (!formData.city) temp.city = "Select campus location"
    if (!faculty) temp.faculty = "Select faculty"
    if (!department) temp.department = "Select department"
    if (!studyMode) temp.studyMode = "Select study mode"
    
    setErrors(temp)
    return Object.keys(temp).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      setLoading(true)
      const dataToSend = new FormData()
      dataToSend.append("firstName", formData.firstName)
      dataToSend.append("lastName", formData.lastName)
      dataToSend.append("phone", formData.phone)
      dataToSend.append("email", formData.email || "")
      dataToSend.append("city", formData.city)
      dataToSend.append("faculty", faculty)
      dataToSend.append("department", department)
      dataToSend.append("studyMode", studyMode) // Backend-itti ni erga

      const idFile = document.getElementById('id_card').files[0]
      const resultFile = document.getElementById('result_file').files[0]
      const receiptFile = document.getElementById('receipt_file').files[0]

      if (idFile) dataToSend.append("id_card", idFile)
      if (resultFile) dataToSend.append("result", resultFile)
      if (receiptFile) dataToSend.append("receipt", receiptFile)

      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        body: dataToSend, 
      })

      if (res.ok) {
        alert(" You have Successfully Registrered🎉.We will review your information and send you response via SMS within 24 hour  Complete.")
        setFormData({ firstName: "", lastName: "", phone: "", email: "", city: "" })
        setFaculty(""); setLevel(""); setDepartment(""); setStudyMode("");
      } else {
        const data = await res.json()
        throw new Error(data.detail || "Registration failed")
      }
    } catch (err) {
      alert("Error: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* SECTION 1: GARGAARSA GUUTUU (Homtuu hin hir'anne) */}
        <div className="lg:w-1/2 bg-white rounded-2xl shadow-md p-6 border-t-4 border-green-600">
          <h2 className="text-xl font-bold text-green-700 mb-4 border-b pb-2">
             Gargaarsa Galmee / የምዝገባ መመሪያ
          </h2>
          <div className="space-y-4 text-sm md:text-base">
            <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold text-green-800">1. Maqaa / ስም</p>
              <p className="text-gray-600 text-xs">Maqaa keessan kan qormaata biyyaalessaa irratti jiruun wal-fakaatu galchaa. / በሀገር አቀፍ ፈተና ላይ ባለው ስምዎ መሰረት ይሙሉ::</p>
              <p className="text-gray-600 text-xs">   Yoo kanaan dura bartaa kampaasii turtan, maqaan keessan maqaa duraa keessan wajjin wal fakkaachuu qaba.
“ከዚህ በፊት ተማሪ በካምፓስ ከነበሩ፣ ስምዎ ከመጀመሪያ ስምዎ ጋር መመሳሰል አለበት።”  </p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
              <p className="font-semibold text-green-800">2. Ragaalee (Files) / ሰነዶች</p>
              <p className="text-gray-600 text-xs">Suuraa National ID, Qabxii kutaa 12ffaa fi Risiitii kaffaltii upload godhaa. / መታወቂያ፣ የ12ኛ ክፍል ውጤት እና የክፍያ ደረሰኝ ፎቶ ይጫኑ::</p>
              <p className="text-gray-600 text-xs">Yoo kanaan dura bartaa kampaasii kanaa turtan, ragaa xumuraa kampaasii irraa fudhatanii iddoo ‘Result Grade 12’ jedhutti galchuu qabdu.
ከዚህ በፊት በዚህ ካምፓስ ተማሪ ከነበራችሁ፣ የመጨረሻ ማስረጃችሁን ከካምፓሱ ወስዳችሁ ‘Result Grade 12’ ተብሎ በተጠራው ቦታ ላይ ማስገባት አለባችሁ።</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
              <p className="font-semibold text-blue-800">3. Mode Barnootaa / የትምህርት ክፍለ ጊዜ</p>
              <p className="text-gray-600 text-xs">Ganama, Galgala ykn Fagoo (Distance) filachuu keessan mirkaneeffadhaa. / የትምህርት ፕሮግራምዎን በትክክል ይምረጡ::</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
              <p className="font-semibold text-red-800">4. Hubachiisa / ማሳሰቢያ</p>
              <p className="text-red-600 text-[10px] italic">Qabxiin keessan ulaagaa Yunivarsiitichaa gadi yoo ta'e, galmeen keessan ni fashala. / ውጤትዎ ከዩኒቨርሲቲው መስፈርት በታች ከሆነ ምዝገባዎ ይሰረዛል::</p>
            </div>
          </div>
        </div>

        {/* SECTION 2: FORM GUUTUU */}
        <div className="lg:w-1/2 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <h1 className="text-2xl font-black text-blue-900 text-center mb-6 uppercase">University Registration</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="firstName" value={formData.firstName} placeholder="First Name" className="p-3 border rounded-xl outline-none" onChange={handleChange} />
             <br />
              <input name="lastName" value={formData.lastName} placeholder="Last Name" className="p-3 border rounded-xl outline-none" onChange={handleChange} />
            </div>
            <input name="phone" value={formData.phone} placeholder="Phone Number" className="w-full p-3 border rounded-xl outline-none" onChange={handleChange} />
         <br />
            <input name="email" value={formData.email} placeholder="Email (Optional)" className="w-full p-3 border rounded-xl outline-none" onChange={handleChange} />

            {/* Document Uploads */}
            <div className="p-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 space-y-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Documents / ሰነዶች</p>
              <input id="id_card" type="file" accept="image/*" className="text-xs w-full" />
              <input id="result_file" type="file" accept="image/*" className="text-xs w-full" />
              <input id="receipt_file" type="file" accept="image/*" className="text-xs w-full" />
            </div>

            {/* Campus Selection */}
            <select name="city" value={formData.city} onChange={handleChange} className="w-full p-3 border rounded-xl bg-white">
              <option value="">-- Select Campus --</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            {/* STUDY MODE (Kutaa ati barbaadde) */}
            <select value={studyMode} onChange={(e) => setStudyMode(e.target.value)} className={`w-full p-3 border rounded-xl bg-white ${errors.studyMode ? 'border-red-500' : ''}`}>
              <option value="">-- Study Mode --</option>
              <option value="Regular">Regular/Morning</option>
              <option value="Evening">Evening</option>
              <option value="Distance">Distance</option>
            </select>

            {/* Academic Info */}
            <select value={faculty} onChange={(e) => {setFaculty(e.target.value); setLevel(""); setDepartment("");}} className="w-full p-3 border rounded-xl bg-white">
              <option value="">-- Faculty --</option>
              {Object.keys(courseData).map(f => <option key={f} value={f}>{f}</option>)}
            </select>

            {faculty && (
              <select value={level} onChange={(e) => {setLevel(e.target.value); setDepartment("");}} className="w-full p-3 border rounded-xl bg-white">
                <option value="">-- Level --</option>
                {Object.keys(courseData[faculty]).map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            )}

            {level && (
              <select value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full p-3 border rounded-xl bg-white">
                <option value="">-- Department --</option>
                {courseData[faculty][level].map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            )}

            <button type="submit" disabled={loading} className="w-full p-4 rounded-xl font-bold text-white bg-blue-700 hover:bg-blue-800 transition-all">
              {loading ? "SENDING..." : "REGISTER NOW"}
            </button>
          </form>
        </div>

      </div>
    </div>
  ) 
}