import React from "react";
import Header from "./Header";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[rgba(19,112,170,1)] to-[rgba(10,161,200,1)] text-white h-[100vh]">
      <Header />
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shape the Future of <br />
            <span className="bg-gradient-to-r from-[rgba(197,163,51,0.7)] to-[rgba(21,181,199,0.7)] bg-clip-text text-transparent">
              AI-Driven Finance
            </span>
          </h1>
          <p className="mb-6 text-lg max-w-2xl">
            Join brilliant minds at CRequity.ai where your career growth
            accelerates
            <br /> with our company expansion. Transform commercial lending
            through
            <br /> cutting-edge artificial intelligence.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-sky-600 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">
              <Image src="/icon/plane.svg" alt="Apply" width={24} height={24} />{" "}
              Apply
            </button>
            <button className="px-6 py-3 rounded-xl bg-[rgba(10,161,200,1)]  border border-white flex items-center gap-2 font-semibold">
              <Image src="/icon/play.svg" alt="Apply" width={24} height={24} />
              Watch success story
            </button>
          </div>

          <div className="mt-3 bg-[rgba(10,161,200,1)] p-4 rounded-xl border border-white max-w-xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">Live Company Metrics</h3>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-sky-700"></span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="bg-white/30 space-y-2 p-3 rounded-lg">
                <p className="flex items-center gap-2">
                  <Image
                    src="/icon/employee.svg"
                    alt="Apply"
                    width={24}
                    height={24}
                  />
                  Active Employees
                </p>
                <p className="font-semibold text-4xl text-white/60">247</p>
                <p className="text-sky-700">+27% this quater</p>
              </div>

              <div className="space-y-2 p-3">
                <p className="flex items-center gap-2">
                  <Image
                    src="/icon/book.svg"
                    alt="Apply"
                    width={24}
                    height={24}
                  />
                  Open positions
                </p>
                <p className="font-semibold text-4xl text-white/60">18</p>
                <p className="text-sky-700">+27% this quater</p>
              </div>

              <div className="space-y-2 p-3">
                <p className="flex items-center gap-2">
                  <Image
                    src="/icon/chart.svg"
                    alt="Apply"
                    width={24}
                    height={24}
                  />
                  Employee Growth
                </p>
                <p className="font-semibold text-4xl text-white/60">156%</p>
                <p className="text-sky-700">+27% this quater</p>
              </div>
              <div className="space-y-2 p-3">
                <p className="flex items-center gap-2">
                  <Image
                    src="/icon/heart.svg"
                    alt="Apply"
                    width={24}
                    height={24}
                  />
                  Retention rate
                </p>
                <p className="font-semibold text-4xl text-white/60">94%</p>
                <p className="text-sky-700">+27% this quater</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <img
            src="/heroimg.svg"
            alt="Team meeting"
            className="rounded-lg w-full h-auto"
          />

          {/* Small overlay image */}
          <img
            src="/herostuff.svg"
            alt="Badge"
            width={200}
            className="absolute -top-6 -right-6 shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
