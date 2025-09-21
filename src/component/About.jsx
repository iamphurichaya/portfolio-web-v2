import React from "react";
import { motion } from "motion/react";
import { Monitor, CodeXml, RefreshCcw, Mail } from "lucide-react";

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
    <path
      fill="currentColor"
      d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
    />
  </svg>
);

const coreSkills = [
  {
    icon: Monitor,
    label: "Responsive Web Design",
    value: "Design adaptable websites for all devices",
  },
  {
    icon: CodeXml,
    label: "React Development",
    value: "Building interactive web applications",
  },
  {
    icon: RefreshCcw,
    label: "UI/UX Implementation",
    value: "Converting designs to functional interfaces",
  },
];

const expInfo = [
  { label: "My Projects", value: "3" },
  { label: "Months Experience", value: "9+" },
];

const scrollToContact = () => {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function About() {
  return (
    <section
      id="about"
      className="bg-muted-background min-h-screen sm:px-6 pt-16 sm:pt-20"
    >
      <div className="max-w-[100rem] mx-auto">
        <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-6xl p-8 px-48">
          ABOUT
        </h2>

        <div className="grid grid-cols-[2fr_1.5fr] gap-4 items-center justify-center ml-24">
          <div className="card font-lato text-muted-primary text-2xl p-14 ml-10 leading-relaxed">
            <p className="mb-6">
              I’m a recent graduate with 9 months of internship experience as a
              Programmer. I’m passionate about web development and eager to
              start my career as a{" "}
              <span className="font-bold text-2xl">
                Junior Frontend Developer
              </span>
            </p>

            <p className="mb-6">
              I have dedicated time to learning and refining my skills in
              frontend development including{" "}
              <span className="font-bold text-2xl">
                React.js, JavaScript, Tailwind CSS{" "}
              </span>
              and related technologies. I have also built{" "}
              <a
                href="#projects"
                className="font-bold underline hover:text-muted-primary/80 "
              >
                3 personal projects
              </a>
            </p>

            <p>
              Currently, I continue gaining hands-on frontend experience through
              new projects, and I am fully ready to contribute actively and
              collaborate with a team.
            </p>
          </div>

          <div className="">
            <h1 className="font-poppins font-bold text-4xl mb-4 px-18">
              Core Skills
            </h1>

            {coreSkills.map((item, index) => {
              const CoreSkills = item.icon;

              return (
                <div
                  key={index}
                  className="flex font-lato gap-8 px-18 py-6 items-center"
                >
                  <div className="flex-shrink-0 flex items-center justify-center bg-primary rounded-full h-16 w-16 text-white">
                    <CoreSkills className="h-6 w-6" />
                  </div>

                  <div className="">
                    <p className=" text-primary text-2xl">{item.label}</p>

                    <p className=" text-muted-primary/80 text-xl">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="font-poppins p-8 flex space-x-20 items-center justify-center text-2xl">
            <button variant="outline" className="button-custom button-muted">
              Download CV
            </button>
            <button
              variant="outline"
              onClick={scrollToContact}
              className="button-custom button-primary flex items-center gap-[0.95rem]"
            >
              <span>Hire Me</span>
              <div className="text-primary-foreground">
                <MailIcon />
              </div>
            </button>
          </div>

          <div className="font-lato grid grid-cols-[1.5fr_2fr] ml-18">
            {expInfo.map((item, index) => (
              <div key={item.label} className="">
                <p className="font-bold text-4xl">{item.value}</p>

                <p className="text-2xl mb-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
