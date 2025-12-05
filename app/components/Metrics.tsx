import React from "react";
import Image from "next/image";

const metricsData = [
  {
    title: "Loan Approved",
    value: "$47M",
    subtitle: "Loan Transacted",
    icon: "/icon/dollar.svg",
    gradient:
      "linear-gradient(to bottom right, #A3E4CF 0%, #A3E4CF 60%, #FFFFFF 100%)",
    subsubtitle: "+340% growth",
  },
  {
    title: "Client Success Rate",
    value: "98.7%",
    subtitle: "Loan approval accuracy",
    icon: "/icon/check.svg",
    gradient:
      "linear-gradient(to bottom right, #8EDEEC 0%, #8EDEEC 60%, #FFFFFF 100%)",
    subsubtitle: "industry leading",
  },
  {
    title: "Team Growth",
    value: "156%",
    subtitle: "Year-over-year expansion",
    icon: "/icon/shoe.svg",
    gradient:
      "linear-gradient(to bottom right, #F9C267 0%, #F9C267 60%, #FFFFFF 100%)",
    subsubtitle: "Acelerating",
  },
  {
    title: "AI Models Deployed",
    value: "23",
    subtitle: "Production algorithms",
    icon: "/icon/dollar.svg",
    gradient:
      "linear-gradient(to bottom right, #4C63A2 0%, #4C63A2 60%, #FFFFFF 100%)",
    subsubtitle: "+8% this quater",
  },
  {
    title: "Market Coverage",
    value: "47 States",
    subtitle: "Commercial lending reach",
    icon: "/icon/dollar.svg",
    gradient:
      "linear-gradient(to bottom right, #5C97F7 0%, #5C97F7 60%, #FFFFFF 100%)",
    subsubtitle: "Expanding Rapidly",
  },
  {
    title: "Employee Satisfaction",
    value: "4.8/5",
    subtitle: "Internal survey results",
    icon: "/icon/dollar.svg",
    gradient:
      "linear-gradient(to bottom right, #F36E6E 0%, #F36E6E 60%, #FFFFFF 100%)",
    subsubtitle: "Consistently High",
  },
];

const Metrics = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <p className="flex items-center gap-2 justify-center mx-auto text-blue-500 font-bold text-base sm:text-lg mb-5">
          <Image src="/icon/chart2.svg" alt="Apply" width={24} height={24} />
          Company Performance
        </p>

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
          <span className="text-[rgba(30,58,138,1)] block">
            Driving Innovation Through
          </span>
          <span className="text-blue-500 block">Measurable Impact</span>
        </h2>

        <p className="text-gray-400 flex items-center max-w-3xl mx-auto font-semibold text-center mb-12 text-sm sm:text-base md:text-lg px-2">
          Our growth metrics reflect not just business success, but the
          collective impact of brilliant minds working together to revolutionize
          commercial lending through AI innovation.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {metricsData.map((metric) => (
            <div
              key={metric.title}
              className="bg-white p-5 sm:p-6 rounded-lg shadow flex flex-col items-start gap-2 transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Gradient div with icon */}
              <div
                className="w-20 h-16 sm:w-24 sm:h-20 rounded-2xl flex items-center justify-center shadow-xl shrink-0"
                style={{ background: metric.gradient }}
              >
                <Image
                  src={metric.icon}
                  alt={metric.title}
                  width={30}
                  height={30}
                  className="sm:w-[34px] sm:h-[34px]"
                />
              </div>

              {/* Metric Title and Values */}
              <h4 className="text-[#8EDEEC] text-base sm:text-lg font-semibold mt-2">
                {metric.title}
              </h4>
              <p className="text-4xl sm:text-5xl text-[#1370AA] font-bold mt-1">
                {metric.value}
              </p>
              <p className="text-gray-500 font-semibold text-xs sm:text-sm mt-0">
                {metric.subtitle}
              </p>
              <p className="text-[#0AA1C8] font-semibold text-xs sm:text-sm mt-0 flex items-center gap-2">
                <span
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full shadow-md"
                  style={{ background: metric.gradient }}
                ></span>
                {metric.subsubtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
