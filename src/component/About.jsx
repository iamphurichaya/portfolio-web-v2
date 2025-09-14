import React from "react";
import { Monitor, CodeXml, RefreshCcw } from "lucide-react";

// The Mail icon is a custom SVG component with a reduced size.
const MailIcon = () => (
  <svg width="22.8" height="22.8" viewBox="0 0 24 24" className="text-white">
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
      className="bg-muted-background min-h-screen px-[0.95rem] sm:px-[1.425rem] pt-[3.8rem] sm:pt-[4.75rem] p-[3.325rem]"
    >
      <h2 className="font-poppins font-bold text-[1.78rem] sm:text-[2.14rem] lg:text-[3.56rem] ml-[6.65rem]">
        ABOUT
      </h2>

      <div className="grid grid-cols-[2fr_1.5fr] gap-[0.95rem] ml-[1.425rem] mb-[1.9rem] mr-[1.9rem] mt-[1.425rem] items-center">
        <div className="card font-lato text-muted-primary text-[20px] p-[2.375rem] ml-[2.375rem] leading-relaxed">
          <p className="mb-[1.425rem]">
            I’m a recent graduate with 9 months of internship experience as a
            Programmer. I’m passionate about web development and eager to start
            my career as a{" "}
            <span className="font-bold text-[1.425rem]">
              Junior Frontend Developer
            </span>
          </p>
          <p className="mb-[1.425rem]">
            I have dedicated time to learning and refining my skills in frontend
            development including{" "}
            <span className="font-bold text-[1.425rem]">
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
          <h1 className="font-poppins font-bold text-[1.78rem] mb-[0.95rem] ml-[3.8rem]">
            Core Skills
          </h1>
          {coreSkills.map((item, index) => {
            const CoreSkills = item.icon;
            return (
              <div
                key={index}
                className="flex font-lato gap-[0.95rem] p-[0.95rem] ml-[2.85rem] mb-[0.95rem] items-center"
              >
                <div className="flex-shrink-0 flex items-center justify-center bg-primary rounded-full h-[2.85rem] w-[2.85rem] text-white">
                  <CoreSkills className="h-5 w-5" />
                </div>
                <div className="text-[20.9px]">
                  <p className=" text-primary">{item.label}</p>
                  <p className=" text-muted-primary/80">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="font-poppins p-[1.425rem] flex space-x-[4.75rem] items-center justify-center text-[1.19rem]">
          <button variant="outline" className="button-custom button-muted">
            Download CV
          </button>
          <button
            variant="outline"
            onClick={scrollToContact}
            className="button-custom button-primary flex items-center gap-[0.95rem]"
          >
            <span>Hire Me</span>
            <MailIcon />
          </button>
        </div>
        <div className="font-lato grid grid-cols-[1.5fr_2fr] ml-[3.8rem]">
          {expInfo.map((item, index) => (
            <div key={item.label} className="">
              <p className="font-bold text-[2.14rem]">{item.value}</p>
              <p className="text-xl mb-[0.475rem]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
