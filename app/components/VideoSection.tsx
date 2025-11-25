export default function VideoSection() {
  return (
    <section className="bg-gradient-to-b from-[#0077B6] to-[#00B4D8] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Stay Connected with Our Talent Community
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          Get exclusive access to new opportunities, company updates, and career insights with just a click.
        </p>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-br from-cyan-300 to-blue-400 h-96 flex items-center flex-col gap-6">
            <div className="w-20 h-20 bg-white/30 rounded-full flex-center">
              <span className="text-4xl ml-2">Play</span>
            </div>
            <p className="text-2xl font-medium">How to get started</p>
          </div>
        </div>
      </div>
    </section>
  );
}