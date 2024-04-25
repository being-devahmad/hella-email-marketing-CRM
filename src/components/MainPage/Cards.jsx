import React from 'react'

import markingPlateform from "../assets/MarketingPlatform-64-4.svg";
import salePlateform from "../assets/SalesCRM-64-1.svg";
import conversationalPlateform from "../assets/Conversations-40-3.svg";
import coustomerPlateform from "../assets/CDP-1.svg";
import apiPlateform from "../assets/TransactionalEmails-64-3.svg";
const Cards = () => {
  return (
    <>
       <div className="flex flex-wrap justify-center gap-6 ">
   <div className="w-[400px]  border border-[#3C3585]  hover:border-2 rounded-ss-3xl rounded-ee-3xl ">
        <div className="p-4 ">
          <div className="flex justify-between ps-4">
            <h1 className="text-lg font-semibold">Markiting Plateform</h1>
            <img src={markingPlateform} alt="marking plateform" />
          </div>

         <div className="px-4">
         <p className="mt-3 text text-gray-600">
            Increase conversions with multi-channel campaigns and marketing
            automation
          </p>
          <p className="my-3">Top Features:</p>
          <ul className="text text-gray-600 list-disc mx-3">
            <li>Email markiting </li>
            <li>markiting Automation</li>
            <li>SMS And whatsapp campaigns</li>
          </ul>
         </div>
          <button
            type="button"
            className="mt-7  bg-[#3C3585] text-white hover:text-[#3C3585] hover:bg-white border-2 border-[#3C3585] py-5 text-xl font-semibold w-full rounded-2xl"
          >
            Find Out More
          </button>
        </div>
      </div>
   <div className="w-[400px]  border border-[#BC4E2D]  hover:border-2 rounded-ss-3xl rounded-ee-3xl ">
        <div className="p-4 ">
          <div className="flex justify-between ps-4">
            <h1 className="text-lg font-semibold">Sale Plateform</h1>
            <img src={salePlateform} alt="marking plateform" />
          </div>

         <div className="px-4">
         <p className="mt-3 text text-gray-600">
         Easily manage your pipeline and accelerate revenue growth across the entire sales cycle
          </p>
          <p className="my-3">Top Features:</p>
          <ul className="text text-gray-600 list-disc mx-3">
            <li>Pipeline management </li>
            <li>Automated deal tracking</li>
            <li>Meetings & call recordings</li>
          </ul>
         </div>
          <button
            type="button"
            className="mt-7  bg-[#BC4E2D] text-white hover:text-[#BC4E2D] hover:bg-white border-2 border-[#BC4E2D] py-5 text-xl font-semibold w-full rounded-2xl"
          >
            Find Out More
          </button>
        </div>
      </div>
   <div className="w-[400px]  border border-[#B22556]  hover:border-2 rounded-ss-3xl rounded-ee-3xl ">
        <div className="p-4 ">
          <div className="flex justify-between ps-4">
            <h1 className="text-lg font-semibold">Conversations Platform</h1>
            <img src={conversationalPlateform} alt="marking plateform" />
          </div>

         <div className="px-4">
         <p className="mt-3 text text-gray-600">
         Offer superb customer service with our multi-channel communication solution
          </p>
          <p className="my-3">Top Features:</p>
          <ul className="text text-gray-600 list-disc mx-3">
            <li>Chat</li>
            <li>Phone</li>
            <li>Universal inbox</li>
          </ul>
         </div>
          <button
            type="button"
            className="mt-7  bg-[#B22556] text-white hover:text-[#B22556] hover:bg-white border-2 border-[#B22556] py-5 text-xl font-semibold w-full rounded-2xl"
          >
            Find Out More
          </button>
        </div>
      </div>
   <div className="w-[400px]  border border-[#22609B]  hover:border-2 rounded-ss-3xl rounded-ee-3xl ">
        <div className="p-4 ">
          <div className="flex justify-between ps-4">
            <h1 className="text-lg font-semibold">Customer Data Plateform</h1>
            <img src={coustomerPlateform} alt="marking plateform" />
          </div>

         <div className="px-4">
         <p className="mt-3 text text-gray-600">
         Unify, manage and sync customer data to accelerate your time-to-value
          </p>
          <p className="my-3">Top Features:</p>
          <ul className="text text-gray-600 list-disc mx-3">
            <li>Multi-table data model </li>
            <li>Scoring Library</li>
            <li>Customer Analytics & BI</li>
          </ul>
         </div>
          <button
            type="button"
            className="mt-7  bg-[#22609B] text-white hover:text-[#22609B] hover:bg-white border-2 border-[#22609B] py-5 text-xl font-semibold w-full rounded-2xl"
          >
            Find Out More
          </button>
        </div>
      </div>
   <div className="w-[400px]  border border-[#116B6B]  hover:border-2 rounded-ss-3xl rounded-ee-3xl ">
        <div className="p-4 ">
          <div className="flex justify-between ps-4">
            <h1 className="text-lg font-semibold">Messaging API </h1>
            <img src={apiPlateform} alt="marking plateform" />
          </div>

         <div className="px-4">
         <p className="mt-3 text text-gray-600">
         Deliver individual messages at scale and on time with our powerful API
          </p>
          <p className="my-3">Top Features:</p>
          <ul className="text text-gray-600 list-disc mx-3">
            <li>Email, SMS & WhatsApp API</li>
            <li>CMS integration</li>
            <li>Inbound parsing</li>
          </ul>
         </div>
          <button
            type="button"
            className="mt-7  bg-[#116B6B] text-white hover:text-[#116B6B] hover:bg-white border-2 border-[#116B6B] py-5 text-xl font-semibold w-full rounded-2xl"
          >
            Find Out More
          </button>
        </div>
      </div>
      
   </div>
    </>
  )
}

export default Cards
