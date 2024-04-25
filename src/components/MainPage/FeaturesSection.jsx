import { useEffect, useRef } from 'react'
import logo1 from "../../assets/Amnesty.svg";
import logo2 from "../../assets/ebay-1.svg";
import logo3 from "../../assets/LouisVuitton.svg";
import logo4 from "../../assets/Michelin-1.svg";
import logo5 from "../../assets/Stripe.svg";
import logo6 from "../../assets/Tissot.svg";
const FeaturesSection = () => {
  const scrollableRef = useRef(null);

  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollPosition = window.scrollX;
      scrollableRef.current.scrollLeft = scrollPosition;
    };

    window.addEventListener('scroll', handleWindowScroll);


    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);


  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  return (
    <>
      <div className="mx-auto my-6 max-w-9xl px-4 sm:px-6 md:my-24 lg:my-12 lg:px-8">
        <div className="mx-auto max-w-xxl text-center">
          <div className="mx-auto inline-flex px-4 py-1.5">
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Join 500,000+ customers around the world who trust Brevo
            </p>
          </div>
          <div
            className="mt-5 grid grid-cols-6 md:gap-x-20 gap-x-40 text-center sm:grid-cols-6 md:grid-cols-6 md:w-[90%] mx-auto overflow-x-auto scrollbar-thin"
            ref={scrollableRef}
          >
            {logos.map((logo, index) => (
              <div key={index} className="mx-auto flex h-20 w-20 items-center justify-center">
                <img src={logo} alt={`Logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturesSection
