import React from 'react'
import cdp from "../assets/cdp_webinar_media_cta_op3-1.webp";
const BrevoWebinar = () => {
  return (
    <>
      <div
        className="relative w-full bg-white"
      
      >
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:px-8 flex flex-col items-center md:flex-row">
          <div className="lg:col-span-6 xl:col-span-7 lg:ml-8 xl:ml-0 px-6">
           
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:px-6 lg:py-24">
            <p className="text-xl">BREVO WEBINAR</p>
              <h1 className="mt-8 text-xl tracking-tight text-black md:text-2xl lg:text-3xl">
              Adapt and Thrive: Agile Marketing Automation with CDP
              </h1>
              <p className="mt-8 text-lg text-gray-700">
              Join Yassine Hamou-Tahra, Director of Brevo CDP, on April 25th, at 12 PM CEST and 10 AM PDT, and discover how to maximize your data potential in various marketing scenarios
              </p>
              <div className="mt-5">
                <button
                  type="button"
                  className="rounded-2xl border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-8 py-3 text-medium  text-white hover:text-[#10754D] text-xl "
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 xl:col-span-5 lg:-mr-8 xl:mr-0 flex items-center">
            <img className="w-full h-auto" src={cdp} alt="img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default BrevoWebinar
