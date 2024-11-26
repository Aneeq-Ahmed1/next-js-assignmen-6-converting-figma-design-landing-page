import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="w-full h-auto p-10 md:p-20 bg-white flex-col justify-start items-center gap-10 md:gap-20 inline-flex">
      <div className="self-stretch h-auto md:h-[524px] flex-col justify-start items-start gap-10 md:gap-20 flex">
        <div className="self-stretch justify-between items-start inline-flex flex-col md:flex-row">
          <div className="w-full md:w-[500px] flex-col justify-start items-start inline-flex">
            <div className="self-stretch text-black text-lg font-semibold font-['Roboto'] leading-[27px]">
              Subscribe to our newsletter
            </div>
            <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="w-full md:w-[400px] self-stretch flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 h-12 p-3 bg-white rounded-[5px] border border-black justify-start items-center gap-2 flex">
                <div className="grow shrink basis-0 text-[#4f4f4f] text-base font-normal font-['Roboto'] leading-normal">
                  Enter your email
                </div>
              </div>
              <div className="px-6 py-3 rounded-[5px] border border-black justify-center items-center gap-2 flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Subscribe</div>
              </div>
            </div>
            <div className="self-stretch">
              <span className="text-black text-xs font-normal font-['Roboto'] leading-[18px]">
                By subscribing you agree to with our{' '}
              </span>
              <span className="text-black text-xs font-normal font-['Roboto'] underline leading-[18px]">Privacy Policy</span>
            </div>
          </div>
        </div>

        <div className="self-stretch justify-start items-start gap-10 inline-flex flex-col md:flex-row">
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="justify-center items-center gap-2 inline-flex">
              <Image src={"/m-logo.png"} alt='logo' width={120} height={30.38} />
            </div>
            <div className="py-[29px] flex-col justify-center items-start gap-[10.50px] flex"></div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Courses</div>
            <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Business</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Development</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Technology</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Design</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Programming</div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Resources</div>
            <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Career</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Resume</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Learning</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Interview Preparation</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Jobs</div>
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">About Us</div>
            <div className="self-stretch h-[185px] flex-col justify-start items-start flex">
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Contact</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Help/Support</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">FAQ</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Terms and Conditions</div>
              </div>
              <div className="self-stretch py-2 justify-start items-start inline-flex">
                <div className="grow shrink basis-0 text-black text-sm font-normal font-['Roboto'] leading-[21px]">Partners</div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch h-[57px] flex-col justify-start items-start gap-8 flex">
          <div className="self-stretch h-px bg-black " />
          
          <div className="self-stretch justify-between items-start inline-flex flex-col md:flex-row">
            <div className="justify-start items-center gap-6 flex">
              <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">2023 Ddsgnr. All right reserved.</div>
              <div className="justify-start items-start gap-6 flex">
                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-[21px]">Privacy Policy</div>
                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-[21px]">Terms of Service</div>
                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-[21px]">Cookies Settings</div>
              </div>
            </div>
            

            <div className=" flex gap-4 justify-start items-start">
              <Link href="https://www.facebook.com" target="_blank">
                <Image src="/f-1.png" alt="facebook-logo" width={10} height={18} />
              </Link>

              <Link href="https://www.instagram.com" target="_blank">
                <Image src="/f-2.png" alt="instagram-logo" width={18} height={18} />
              </Link>


              <Link href="https://www.twitter.com"  target="_blank">
                <Image src="/f-3.png" alt="twitter-logo" width={18} height={18} />
              </Link>

              <Link href="https://www.linkedin.com"  target="_blank">
                <Image src="/f-4.png" alt="linkedin-logo" width={18} height={18} />
              </Link>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer


















