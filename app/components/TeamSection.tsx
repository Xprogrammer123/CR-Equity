// app/components/TeamSection.tsx
import Image from "next/image";

export default function TeamSection() {
  const team = [
    "/img3.png",
    "/img3.png",
    "/img2.png",
    "/img1.png", // Jenny Wilson
    "/img4.png",
    "/img5.png",
    "/img3.png",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-5xl font-bold text-[#0066B2] mb-6">
          Meet The Team
        </h2>
        <p className="text-lg text-[#0066B2]/80 max-w-3xl mx-auto mb-20">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your SaaS.
        </p>

        {/* REAL OVERLAPPING WAVE – EXACTLY LIKE YOUR IMAGE */}
        <div className="relative flex justify-center items-end -space-x-8 md:-space-x-12">
          {team.map((src, i) => {
            const isJenny = i === 3;

            return (
              <div
                key={i}
                className={`
                  relative transition-all duration-300 hover:-translate-y-3
                  ${i === 0 && "z-30"}
                  ${i === 1 && "z-20"}
                  ${i === 2 && "z-10"}
                  ${i === 3 && "z-50"}
                  ${i === 4 && "z-10"}
                  ${i === 5 && "z-20"}
                  ${i === 6 && "z-30"}
                  ${i === 0 && "-translate-y-1"}
                  ${i === 1 && "-translate-y-3"}
                  ${i === 2 && "translate-y-6"}
                  ${i === 3 && "translate-y-12 md:translate-y-16"}
                  ${i === 4 && "translate-y-6"}
                  ${i === 5 && "-translate-y-3"}
                  ${i === 6 && "-translate-y-1"}
                `}
              >
                {/* Orange background circle behind Jenny */}
                {isJenny && (
                  <div className="absolute inset-0 -m-10 rounded-full -z-10 pointer-events-none" />
                )}

                {/* Photo */}
                <div
                  className={`
                    rounded-full overflow-hidden shadow-2xl
                    ${isJenny 
                      ? "w-56 h-56 md:w-72 md:h-72" 
                      : "w-40 h-40 md:w-52 md:h-52"
                    }
                  `}
                >
                  <Image
                    src={src}
                    alt="Team member"
                    width={isJenny ? 288 : 208}
                    height={isJenny ? 288 : 208}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Speech Bubble – Only Jenny */}
                {isJenny && (
                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-50">
                    <div className="bg-white px-8 py-4 rounded-3xl shadow-2xl border border-gray-100 whitespace-nowrap">
                      <p className="font-bold text-gray-900 text-xl">Jenny Wilson</p>
                      <p className="text-gray-600 text-sm">Co-Founder, CEO</p>
                    </div>
                    {/* Pointing tail */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 
                      border-l-8 border-l-transparent
                      border-r-8 border-r-transparent
                      border-t-12 border-t-white" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}