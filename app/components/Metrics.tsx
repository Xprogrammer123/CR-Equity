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
      <div className="container mx-auto">
        <p className="flex items-center gap-2 justify-center mx-auto text-cyan-500 font-bold text-lg mb-5">
          <Image src="/icon/chart2.svg" alt="Apply" width={24} height={24} />
          Company Performance
        </p>

        <h2 className="text-center text-6xl font-bold mb-5">
          <span className="text-[rgba(30,58,138,1)]">
            Driving Innovation Through
          </span>
          <br />
          <span className="text-cyan-500">Measurable Impact</span>
        </h2>

        <p className="text-gray-400 flex items-center max-w-3xl mx-auto font-semibold text-center mb-15 text-lg">
          Our growth metrics reflect not just business success, but the
          collective impact of brilliant minds working together to revolutionize
          commercial lending through AI innovation.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {metricsData.map((metric) => (
            <div
              key={metric.title}
              className="bg-white p-6 rounded-lg shadow flex flex-col items-start gap-2"
            >
              {/* Gradient div with icon */}
              <div
                className="w-24 h-20 rounded-2xl flex items-center justify-center shadow-xl"
                style={{
                  background: metric.gradient,
                }}
              >
                <Image
                  src={metric.icon}
                  alt={metric.title}
                  width={34}
                  height={34}
                />
              </div>

              {/* Metric Title and Values */}
              <h4 className="text-[#8EDEEC] text-lg font-semibold">
                {metric.title}
              </h4>
              <p className="text-5xl text-[#1370AA] font-bold mt-1">
                {metric.value}
              </p>
              <p className="text-gray-500 font-semibold text-sm mt-0">
                {metric.subtitle}
              </p>
              <p className="text-[#0AA1C8] font-semibold text-sm mt-0 flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full shadow-2xl"
                  style={{
                    background: metric.gradient,
                  }}
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
