import React from 'react'
import Image from 'next/image'

const CourseCard = () => {
  return (
    <div>
      <div className="w-full px-6 py-16 bg-white flex flex-col justify-center items-center gap-12 md:px-16 lg:px-24">
  <div className="w-full text-center flex flex-col items-center gap-6">
    <div className="text-black text-3xl md:text-4xl lg:text-5xl font-bold font-['Roboto'] leading-tight">
      Explore Courses By Category
    </div>
    <div className="text-black text-lg md:text-xl font-normal font-['Roboto'] leading-relaxed max-w-3xl">
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
    </div>
  </div>

  <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

    <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] justify-start items-center gap-8 inline-flex">
  <div className="p-[34px] bg-white rounded-[5px] justify-start items-start gap-2.5 flex">
    <div className="justify-start items-start gap-2.5 flex">
      <div className="w-8 h-8 relative">
      <div className="w-8 h-8 relative">  
        <Image src={"/d&d.png"} alt='d&d' width={120} height={40}/>
        </div>
        <div className="w-[12.69px] h-[15.70px] left-[9.67px] top-[14.30px] absolute">
        </div>
        <div className="w-[25.95px] h-[16.23px] left-[3.03px] top-[2.67px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-[57px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
        <div className="self-stretch text-black text-xl font-semibold font-['Roboto'] leading-[30px]">Design & Development</div>
        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">50+ Courses Available</div>
      </div>
    </div>
  </div>
</div>



    <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] justify-start items-center gap-8 inline-flex">
  <div className="p-[34px] bg-white rounded-[5px] justify-start items-start gap-2.5 flex">
    <div className="justify-start items-start gap-2.5 flex">
      <div className="w-8 h-8 relative">
      <div className="w-8 h-8 relative">  
        <Image src={"/marketing-2.png"} alt='marketing' width={120} height={40}/>
        </div>
        <div className="w-[12.69px] h-[15.70px] left-[9.67px] top-[14.30px] absolute">
        </div>
        <div className="w-[25.95px] h-[16.23px] left-[3.03px] top-[2.67px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-[57px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
        <div className="self-stretch text-black text-xl font-semibold font-['Roboto'] leading-[30px]">Marketing</div>
        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">50+ Courses Available</div>
      </div>
    </div>
  </div>
</div>


<div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] justify-start items-center gap-8 inline-flex">
  <div className="p-[34px] bg-white rounded-[5px] justify-start items-start gap-2.5 flex">
    <div className="justify-start items-start gap-2.5 flex">
      <div className="w-8 h-8 relative">
      <div className="w-8 h-8 relative">  
        <Image src={"/development.png"} alt='marketing' width={120} height={40}/>
        </div>
        <div className="w-[12.69px] h-[15.70px] left-[9.67px] top-[14.30px] absolute">
        </div>
        <div className="w-[25.95px] h-[16.23px] left-[3.03px] top-[2.67px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-[57px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
        <div className="self-stretch text-black text-xl font-semibold font-['Roboto'] leading-[30px]">Development</div>
        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">50+ Courses Available</div>
      </div>
    </div>
  </div>
</div>


<div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] justify-start items-center gap-8 inline-flex">
  <div className="p-[34px] bg-white rounded-[5px] justify-start items-start gap-2.5 flex">
    <div className="justify-start items-start gap-2.5 flex">
      <div className="w-8 h-8 relative">
      <div className="w-8 h-8 relative">  
        <Image src={"/communication.png"} alt='Communication' width={120} height={40}/>
        </div>
        <div className="w-[12.69px] h-[15.70px] left-[9.67px] top-[14.30px] absolute">
        </div>
        <div className="w-[25.95px] h-[16.23px] left-[3.03px] top-[2.67px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-[57px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
        <div className="self-stretch text-black text-xl font-semibold font-['Roboto'] leading-[30px]">Communication</div>
        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">50+ Courses Available</div>
      </div>
    </div>
  </div>
</div>


<div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] justify-start items-center gap-8 inline-flex">
  <div className="p-[34px] bg-white rounded-[5px] justify-start items-start gap-2.5 flex">
    <div className="justify-start items-start gap-2.5 flex">
      <div className="w-8 h-8 relative">
      <div className="w-8 h-8 relative">  
        <Image src={"/d-marketing.png"} alt='Digital Marketing' width={120} height={40}/>
        </div>
        <div className="w-[12.69px] h-[15.70px] left-[9.67px] top-[14.30px] absolute">
        </div>
        <div className="w-[25.95px] h-[16.23px] left-[3.03px] top-[2.67px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-[57px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
        <div className="self-stretch text-black text-xl font-semibold font-['Roboto'] leading-[30px]">Digital Marketing</div>
        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">50+ Courses Available</div>
      </div>
    </div>
  </div>
</div>



<div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] justify-start items-center gap-8 inline-flex">
  <div className="p-[34px] bg-white rounded-[5px] justify-start items-start gap-2.5 flex">
    <div className="justify-start items-start gap-2.5 flex">
      <div className="w-8 h-8 relative">
      <div className="w-8 h-8 relative">  
        <Image src={"/self-dev.png"} alt='Self Development' width={120} height={40}/>
        </div>
        <div className="w-[12.69px] h-[15.70px] left-[9.67px] top-[14.30px] absolute">
        </div>
        <div className="w-[25.95px] h-[16.23px] left-[3.03px] top-[2.67px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-[57px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
        <div className="self-stretch text-black text-xl font-semibold font-['Roboto'] leading-[30px]">Self Development</div>
        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">50+ Courses Available</div>
      </div>
    </div>
  </div>
</div>



<div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] justify-start items-center gap-8 inline-flex">
  <div className="p-[34px] bg-white rounded-[5px] justify-start items-start gap-2.5 flex">
    <div className="justify-start items-start gap-2.5 flex">
      <div className="w-8 h-8 relative">
      <div className="w-8 h-8 relative">  
        <Image src={"/business.png"} alt='Business' width={120} height={40}/>
        </div>
        <div className="w-[12.69px] h-[15.70px] left-[9.67px] top-[14.30px] absolute">
        </div>
        <div className="w-[25.95px] h-[16.23px] left-[3.03px] top-[2.67px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-[57px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
        <div className="self-stretch text-black text-xl font-semibold font-['Roboto'] leading-[30px]">Business</div>
        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">50+ Courses Available</div>
      </div>
    </div>
  </div>
</div>


<div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] justify-start items-center gap-8 inline-flex">
  <div className="p-[34px] bg-white rounded-[5px] justify-start items-start gap-2.5 flex">
    <div className="justify-start items-start gap-2.5 flex">
      <div className="w-8 h-8 relative">
      <div className="w-8 h-8 relative">  
        <Image src={"/finance.png"} alt='Finance' width={120} height={40}/>
        </div>
        <div className="w-[12.69px] h-[15.70px] left-[9.67px] top-[14.30px] absolute">
        </div>
        <div className="w-[25.95px] h-[16.23px] left-[3.03px] top-[2.67px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-[57px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
        <div className="self-stretch text-black text-xl font-semibold font-['Roboto'] leading-[30px]">Finance</div>
        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">50+ Courses Available</div>
      </div>
    </div>
  </div>
</div>



<div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] justify-start items-center gap-8 inline-flex">
  <div className="p-[34px] bg-white rounded-[5px] justify-start items-start gap-2.5 flex">
    <div className="justify-start items-start gap-2.5 flex">
      <div className="w-8 h-8 relative">
      <div className="w-8 h-8 relative">  
        <Image src={"/consulting.png"} alt='Consulting' width={120} height={40}/>
        </div>
        <div className="w-[12.69px] h-[15.70px] left-[9.67px] top-[14.30px] absolute">
        </div>
        <div className="w-[25.95px] h-[16.23px] left-[3.03px] top-[2.67px] absolute">
        </div>
      </div>
    </div>
  </div>
  <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
    <div className="self-stretch h-[57px] flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
        <div className="self-stretch text-black text-xl font-semibold font-['Roboto'] leading-[30px]">Consulting</div>
        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">50+ Courses Available</div>
      </div>
    </div>
  </div>
</div>





  </div>
  
  <div className="flex justify-center items-center w-full mt-12">
          <button className="text-black text-base hover:bg-slate-300 font-normal font-['Roboto'] leading-normal px-6 py-3 border rounded-[5px] border-black">
            View All Courses
          </button>
        </div>
</div>

    </div>
  )
}

export default CourseCard


