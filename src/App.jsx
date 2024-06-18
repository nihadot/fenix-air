import React, { useRef } from "react";
import Header from "./components/Header/Header";
import image from "./assets/images/image-2.jpg";
import "./App.css";
import { CiInstagram, CiLinkedin } from "react-icons/ci";
import { BiLogoFacebook, BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { PiInstagramLogo } from "react-icons/pi";
import { Parallax } from "react-parallax";

import imag1 from "./assets/images/image-1.jpg";
import ribbon from "./assets/images/ribbon.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const headingTitle = useRef(null);
  const bottomSecondSection = useRef(null);

  // ---------------------------------------
  const bottomFirstSection = useRef(null);
  const bottomFirstSectionPara = useRef(null);
  // ---------------------------------------

  //  ---------------------------------------
  const bottomThirdSection = useRef(null);
  const bottomThirdSectionPara = useRef(null);
  //  ---------------------------------------

  //  ---------------------------------------
  const bottomFourthSection = useRef(null);
  const bottomFourthSectionPara = useRef(null);
  //  ---------------------------------------

  //  ---------------------------------------
  const bottomFifthSection = useRef(null);
  const bottomFifthSectionPara = useRef(null);
  //  ---------------------------------------

  const socialMediaSection = useRef();

  useGSAP(() => {
    // gsap code here...

    gsap.from(headingTitle.current, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });

    // ---------------
    gsap.from(bottomFirstSection.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(bottomFirstSectionPara.current, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    // ---------------------------

    // ---------------------------
    gsap.from(bottomSecondSection.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(bottomFirstSectionPara.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    //---------------------------

    // ---------------------------
    gsap.from(bottomThirdSection.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(bottomThirdSectionPara.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    //---------------------------

    // ---------------------------
    gsap.from(bottomFourthSection.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(bottomFourthSectionPara.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    //---------------------------

    // ---------------------------
    gsap.from(bottomFifthSection.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    gsap.from(bottomFifthSectionPara.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0,
    });
    //---------------------------
  });

  return (
    <main>
      <Header />

      <section className="relative text-white font-fritz-regular w-full h-screen">
        <p
          ref={headingTitle}
          className="absolute top-40 left-6  text-black max-w-[400px] font-light  font-fritz-regular text-3xl w-full"
        >
          Your gateway to exclusive private jet services
        </p>
        <div id="first-section" className="w-full h-full"></div>
        <div
          ref={bottomFirstSection}
          className=" bg-black/70 h-[160px] px-6 absolute flex py-5 justify-between w-full bottom-0 left-0 right-0"
        >
          <div className="flex-[38%] relative gap-2 h-full flex flex-col justify-end items-start">
            <img
              src={ribbon}
              className="absolute -z-1 top-5 -left-10"
              alt="is the rigbbon svf icons"
            />
            <div className="absolute gap-2 h-full flex flex-col justify-end items-start">
              <PiInstagramLogo
                className="bg-yellow-500 transition-all w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Instagram"
              />
              <MdFacebook
                className="bg-yellow-500 w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Facebook"
              />
              <FaLinkedinIn
                className="bg-yellow-500 w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={25}
                title="LinkedIn"
              />
            </div>
          </div>
          <div
            ref={bottomFirstSectionPara}
            className="flex-[67%] flex flex-col justify-between items-center text-clip text-sm h-full"
          >
            <p className="pb-4">
              At our esteemed workshop, we provide an extensive range of
              services, ranging from precise engine diagnostics. effective
              transmission solutions, AC repairs, oil changes to meticulous
              brake servicing. Our offerings go beyond repairs, featuring
              professional, efficient, and value-driven solutions tailored to
              meet your diverse automotive needs.{" "}
            </p>
            <p>
              Over the years, we have undergone a transformation fueled by
              unwavering commitment and tireless endeavors, shaping us into a
              versatile establishment, ready to cater to automotive service
              requirements
            </p>
          </div>
        </div>
      </section>

      <section className="relative text-white font-fritz-regular w-full h-screen">
        <div id="second-section" className="w-full h-full"></div>
        <div className=" bg-black/70 h-[160px] px-6 absolute flex py-5 justify-between w-full bottom-0 left-0 right-0">
          <div
            ref={bottomSecondSection}
            className="flex-[38%] relative gap-2 h-full flex flex-col justify-end items-start"
          >
            <img
              src={ribbon}
              className="absolute -z-1 top-5 -left-10"
              alt="is the rigbbon svf icons"
            />
            <div className="absolute gap-2 h-full flex flex-col justify-end items-start">
              <PiInstagramLogo
                className="bg-yellow-500 transition-all w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Instagram"
              />
              <MdFacebook
                className="bg-yellow-500 w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Facebook"
              />
              <FaLinkedinIn
                className="bg-yellow-500 w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={25}
                title="LinkedIn"
              />
            </div>
          </div>
          <div
            ref={bottomFirstSectionPara}
            className="flex-[67%] flex flex-col justify-between items-center text-clip text-sm h-full"
          >
            <p className="pb-4">
              At our esteemed workshop, we provide an extensive range of
              services, ranging from precise engine diagnostics. effective
              transmission solutions, AC repairs, oil changes to meticulous
              brake servicing. Our offerings go beyond repairs, featuring
              professional, efficient, and value-driven solutions tailored to
              meet your diverse automotive needs.{" "}
            </p>
            <p>
              Over the years, we have undergone a transformation fueled by
              unwavering commitment and tireless endeavors, shaping us into a
              versatile establishment, ready to cater to automotive service
              requirements
            </p>
          </div>
        </div>
      </section>

      <section className="relative text-white font-fritz-regular w-full h-screen">
        <div id="third-section" className="w-full h-full"></div>
        <div className=" bg-black/70 h-[160px] px-6 absolute flex py-5 justify-between w-full bottom-0 left-0 right-0">
          <div
            ref={bottomThirdSection}
            className="flex-[38%] relative gap-2 h-full flex flex-col justify-end items-start"
          >
            <img
              src={ribbon}
              className="absolute -z-1 top-5 -left-10"
              alt="is the rigbbon svf icons"
            />
            <div className="absolute gap-2 h-full flex flex-col justify-end items-start">
              <PiInstagramLogo
                className="bg-yellow-500 transition-all w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Instagram"
              />
              <MdFacebook
                className="bg-yellow-500 w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Facebook"
              />
              <FaLinkedinIn
                className="bg-yellow-500 w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={25}
                title="LinkedIn"
              />
            </div>
          </div>
          <div
            ref={bottomThirdSectionPara}
            className="flex-[67%] flex flex-col justify-between items-center text-clip text-sm h-full"
          >
            <p className="pb-4">
              At our esteemed workshop, we provide an extensive range of
              services, ranging from precise engine diagnostics. effective
              transmission solutions, AC repairs, oil changes to meticulous
              brake servicing. Our offerings go beyond repairs, featuring
              professional, efficient, and value-driven solutions tailored to
              meet your diverse automotive needs.{" "}
            </p>
            <p>
              Over the years, we have undergone a transformation fueled by
              unwavering commitment and tireless endeavors, shaping us into a
              versatile establishment, ready to cater to automotive service
              requirements
            </p>
          </div>
        </div>
      </section>

      <section className="relative text-white font-fritz-regular w-full h-screen">
        <div id="fourth-section" className="w-full h-full relative">
          <form
            action=""
            className=" bg-[#3C3C3B] px-6 pt-3 pb-1 rounded-tl-[20px] rounded-br-[20px] w-[580px] h-fit top-44 absolute right-20"
          >
            <div className="flex justify-between items-center my-2">
              <label htmlFor="" className="w-[140px]">
                Name
              </label>
              <input
                className="w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="" className="w-[140px]">
                Company
              </label>
              <input
                className="w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="" className="w-[140px]">
                Mob./Cell Ph.
              </label>
              <input
                className="w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                type="text"
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <label htmlFor="" className="w-[140px]">
                Email ID
              </label>
              <input
                className="w-full rounded-tl-[20px] rounded-br-[20px] py-1"
                type="text"
              />
            </div>
            <div className="flex justify-between items-start my-2">
              <label htmlFor="" className="w-[140px]">
                Message
              </label>
              <textarea
                name=""
                className="w-full h-[130px] rounded-tl-[20px] rounded-br-[20px] py-1"
                id=""
              ></textarea>
            </div>

            <button className="absolute bottom-4 left-6 uppercase">Sent</button>
          </form>
        </div>
        <div className="  bg-black/70 h-[160px] px-6 absolute flex py-5 justify-between w-full bottom-0 left-0 right-0">
          <div
            ref={bottomFourthSection}
            className="flex-[38%] relative gap-2 h-full flex flex-col justify-end items-start"
          >
            <img
              src={ribbon}
              className="absolute -z-1 top-5 -left-10"
              alt="is the rigbbon svf icons"
            />
            <div className="absolute gap-2 h-full flex flex-col justify-end items-start">
              <PiInstagramLogo
                className="bg-yellow-500 transition-all w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Instagram"
              />
              <MdFacebook
                className="bg-yellow-500 w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Facebook"
              />
              <FaLinkedinIn
                className="bg-yellow-500 w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={25}
                title="LinkedIn"
              />
            </div>
          </div>
          <div
            ref={bottomFourthSectionPara}
            className="flex-[67%] flex flex-col justify-center items-center text-clip text-sm h-full"
          >
            <p className="">
              Over the years, we have undergone a transformation fueled by
              unwavering commitment and tireless endeavors, shaping us into a
              versatile establishment, ready to cater to automotive service
              requirements
            </p>
          </div>
        </div>
      </section>

      <section className="relative text-white font-fritz-regular w-full h-screen">
        <div id="fifth-section" className="w-full h-full"></div>
        <div className=" bg-black/70 h-[160px] px-6 absolute flex py-5 justify-between w-full bottom-0 left-0 right-0">
          <div
            ref={bottomFifthSection}
            className="flex-[38%] relative gap-2 h-full flex flex-col justify-end items-start"
          >
            <img
              src={ribbon}
              className="absolute -z-1 top-5 -left-10"
              alt="is the rigbbon svf icons"
            />
            <div className="absolute gap-2 h-full flex flex-col justify-end items-start">
              <PiInstagramLogo
                className="bg-yellow-500 transition-all w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Instagram"
              />
              <MdFacebook
                className="bg-yellow-500 w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Facebook"
              />
              <FaLinkedinIn
                className="bg-yellow-500 w-7 h-7 rounded-md p-1 hover:animate-bounce cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={25}
                title="LinkedIn"
              />
            </div>
          </div>
          <div
            ref={bottomFifthSectionPara}
            className="flex-[67%] flex flex-col justify-between items-center text-clip text-sm h-full"
          ></div>
        </div>
      </section>

      {/*  ------------ */}

      {/* <Parallax
        className="w-full h-screen"
        bgImage={imag1}
        bgImageAlt="the cat"
        strength={600}
      >
        <div className=" bg-black/70 h-[160px] px-6 z-40 absolute flex py-5 justify-between w-full bottom-0 left-0 right-0">
          <div className="flex-[38%] gap-2 h-full flex flex-col justify-end items-start">
            <PiInstagramLogo
              className="bg-yellow-500 w-7 h-7 rounded-md p-1"
              color="#fff"
              size={26}
            />
            <MdFacebook
              className="bg-yellow-500 w-7 h-7 rounded-md p-1"
              color="#fff"
              size={26}
            />
            <FaLinkedinIn
              className="bg-yellow-500 w-7 h-7 rounded-md p-1"
              color="#fff"
              size={25}
            />
          </div>
          <div className="flex-[67%] flex flex-col justify-between items-center text-clip text-sm h-full">
            <p className="pb-4">
              At our esteemed workshop, we provide an extensive range of
              services, ranging from precise engine diagnostics. effective
              transmission solutions, AC repairs, oil changes to meticulous
              brake servicing. Our offerings go beyond repairs, featuring
              professional, efficient, and value-driven solutions tailored to
              meet your diverse automotive needs.{" "}
            </p>
            <p>
              Over the years, we have undergone a transformation fueled by
              unwavering commitment and tireless endeavors, shaping us into a
              versatile establishment, ready to cater to automotive service
              requirements
            </p>
          </div>
        </div>
      </Parallax> */}
    </main>
  );
}

export default App;
