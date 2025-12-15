import React from "react";
import { ArrowDownToLine } from "lucide-react";
import { motion } from "motion/react";


const scrollToContact = () => {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Home() {
  return (
    <section
      id="home"
      className="font-poppins flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 py-16 gap-y-12 lg:gap-x-20 pt-20 lg:pt-30"
    >
      <div className="order-2 lg:order-1 flex flex-col items-center justify-center lg:items-start lg:justify-start">
        {/* Name */}
        <div className="font-bold text-primary flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <h3 className="mb-2 text-4xl sm:text-5xl lg:text-[80px] xl:text-[106px] font-bold">
            <span className="wave">👋🏻</span> HELLO, I AM
          </h3>
          <h4 className="text-5xl sm:text-6xl lg:text-[98px] xl:text-9xl font-bold">
            PHURICHAYA
          </h4>
        </div>

        {/* Occupation + City */}
        <div className="py-2 text-primary flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <p className="text-2xl sm:text-3xl lg:text-[50px] xl:text-[66px] leading-tight text-[#454545]">
            Front End Developer
          </p>
          <p className="text-lg sm:text-2xl lg:text-4xl xl:text-5xl leading-tight text-[#5d5d5d]">
            based in Bangkok, Thailand
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center justify-center lg:justify-start py-4 w-full">
          <div className="lg:hidden flex-grow h-[1.5px] bg-soft-primary mr-3 sm:block" />
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-base lg:text-lg xl:text-2xl font-bold text-muted-primary px-3">
            Open full-time
          </span>
          <div className=" flex-grow lg:flex-none lg:w-[70%] xl:w-[60%] h-[1.5px] bg-soft-primary" />
        </div>

        {/* Button */}
        <div className="py-4 flex flex-wrap gap-4 xl:space-x-4 justify-center lg:justify-start">
          <a 
          href="/Phurichaya_Isariyadol.pdf" download
          className="button-custom button-primary flex items-center gap-2 py-3 px-12 text-base xl:text-2xl">
            <span>Download CV</span>
            <ArrowDownToLine size={24} color="#ffffff" strokeWidth={2.5} />
          </a>

          <button
            onClick={scrollToContact}
            className="button-custom button-muted py-3 px-12 text-base xl:text-2xl"
          >
            <span>Hire Me</span>
          </button>

          <button
            onClick={() =>
              window.open("https://github.com/iamphurichaya", "_blank")
            }
            className="button-custom button-soft py-3 px-12 text-base xl:text-2xl"
          >
            <span>GitHub</span>
          </button>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <img
          src={"./avatar.png"}
          alt="Profile"
          className="w-full h-60 sm:h-80 lg:w-74 lg:h-110 xl:w-full xl:h-130 object-cover"
        />
      </div>
    </section>
  );
}

export default Home;
