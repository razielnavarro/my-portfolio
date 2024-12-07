'use client'

// Define a type for the project props

interface ProjectCardsProps {
    href: string;
    imgSrc: string;
    imgAlt: string;
    title: string;
}

// Reusable ProjectCard component
const ProjectCard: React.FC<ProjectCardsProps> = ({ href, imgSrc, imgAlt, title }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="relative md:w-full">
                <img src={imgSrc} alt={imgAlt} />
                <div className="absolute bottom-0 left-3 py-2">{title}</div>
            </div>
        </a>
    );
}

// ProjectCards component

const ProjectCards = () => {
    const projectData: ProjectCardsProps[] = [
        {
            href: "https://my-fortnite-tracker.vercel.app/",
            imgSrc: "assets/FortniteHub.png",
            imgAlt: "Fortnite Hub",
            title: "Fortnite Hub"
        },
        {
            href: "https://my-fortnite-tracker.vercel.app/",
            imgSrc: "assets/superbonita.png",
            imgAlt: "Superbonita Cosmeticos",
            title: "Superbonita Cosmeticos"
        },
        {
            href: "https://my-fortnite-tracker.vercel.app/",
            imgSrc: "assets/selecta.png",
            imgAlt: "Selecta Magazine",
            title: "Selecta Magazine"
        },
        {
            href: "https://my-fortnite-tracker.vercel.app/",
            imgSrc: "assets/FortniteHub.png",
            imgAlt: "Fortnite Hub",
            title: "Fortnite Hub"
        }
    ];  

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto w-4/5 md:w-3/5 justify-items-center">
            {projectData.map((project, index) => (
                <ProjectCard key={index}
                    href={project.href}
                    imgSrc={project.imgSrc}
                    imgAlt={project.imgAlt}
                    title={project.title}
                /> 
            ))}
        </section>
    );
};

export default ProjectCards;