interface Skills {
    imgSrc: string;
    imgAlt: string;
}

const SkillsList: Skills[] = [
    { imgSrc: "assets/html.png", imgAlt: "html" },
    { imgSrc: "assets/css.png", imgAlt: "css" },
    { imgSrc: "assets/js.png", imgAlt: "javascript" },
    { imgSrc: "assets/ts.png", imgAlt: "typescript" },
    { imgSrc: "assets/react.png", imgAlt: "react" },
    { imgSrc: "assets/next.png", imgAlt: "next.js" },
    { imgSrc: "assets/tailwind.png", imgAlt: "tailwind css" },
    { imgSrc: "assets/node.png", imgAlt: "node.js" },
];

const SkillsCarousel: React.FC = () => {
    return (
      <div className="flex overflow-hidden">
        <ul className="flex flex-shrink-0 animate-infinite-scroll gap-10 py-4">
          {[...SkillsList, ...SkillsList].map((skill) => {
  
            return (
              <li key={skill.imgAlt} className="flex items-center gap-2">
                <img className="w-32 h-32 md:w-60 md:h-60" src={skill.imgSrc}></img>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default SkillsCarousel;