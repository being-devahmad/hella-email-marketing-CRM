import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import hellaLogo1 from "../assets/hella logo bg-white.png";
const Footer = () => {
    const sections = [
        {
          title: "PRODUCT",
          items: [
            "Why Brevo?",
            "Email marketing",
            "Transactional email",
            "Enterprise solution",
            "All features",
            "Pricing",
            "Integrations",
            "GDPR",
            "Security",
            "Product updates"
          ]
        },
        {
          title: "COMPARE",
          items: [
            "Bulk email service",
            "Email marketing platforms",
            "Brevo vs Mailchimp",
            "Brevo vs HubSpot",
            "Brevo vs Constant Contact",
            "Brevo vs Klaviyo",
            "Mailchimp alternatives",
            "HubSpot alternatives"
          ]
        },
        {
          title: "RESOURCES",
          items: [
            "Help center",
            "Platform status",
            "Community",
            "Blog",
            "Success",
            "Academy",
            "Developers",
            "Migrate from Mailchimp"
          ]
        },
        {
          title: "PARTNERS",
          items: [
            "All partner programs",
            "Affiliates",
            "Experts",
            "Startups & VCs",
            "Integration partners",
            "Find an expert"
          ]
        },
        {
          title: "COMPANY",
          items: [
            "About us",
            "Leadership",
            "Careers",
            "Press",
            "Carbon footprint",
            "Contact us"
          ]
        }
      ];
      
  return (
    <>
       <section className="relative overflow-hidden bg-[#F9FFF6] py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center md:w-[66%] w-[90%]">
            
          <img src={hellaLogo1} className="" alt="logo" />
     
                
              </div>
            </a>
          </div>
         
          <div className="w-auto md:p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5 ms-10">
                <a href="#">
                  <div >
                  <FaXTwitter className=" h-8 w-8 ms-10" />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5 ms-5">
                <a href="#">
                 
                  <FaLinkedin className=" h-8 w-8 "  />

                </a>
              </div>
              <div className="w-auto p-1.5 ms-5">
                <a href="#">
               
                  <FaInstagram className=" h-8 w-8 "  />
                 
                </a>
              </div>
              <div className="w-auto p-1.5 ms-5">
                <a href="#">
                
                  <FaYoutube className=" h-8 w-8 " />
               
                </a>
              </div>
              <div className="w-auto p-1.5 ms-5">
                <a href="#">
                
                  <FaFacebook className=" h-8 w-8 " />
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="w-full bg-[#F9FFF6]">
      <div className="mx-auto flex max-w-7xl flex-col items-start space-x-8 md:flex-row px-6" >
     
        <div className="mt-8 grid grid-cols-2 gap-4 md:mt-0 lg:w-full md:grid-cols-5">
        {sections.map((section, index) => (
          
  <div key={index} className="mb-8 lg:mb-0 " >
    <p className="mb-6 text-lg font-semibold text-gray-700">{section.title}</p>
    <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
      {section.items.map((item, itemIndex) => (
        <li key={itemIndex} className="hover:cursor-pointer hover:underline">{item}</li>
      ))}
    </ul>
  </div>
))}

        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-7xl items-center justify-between px-4 md:flex lg:px-6">
        <div className="inline-flex items-center">
         
        <div className="w-auto ">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5 hover:cursor-pointer hover:underline">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Cookie Settings
                </a>
              </li>
              <li className="p-5 hover:cursor-pointer hover:underline">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Anti-spam
                </a>
              </li>
              <li className="p-5 hover:cursor-pointer hover:underline">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Privacy
                </a>
              </li>
              <li className="p-5 hover:cursor-pointer hover:underline">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                User Agreement
                </a>
              </li>
              <li className="p-5 hover:cursor-pointer hover:underline">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Legal Notice
                </a>
              </li>
              <li className="p-5 hover:cursor-pointer hover:underline">
                <a className="font-medium text-gray-600 hover:text-gray-700" href="#">
                Responsible Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">© Hella 2024. All rights reserved</p>
        </div>
      </div>
    </footer>

    </>
  )
}

export default Footer
