import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLocation } from "react-router-dom";
import { CgClose, CgMenuMotion } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [path, setPath] = useState("");

  const location = useLocation();

  useEffect(() => {
    setPath(location.hash);
  }, [location]);

  const headerList = useRef(null);
  const indicators = useRef(null);
  const logoRef = useRef(null);
  const sidebar = useRef(null);
  const sidebarController = useRef(null);
  const headerRef = useRef();

  useGSAP(() => {
    // GSAP animations here
    gsap.from(headerList.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0
    });

    gsap.from(indicators.current.children, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0
    });

    gsap.from(logoRef.current, {
      y: 20,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      opacity: 0
    });

    sidebarController.current = gsap.timeline({ paused: true });

    sidebarController.current.to(sidebar.current, {
     
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1111,
      backgroundColor: "#00000080",
      display: "block",
      backdropFilter: "blur(4px)",
      duration: 0.5,
      delay:0.1,
      opacity: 1,
    });

  }, { scope: headerRef.current });

  const toggleSidebar = () => {
    sidebarController.current.play(); // play animation to show sidebar
  };

  const closeSidebar = () => {
    sidebarController.current.reverse(); // reverse animation to close sidebar
  };

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 right-0 w-full px-6 items-center 1300px:h-[140px] h-[120px] bg-black/70 z-50 text-white flex justify-between">
        <div ref={indicators} className="w-[30px] 830px:flex hidden flex-col gap-2">
          <a href="#first-section" className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></a>
          <a href="#second-section" className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></a>
          <a href="#third-section" className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></a>
          <a href="#fourth-section" className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></a>
        </div>
        <div className="w-full 830px:hidden block">
          <FiMenu onClick={toggleSidebar} size={30} />
        </div>
        <ul ref={headerList} className="830px:flex hidden transition-all ease-in-out py-3 text-base font-fritz-regular flex-1 justify-start gap-5 items-center text-white">
          <li className="hover:text-[#D79B2A]">
            <a href="#">Home</a>
          </li>
          <li className={`${path === '#first-section' && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
            <a href="#first-section">About Us</a>
          </li>
          <li className={`${path === '#second-section' && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
            <a href="#second-section">Aircraft Categories</a>
          </li>
          <li className={`${path === '#third-section' && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
            <a href="#third-section">Affiliate Services</a>
          </li>
          <li className={`${path === '#fourth-section' && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
            <a href="#fourth-section">Contact Us</a>
          </li>
          <li className={`${path === '#fifth-section' && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
            <a href="#fifth-section">FAQ</a>
          </li>
        </ul>
        <div className="w-[160px] h-full">
          <img ref={logoRef} className="w-full h-full object-contain" src={logo} alt="" />
        </div>
      </header>

      <div ref={sidebar} className="w-full h-screen opacity-0 elative hidden">
          <p className=" p-2 rounded-full overflow-hidden absolute top-11 left-5" onClick={closeSidebar}>
            <CgClose color="#fff" size={25} />
          </p>
        <ul className="text-white/70 flex justify-center items-start ps-20 flex-col gap-5 text-3xl font-fritz-regular h-full">
          <li onClick={closeSidebar} className="hover:scale-105 hover:text-[#D79B2A]">
            <a href="#">Home</a>
          </li>
          <li onClick={closeSidebar} className={`hover:scale-105 ${path === '#first-section' && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
            <a href="#first-section">About Us</a>
          </li>
          <li onClick={closeSidebar} className={`hover:scale-105 ${path === '#second-section' && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
            <a href="#second-section">Aircraft Categories</a>
          </li>
          <li onClick={closeSidebar} className={`hover:scale-105 ${path === '#third-section' && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
            <a href="#third-section">Affiliate Services</a>
          </li>
          <li onClick={closeSidebar} className={`hover:scale-105 ${path === '#fourth-section' && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
            <a href="#fourth-section">Contact Us</a>
          </li>
          <li onClick={closeSidebar} className={`hover:scale-105 ${path === '#fifth-section' && 'text-[#D79B2A]'} hover:text-[#D79B2A]`}>
            <a href="#fifth-section">FAQ</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
