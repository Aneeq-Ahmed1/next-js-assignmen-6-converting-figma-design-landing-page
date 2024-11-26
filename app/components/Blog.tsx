import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <div>
<div className="w-full h-auto px-16 py-28 bg-white flex flex-col justify-center items-center gap-[60px]">

  <div className="h-[118px] flex flex-col justify-center items-center gap-4">
    <div className="text-center text-black text-[56px] font-bold font-['Roboto'] leading-[67.20px]">Courses</div>
    <div className="text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">Your Ultimate Guide to learning</div>
  </div>

 
  <div className="w-full flex justify-center gap-8">
    <div className="px-4 py-2 border-b border-[#676767] text-center text-black text-base font-normal font-['Roboto'] leading-normal">Popular</div>
    <div className="px-4 py-2 text-center text-black text-base font-normal font-['Roboto'] leading-normal">Recommended</div>
    <div className="px-4 py-2 text-center text-black text-base font-normal font-['Roboto'] leading-normal">Best Price</div>
  </div>


  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
    
    <div className="bg-[#f6f6f6] rounded-[5px] flex flex-col items-start gap-6">
      <Image src={"/uxui.png"} alt='uxui' width={416} height={300} className="w-full h-[300px] object-cover" />
      <div className="h-[210px] px-4 pb-6 flex flex-col gap-6">
        <div className="flex justify-between w-full">
          <div className="text-sm font-semibold text-black">Design</div>
          <div className="flex items-center gap-1">
            <div className="text-sm font-semibold text-black">5.0</div>
          </div>
        </div>
        <div className="text-2xl font-bold text-black">UX/UI Design 201</div>
        <div className="text-base font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
         </div>
          <div className="w-[382px] justify-start items-center gap-4 inline-flex">
            <div className="px-5 py-2 rounded-[5px] border border-black justify-center items-center gap-2 flex">
              <div className="cursor-pointer text-black text-base font-normal font-['Roboto'] leading-normal">Enroll Now</div>
            </div>
            <div className="px-5 py-2 rounded-[5px] justify-center items-center gap-2 flex">
              <div className="text-black text-base font-medium font-['Roboto'] leading-normal">$400</div>
            </div>
      </div>
    </div>

  
    <div className="bg-[#f6f6f6] rounded-[5px] flex flex-col items-start gap-6">
    <Image src={"/python.png"} alt='programming' width={416} height={300}  className="w-full h-[300px] object-cover" />
      <div className="h-[210px] px-4 pb-6 flex flex-col gap-6">
        <div className="flex justify-between w-full">
          <div className="text-sm font-semibold text-black">Programming</div>
          <div className="flex items-center gap-1">
            <div className="text-sm font-semibold text-black">5.0</div>
          </div>
        </div>
        <div className="text-2xl font-bold text-black">Introduction to Python</div>
        <div className="text-base font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    
         </div>
          <div className="w-[382px] justify-start items-center gap-4 inline-flex">
            <div className="px-5 py-2 rounded-[5px] border border-black justify-center items-center gap-2 flex">
              <div className="cursor-pointer text-black text-base font-normal font-['Roboto'] leading-normal">Enroll Now</div>
            </div>
            <div className="px-5 py-2 rounded-[5px] justify-center items-center gap-2 flex">
              <div className="text-black text-base font-medium font-['Roboto'] leading-normal">$400</div>
            </div>
      </div>
    </div>


    <div className="bg-[#f6f6f6] rounded-[5px] flex flex-col items-start gap-6">
    <Image src={"/data.png"} alt='data analysis' width={416} height={300} className="w-full h-[300px] object-cover" />
      <div className="h-[210px] px-4 pb-6 flex flex-col gap-6">
        <div className="flex justify-between w-full">
          <div className="text-sm font-semibold text-black">Business</div>
          <div className="flex items-center gap-1">
            <div className="text-sm font-semibold text-black">5.0</div>
          </div>
        </div>
        <div className="text-2xl font-bold text-black">Data Analysis for Beginners</div>
        <div className="text-base font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  
         </div>
          <div className="w-[382px] justify-start items-center gap-4 inline-flex">
            <div className="px-5 py-2 rounded-[5px] border border-black justify-center items-center gap-2 flex">
              <div className="cursor-pointer text-black text-base font-normal font-['Roboto'] leading-normal">Enroll Now</div>
            </div>
            <div className="px-5 py-2 rounded-[5px] justify-center items-center gap-2 flex">
              <div className="text-black text-base font-medium font-['Roboto'] leading-normal">$400</div>
            </div>
      </div>
    </div>

 
    <div className="bg-[#f6f6f6] rounded-[5px] flex flex-col items-start gap-6">
    <Image src={"/art.png"} alt='art' width={416} height={300}  className="w-full h-[300px] object-cover" />
      <div className="h-[210px] px-4 pb-6 flex flex-col gap-6">
        <div className="flex justify-between w-full">
          <div className="text-sm font-semibold text-black">Art</div>
          <div className="flex items-center gap-1">
            <div className="text-sm font-semibold text-black">5.0</div>
          </div>
        </div>
        <div className="text-2xl font-bold text-black">Art Specialization</div>
        <div className="text-base font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    
         </div>
          <div className="w-[382px] justify-start items-center gap-4 inline-flex">
            <div className="px-5 py-2 rounded-[5px] border border-black justify-center items-center gap-2 flex">
              <div className="cursor-pointer text-black text-base font-normal font-['Roboto'] leading-normal">Enroll Now</div>
            </div>
            <div className="px-5 py-2 rounded-[5px] justify-center items-center gap-2 flex">
              <div className="text-black text-base font-medium font-['Roboto'] leading-normal">$400</div>
            </div>
      </div>
    </div>
    <div className="bg-[#f6f6f6] rounded-[5px] flex flex-col items-start gap-6">
    <Image src={"/law.png"} alt='law' width={416} height={300} className="w-full h-[300px] object-cover"/>
      <div className="h-[210px] px-4 pb-6 flex flex-col gap-6">
        <div className="flex justify-between w-full">
          <div className="text-sm font-semibold text-black">Law</div>
          <div  className="flex items-center gap-1">
            <div className="text-sm font-semibold text-black">5.0</div>
          </div>
        </div>
        <div className="text-2xl font-bold text-black">Rule of Law</div>
        <div className="text-base font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      
         </div>
          <div className="w-[382px] justify-start items-center gap-4 inline-flex">
            <div className="px-5 py-2 rounded-[5px] border border-black justify-center items-center gap-2 flex">
              <div className="cursor-pointer text-black text-base font-normal font-['Roboto'] leading-normal">Enroll Now</div>
            </div>
            <div className="px-5 py-2 rounded-[5px] justify-center items-center gap-2 flex">
              <div className=" text-black text-base font-medium font-['Roboto'] leading-normal">$400</div>
            </div>
      </div>
    </div>

    <div className="bg-[#f6f6f6] rounded-[5px] flex flex-col items-start gap-6">
    <Image src={"/intro-webflow.png"} alt='uxui' width={416} height={300}  className="w-full h-[300px] object-cover" />
      <div className="h-[210px] px-4 pb-6 flex flex-col gap-6">
        <div className="flex justify-between w-full">
          <div className="text-sm font-semibold text-black">Tech</div>
          <div  className="flex items-center gap-1">
            <div className="text-sm font-semibold text-black">5.0</div>
          </div>
        </div>
        <div className="text-2xl font-bold text-black">Introduction to webflow</div>
        <div className="text-base font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      
         </div>
          <div className="w-[382px] justify-start items-center gap-4 inline-flex">
            <div className="px-5 py-2 rounded-[5px] border border-black justify-center items-center gap-2 flex">
              <div className="cursor-pointer text-black text-base font-normal font-['Roboto'] leading-normal">Enroll Now</div>
            </div>
            <div className="px-5 py-2 rounded-[5px] justify-center items-center gap-2 flex">
              <div className="text-black text-base font-medium font-['Roboto'] leading-normal">$400</div>
            </div>
      </div>
    </div>
  </div>

  <div className="px-4 py-2 rounded-[5px] border border-black justify-center items-center gap-2 inline-flex cursor-pointer">
    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">View All Courses</div>
  </div>
</div>

    </div>
  )
}

export default Blog
