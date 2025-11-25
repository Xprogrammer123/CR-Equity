export default function NewsletterSection() {
  return (
    <section className="bg-gradient-to-b from-[#0077B6] to-[#0096C7] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-b from-[#0077B6] to-[#0096C7] rounded-3xl p-12 text-center text-white shadow-xl">
          <h2 className="text-4xl font-semibold mb-4">
            Stay Connected with Our Talent Community
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Get exclusive access to new opportunities, company updates, and career insights delivered directly to your inbox.
          </p>

          <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address here"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 text-base focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#0077B6] font-semibold px-10 py-4 rounded-full hover:scale-105 transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}