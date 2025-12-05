import React from "react";
import Link from "next/link"
const CTASection = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20 text-center px-4">
      <div className="container mx-auto max-w-3xl">
        <h4 className="text-black text-lg md:text-xl mb-5">
          Your Future Starts Here
        </h4>
        <h2 className="text-2xl md:text-5xl font-bold mb-6 text-black">
          Ready to Transform <br />
          <span className="text-[#15DD6F]">Your Career?</span>
        </h2>
        <p className="text-gray-500 mb-8 text-base md:text-xl">
          Join CRequity.ai and be part of a revolutionary journey where your
          potential meets unlimited opportunity. Shape the future of AI-driven
          finance while accelerating your career growth.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link className=" border border-blue-500 text-blue-500 px-6 py-3 md:py-4 rounded-full transition w-full md:w-auto" href="/auth/signup">
            Explore open opportunities
          </Link>
          <button className="text-white px-6 py-3 md:py-4 rounded-full bg-blue-500 transition w-full md:w-auto">
            Watch Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
