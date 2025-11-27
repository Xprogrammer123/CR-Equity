import Image from "next/image";

const EmployeeCard = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-4">
      {/* Top centered texts */}
      <div className="text-center mb-12">
        <h3 className="text-[#1370AA] text-sm md:text-lg font-semibold mb-2 flex items-center justify-center">
          Employee Success Story
        </h3>

        <h2 className="text-2xl md:text-4xl text-[#1370AA] font-bold mb-4">
          Career Transformations That
          <br />
          <span className="text-[#0AA1C8]">Define Our Culture</span>
        </h2>

        <p className="text-gray-700 text-base md:text-xl font-semibold max-w-2xl mx-auto">
          Discover how brilliant minds have accelerated their careers at CR
          Equity, transforming not just their professional trajectories but
          entire industries through innovation.
        </p>
      </div>

      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Left: Text content - appears second on mobile, first on desktop */}
        <div className="flex-1 w-full order-last md:order-first">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 md:w-16 h-14 md:h-16 bg-gray-100 rounded-full flex items-center justify-center font-bold text-blue-600 bg-gradient-to-br from-[#4C63A2] to-[#1C253C] flex-shrink-0">
              <Image
                src="/icon/question.svg"
                alt="MR Robert Stewart"
                width={20}
                height={20}
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-bold text-lg md:text-2xl text-[#1370AA]">
                Robert Stewart
              </p>
              <p className="text-sm md:text-lg text-gray-500 font-semibold">
                Founder, MD
              </p>
            </div>
          </div>

          <div className="max-w-md mb-6">
            <p className="text-gray-500 text-sm md:text-base font-semibold">
              "Apply advanced analytics to financial challenges while building a
              world-class team."
            </p>
          </div>
          {/* Info Cards */}
          <div className="grid grid-cols-1 gap-7 mb-8">
            <div className="bg-[#D9D9D9] px-4 py-4 rounded-xl w-72 ">
              <p className="text-4xl font-semibold text-[#1370AA] mb-2">
                18 months
              </p>
              <p className="text-gray-500 text-lg">Career Growth Period</p>
            </div>
            <div className="bg-[#D9D9D9] px-4 py-4 rounded-xl w-72 ">
              <p className="text-4xl font-semibold text-[#1370AA] mb-2">
                AI EQUITY
              </p>
              <p className="text-gray-500 text-lg">Department</p>
            </div>
          </div>

          {/* Key Achievement */}
          <div className="text-sm text-gray-600 mb-3">
            <p className="text-[#1370AA] font-semibold mb-1 flex items-center gap-2 text-lg">
              <Image
                src="/icon/trophy.svg"
                alt="MR Robert Stewart"
                width={18}
                height={18}
                className=""
              />
              Key Achievement
            </p>
            <p className="font-semibold text-gray-500 text-lg">
              Led development of 3 production AI models
            </p>
            <p className="text-gray-500 mt-2 flex items-center gap-2 font-semibold text-lg text-center">
              <Image
                src="/icon/arrow.svg"
                alt="MR Robert Stewart"
                width={58}
                height={58}
                className="-mt-7"
              />
              From Software Developer to Senior AI <br />
              Engineer
            </p>
          </div>
        </div>

        {/* Right: Image - appears first on mobile, last on desktop */}
        <div className="flex-1 w-full order-first md:order-last">
          <img
            src="/mrrobert.png"
            alt="Employee portrait"
            className="rounded-lg w-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default EmployeeCard;
