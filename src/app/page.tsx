export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* 🔍 Navigation & Search Bar */}
      <nav className=" bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-red-500 font-bold text-xl">RVU Online</div>
          <div className="flex w-full md:w-1/2 gap-2">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow p-2 rounded-l-md outline-none focus:ring-2 focus:ring-red-400 transition-all"
            />
            <button className="px-6 bg-red-600 text-white font-bold rounded-r-md hover:bg-red-700 transition-colors">
              GO
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* 🏫 Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Welcome to <span className="text-orange-600">Rift Valley University</span> Online Registration
          </h1>
          <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl shadow-lg">
            <img
              src="unnamed.webp"
              alt="RVU Campus"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </header>

        {/* 📘 About Section */}
        <section className="mb-16">
          <h2 className="bg-red-600 text-white text-center py-3 rounded-t-lg text-xl font-bold uppercase tracking-wide">
            About Us
          </h2>
          <div className="bg-white p-8 rounded-b-lg shadow-sm border-x border-b grid grid-cols-1 md:grid-cols-2 gap-8 leading-relaxed">
            <p className="text-lg">
              Rift Valley University has over <span className="font-bold text-orange-600">24 years</span> of experience in Ethiopian
              higher education. It has successfully trained thousands of students across
              diverse professional fields.
            </p>
            <p className="text-lg border-l-4 border-orange-500 pl-4 italic text-gray-600">
              The university focuses on quality education, leadership, and
              innovation to support national development goals and produce skilled
              graduates ready for the global market.
            </p>
          </div>
        </section>

        {/* 📞 Contact & Feedback Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Social Links */}
          <div className="bg-white p-8 rounded-xl shadow-sm border h-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h2>
            <div className="flex flex-col gap-4">
              <a href="https://www.facebook.com/rvuhq" target="_blank" className="flex items-center gap-3 text-blue-600 hover:underline">
                 <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com" target="_blank" className="flex items-center gap-3 text-pink-600 hover:underline">
                 <span>Instagram</span>
              </a>
              <a href="https://riftvalleyuniversity.org" target="_blank" className="flex items-center gap-3 text-green-600 hover:underline">
                 <span>Official Website</span>
              </a>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Send us your feedback</h3>
            <p className="text-sm text-gray-500 mb-4">Share your ideas or questions here.</p>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all h-32"
              placeholder=" Enter your message..."
            ></textarea>
            <button className="mt-4 w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 shadow-md active:scale-95 transition-all">
              Submit Feedback
            </button>
          </div>
        </section>
      </main>

    
    </div>
  );
}