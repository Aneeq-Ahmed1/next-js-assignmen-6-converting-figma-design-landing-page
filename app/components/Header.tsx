'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      
      <div className="bg-[#f6f6f6]">
        <div className="container mx-auto py-3 flex justify-between items-center gap-8">
          <div className="flex justify-start items-center gap-4">
            <div className="text-black text-sm font-normal font-['Roboto'] leading-tight">
              Phone Number: 956 742 455 678
            </div>
            <div className="w-7 h-[1px] bg-[#676767] rotate-90"></div>
            <div className="text-black text-sm font-normal font-['Roboto'] leading-tight">
              Email: info@ddsgnr.com
            </div>
          </div>

          <div className={`flex gap-4 sm:gap-6 md:gap-8 ${isMobile ? 'hidden' : 'flex'}`}>
            <Image
              src="/Facebook.png"
              alt="Facebook Logo"
              width={30}
              height={30}
              className="w-6 h-6"
            />
            <Image
              src="/Instagram.png"
              alt="Instagram Logo"
              width={30}
              height={30}
              className="w-6 h-6"
            />
            <Image
              src="/Twitter.png"
              alt="Twitter Logo"
              width={30}
              height={30}
              className="w-6 h-6"
            />
            <Image
              src="/linkedin.png"
              alt="Linkedin Logo"
              width={30}
              height={30}
              className="w-6 h-6"
            />
          </div>

          {/* Hamburger */}
          <div className={`md:hidden ml-auto ${isMobile ? 'block' : 'hidden'}`}>
            <button onClick={toggleMenu} className="text-black text-3xl">
              ☰
            </button>
          </div>
        </div>
      </div>

     
      <div className="bg-[#F7F7F7] w-full min-h-[120px] flex items-center px-6 gap-1 border-b-4">
        {/* Logo */}
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
            <path
              d="M15.7929 4.5957V4.59675C15.776 4.62583 12.2955 10.6297 7.95067 17.96C3.59532 25.3081 0 31.1911 0 31.1911L12.3315 31.137L12.3323 31.1368L12.3297 31.1464C18.3172 31.0304 23.7182 27.0939 25.3119 21.1458C25.8102 19.2864 25.8853 17.4147 25.5964 15.626C24.8043 10.3587 20.9149 6.07496 15.7929 4.5957Z"
              fill="black"
            />
            <path
              d="M22.6076 0.80957V0.810614C22.5907 0.839693 19.1102 6.84355 14.7654 14.1739C10.41 21.522 6.8147 27.4049 6.8147 27.4049L19.1461 27.3509L19.147 27.3507L19.1444 27.3603C25.1319 27.2443 30.5329 23.3078 32.1266 17.3597C32.6249 15.5003 32.7 13.6286 32.4111 11.8398C31.619 6.5726 27.7296 2.28883 22.6076 0.80957Z"
              fill="#10F2C5"
            />
          </svg>
          <h1 className="text-black font-bold text-[25.07px] font-[Roboto] leading-[30.34px] ml-2">Ddsgnr</h1>
        </div>

       
        <ul className={` text-lg flex space-x-6 ml-auto font-[Roboto] cursor-pointer ${menuOpen ? 'block' : 'hidden'} md:flex`}>
          <li>Home</li>
          <li>Courses</li>
          <li>Services</li>
          <li>Achievement</li>
          <li>About Us</li>
          <li>Testimonial</li>
        </ul>

        {/* Btns */}
        <div className="flex space-x-4 font-[Roboto] ml-4">
          <Button className="bg-[#FFFFFF] text-black py-2 px-5 hover:bg-slate-300 rounded-[5px] leading-[24px] border border-black sm:w-full md:w-auto">
            Login
          </Button>
          <Button className="bg-black text-white py-2 px-5 rounded-[5px] leading-[24px] border sm:w-full md:w-auto">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
