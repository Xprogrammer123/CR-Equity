import React from "react";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="bg-white text-black min-h-screen px-4 md:px-0 py-1">
      <Header />
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Shape the Future of <br />
            <span className="bg-blue-500 bg-clip-text text-transparent">
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
            <Link
              className="bg-white text-blue-500 px-6 py-3 rounded-xl flex items-center gap-2 font-semibold"
              href="/auth/signup"
            >
              <Image src="/icon/plane.svg" alt="Apply" width={24} height={24} />{" "}
              Apply
            </Link>
            <button className="px-6 py-3 rounded-xl bg-blue-500  border border-white flex items-center gap-2 font-semibold text-white">
              <Image src="/icon/play.svg" alt="Apply" width={24} height={24} />
              Watch success story
            </button>
          </div>

          <div className="mt-3 bg-gray-100 border border-gray-200 p-4 rounded-xl max-w-xl">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">Live Company Metrics</h3>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full border border-blue-500 bg-white"></span>
                <span className="w-2 h-2 rounded-full border border-blue-500 bg-white"></span>
                <span className="w-2 h-2 rounded-full border border-blue-500 bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="bg-white space-y-2 p-3 rounded-lg">
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

              <div className="space-y-2 p-3 bg-white rounded-lg ">
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
                <p className="text-sky-700">Across 6 departments</p>
              </div>
              <div className="space-y-2 p-3 bg-white rounded-lg">
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
                <p className="text-sky-700">Year after Year</p>
              </div>

              <div className="space-y-2 p-3 bg-white rounded-lg">
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
                <p className="text-sky-700">Industry Leading</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block flex-1 relative">
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
