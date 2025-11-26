export default function VideoSection() {
  return (
    <section className="bg-[#1373AC] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Stay Connected with Our Talent Community
        </h2>
        <p className="text-2xl max-w-2xl mx-auto mb-12 ">
          Get exclusive access to new opportunities, company updates, and career insights with just a click.
        </p>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/n5s-Gvv92E8?si=ZGlE_QHPZnxF_UCd"
            title="How to get started"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-[450px] md:h-[600px] lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}