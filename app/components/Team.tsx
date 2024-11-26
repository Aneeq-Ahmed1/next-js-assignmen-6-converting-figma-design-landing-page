import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <div className="h-auto flex-col justify-start items-center gap-24 px-6 py-4">

      <div className="self-stretch flex-col justify-start items-start gap-16 flex">

       
        <div className="flex flex-wrap justify-between gap-8 md:gap-12 w-full">
        
          <div className="flex flex-col items-center gap-4 w-72 md:w-80">
            <Image src={"/marketing.png"} alt='James Nduku' width={80} height={80} />
            <div className="text-center text-xl font-semibold">James Nduku</div>
            <div className="text-center text-lg">Marketing Coordinator</div>
            <div className="flex justify-center gap-4 mt-2">
              <Image src={"/linkedin.png"} alt="LinkedIn" width={24} height={24} />
              <Image src={"/twitter.png"} alt="Twitter" width={24} height={24} />
              <Image src={"/ball.png"} alt="Ball" width={24} height={24} />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-72 md:w-80">
            <Image src={"/nursing.png"} alt='Joseph Munyambu' width={80} height={80} />
            <div className="text-center text-xl font-semibold">Joseph Munyambu</div>
            <div className="text-center text-lg">Nursing Assistant</div>
            <div className="flex justify-center gap-4 mt-2">
              <Image src={"/linkedin.png"} alt="LinkedIn" width={24} height={24} />
              <Image src={"/twitter.png"} alt="Twitter" width={24} height={24} />
              <Image src={"/ball.png"} alt="Ball" width={24} height={24} />
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-72 md:w-80">
            <Image src={"/medical.png"} alt='Joseph Ngumbau' width={80} height={80} />
            <div className="text-center text-xl font-semibold">Joseph Ngumbau</div>
            <div className="text-center text-lg">Medical Assistant</div>
            <div className="flex justify-center gap-4 mt-2">
              <Image src={"/linkedin.png"} alt="LinkedIn" width={24} height={24} />
              <Image src={"/twitter.png"} alt="Twitter" width={24} height={24} />
              <Image src={"/ball.png"} alt="Ball" width={24} height={24} />
            </div>
          </div>
        </div>

      
        <div className="flex flex-wrap justify-between gap-8 md:gap-12 w-full">

          
          <div className="flex flex-col items-center gap-4 w-72 md:w-80">
            <Image src={"/web.png"} alt='Erick Kipkemboi' width={80} height={80} />
            <div className="text-center text-xl font-semibold">Erick Kipkemboi</div>
            <div className="text-center text-lg">Web Designer</div>
            <div className="flex justify-center gap-4 mt-2">
              <Image src={"/linkedin.png"} alt="LinkedIn" width={24} height={24} />
              <Image src={"/twitter.png"} alt="Twitter" width={24} height={24} />
              <Image src={"/ball.png"} alt="Ball" width={24} height={24} />
            </div>
          </div>

        
          <div className="flex flex-col items-center gap-4 w-72 md:w-80">
            <Image src={"/sales.png"} alt='Stephen Kerubo' width={80} height={80} />
            <div className="text-center text-xl font-semibold">Stephen Kerubo</div>
            <div className="text-center text-lg">President of Sales</div>
            <div className="flex justify-center gap-4 mt-2">
              <Image src={"/linkedin.png"} alt="LinkedIn" width={24} height={24} />
              <Image src={"/twitter.png"} alt="Twitter" width={24} height={24} />
              <Image src={"/ball.png"} alt="Ball" width={24} height={24} />
            </div>
          </div>

       
          <div className="flex flex-col items-center gap-4 w-72 md:w-80">
            <Image src={"/trainer.png"} alt='John Leboo' width={80} height={80} />
            <div className="text-center text-xl font-semibold">John Leboo</div>
            <div className="text-center text-lg">Dog Trainer</div>
            <div className="flex justify-center gap-4 mt-2">
              <Image src={"/linkedin.png"} alt="LinkedIn" width={24} height={24} />
              <Image src={"/twitter.png"} alt="Twitter" width={24} height={24} />
              <Image src={"/ball.png"} alt="Ball" width={24} height={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;


