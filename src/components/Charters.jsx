import React, { useEffect, useRef, useState } from "react";

import { PiInstagramLogo } from "react-icons/pi";
import { MdFacebook } from "react-icons/md";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Header from "./Header/Header";
import Slider from "react-slick";
import { arr } from "../static/data";
import SectionOne from "./Charters/SectionOne";
import SectionTwo from "./Charters/SectionTwo";
import SectionThree from "./Charters/SectionThree";
import SectionFour from "./Charters/SectionFour";

function Charters() {
 

  const [contactForm, setContactForm] = useState(false);

  const [index, setIndex] = useState(0);

  const [lastScrollY, setLastScrollY] = useState(0);

 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sectionHeight = window.innerHeight;
      const numSections = arr.length;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        const newIndex = Math.min(
          Math.floor(currentScrollY / sectionHeight),
          numSections - 1
        );
        setIndex(newIndex);
      } else {
        // Scrolling up
        const newIndex = Math.max(
          Math.floor(currentScrollY / sectionHeight),
          0
        );
        setIndex(newIndex);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, arr.length]);

 

 

  return (
    <main>
      <Header setContactForm={setContactForm}/>

      <SectionOne index={index} />
      <SectionTwo/>
      <SectionThree/>
      <SectionFour setContactForm={setContactForm} contactForm={contactForm}/>
     

    

    

      <section className="relative text-white font-fritz-regular w-full h-screen">
        <div id="fifth-section" className="w-full h-full"></div>
      
      </section>
    </main>
  );
}

export default Charters;
