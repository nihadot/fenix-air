import React, { useState } from 'react'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { MdFacebook } from 'react-icons/md'
import { PiInstagramLogo } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom';
import bgimage from "../assets/images/LandingPageBackground.svg";


function LandingPage() {

    const [landingPageButtonOne, setLandingPageButtonOne] = useState(false);
    const [landingPageButtonTwo, setLandingPageButtonTwo] = useState(false);
    const [landingPageButtonThree, setLandingPageButtonThree] = useState(false);

    
    const navigator = useNavigate()

    const socialMediaLink = (link) => {
    window.open(link, '_blank');
  };
  return (
    <section
    id="bg"
    className="w-full relative h-screen font-fritz-regular"
  >
    <img
      src={bgimage}
      className="w-[100%]  overflow-hidden h-[100vh] object-cover hidden md:block"
    />
    <div className={'w-full h-full bg-black/65 md:hidden block'}></div>
    <div className="w-full absolute z-[1000] text-white  top-0 left-0 right-0 bottom-0 h-screen flex gap-10">
      <div className="flex-[60%] hidden md:flex flex-col px-10 py-5 h-full">
        <div className=" w-[30px] 830px:flex hidden flex-col gap-2">
          <a
            href="#first-section"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            href="#second-section"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
          <a
            href="#third-section"
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></a>
         
        </div>

        <div className=" gap-2 h-full z-50 flex justify-end  flex-col">
        <FaWhatsapp
                className="bg-yellow-500 transition-all w-7 h-7 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Whatsapp"
              />
          <PiInstagramLogo
              onClick={() =>
                  socialMediaLink("https://www.instagram.com/fenixair.in/")
                }
            className="bg-yellow-500 transition-all w-7 h-7 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
            color="#fff"
            size={26}
            title="Instagram"
          />
          <MdFacebook
           onClick={()=>{
                socialMediaLink("https://www.facebook.com/fenixair.in/")
              }}
            className="bg-yellow-500 w-7 h-7 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
            color="#fff"
            size={26}
            title="Facebook"
          />
          <FaLinkedinIn
           onClick={()=>{
                socialMediaLink("https://www.linkedin.com/company/fenix-air-private-limited/?originalSubdomain=in")
              }}
            className="bg-yellow-500 w-7 h-7 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
            color="#fff"
            size={25}
            title="LinkedIn"
          />
        </div>
      </div>
      <div className="flex-[40%] relative flex  flex-col justify-between py-24 md:py-20 items-center">
        <img
          src="../src/assets/images/logo.svg"
          alt=""
          className="md:w-[260px] w-[230px] object-contain"
        />
        <h1 className="text-white leading-[32px] relative">
          <span className="md:text-[100px] text-[80px] absolute md:-left-10 -left-8 md:top-[60px] top-[67px] text-white/40 md:text-white/20 -z-30">
            &#38;
          </span>

          <span className="md:text-[27px] text-[25px] block">Experience</span>
          <span className="md:text-[40px] text-[37px] block">Luxury</span>
          <span className="md:text-[50px] text-[47px] md:ps-3 ps-2 pt-1 block">Convenience</span>
          <span className="flex pt-3 relative">
            <span className="absolute -left-6 md:text-[20px] text-[17px] top-1">with</span>
            <span className="md:text-[50px] text-[47px] ps-3 block">Fenix Air</span>
          </span>
        </h1>

        <div className="">
          <ul className=" relative flex gap-6 text-[16px] font-fritz-regular transition-all ease-in-out duration-200 ">
            <li onClick={()=> {
              setLandingPageButtonOne(!landingPageButtonOne)
            } } className="hover:text-[#D79B2A] flex items-center gap-1 group">
              Charters{" "}
              <span>
                { !landingPageButtonOne ? <IoMdArrowDropdown className="mt-1" /> : <IoMdArrowDropup/>}
              </span>
              {landingPageButtonOne && (
                <div className="group-hover:block  hover:block absolute top-10 left-0 md:-left-[90px] h-full">
                  <ul className="flex text-[15px] text-white/80 gap-5">
                    <li className="hover:text-[#D79B2A]" onClick={()=>navigator('/cargo')}>Private Jet</li>
                    <li className="hover:text-[#D79B2A]" onClick={()=>navigator('/airtaxi')}>Air Taxi</li>
                    <li className="hover:text-[#D79B2A]" onClick={()=>navigator('/airambulance')}>Air Ambulance</li>
                    <li className="hover:text-[#D79B2A]" onClick={()=>navigator('/cargo')}>Cargo</li>
                  </ul>
                </div>
              )}
            </li>

            <li onClick={()=>navigator('flight-school')} className="hover:text-[#D79B2A] flex items-center gap-1 group">
              Flight School{" "}
              {/* <span>
                { !landingPageButtonTwo ? <IoMdArrowDropdown className="mt-1" /> : <IoMdArrowDropup/>}
              </span> */}
              {/* {landingPageButtonTwo && (
                <div className="group-hover:block  hover:block absolute top-10 left-[100px] h-full">
                  <ul className="flex text-[15px] text-white/80 gap-5">
                    <li className="hover:text-[#D79B2A]" onClick={()=>navigator('flight-school')}>Private Jet</li>
                  </ul>
                </div>
              )} */}
            </li>



            <li onClick={()=> navigator('helicopter') }  className="hover:text-[#D79B2A] flex items-center gap-1 group">
              Helicopter{" "} 
            </li>



          </ul>
        </div>
      </div>
      <div>
      </div>
    </div>



  <div className=' h-[100px] absolute top-0 md:hidden justify-center items-center flex flex-col gap-1 left-0 w-[70px]'>
  <div
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></div>
           <div
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></div>
           <div
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></div>
           <div
            className="w-2 cursor-pointer h-2 bg-[#D79B2A] rounded-full"
          ></div>
  </div>

  <div className=' h-[70px] absolute bottom-0 md:hidden justify-center items-center flex flex-row gap-1 left-4 w-[100px]'>
  <FaWhatsapp
                className="bg-yellow-500 transition-all w-5 h-5 rounded-md p-1 cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
                color="#fff"
                size={26}
                title="Whatsapp"
              />
  <PiInstagramLogo
    onClick={() =>
                  socialMediaLink("https://www.instagram.com/fenixair.in/")
                }
            className="bg-yellow-500 transition-all w-5 h-5 rounded-md p-[3px] cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
            color="#fff"
            size={26}
            title="Instagram"
          />
            <MdFacebook
              onClick={()=>{
                socialMediaLink("https://www.facebook.com/fenixair.in/")
              }}
            className="bg-yellow-500 transition-all w-5 h-5 rounded-md p-[4px] cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
            color="#fff"
            size={26}
            title="Facebook"
          />
            <FaLinkedinIn
              onClick={()=>{
                socialMediaLink("https://www.linkedin.com/company/fenix-air-private-limited/?originalSubdomain=in")
              }}
            className="bg-yellow-500 transition-all w-5 h-5 rounded-md p-[4px] cursor-pointer hover:duration-700 hover:ease-in-out hover:delay-200"
            color="#fff"
            size={26}
            title="LinkedIn"
          />
  </div>
  </section>
  )
}

export default LandingPage