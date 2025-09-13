import React from "react";
import { ArrowDownToLine } from "lucide-react";
import { motion } from "motion/react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex px-4 sm:px-6 pt-16 sm:pt-14 items-center justify-center"
    >
      <div className="">
        {/* Name */}
        <hero className="font-bold text-primary">
          <h1 className="mb-2 text-4xl md:text-5xl lg:text-6xl xl:text-[105px] font-bold">
            <span class="wave">👋🏻</span> HELLO, I AM
          </h1>
          <h2 className="text-9xl font-bold">PHURICHAYA</h2>
        </hero>

        {/* Occupation + City */}
        <div className="py-2 text-primary">
          <p className="text-[66px] leading-tight text-[#454545]">Front End Developer</p>
          <p className="text-[48px] leading-tight text-[#5d5d5d]">
            based in Bangkok, Thailand
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center py-4">
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-2xl font-bold text-muted-primary px-3">
            Open full-time
          </span>
          <div class="w-[60%] h-[1.5px] bg-soft-primary"></div>
        </div>

        {/* Button */}
        <div className="py-2 flex space-x-8">
          <button className="button-custom button-primary flex items-center gap-2">
            <span className="text-2xl">Download CV</span>
            <ArrowDownToLine size={24} color="#ffffff" strokeWidth={2.5}/>
          </button>
          <button className="button-custom button-muted">
            <span className="text-2xl">Hire Me</span>
          </button>
          <button className="button-custom button-soft">
            <span className="text-2xl">GitHub</span>
          </button>
        </div>
      </div>
      <div className="h-130 ml-20">
        <img
          src={"./avatar.png"}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Home;
