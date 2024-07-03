import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ribbon from "../../assets/images/ribbon.svg";
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { PiInstagramLogo } from 'react-icons/pi';
import { MdFacebook } from 'react-icons/md';
import { arr } from '../../static/data';


function SectionOne({index}) {
    const headingTitle = useRef(null);
  // ---------------------------------------
  const bottomFirstSection = useRef(null);
  const bottomFirstSectionPara = useRef(null);
  // ---------------------------------------


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

  });

  const socialMediaLink = (link) => {
    window.open(link, '_blank');
  };
  
  return (
    <section className="relative text-white font-fritz-regular w-full h-screen">
        <p
          ref={headingTitle}
          className="text-shadow 830px:text-[30px] text-[24px] absolute 830px:p-0 p-[16px] backdrop-blur-[15px] 830px:backdrop-filter-none 830px:top-40 top-36 left-6 right-6  text-black max-w-[400px] font-light  font-fritz-regular text-3xl w-[88%]"
        >
          Your gateway to exclusive private jet services
        </p>
        <div id="first-section" className="w-full h-full"></div>
        <div
          ref={bottomFirstSection}
          className=" bg-black/70  z-50 h-[160px] px-6 fixed flex py-5 justify-between w-full bottom-0 left-0 right-0"
        >
          <div className="hidden flex-[38%] relative gap-2 h-full md:flex flex-col justify-end items-start">
            <img
              src={ribbon}
              className="absolute -z-1 top-5 -left-10"
              alt="is the rigbbon svf icons"
            />
            <div className="absolute gap-2 h-full flex flex-col justify-end items-start">
              <FaWhatsapp
                className="bg-yellow-500 transition-all w-6 h-6 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={24}
                title="Whatsapp"
              />
              <PiInstagramLogo
                onClick={() =>
                  socialMediaLink("https://www.instagram.com/fenixair.in/")
                }
                className="bg-yellow-500 transition-all w-6 h-6 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={24}
                title="Instagram"
              />
              <MdFacebook
              onClick={()=>{
                socialMediaLink("https://www.facebook.com/fenixair.in/")
              }}
                className="bg-yellow-500 w-6 h-6 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={24}
                title="Facebook"
              />
              <FaLinkedinIn
              onClick={()=>{
                socialMediaLink("https://www.linkedin.com/company/fenix-air-private-limited/?originalSubdomain=in")
              }}
                className="bg-yellow-500 w-6 h-6 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={24}
                title="LinkedIn"
              />
            </div>
          </div>
          <div
            ref={bottomFirstSectionPara}
            id="paragraph"
            className="flex-[67%] overflow-auto flex flex-col justify-between items-center text-clip text-sm h-full"
          >
            <p className="pb-4 ">{arr[index]?.textOne}</p>
            <p>{arr[index]?.textTwo}</p>
          </div>
        </div>
      </section>
  )
}

export default SectionOne