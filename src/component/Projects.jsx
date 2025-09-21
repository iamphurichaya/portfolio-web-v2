import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "3D Solar System",
    description: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    skills: ["React", "Three.js", "JavaScript", "Tailwind CSS"],
    imageUrl: "/black-screen.jpg",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "E-commerce Website",
    description: "A fully functional e-commerce platform with features like product browsing, cart management, and a checkout process.",
    skills: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
    imageUrl: "/black-screen.jpg",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity app to help users organize tasks, set deadlines, and track their progress with an intuitive interface.",
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
      className="bg-background min-h-screen items-center justify-center px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl pt-8 font-bold text-primary mb-3 font-poppins">
          Projects
        </h2>
        <p className="text-xl text-muted-foreground font-lato max-w-2xl mx-auto">
          Here are some of the projects I've worked on.
        </p>
      </div>

      {/* Project Cards Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="card-projects overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6 flex flex-col flex-grow">
              {/* Title & Description */}
              <h3 className="text-xl font-bold font-poppins text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-lato mb-4 flex-grow">
                {project.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="font-bold text-sm mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-auto pt-4 border-t border-border flex items-center justify-between gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-custom button-primary inline-flex items-center gap-2 h-10"
                >
                  
                  Live Demo
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-custom button-p inline-flex items-center gap-2 h-10"
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