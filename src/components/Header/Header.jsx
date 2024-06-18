import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useLocation} from "react-router-dom"
 
gsap.registerPlugin(useGSAP);

function Header() {

  const [path,setPath] = useState("")

  const location = useLocation()
  console.log(location,'---')

  useEffect(()=>{

setPath(location.hash)
  },[location])

  const headerList = useRef(null);
  const indicators = useRef(null)
  const logoRef = useRef(null)
  useGSAP(() => {
    // gsap code here...
   
gsap.from(headerList.current.children,{
  y:20,
  duration:1,
  delay:0.5,
  stagger:0.1,
  // color:"rgb(0 0 0 / 0.7)",
  opacity:0
})


gsap.from(indicators.current.children,{
  y:20,
  duration:1,
  delay:0.5,
  stagger:0.1,
  // color:"rgb(0 0 0 / 0.7)",
  opacity:0
})

gsap.from(logoRef.current,{
  y:20,
  duration:1,
  delay:0.5,
  stagger:0.1,
  // color:"rgb(0 0 0 / 0.7)",
  opacity:0
})

}); 


console.log(path,'path');

  return (
    <header className="fixed top-0 left-0 right-0 w-full px-6 items-center  1300px:h-[140px] h-[120px] bg-black/70 z-50 text-white flex justify-between">
      <div ref={indicators} className="w-[30px] flex flex-col gap-2 ">
        <span className="w-2 h-2 bg-[#D79B2A] rounded-full"></span>
        <span className="w-2 h-2 bg-[#D79B2A] rounded-full"></span>
        <span className="w-2 h-2 bg-[#D79B2A] rounded-full"></span>
        <span className="w-2 h-2 bg-[#D79B2A] rounded-full"></span>
      </div>
      <ul ref={headerList} className="transition-all ease-in-out py-3 text-base font-fritz-regular flex-1 flex justify-start gap-5 items-center text-white">
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
  );
}

export default Header;
