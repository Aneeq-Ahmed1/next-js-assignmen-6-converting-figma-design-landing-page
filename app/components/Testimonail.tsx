import React from 'react'
import Image from 'next/image';

const Testimonail = () => {
  return (
    <div className="px-4 sm:px-16 py-28 bg-[#f6f6f6] flex-col justify-center items-start gap-20 ">
   
      <div className="flex-col justify-start items-start gap-6 ">
        <div className="text-black text-3xl sm:text-5xl font-bold font-['Roboto'] leading-[57.60px]">
          Customer testimonials
        </div>
        <div className="text-black text-lg sm:text-xl font-normal font-['Roboto'] leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <br />

      
      <div className="flex flex-wrap justify-start items-start gap-8 sm:gap-12 max-w-screen-xl mx-auto">
       
        <div className="p-8 border border-black flex-col justify-start items-start gap-6 w-full sm:w-[360px] lg:w-[320px]">
       <div className="justify-start items-start inline-flex" > 
        <Image src={"/Stars.png"} alt='customer testimonials' width={100} height={18.89} className=' '/>
         </div>
          <div className="text-black text-lg font-normal font-['Roboto'] leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </div>
          <div className="flex justify-start items-center gap-5 ">
            <Image src={"/medical.png"} alt='customer testimonials' width={56} height={56} className='rounded-full'/>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">James Nduku</div>
              <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Software Developer</div>
            </div>
          </div>
        </div>

        
        <div className="p-8 border border-black flex-col justify-start items-start gap-6 w-full sm:w-[360px] lg:w-[320px]">
        <div className="justify-start items-start inline-flex" > 
        <Image src={"/Stars.png"} alt='customer testimonials' width={100} height={18.89} className=' '/>
         </div>
          <div className="text-black text-lg font-normal font-['Roboto'] leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </div>
          <div className="flex justify-start items-center gap-5">
          <Image src={"/marketing.png"} alt='customer testimonials' width={56} height={56} className='rounded-full'/>            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Erick Kipkemboi</div>
              <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Scrum Master</div>
            </div>
          </div>
        </div>

        
        <div className="p-8 border border-black flex-col justify-start items-start gap-6 w-full sm:w-[360px] lg:w-[320px]">
        <div className="justify-start items-start inline-flex" > 
        <Image src={"/Stars.png"} alt='customer testimonials' width={100} height={18.89} className=' '/>
         </div>
          <div className="text-black text-lg font-normal font-['Roboto'] leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
          </div>
          <div className="flex justify-start items-center gap-5">
          <Image src={"/trainer.png"} alt='customer testimonials' width={56} height={56} className='rounded-full'/>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Stephen Kerubo</div>
              <div className="text-black text-base font-normal font-['Roboto'] leading-normal">UI/UX Designer</div>
            </div>
          </div>
        </div>
      </div>
      <br />

      
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-black rounded-full" />
          <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
          <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
          <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
          <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
        </div>
        <div className="flex gap-[15px]">

<div className="flex gap-0 items-center">

  <div className="p-3 rounded-full border border-black flex justify-center items-center">
    <Image
      src="/left arr.png"
      alt="customer testimonials"
      width={24}
      height={24}
      className="rounded-full"
    />
  </div>

  <div className="p-3 rounded-full border border-black flex justify-center items-center">
    <Image
      src="/right arr.png"
      alt="customer testimonials"
      width={24}
      height={24}
      className="rounded-full"
    />
  </div>
</div>


          
        </div>
        </div>
        </div>
      
 
  );
}

export default Testimonail;







