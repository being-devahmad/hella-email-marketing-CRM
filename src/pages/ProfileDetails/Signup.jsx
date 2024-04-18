import React, { useState } from "react";
import Logo from "../../components/Logo";
import GoogleLogo from "../../components/GoogleLogo";
import signupBg from "../../assets/images/signupBg.webp"
import AppleLogo from "../../components/AppleLogo";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [isInvalid, setIsInvalid] = useState(false);
    const [click, setClick] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const handleChange = (event) => {
        // Implement your validation logic here
        setIsInvalid(event.target.value.length < 8);
    };
    const handleClick = (e) => {
        if (click == false) {
            setClick(true);
        } else if (click == true) {
            setClick(false);
        }
    };
    return (
        <div>
            {/* <h1 className="text-[30px]">Sign Up is here</h1> */}
            <div className="main flex">
                <div className="md:w-[50%] w-full h-screen p-5 overflow-auto">
                    <div className="logo my-5">
                        <Logo />
                    </div>
                    <div className="parent ">
                        <div className="max-w-[550px] p-8 mx-auto ">
                            <h1 className="text-[32px] font-semibold text-center leading-10 my-5">
                                Create your account. No credit card needed.
                            </h1>
                            <p className="text-[16px] font-semibold text-center px-10 leading-6 my-5">
                                Send your first emails in a few minutes. Already have an
                                account?
                                <a href="#" className="underline ms-1">
                                    Login
                                </a>{" "}
                            </p>
                            <div className="buttons my-5">
                                <button className="w-full rounded-2xl bg-white shadow-lg border my-5 flex justify-center py-2 hover:bg-[#EFEEFC]">
                                    <GoogleLogo />
                                    <p className="font-semibold">Sign Up with Google</p>
                                </button>

                                <button className="w-full rounded-2xl bg-white shadow-lg border my-5 flex justify-center py-2 hover:bg-[#EFEEFC]">
                                    <AppleLogo />
                                    <p className=" font-semibold">Sign Up with Apple</p>
                                </button>
                            </div>

                            <div className=" w-full flex justify-center items-center my-5">
                                <hr className="border border-slate-400 w-full" />
                                <span>OR</span>
                                <hr className="border border-slate-400 w-full" />
                            </div>

                            <div className="form">
                                <form action="" onSubmit={(e) => handleSubmit(e)}>
                                    <label class="block">
                                        <span class="block text-lg font-medium text-slate-700 my-1">
                                            Email <span className="text-pink-600">*</span>
                                        </span>
                                        <input
                                            type="email"
                                            class="peer w-full rounded-lg p-2 border"
                                            onChange={handleChange}
                                        />
                                        <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                                            Please provide a valid email address.
                                        </p>
                                    </label>

                                    <label class="block">
                                        <span class="block text-lg font-medium text-slate-700 my-1">
                                            Password <span className="text-pink-600">*</span>
                                        </span>
                                        {/* <input type="password" class="peer w-full rounded-xl p-2 border" /> */}
                                        <div className="relative">
                                            <input
                                                type={`${click ? "text" : "password"}`}
                                                className="peer w-full border border-gray-300 rounded-lg px-2  py-2"

                                            />
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                                                <a href="#" onClick={(e) => handleClick(e)}>
                                                    <AiFillEyeInvisible
                                                        className={`${click ? "hidden" : "block"}`}
                                                    />
                                                    <AiFillEye
                                                        className={`${click ? "block" : "hidden"}`}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <p
                                            className={`mt-2 ${isInvalid ? "visible" : "invisible"
                                                } text-pink-600 text-sm`}
                                        >
                                            At least 8 characters long
                                        </p>
                                    </label>

                                    <Link to='/verify' className="btn w-full bg-[#2C2C2C] text-white py-3 px-5 rounded-2xl font-semibold text-md ">
                                        Create an account
                                    </Link>
                                    <p className="text-slate-400 text-sm my-4">
                                        By signing up, you are creating a Brevo account, and you
                                        agree to Brevo's Terms of Use and Privacy Policy
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second md:w-[50%] md:block hidden    h-screen overflow-auto">
                    <img src={signupBg} className="  w-full h-full object-cover  " alt="simple" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
