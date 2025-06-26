import React from "react";

interface ExperienceItem {
  company: string;
  position: string;
  years: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    company: "RedNBlue",
    position: "Backend Developer",
    years: "2025 - Present",
    description:
      "Worked on backend development using TypeScript, Cloudflare Workers, Hono, SQLite with Drizzle ORM, and Node.js. Built serverless APIs, integrated third-party services, and developed AI agents with OpenAI and Cloudflare SDKs.",
  },
  // Add more experience items as needed
];

const Experience: React.FC = () => {
  return (
    <section className="w-4/5 lg:w-3/5 mx-auto mb-16">
      <h1 className="pixel-btn mb-8">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className="bg-[#0a0a0a] border-4 border-[#28133a] rounded-lg shadow-lg p-6 flex flex-col gap-2 pixel-font text-white relative"
            style={{ boxShadow: "inset -6px -6px 0px #000" }}
          >
            <div className="text-lg md:text-xl font-bold text-purple-400 mb-1">
              {exp.company}
            </div>
            <div className="text-md md:text-lg text-[#fff] mb-1">
              {exp.position}
            </div>
            <div className="text-xs md:text-sm text-purple-300 mb-2">
              {exp.years}
            </div>
            <div className="text-sm md:text-base text-white">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
