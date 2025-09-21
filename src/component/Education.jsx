import React from "react";

const educationData = [
  {
    university: 'Mahanakorn University of Technology',
    degree: 'B.Eng. Computer and Artificial Intelligence Engineering',
    details: 'A field related to computer programming, computer architecture, data structure, digital communications',
    year: 'Graduated in 2025',
  },
];

function Education() {
  return (
    <section
      id="education"
      className="bg-background flex flex-col items-center justify-center py-25 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="font-poppins text-4xl md:text-6xl font-bold text-primary pt-8">
          EDUCATION
        </h2>
      </div>

      {/* Timeline */}
      <div className="font-lato w-full mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_2fr] gap-x-4 md:gap-x-10"
          >
            {/* คอลัมน์ซ้าย (year) - Desktop */}
            <div className="text-primary hidden md:flex justify-end items-center text-right text-lg">
              <p>{edu.year}</p>
            </div>

            {/* *คอลัมน์กลาง (เส้น Timeline และจุด) */}
            <div className="relative flex justify-center">
              {/* เส้นแนวตั้ง */}
              <div className="w-0.5 h-full bg-primary"></div>
              {/* จุดวงกลมบนช */}
              <div className="absolute top-0 w-3 h-3 bg-white border-2 border-black rounded-full"></div>
              {/* จุดวงกลมล่างช */}
              <div className="absolute bottom-0 w-6 h-6 bg-black border-4 border-white rounded-full"></div>
            </div>

            {/* Detaills */}
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800">{edu.university}</h3>
              <p className="mt-1 text-xl text-gray-700">{edu.degree}</p>
              <p className="mt-2 text-lg text-gray-500">{edu.details}</p>

              {/* year - Mobile */}
              <p className="mt-2 md:hidden text-sm text-primary">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
