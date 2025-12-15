import React from "react";

const skillsData = [
  [
    { icon: "/react_logo.png", label: "React.js", value: "test1" },
    { icon: "/js_logo.png", label: "JavaScript", value: "test2" },
    { icon: "/html_logo.png", label: "HTML5", value: "test3" },
    { icon: "/css_logo.png", label: "CSS3", value: "test4" },
    { icon: "/tailwind_logo.png", label: "Tailwind CSS", value: "test5" },
  ],
  [
    { icon: "/python_logo.png", label: "Python", value: "test6" },
    { icon: "/pg_logo.png", label: "PostgreSQL", value: "test7" },
    { icon: "/odoo_logo.png", label: "Odoo", value: "test8" },
  ],
  [
    { icon: "/git_logo.png", label: "Git", value: "test9" },
    { icon: "/figma_logo.png", label: "Figma", value: "test10" },
  ],
];

const skillsDataMobile = [
  [
    { icon: "/react_logo.png", label: "React.js", value: "test1" },
    { icon: "/js_logo.png", label: "JavaScript", value: "test2" },
    { icon: "/html_logo.png", label: "HTML5", value: "test3" },
    { icon: "/css_logo.png", label: "CSS3", value: "test4" },
    { icon: "/tailwind_logo.png", label: "Tailwind CSS", value: "test5" },
    { icon: "/python_logo.png", label: "Postman", value: "test6" },
    { icon: "/pg_logo.png", label: "RESTful API", value: "test7" },
    { icon: "/odoo_logo.png", label: "TypeScript", value: "test8" },
    { icon: "/git_logo.png", label: "Git", value: "test9" },
    { icon: "/figma_logo.png", label: "Figma", value: "test10" },
  ],
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-muted-background font-poppins flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="sm:max-w-96 md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-3 font-poppins">
            SKILLS
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-lato">
            <b>Hover</b> or <b>click</b> over each skill to see details
          </p>
        </div>

        {/* Skills Card - Mobile */}
        <div className="sm:hidden flex flex-col items-center justify-center gap-8">
          <div className="grid grid-cols-3 gap-6">
            {skillsDataMobile[0].map((skill) => (
              <div key={skill.label} className="flex flex-col items-center justify-center relative group">
                <img
                  src={skill.icon}
                  alt={`${skill.label} logo`}
                  className="w-8 h-8"
                />
                <span className="">{skill.label}</span>
                
                {/* Tooltrip */}
                  <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
                    <div className="relative p-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-300">{skill.value}</p>
                      </div>

                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50"></div>
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rotate-45 border-r border-b border-white/10"></div>
                    </div>
                  </div>
                
              </div>
            ))}
          </div>
        </div>

        {/* Skills Card - Desktop */}
        <div className="hidden sm:flex flex-col items-center gap-8 lg:gap-12 xl:gap-14">
          {skillsData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="card-skills py-4 lg:py-3 px-6 md:px-8 lg:px-10 xl:px-12 flex flex-row items-center justify-center gap-x-8 lg:gap-x-12 gap-y-4"
            >
              {row.map((skill) => (
                <div
                  key={skill.label}
                  className="relative flex items-center gap-2 lg:gap-3 lg:p-2 cursor-pointer transition-transform duration-300 hover:scale-110 group"
                >
                  <img
                    src={skill.icon}
                    alt={`${skill.label} logo`}
                    className="w-6 h-6 lg:w-8 lg:h-8"
                  />
                  <span className="text-primary whitespace-nowrap text-sm lg:text-xl xl:text-2xl">
                    {skill.label}
                  </span>

                  {/* Tooltrip */}
                  <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
                    <div className="relative p-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                      <div className="space-y-2">
                        <p className="text-sm text-gray-300">{skill.value}</p>
                      </div>

                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50"></div>
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rotate-45 border-r border-b border-white/10"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
