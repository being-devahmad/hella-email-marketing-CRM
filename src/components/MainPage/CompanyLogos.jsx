import React from 'react'
import bestLogo from "../../assets/best_of_2023_3dgradient_1_1-300x300-1.webp";
import martechLogo from "../../assets/martech_breakthrough_awards_2023_brevo_1_-300x292-1.webp"
import sammy from "../../assets/thesammy_2023_award_logo-300x247-1.webp"
import Leader from "../../assets/marketingautomation_leader_mid_market_leader-265x300-1.webp"
import gold from "../../assets/sascs23_gold_winner_1-2-300x293-1.webp"
import leader1 from "../../assets/marketingautomation_leader_small_business_leader-264x300-1.webp"
import { Rating } from "@material-tailwind/react";
import G2 from "../../assets/G2-original-1.svg"
import Capretra from "../../assets/Capterra-original-1.svg"
import garter from "../../assets/Gartner-original-1.svg"
import aiLogo from "../../assets/ai_camp-300x122-1.webp"
import zenat from "../../assets/zinat_technologies-300x122-1.webp"
import group22 from "../../assets/groupe22-300x122-1.webp"
import lisaLp from "../../assets/lp_media-300x122-1.webp"
import abloom from "../../assets/adbloom-300x122-1.webp"


const CompanyLogos = () => {
  function DefaultRating() {
    return <Rating value={4} />;
  }
  return (
    <>
      <div className="mx-auto my-6 max-w-6xl px-4 sm:px-6 md:my-24 lg:my-12 lg:px-8 flex flex-wrap justify-evenly" >
        {/* Left Box */}
        <div className="w-full lg:w-auto lg:flex-1 lg:mr-4">
          <div className="text-center">
            <div className="inline-flex px-4 py-1.5">
              <p className="mt-4 text-base leading-relaxed text-gray-600">Awarded for excellence</p>
            </div>
            <div className="flex flex-wrap md:gap-x-10  gap-x-10 gap-y-10 mx-auto mt-5 justify-center w-[75%]" >
              <img className="h-20 w-20" src={bestLogo} alt="Best Logo" />
              <img className="h-20 w-20" src={martechLogo} alt="Martech Logo" />
              <img className="h-20 w-20 " src={sammy} alt="Sammy Logo" />
              <img className="h-20 w-20 my-7" src={Leader} alt="Leader Logo" />
              <img className="h-20 w-20 my-7" src={gold} alt="Gold Logo" />
              <img className="h-20 w-20 my-7" src={leader1} alt="Leader 1 Logo" />
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="w-full lg:w-auto lg:flex-1 lg:ml-4 mt-8 lg:mt-0">
          <div className="text-center flex flex-col justify-center items-center">
            <div className="inline-flex px-4 py-1.5">
              <p className="mt-4 text-base leading-relaxed text-gray-600">Loved by users everywhere</p>
            </div>
            <div className="mt-5">


              <div className="flex ">
                <img src={G2} alt="" />

                <div>
                  <p>1800+ reviews</p>
                  <DefaultRating />
                </div>
              </div>
              <div className="flex my-7">
                <img src={Capretra} alt="" />

                <div>
                  <p>70+ reviews</p>
                  <DefaultRating />
                </div>
              </div>
              <div className="flex ">
                <img src={garter} alt="" />

                <div>
                  <p>1750+ reviews</p>
                  <DefaultRating />
                </div>
              </div>
              {/* Include your other image components here */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyLogos
