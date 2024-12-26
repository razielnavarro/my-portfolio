import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCards";
import SkillsCarousel from "./components/SkillsCarousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className="mt-10 md:mt-[100px] flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-65vh md:min-h-80vh">

      {/* Section with name and role */}
      <section className="gap-y-2 text-center md:text-left px-10 mb-12">
      <h1 className="text-4xl md:text-5xl">
        Raziel Navarro
      </h1>
      <h1 className="text-xl md:text-2xl py-2 text-transparent bg-clip-text bg-purple-gradient">
        Full Stack Developer
      </h1>
      </section>

      {/* Aside section with video game character image */}
      <aside className="flex justify-center md:justify-start">
        <img alt="Kirby" src="assets\Kirby.gif" className="w-10/12 md:h-auto"></img>
      </aside>
    </main>

      {/* Section with skills */}
      <div className="text-center">
      <h1 className="pixel-btn">Skills</h1>
        {/* <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 justify-items-center w-auto md:w-3/4 lg:w-2/4 mx-auto mb-12">
        <div className="text-center text-xs md:text-md"><img className="w-32 h-32 md:w-60 md:h-60 object-contain" src="assets/html.png" alt="html"></img>HTML</div>
        <div className="text-center text-xs md:text-md"><img className="w-32 h-32 md:w-60 md:h-60 object-contain" src="assets/css.png" alt="css"></img>CSS</div>
        <div className="text-center text-xs md:text-md"><img className="w-32 h-32 md:w-60 md:h-60 object-contain" src="assets/js.png" alt="javascript"></img>JavaScript</div>
        <div className="text-center text-xs md:text-md"><img className="w-32 h-32 md:w-60 md:h-60 object-contain" src="assets/ts.png" alt="typescript"></img>TypeScript</div>
        <div className="text-center text-xs md:text-md"><img className="w-32 h-32 md:w-60 md:h-60 object-contain" src="assets/react.png" alt="react"></img>React</div>
        <div className="text-center text-xs md:text-md"><img className="w-32 h-32 md:w-60 md:h-60 object-contain" src="assets/next.png" alt="next.js"></img>Next.js</div>
        <div className="text-center text-xs md:text-md"><img className="w-32 h-32 md:w-60 md:h-60 object-contain" src="assets/tailwind.png" alt="tailwind css"></img>Tailwind CSS</div>
        <div className="text-center text-xs md:text-md"><img className="w-32 h-32 md:w-60 md:h-60 object-contain" src="assets/node.png" alt="node.js"></img>Node.js</div>
      </section> */}
      <SkillsCarousel/>
      </div>

      {/* Section with projects */}
      <div id="projects" className="text-center pb-12">
      <h1 className="pixel-btn">Projects</h1>
      <ProjectCard />
      </div>

    {/* Footer for the website */}
    <Footer/>
    </>
  );
}
