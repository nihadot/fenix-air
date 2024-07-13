import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";
import { CgClose, CgMenuMotion } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

function FlightHeader({ setContactForm }) {
  const [path, setPath] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [toggleVisibleContactState, setToggleVisibleContactState] =
    useState(false);
    const [activeSection, setActiveSection] = useState(""); // State to track active section

  const location = useLocation();
  const navigator = useNavigate();

  useEffect(() => {
    setPath(location.hash);
  }, [location]);

  const headerList = useRef(null);
  const indicators = useRef(null);
  const logoRef = useRef(null);
  const sidebar = useRef(null);
  const sidebarController = useRef(null);
  const headerRef = useRef();

  useGSAP(
    () => {
      // GSAP animations here
      headerList &&
        headerList.current &&
        gsap.from(headerList.current.children, {
          y: 20,
          duration: 1,
          delay: 0.5,
          stagger: 0.1,
          opacity: 0,
        });

      gsap.from(indicators.current.children, {
        y: 20,
        duration: 1,
        delay: 0.5,
        stagger: 0.1,
        opacity: 0,
      });

      gsap.from(logoRef.current, {
        y: 20,
        duration: 1,
        delay: 0.5,
        stagger: 0.1,
        opacity: 0,
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
        delay: 0.1,
        opacity: 1,
      });
    },
    { scope: headerRef.current }
  );

  const toggleSidebar = () => {
    sidebarController.current.play(); // play animation to show sidebar
  };

  const closeSidebar = () => {
    sidebarController.current.reverse(); // reverse animation to close sidebar
  };

  const toggleMenu = () => setIsVisible(!isVisible);
  const handletoggleVisibleContact = () =>
    setToggleVisibleContactState(!toggleVisibleContactState);

  function getFullHeight() {
    return Math.max(
      document.body.scrollHeight, 
      document.documentElement.scrollHeight
    );
  }

 useEffect(() => {
  const handleScroll = () => {
    const totalHeight = getFullHeight();
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    const sectionHeight = totalHeight / 6;

    const currentSectionIndex = Math.floor(scrollPosition / viewportHeight);
    const newActiveSection = `#section${currentSectionIndex + 1}`;

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [activeSection]);

console.log(activeSection,'activeSection')

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 w-full px-6 items-center 1300px:h-[140px] h-[120px] bg-black/70 z-50 text-white flex justify-between"
      >
        <div
          onClick={toggleMenu}
          ref={indicators}
          className="w-[30px] 992px:flex hidden flex-col gap-2"
        >
          <a
            onClick={toggleMenu}
            // href="#section1"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            onClick={toggleMenu}
            // href="#section2"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            onClick={toggleMenu}
            // href="#section3"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            onClick={toggleMenu}
            //  href="#section4"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
        </div>
        <div className="w-full 992px:hidden block" onClick={toggleSidebar}>
          <div className="w-2 mb-1 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
          <div className="w-2 mb-1 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
          <div className="w-2 mb-1 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
          <div className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"></div>
        </div>
        {isVisible && (
          <ul
            ref={headerList}
            className="992px:flex hidden transition-all ease-in-out py-3 text-base font-fritz-regular flex-1 justify-start gap-5 items-center text-white"
          >
            <li className="hover:text-[#D79B2A]">
              <a href="/">Home</a>
            </li>
            <li
            onClick={handletoggleVisibleContact}
              className={`relative flex items-center justify-center gap-1 ${
                activeSection === "#section1" && "text-[#D79B2A]"
              } hover:text-[#D79B2A]`}
            >
              <a  href="#section1">About Us</a>

              {!toggleVisibleContactState ? (
                <IoMdArrowDropdown className="mt-1" />
              ) : (
                <IoMdArrowDropup />
              )}

{toggleVisibleContactState && (
              <ul className="flex flex-col top-7 w-[150px] left-0 absolute text-[15px] text-white/80  my-0">
                <a
                  className={`" w-full ${activeSection === "#section6" && "text-[#D79B2A]"} hover:text-[#D79B2A]`}
                  href="#section6"
                  onClick={() => {
                    setContactForm(true);
                    closeSidebar();
                  }}
                >
                  Meet Our Team
                </a>
              
              </ul>
            )}

            </li>
            <li
              className={`${
                activeSection === "#section2" && "text-[#D79B2A]"
              } hover:text-[#D79B2A]`}
            >
              <a href="#section2">Aircraft Categories</a>
            </li>
            <li
              className={`${
                activeSection === "#section3" && "text-[#D79B2A]"
              } hover:text-[#D79B2A]`}
            >
              <a href="#section3">Affiliate Services</a>
            </li>
            <li
              className={`${
                activeSection === "#section4" && "text-[#D79B2A]"
              } hover:text-[#D79B2A]`}
            >
              <a href="#section4">Contact Us</a>

            </li>
            <li
              className={`${
                activeSection === "#section5" && "text-[#D79B2A]"
              } hover:text-[#D79B2A]`}
            >
              <a href="#section5">FAQ</a>
            </li>
            <li
              className={`${
                path === "#section5" && "text-red-700"
              } text-red-700 flex items-center gap-3`}
            >
              <a href="#">Enrol Now</a>
              <div className="w-[1.5px] bg-white/35 h-3"></div>
              <a href="#">Login</a>
            </li>
          </ul>
        )}

        <div className="w-[160px] h-full cursor-pointer">
          <img
            onClick={() => navigator("/")}
            ref={logoRef}
            className="w-full h-full object-contain"
            src={logo}
            alt=""
          />
        </div>
      </header>


{/* mobile sidebar */}
      <div ref={sidebar} className="w-full h-screen opacity-0 elative hidden">
        <p
          className=" p-2 rounded-full cursor-pointer overflow-hidden absolute top-11 left-5"
          onClick={closeSidebar}
        >
          <CgClose color="#fff" size={24} />
        </p>
        <ul className="text-white/70 flex justify-start items-start ps-8 pt-24 flex-col gap-2 text-[20px] font-fritz-regular h-full">
          <li
            onClick={closeSidebar}
            className="hover:scale-105 hover:text-[#D79B2A]"
          >
            <a href="/">Home</a>
          </li>
          <li
            // onClick={closeSidebar}
            onClick={()=>{
              handletoggleVisibleContact();

            }}
            className={`${toggleVisibleContactState && 'mb-5'} relative flex flex-row items-center gap-1 hover:scale-105 ${
              activeSection === "#section1" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
          >
            <a href="#section1">About Us</a>

            {!toggleVisibleContactState ? (
                <IoMdArrowDropdown className="mt-1" />
              ) : (
                <IoMdArrowDropup />
              )}

{toggleVisibleContactState && (
              <ul className={`flex flex-col top-7 w-[150px] left-0 absolute text-[15px] text-white/80  my-0 `}>
                <a
                  className={`" w-full ${activeSection === "#section6" && "text-[#D79B2A]"} hover:text-[#D79B2A]`}
                  href="#section6"
                  onClick={() => {
                    closeSidebar();
                  }}
                >
                  Meet Our Team
                </a>
              
              </ul>
            )}
          </li>
          <li
            onClick={closeSidebar}
            className={`hover:scale-105 ${
              activeSection === "#section2" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
          >
            <a href="#section2">Aircraft Categories</a>
          </li>
          <li
            onClick={closeSidebar}
            className={`hover:scale-105 ${
              activeSection === "#section3" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
          >
            <a href="#section3">Affiliate Services</a>
          </li>
          <li
            className={`rel hover:scale-105 ${
              activeSection === "#section4" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
            onClick={closeSidebar}
          >
            <div
              className="flex items-center gap-2 "
            >
                          <a href="#section4">Contact Us</a>

           
             
            </div>
            
          </li>
          <li
            onClick={closeSidebar}
            className={`hover:scale-105 ${
              activeSection === "#section6" && "text-[#D79B2A]"
            } hover:text-[#D79B2A]`}
          >
            <a href="#section5">FAQ</a>
          </li>
        </ul>
      </div>
{/* mobile sidebar */}

    </>
  );
}

export default FlightHeader;
