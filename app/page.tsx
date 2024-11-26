import Image from 'next/image';
import Header from './components/Header';
import Cart from './components/Cart';
import CourseCard from './components/CourseCard';
import Achivements from './components/Achivements';
import Achivements_2 from './components/Achivements_2';
import Blog from './components/Blog';
import Team from './components/Team';
import Testimonail from './components/Testimonail';
import { Button } from '@/components/ui/button';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div>
      <div>
      <Header />
      <div className="w-full  h-auto bg-white flex flex-col lg:flex-row items-center justify-between px-6 py-8 sm:px-8 sm:py-1">
      

        {/* Text Section */}
        
        <div className="flex flex-col justify-center items-center md:items-start md:w-[50%] px-4 md:px-8 py-12">

          <div className="text-black text-[28px] sm:text-[32px] lg:text-[56px] font-bold font-['Roboto'] leading-[1.2]">
            Learn new skills online with ease
          </div>
          <div className="text-black text-sm sm:text-lg font-normal font-['Roboto'] leading-[1.6]">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </div>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="px-6 py-3 bg-black rounded-[5px] border w-[164px] h-[48px] border-black flex justify-center items-center gap-2">
              <Button className="px-[23px] py-[22px] text-white bg-black  hover:bg-slate-400 text-base font-normal font-['Roboto'] leading-normal">
                Start learning now
              </Button>
            </div>
            <div className="px-6 py-3 rounded-[5px] border w-[164px] h-[48px] border-black flex justify-center items-center gap-2">
              <Button className="px-[27px] py-[22px]  text-black bg-white hover:bg-slate-300  text-base font-normal font-['Roboto'] leading-normal">
                Explore Courses
              </Button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-6 sm:mt-0">
          <Image
            src="/hero.png"
            alt="hero_img"
            width={640}
            height={900}
            className="w-full max-w-sm mx-auto sm:max-w-lg  object-cover"
          />
        </div>
      </div>
      </div>

 



 {/* <div>
     <Header />

     <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center flex-col md:flex-row overflow-hidden">
         <div className="flex flex-col justify-center items-center md:items-start md:w-[50%] px-4 md:px-8 py-12">
             <div className="flex flex-col justify-center items-center md:items-start gap-5">
                 <h1 className="font-roboto font-bold text-3xl md:text-4xl max-w-[72ch]">
                 </h1>
                    Learn new skills online with ease
                <p className="font-roboto font-medium max-w-[72ch] md:max-w-[400px]">
                     Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                 </p>
             </div>

             <div className="mt-6 px-4 flex justify-center items-center gap-2 md:gap-4">
                 <button className="w-[150px] font-roboto md:w-[178px] h-[48px] bg-black text-white rounded-md">
                     Start learning now
                 </button>
                 <button className="w-[150px] md:w-[178px] font-roboto h-[48px] border-[1px] border-black rounded-md">
                     Explore Courses
                 </button>
             </div>
         </div>

      
         <div className="flex-1 mt-6 sm:mt-0 ml-auto max-w-full self-end">
             <Image
                src="/hero.png"
                alt="hero image"
                height={900}
                width={640}
                className="h-full w-auto max-w-full object-cover"
            />
        </div>
    </div> */}








      <Cart />
      <CourseCard/>
      <Achivements/>
      <Achivements_2/>
      <Blog/>
      <Team/>
      <Testimonail/>
      <Footer/>
      
    </div>
  );
}









