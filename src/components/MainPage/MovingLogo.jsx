import React from 'react'
import { useEffect, useRef } from 'react';
import connectLogo1 from "../../assets/am.webp";
import connectLogo2 from "../../assets/n_n.webp";
import connectLogo3 from "../../assets/intercom.webp";
import connectLogo4 from "../../assets/yotpo.webp";
import connectLogo5 from "../../assets/zoom.webp";
import connectLogo6 from "../../assets/zendesk.webp";
import connectLogo7 from "../../assets/stripe.webp";
const MovingLogo = () => {
    const scrollableRef = useRef(null);

    useEffect(() => {
        if (scrollableRef.current) {
            scrollableRef.current.style.animation = "scrollAnimation 20s linear infinite";
        }

        return () => {
            if (scrollableRef.current) {
                scrollableRef.current.style.animation = "none";
            }
        };
    }, []);

    const logos = [connectLogo1, connectLogo2, connectLogo3, connectLogo4, connectLogo5, connectLogo6, connectLogo7];

    return (
        <>
            <div className='bg-[#E8FEDF]'>
                <div className="mx-auto  w-full px-4 sm:px-6  lg:px-8 py-7">
                    <div className="mx-auto max-w-xxl text-center">
                        <div className="mx-auto px-4 py-1.5">
                            <p className="mt-4 leading-relaxed text-black font-bold text-3xl">
                                Brevo connects to the tools you already use
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-black">
                                Brevo runs alongside more than 150 leading digital tools.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 mx-auto overflow-x-hidden w-full max-w-full logos">
                        <div className="logos-slide">
                            <img src={connectLogo1} alt="Logo 1" />
                            <img src={connectLogo2} alt="Logo 2" />
                            <img src={connectLogo3} alt="Logo 3" />
                            <img src={connectLogo4} alt="Logo 4" />
                            <img src={connectLogo5} alt="Logo 5" />
                            <img src={connectLogo6} alt="Logo 6" />
                            <img src={connectLogo7} alt="Logo 7" />
                        </div>
                        <div className="logos-slide">
                            <img src={connectLogo1} alt="Logo 1" />
                            <img src={connectLogo2} alt="Logo 2" />
                            <img src={connectLogo3} alt="Logo 3" />
                            <img src={connectLogo4} alt="Logo 4" />
                            <img src={connectLogo5} alt="Logo 5" />
                            <img src={connectLogo6} alt="Logo 6" />
                            <img src={connectLogo7} alt="Logo 7" />
                        </div>
                    </div>

                    <div className="mx-auto max-w-xxl text-center mt-10 ">
                        <button
                            type="button"
                            className="rounded-2xl border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-8 py-3 text-medium  text-white hover:text-[#10754D] text-xl font-semibold"
                        >
                            See all integration

                        </button>
                    </div>
                </div>
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 bg-[#D7FEC8] py-7 rounded-t-full">
                    <div className="mx-auto max-w-xxl text-center">
                        <div className="mx-auto px-4 py-1.5">
                            <p className="mt-4 leading-relaxed text-black font-bold text-3xl">
                                Ready to get started?
                            </p>
                            <p className="mt-4 text-base leading-relaxed text-black">
                                Create your free account, no credit card needed.
                            </p>
                        </div>
                    </div>


                    <div className="mx-auto max-w-xxl text-center mt-10 ">
                        <button
                            type="button"
                            className="rounded-2xl border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-8 py-3 text-medium  text-white hover:text-[#10754D] text-xl font-semibold"
                        >
                            Sign up free

                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MovingLogo
