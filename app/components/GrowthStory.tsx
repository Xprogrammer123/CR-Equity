import React from "react";
import Image from "next/image";
const GrowthStory = () => {
  return (
    <section className="bg-gray-50 py-20 text-center">
      <div className="container mx-auto max-w-3xl border shadow-2xl p-16 rounded-2xl">
        <h2 className="text-4xl font-bold mb-4 text-[#1370AA]">
          Be Part of Our Growth Story
        </h2>
        <p className="text-gray-700 mb-4 font-semibold text-md">
          These metrics represent more than numbers—they highlight opportunities for career growth,
          innovation, and making a meaningful impact in the financial technology sector.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#1370AA] text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition flex items-center gap-2">
            <Image src="/icon/question.svg" alt="Apply" width={24} height={24} />View Growth Pathways
          </button>
          <button className="bg-[#0AA1C8] rounded-xl hover:bg-blue-500 transition px-6 py-2 flex items-center gap-2">
             <Image src="/icon/user.svg" alt="Apply" width={24} height={24} />Join our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrowthStory;
