import React from "react";

const skillsData = [
  [
    { icon: "/react_logo.png", label: "React.js", value:"test1" },
    { icon: "/js_logo.png", label: "JavaScript", value:"test2" },
    { icon: "/html_logo.png", label: "HTML5", value:"test3" },
    { icon: "/css_logo.png", label: "CSS3", value:"test4" },
    { icon: "/tailwind_logo.png", label: "Tailwind CSS", value:"test5" },
  ],
  [
    { icon: "/python_logo.png", label: "Python", value:"test6" },
    { icon: "/pg_logo.png", label: "PostgreSQL", value:"test7" },
    { icon: "/odoo_logo.png", label: "Odoo", value:"test8" },
  ],
  [
    { icon: "/git_logo.png", label: "Git", value:"test9" },
    { icon: "/figma_logo.png", label: "Figma", value:"test10" },
  ],
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-muted-background font-poppins min-h-screen flex flex-col items-center justify-center py-20 px-4"
    >

      <div className="text-center mb-18">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3 font-poppins">
          SKILLS
        </h2>
        <p className="text-muted-primary text-lg">
          <b>Hover</b> or <b>click</b> over each skill to see details
        </p>
      </div>

      {/* Skills Card */}
      <div className="flex flex-col items-center gap-14">
        {skillsData.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="card-skills flex items-center justify-center flex-wrap gap-x-8 sm:gap-x-12 gap-y-4 py-8 px-6 sm:px-10"
          >
            {row.map((skill) => (
              <div
                key={skill.label}
                className="relative flex items-center gap-3 p-2 cursor-pointer transition-transform duration-300 hover:scale-110 group"
              >
                <img
                  src={skill.icon}
                  alt={`${skill.label} logo`}
                  className="w-8 h-8"
                />
                <span className="text-primary whitespace-nowrap text-xl">
                  {skill.label}
                </span>

                {/* Tooltrip */}
                <div class="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
                  <div class="relative p-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                    <div class="space-y-2">
                      <p class="text-sm text-gray-300">
                        {skill.value}
                      </p>
                    </div>

                    <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50"></div>
                    <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rotate-45 border-r border-b border-white/10"></div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
