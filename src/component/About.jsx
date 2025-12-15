import React from "react";
import { motion } from "motion/react";
import { Monitor, CodeXml, RefreshCcw, Mail } from "lucide-react";

const MailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="text-white w-4 h-4 lg:w-6 lg:h-6"
  >
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
    <section id="about" className="bg-muted-background p-8 lg:py-18 xl:p-20">
      <div className="max-w-[100rem] mx-auto">
        <h2 className="flex items-center justify-center md:items-start md:justify-start font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl py-4 xl:py-8 md:px-8 xl:px-42">
          ABOUT
        </h2>

        <div className="">
          <div className="grid md:grid-cols-[2fr_1.5fr] gap-4 items-center justify-center xl:ml-18">
            <div className="card font-lato text-muted-primary text-sm lg:text-xl xl:text-2xl pt-4 py-4 p-8 lg:p-10 xl:p-12 xl:ml-10 leading-relaxed">
              <p className="mb-4 lg:mb-6">
                I’m a recent graduate with 9 months of internship experience as
                a Programmer. I’m passionate about web development and eager to
                start my career as a{" "}
                <span className="font-bold text-base lg:text-xl xl:text-2xl">
                  Junior Frontend Developer
                </span>
              </p>

              <p className="mb-4 lg:mb-6">
                I have dedicated time to learning and refining my skills in
                frontend development including{" "}
                <span className="font-bold text-base lg:text-xl xl:text-2xl">
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
                Currently, I continue gaining hands-on frontend experience
                through new projects, and I am fully ready to contribute
                actively and collaborate with a team.
              </p>
            </div>

            <div className="w-full grid justify-center">
              <h1 className="font-poppins font-bold text-lg lg:text-2xl xl:text-4xl pt-4 lg:mb-4 lg:pl-18 lg:pt-4">
                TECHNICAL EXPERIENCE
              </h1>
              <div className="">
                {coreSkills.map((item, index) => {
                  const CoreSkills = item.icon;

                  return (
                    <div
                      key={index}
                      className="flex font-lato gap-4 lg:gap-6 xl:gap-8 lg:px-10 xl:px-18 py-4 xl:py-6 items-center"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center bg-primary rounded-full h-10 w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16 text-white">
                        <CoreSkills className="h-4 w-4 lg:h-6 lg:w-6" />
                      </div>

                      <div className="">
                        <p className="text-primary text-base lg:text-xl xl:text-2xl">
                          {item.label}
                        </p>

                        <p className="text-muted-primary/80 text-sm lg:text-xl xl:text-2xl">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:flex order-2 md:order-1 font-poppins xl:p-8 space-x-4 md:space-x-8 xl:space-x-20 items-center justify-center text-sm md:text-base xl:text-2xl">
              <a
                href="/Phurichaya_Isariyadol.pdf"
                download
                variant="outline"
                className="button-custom button-muted py-3 px-8 lg:px-12"
              >
                <span>Download CV</span>
              </a>
              <button
                variant="outline"
                onClick={scrollToContact}
                className="button-custom button-primary flex items-center gap-2 lg:gap-3 py-3 px-8 lg:px-12"
              >
                <span>Hire Me</span>
                <div className="text-primary-foreground">
                  <MailIcon />
                </div>
              </button>
            </div>
            <div className="order-1 w-full grid justify-center">
              <div className="order-1 xl:order-2 font-lato grid grid-cols-[1.5fr_2fr] gap-x-16 xl:gap-x-26">
                {expInfo.map((item, index) => (
                  <div key={item.label} className="">
                    <p className="font-bold text-xl lg:text-2xl xl:text-4xl">
                      {item.value}
                    </p>

                    <p className="text-base lg:text-xl xl:text-2xl mb-2">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
