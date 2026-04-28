export default function Home() {
  return (
    <div>
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
            <p className="text-sm text-gray-500 mb-4">Share your ideas or questions here</p>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all h-32"
              placeholder="Enter your message..."
            ></textarea>
            <button className="mt-4 w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 shadow-md active:scale-95 transition-all">
              Submit Feedback
            </button>
          </div>
        </section>
      

    </div>
  )
}