"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const teamMembers = [
  { name: "Emma Stone", title: "Product Designer", img: "/img3.png" },
  { name: "Liam Chen", title: "Frontend Lead", img: "/img3.png" },
  { name: "Sophia Rivera", title: "UX Researcher", img: "/img2.png" },
  { name: "Jenny Wilson", title: "Co-Founder, CEO", img: "/img1.png" },
  { name: "Marcus Johnson", title: "Head of Engineering", img: "/img4.png" },
  { name: "Olivia Park", title: "Marketing Director", img: "/img5.png" },
  { name: "Noah Kim", title: "Customer Success", img: "/img3.png" },
  { name: "Ava Lee", title: "Growth Hacker", img: "/img3.png" },
  { name: "Ethan Brown", title: "Data Analyst", img: "/img2.png" },
];

export default function TeamSliderCustom() {
  const [activeIndex, setActiveIndex] = useState(3);

  // auto-slide every 4 s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visible = (() => {
    const len = teamMembers.length;
    const arr = [];
    for (let i = -3; i <= 3; i++) {
      const idx = (activeIndex + i + len) % len;
      arr.push({ member: teamMembers[idx], pos: i, isActive: i === 0 });
    }
    return arr;
  })();

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-black mb-6">Meet The Team</h2>
        <p className="text-md text-black max-w-md mx-auto mb-20">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your SaaS.
        </p>

        {/* carousel */}
        <div className="relative h-96 md:h-[28rem] flex items-center justify-center">
          <div className="flex items-end justify-center -space-x-1 md:-space-x-2 transition-all duration-1000 ease-in-out">
            {visible.map(({ member, pos, isActive }, i) => {
              const lift =
                pos === 0 ? "translate-y-0" : pos === 1 || pos === -1
                  ? "translate-y-3"
                  : pos === 2 || pos === -2
                  ? "translate-y-6"
                  : "translate-y-9";
              const rotate =
                pos === 0 ? "rotate-0"
                  : pos < 0 ? "rotate-2"
                  : "-rotate-2";

              return (
                <div
                  key={i}
                  className={`relative flex flex-col items-center transition-all duration-[1200ms] ease-in-out ${lift} ${rotate} ${
                    isActive ? "z-40 scale-105 opacity-100" : "z-10 scale-90 opacity-80"
                  }`}
                >
                  <div
                    className={`rounded-full overflow-hidden border-4 border-white shadow-2xl transition-all duration-1000 ease-in-out ${
                      isActive
                        ? "w-60 h-60 md:w-72 md:h-72"
                        : "w-44 h-44 md:w-52 md:h-52"
                    }`}
                  >
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={288}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {isActive && (
                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out">
                      <div className="bg-white px-4 py-2 rounded-xl shadow-xl border border-gray-100 whitespace-nowrap">
                        <p className="font-bold text-gray-900 text-md">
                          {member.name}
                        </p>
                        <p className="text-gray-600 text-xs mt-1">
                          {member.title}
                        </p>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 
                        border-l-8 border-l-transparent
                        border-r-8 border-r-transparent
                        border-t-[12px] border-t-white" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
