import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "3D Solar System",
    description:
      "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    skills: ["React", "Three.js", "JavaScript", "Tailwind CSS"],
    imageUrl: "/black-screen.jpg",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "E-commerce Website",
    description:
      "A fully functional e-commerce platform with features like product browsing, cart management, and a checkout process.",
    skills: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    imageUrl: "/black-screen.jpg",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A productivity app to help users organize tasks, set deadlines, and track their progress with an intuitive interface.",
    skills: ["React", "Firebase", "Framer Motion", "TypeScript"],
    imageUrl: "/black-screen.jpg",
    liveUrl: "#",
    codeUrl: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-background items-center justify-center px-4 py-8 sm:px-6 md:py-12 lg:py-16 xl:py-32"
    >
      <div className="text-center mb-8 md:mb-12 xl:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary font-poppins">
          Projects
        </h2>
        
      </div>

      {/* Project Cards Container */}
      <div className="font-lato max-w-80 sm:max-w-96 md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="card-projects overflow-hidden flex flex-col group"
          >
            {/* Image */}
            <div className="relative">
              <img
                src="black-screen.jpg"
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  quality={95}
                  width={280}
                  height={60}
                  className="rounded-lg transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              {/* Title & Description */}
              <h3 className="text-lg lg:text-xl font-bold font-poppins text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-lato mb-4 flex-grow text-sm lg:text-base">
                {project.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-bold text-sm mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-muted-background/60 text-primary text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-auto pt-4 border-t border-border flex items-center justify-center gap-3 lg:gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-custom button-primary py-3 px-8 sm:px-6 md:px-8 lg:px-12 inline-flex items-center justify-center gap-2 h-10 text-sm md:text-base font-poppins"
                >
                  Live Demo
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-custom py-3 px-6 sm:px-8 lg:px-10 inline-flex items-center justify-center h-10 text-sm md:text-base font-poppins"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
