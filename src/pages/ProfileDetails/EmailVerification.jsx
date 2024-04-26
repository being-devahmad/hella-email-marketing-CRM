import React from "react";
import Logo from "../../components/Logo";
import verifyBg from "../../assets/images/verifyBg.webp"
import { Link } from "react-router-dom";

const EmailVerification = () => {
    return (
        <>
            <div>
                <div className="main flex">
                    <div className="md:w-[50%] w-full h-screen p-5 ">
                        <div className="logo my-5">
                            <Logo />
                        </div>
                        <div className="parent ">
                            <div className="max-w-[550px] p-8 mx-auto ">
                                <h1 className="text-[32px] font-semibold text-center p-2 leading-10 my-8">
                                    Great! Now let's verify your email address.
                                </h1>
                                <p className="text-[16px] font-semibold text-center px-10 leading-6 my-5">
                                    To validate your registration, an email has been sent to{" "}
                                    <a href="#" className="underline mx-1">
                                        ayesha88250@gmail.com
                                    </a>
                                    with a link to verify your account.
                                </p>

                                <p className="text-[16px] font-semibold text-center px-10 leading-6 my-5">
                                    If you have not received the email after a few minutes, please
                                    check your spam folder
                                </p>
                                <div className="buttons my-5">
                                    <button className="w-full bg-[white] text-[#6358DE] py-2 rounded-2xl font-semibold text-md my-3 hover:bg-[#EFEEFC]">
                                        Resend email
                                    </button>
                                </div>

                                <div className="w-full my-5 flex justify-center">
                                    <a href="#" className=" underline ">
                                        Sign in with another email address
                                    </a>
                                </div>
                                <div className="flex justify-center text-center">
                                    <Link to={'/profile'} type='button' className='btn rounded-2xl bg-black
                                         text-white w-52 py-2 px-5'>
                                        Continue
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* right section */}
                    <div className="second md:w-[50%] md:block hidden h-screen overflow-auto">
                        <img
                            src={verifyBg}
                            className="  w-full h-full object-cover  "
                            alt="simple"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmailVerification;
