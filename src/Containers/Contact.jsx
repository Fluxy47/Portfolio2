import React from "react";
import NavBar from "../Components/NavBar";

function Contact() {
  return (
    <div className="h-full bg-[#1c1d20]">
      <NavBar color="white" />
      <div className="flex flex-col md:flex-row justify-evenly items-center mt-[7em]">
        <section className="flex flex-col w-full max-w-[50vw] gap-[3em]">
          <h1
            className="text-white leading-[1]"
            style={{ fontSize: "calc(clamp(3.25em, 7vw, 8em) * .875)" }}
          >
            Let's Start a Project Together
          </h1>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">01</p>
              <span className="text-white text-2xl">Whats your name?</span>
            </div>
            <textarea
              name="Name"
              rows="1"
              defaultValue="John Doe*"
              className=" text-2xl bg-transparent border-none focus:outline-none "
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">02</p>
              <span className="text-white text-2xl">What's your email?</span>
            </div>
            <textarea
              name="Name"
              rows="1"
              defaultValue="john@doe.com"
              className=" text-2xl bg-transparent border-none focus:outline-none "
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6]" />
          <div className="flex flex-col gap-[1em] ">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">03</p>
              <span className="text-white text-2xl">
                What's the name of your organization?
              </span>
            </div>
            <textarea
              name="Name"
              rows="1"
              defaultValue="John & Doe"
              className=" text-2xl bg-transparent border-none focus:outline-none "
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">04</p>
              <span className="text-white text-2xl">
                What services are you looking for?
              </span>
            </div>
            <textarea
              name="Name"
              rows="1"
              defaultValue="Game Development"
              className=" text-2xl bg-transparent border-none focus:outline-none "
            />
          </div>
          <div className="h-[1px] w-full bg-[#adb4b6] " />
          <div className="flex flex-col gap-[1em]">
            <div className="flex gap-[3em]">
              <p className="text-[#adb4b6] text-[0.8em]">05</p>
              <span className="text-white text-2xl">Your messages</span>
            </div>
            <textarea
              name="Name"
              rows="5"
              defaultValue="Hello Asad can you help me with"
              className=" text-2xl bg-transparent border-none focus:outline-none "
            />
          </div>
          <div className="w-full flex flex-col relative">
            <div className="h-[1px] w-full bg-[#adb4b6] " />
            <div className="w-40 h-40 rounded-full bg-[blue]  top-[-5em] right-10"></div>
          </div>
        </section>
        <section className="flex flex-col gap-[3em] mb-auto mt-[5em]">
          <div className="w-20 h-20 bg-white rounded-full" />
          <div className="flex flex-col gap-[0.5em]">
            <h2 className="text-[#999D9E] text-[0.8em]">Contact Detail</h2>
            <p className="text-lg text-white">email@.com</p>
            <p className="text-lg text-white">03337649060</p>
          </div>
          <div className="flex flex-col gap-[0.5em]">
            <h2 className="text-[#999D9E] text-[0.8em]">BUSINESS DETAILS</h2>
            <p className="text-lg text-white">Dennis Snellenberg B.V.</p>
            <p className="text-lg text-white">CoC: 92411711</p>
            <p className="text-lg text-white">VAT: NL866034080B01</p>
            <p className="text-lg text-white">Location: United Kingdom</p>
          </div>
          <div className="flex flex-col gap-[0.5em]">
            <h2 className="text-[#999D9E] text-[0.8em]">Socials</h2>
            <p className="text-lg text-white">Instagram</p>
            <p className="text-lg text-white">Twitter</p>
            <p className="text-lg text-white">LinkedIn</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
