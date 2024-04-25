import React from 'react'
import ConnectedTool from './connectTools/ConnectedTool'

const SolutionForBusiness = () => {
  return (
    <>
      <section className='block md:flex w-[100%] bg-white py-10'>
        <div className='flex justify-center flex-col items-center w-full lg:w-[40%]'>
          <h1 className="mt-8 tracking-tight text-black text-3xl font-semibold py-16 md:py-2">
            Solutions for every business
          </h1>

          <div className="hidden md:block mt-5">
            <button
              type="button"
              className="rounded-2xl border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-8 py-3 text-medium  text-white hover:text-[#10754D] text-xl font-semibold"
            >
              Read all customer stories

            </button>
          </div>
        </div>
        <div>
          <ConnectedTool />
        </div>
      </section>

      <section className='md:hidden block w-full'>
        <div className='py-4'>
          <button
            type="button"
            className="rounded-2xl border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-8 py-3 text-medium  text-white hover:text-[#10754D] text-xl font-semibold w-full"
          >
            Read all customer stories

          </button>
        </div>
      </section>

    </>
  )
}

export default SolutionForBusiness
