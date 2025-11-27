import React from "react";
import Image from "next/image";
import Link from "next/link"
const GrowthStory = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-20 text-center px-4">
      <div className="container mx-auto max-w-3xl border shadow-2xl p-6 md:p-16 rounded-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1370AA]">
          Be Part of Our Growth Story
        </h2>
        <p className="text-gray-700 mb-6 font-semibold text-sm md:text-md">
          These metrics represent more than numbers—they highlight opportunities
          for career growth, innovation, and making a meaningful impact in the
          financial technology sector.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-[#1370AA] text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition flex items-center gap-2 w-full md:w-auto justify-center">
            <Image
              src="/icon/question.svg"
              alt="View Growth Pathways"
              width={24}
              height={24}
            />
            <span>View Growth Pathways</span>
          </button>
          <Link className="bg-[#0AA1C8] text-white rounded-xl hover:bg-blue-500 transition px-6 py-2 flex items-center gap-2 w-full md:w-auto justify-center" href="/auth/signup">
            <Image
              src="/icon/user.svg"
              alt="Join our Team"
              width={24}
              height={24}
            />
            <span>Join our Team</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GrowthStory;
