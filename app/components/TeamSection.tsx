// app/components/TeamSection.tsx
export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold mb-4">Meet The Team</h2>
        <p className="text-lg max-w-2xl mx-auto mb-20 text-gray-600">
          Chatty gives you the tools & components you need to create truly professional
          websites, landing pages and more — right in your chat.
        </p>

        {/* Perfect wave layout with slight tip overlap only */}
        <div className="relative h-80 flex items-center justify-center">
          {/* Left side */}
          <img
            src="https://randomuser.me/api/portraits/women/81.jpg"
            className="absolute left-0 md:left-10 w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-8 border-white shadow-2xl z-10"
            alt=""
          />
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            className="absolute left-20 md:left-36 w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-8 border-white shadow-2xl z-20 -mt-6"
            alt=""
          />
          <img
            src="https://randomuser.me/api/portraits/men/86.jpg"
            className="absolute left-44 md:left-64 w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-8 border-white shadow-2xl z-30 -mt-12"
            alt=""
          />

          {/* CENTER – Jenny Wilson */}
          <div className="relative z-50 mx-auto">
            <img
              src="https://randomuser.me/api/portraits/women/90.jpg"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-10 border-orange-400 shadow-2xl"
              alt="Jenny Wilson"
            />

            {/* Speech bubble with pointer – clean, above the image */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2">
              <div className="bg-white px-8 py-4 rounded-3xl shadow-2xl whitespace-nowrap">
                <p className="font-bold text-[#0077B6] text-xl">Jenny Wilson</p>
                <p className="text-gray-600">Head of People</p>
              </div>
              {/* Pointing triangle */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 
                border-l-8 border-l-transparent
                border-r-8 border-r-transparent
                border-t-12 border-t-white"></div>
            </div>
          </div>

          {/* Right side */}
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="absolute right-44 md:right-64 w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-8 border-white shadow-2xl z-30 -mt-12"
            alt=""
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="absolute right-20 md:right-36 w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-8 border-white shadow-2xl z-20 -mt-6"
            alt=""
          />
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            className="absolute right-0 md:right-10 w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-8 border-white shadow-2xl z-10"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}