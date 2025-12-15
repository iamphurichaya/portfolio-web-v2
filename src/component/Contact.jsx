import React, { useRef } from "react";
import { SendIcon, MailIcon, MapIcon } from "./Icon.jsx";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o1qgp6j",
        "template_yzkcfkz",
        formRef.current,
        "BVbkOfn2bVBqBq9S_"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Thank you",
            html: ` <div style="text-align:center;"> I'll contact you as soon as possible !!!<br/>
            <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" style="width:100px; display:block; margin: 0 auto; margin-top:20px"/>
            </div> `,
            confirmButtonColor: "#000000",
          });

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Oops! Failed to send",
            html: "No worries, you can reach me directly at <strong>work.phurichaya@gmail.com</strong>",
            icon: "error",
            confirmButtonColor: "#000000",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-background items-center justify-center px-4 p-10 sm:px-6 pt-10 md:pt-26"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-3 font-poppins">
          Contact
        </h2>
        <p className="text-muted-primary text-base md:text-lg lg:text-xl">
          Looking forward to collaborating and growing with a team. contact me
          below!
        </p>
      </div>
      <div className="bg-primary-foreground shadow-lg rounded-3xl border-0 p-8 font-lato max-w-2xl mx-auto">
        <p className="mb-6 font-bold text-lg md:text-xl">Send a Message</p>
        <form ref={formRef} onSubmit={sendEmail}>
          <label htmlFor="email" className="block font-medium mb-2 text-sm md:text-base">
            Email
          </label>
          <input
            id="email"
            name="user_email"
            type="email"
            required
            className="text-sm md:text-base mb-6 px-3 py-1 w-full bg-muted-background/50 rounded-2xl transition-all duration-300 focus:scale-[1.02] h-11 sm:h-12"
            placeholder="your.email@example.com"
          />

          <label htmlFor="subject" className="block font-medium mb-2 text-sm md:text-base">
            Subject
          </label>
          <input
            id="subject"
            name="user_subject"
            type="subject"
            required
            className="text-sm md:text-base mb-6 px-3 py-1 w-full bg-muted-background/50 rounded-2xl transition-all duration-300 focus:scale-[1.02] h-11 sm:h-12"
            placeholder="subject"
          />

          <label htmlFor="message" className="block font-medium mb-2 text-sm md:text-base">
            Message
          </label>
          <textarea
            id="message"
            name="user_message"
            required
            className="text-sm md:text-base mb-6 px-3 py-2 w-full bg-muted-background/50 rounded-2xl min-h-[120px] sm:min-h-[140px] transition-all duration-300 focus:scale-[1.02] resize-none"
            placeholder="tell me about your company..."
          />

          <button
            type="submit"
            className="button-custom button-primary text-sm md:text-base rounded-full flex items-center justify-center w-full transition-all duration-300 h-10 sm:h-10"
            size="lg"
          >
            <span className="mr-2">Send Message</span>
            <SendIcon />
          </button>
        </form>
      </div>

      {/* Amimation email + location */}
      <div className="flex justify-center items-center p-8">
        <div className="gap-8 hover:gap-2 relative flex justify-center items-center text-sm max-w-fit rounded-full duration-300">
          {/* Mail Icon */}
          <div className="group rounded-full">
            <div className="flex items-center group-hover:gap-2 button-primary p-3 rounded-full duration-300">
              <MailIcon />
              <span className="text-[0px] group-hover:text-xs md:group-hover:text-sm duration-300">
                work.phurichaya@gmail.com
              </span>
            </div>
          </div>

          {/* Map Icon */}
          <div className="group rounded-full">
            <div className="flex items-center group-hover:gap-2 button-primary p-3 rounded-full duration-300">
              <MapIcon />
              <span className="text-[0px] group-hover:text-xs md:group-hover:text-sm duration-300">
                Bangkok, Thailand
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

