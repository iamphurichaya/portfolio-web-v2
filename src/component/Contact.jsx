import React from "react";
import { SendIcon, MailIcon, MapIcon } from "./Icon.jsx";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-background min-h-screen items-center justify-center px-4 p-15 sm:px-6 pt-16 sm:pt-22"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3 font-poppins">
          Contact
        </h2>
        <p className="text-muted-primary text-lg">
          Looking forward to collaborating and growing with a team. contact me
          below!
        </p>
      </div>
      <div className="bg-primary-foreground shadow-lg rounded-3xl border-0 p-8 font-lato max-w-2xl mx-auto">
        <p className="mb-6 font-bold text-xl">Send a Message</p>

        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          id="email"
          name="user_email"
          type="email"
          required
          className="mb-6 px-3 py-1 w-full bg-muted-background/50 rounded-2xl transition-all duration-300 focus:scale-[1.02] h-11 sm:h-12 text-base"
          placeholder="your.email@example.com"
        />

        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="user_subject"
          type="subject"
          required
          className="mb-6 px-3 py-1 w-full bg-muted-background/50 rounded-2xl transition-all duration-300 focus:scale-[1.02] h-11 sm:h-12 text-base"
          placeholder="subject"
        />

        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="user_message"
          required
          className="mb-6 px-3 py-2 w-full bg-muted-background/50 rounded-2xl min-h-[120px] sm:min-h-[140px] transition-all duration-300 focus:scale-[1.02] text-base resize-none"
          placeholder="tell me about your company..."
        />

        <button
          type="submit"
          className="button-custom button-primary rounded-full flex items-center justify-center w-full transition-all duration-300 h-10 sm:h-10"
          size="lg"
        >
          <span className="mr-2">Send Message</span>
          <SendIcon />
        </button>
      </div>
      
      {/* Amimation email + location */}
      <div className="flex justify-center items-center p-8">
        <div class="gap-8 hover:gap-2 relative flex justify-center items-center text-sm max-w-fit rounded-full duration-300">
        {/* Mail Icon */}
        <div class="group rounded-full">
          <div class="flex items-center group-hover:gap-2 button-primary p-3 rounded-full cursor-pointer duration-300">
            <MailIcon />
            <span class="text-[0px] group-hover:text-sm duration-300">
              work.phurichaya@gmail.com
            </span>
          </div>
        </div>

        {/* Map Icon */}
        <div class="group rounded-full">
          <div class="flex items-center group-hover:gap-2 button-primary p-3 rounded-full cursor-pointer duration-300">
            <MapIcon />
           <span class="text-[0px] group-hover:text-sm duration-300">
              Bangkok, Thailand
            </span>
          </div>
        </div></div>
      </div>
    </section>
  );
}

export default Contact;
