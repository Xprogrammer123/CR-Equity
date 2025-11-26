import React from "react";

const CTASection = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20 text-center px-4">
      <div className="container mx-auto max-w-3xl">
        <h4 className="text-[#1370AA] font-semibold text-lg md:text-2xl mb-5">
          Your Future Starts Here
        </h4>
        <h2 className="text-2xl md:text-5xl font-bold mb-6 text-[#1370AA]">
          Ready to Transform <br />
          <span className="text-[#15DD6F]">Your Career?</span>
        </h2>
        <p className="text-gray-500 mb-8 text-base md:text-xl font-semibold">
          Join CRequity.ai and be part of a revolutionary journey where your
          potential meets unlimited opportunity. Shape the future of AI-driven
          finance while accelerating your career growth.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-white text-[#1370AA] px-6 py-3 md:py-4 font-semibold shadow-2xl rounded-lg transition w-full md:w-auto">
            Explore open opportunities
          </button>
          <button className="text-white px-6 py-3 md:py-4 rounded-lg bg-[#1370AA] transition font-semibold shadow-2xl w-full md:w-auto">
            Watch Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
