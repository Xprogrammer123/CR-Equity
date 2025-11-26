import Image from "next/image";


export default function NewsletterSection() {
  return (
    <section className="bg-gradient-to-b from-[#0077B6] to-[#0096C7] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white/30 p-12 text-center text-white shadow-xl">
          <h2 className="text-4xl font-semibold mb-4">
            Stay Connected with Our Talent Community
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Get exclusive access to new opportunities, company updates, and
            career insights delivered directly to your inbox.
          </p>

          <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address here"
              required
              className="flex-1 px-8 py-4 rounded-lg text-gray-900 text-base focus:outline-none bg-white/50"
            />
            <button
              type="submit"
              className="bg-[#1370AA] text-white font-semibold px-10 py-4 rounded-lg hover:scale-105 transition flex items-center gap-2"
            >
              <Image
                src="/icon/send.svg"
                alt="Apply"
                width={24}
                height={24}
              />{" "}
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
