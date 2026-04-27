export default function about() {
  return (
    <div>
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
    </div>
  )
}