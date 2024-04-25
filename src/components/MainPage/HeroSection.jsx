import React from 'react'
import heroSectionImg from "../assets/en_new_hero_image-3.webp";
const HeroSection = () => {
  return (
    <>
      <div
        className="relative w-full bg-[#D7FEC8] "
      
      >
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:px-8 flex flex-col items-center md:flex-row">
          <div className="lg:col-span-6 xl:col-span-7 lg:ml-8 xl:ml-0">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:px-6 lg:py-24">
              <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
                Grow with our email marketing & CRM suite
              </h1>
              <p className="mt-8 text-lg text-gray-700">
                All-in-one platform to manage your customer relationships via
                Email, SMS, Chat and more
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  className="rounded-2xl border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-8 py-3 text-medium  text-white hover:text-[#10754D] text-xl "
                >
                  Sign Up Free
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 xl:col-span-5 lg:-mr-8 xl:mr-0 flex items-center">
            <img className="w-full h-auto" src={heroSectionImg} alt="img" />
          </div>
        </div>
      </div> 
    </>
  )
}

export default HeroSection
