// app/components/TeamSection.tsx
import Image from "next/image";

export default function TeamSection() {
  const team = [
    "https://randomuser.me/api/portraits/women/81.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/86.jpg",
    "https://randomuser.me/api/portraits/women/90.jpg", // Jenny Wilson - center
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-5xl font-bold text-[#0066B2] mb-6 tracking-tight">
          Meet The Team
        </h2>

        {/* Subtitle */}
        <p className="text-lg text-[#0066B2]/80 max-w-2xl mx-auto mb-20 leading-relaxed">
          Clarity gives you the blocks & components you need to create a truly
          professional website, landing page or admin panel for your SaaS.
        </p>

        {/* Team Wave – Perfect Arc Layout */}
        <div className="flex justify-center items-end gap-4 sm:gap-6 md:gap-10 lg:gap-12 -mb-12 flex-wrap">
          {team.map((src, i) => {
            const isJenny = i === 3;

            // Vertical offset to create the wave (higher in the middle)
            const lift = [
              "translate-y-8",     // 0
              "translate-y-4",     // 1
              "translate-y-1",     // 2
              "translate-y-16",    // 3 - Jenny (highest)
              "translate-y-1",     // 4
              "translate-y-4",     // 5
              "translate-y-8",     // 6
            ][i];

            return (
              <div
                key={i}
                className={`relative ${lift} transition-all duration-300 hover:-translate-y-4`}
              >
                {/* Orange background circle behind Jenny only */}
                {isJenny && (
                  <div className="absolute inset-0 -m-10 rounded-full bg-orange-200 -z-10" />
                )}

                {/* Team Member Photo */}
                <div
                  className={`
                    relative rounded-full overflow-hidden border-8 border-white shadow-2xl
                    ${isJenny ? "w-52 h-52 md:w-64 md:h-64 z-20" : "w-36 h-36 md:w-48 md:h-48"}
                  `}
                >
                  <Image
                    src={src}
                    alt="Team member"
                    width={isJenny ? 256 : 192}
                    height={isJenny ? 256 : 192}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Speech Bubble Badge – Only for Jenny */}
                {isJenny && (
                  <div className="absolute -top-28 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
                    <div className="bg-white px-8 py-4 rounded-3xl shadow-2xl border border-gray-100">
                      <p className="font-bold text-gray-900 text-xl whitespace-nowrap">
                        Jenny Wilson
Jenny Wilson
                      </p>
                      <p className="text-gray-600 text-sm">Co-Founder, CEO</p>
                    </div>

                    {/* Pointing triangle tail */}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 
                      border-l-8 border-l-transparent
                      border-r-8 border-r-transparent
                      border-t-12 border-t-white"
                    />
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