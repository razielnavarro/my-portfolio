"use client";

// Define a type for the project props

interface ProjectCardsProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  techStack: string[];
}

// Map tech stack names to background colors
const techStackColors: { [key: string]: string } = {
  React: "bg-blue-500",
  TypeScript: "bg-blue-400",
  "Tailwind CSS": "bg-teal-400",
  "Fortnite API": "bg-yellow-500",
  Shopify: "bg-green-500",
  WordPress: "bg-gray-800",
  "Next.js": "bg-black",
};

// Reusable ProjectCard component
const ProjectCard: React.FC<ProjectCardsProps> = ({
  href,
  imgSrc,
  imgAlt,
  title,
  techStack,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="relative md:w-full flex flex-col">
        {/* Image */}
        <img src={imgSrc} alt={imgAlt} className="w-full h-auto" />
        {/* Title */}
        <div className="absolute bottom-0 left-3 py-2">{title}</div>
      </div>
      {/* Tech stack */}
      <div className="flex flex-wrap space-x-2 py-2 mt-2 w-full">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className={`${
              techStackColors[tech] || "bg-gray-200"
            } text-white px-2 py-1 m-1 text-xs rounded`}
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
};

// ProjectCards component

const ProjectCards = () => {
  const projectData: ProjectCardsProps[] = [
    {
      href: "https://my-fortnite-tracker.vercel.app/",
      imgSrc: "assets/FortniteHub.png",
      imgAlt: "Fortnite Hub",
      title: "Fortnite Hub",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Fortnite API",
      ],
    },
    {
      href: "https://www.proequip.com.pa/",
      imgSrc: "assets/proequip.png",
      imgAlt: "PROEQUIP, S.A.",
      title: "Proequip, S.A.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      href: "https://superbonita507.com/",
      imgSrc: "assets/superbonita.png",
      imgAlt: "Superbonita Cosmeticos",
      title: "Superbonita Cosmeticos",
      techStack: ["Shopify"],
    },
    {
      href: "https://www.selectamagazine.com.pa/",
      imgSrc: "assets/selecta.png",
      imgAlt: "Selecta Magazine",
      title: "Selecta Magazine",
      techStack: ["WordPress"],
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto w-4/5 lg:w-3/5 justify-items-center">
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          href={project.href}
          imgSrc={project.imgSrc}
          imgAlt={project.imgAlt}
          title={project.title}
          techStack={project.techStack}
        />
      ))}
    </section>
  );
};

export default ProjectCards;
