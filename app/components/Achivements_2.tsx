import React from 'react'

const Achivements = () => {
  return (
    <div className="w-full h-auto px-6 py-16 bg-white flex justify-center items-center">
    
      <div className="max-w-screen-xl w-full flex flex-col items-center gap-12 text-center">
       
        <div className="flex flex-col items-center gap-4">
          <div className="text-black text-5xl font-bold font-['Roboto'] leading-[57.60px]">Our Achievements
          </div>
          <div className="text-black text-lg font-normal font-['Roboto'] leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </div>
        </div>

       
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center items-center">    
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-black text-[40px] font-bold font-['Roboto'] leading-[48px]">+200</div>
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Courses</div>
          </div>      
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-black text-[40px] font-bold font-['Roboto'] leading-[48px]">50K</div>
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Mentors</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-black text-[40px] font-bold font-['Roboto'] leading-[48px]">370K</div>
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Students</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-black text-[40px] font-bold font-['Roboto'] leading-[48px]">100+</div>
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Recognition</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achivements
