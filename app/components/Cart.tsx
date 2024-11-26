import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div className="w-full h-auto px-6 sm:px-8 py-12 bg-[#f6f6f6] flex flex-col lg:flex-row justify-between items-center gap-8">
    
      <div className="w-full lg:w-80 text-black text-xl sm:text-2xl font-bold font-['Roboto'] leading-[33.60px]">
        Trusted by 2000+ companies worldwide.
      </div>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-end gap-4 w-full max-w-full">
        <div className="w-[123px] h-[38.52px] sm:w-[100px] sm:h-[35px]">
          <Image src="/logo.png" alt="logo" width={120} height={40} />
        </div>
        <div className="w-[123px] h-[38.52px] sm:w-[100px] sm:h-[35px]">
          <Image src="/logo-2.png" alt="logo" width={120} height={40} />
        </div>
        <div className="w-[123px] h-[38.52px] sm:w-[100px] sm:h-[35px]">
          <Image src="/logo-3.png" alt="logo" width={120} height={40} />
        </div>
        <div className="w-[123px] h-[38.52px] sm:w-[100px] sm:h-[35px]">
          <Image src="/logo-4.png" alt="logo" width={120} height={40} />
        </div>
        <div className="w-[123px] h-[38.52px] sm:w-[100px] sm:h-[35px]">
          <Image src="/logo-5.png" alt="logo" width={120} height={40} />
        </div>
        <div className="w-[120px] h-[38.52px] sm:w-[100px] sm:h-[35px]">
          <Image src="/logo-6.png" alt="logo" width={120} height={40} />
        </div>
      </div>



      
    </div>
  )
}

export default Cart
