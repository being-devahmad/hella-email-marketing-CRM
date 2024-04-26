import Logo from "../../components/Logo";
import verifyBg from "../../assets/images/verifyBg.webp"
import { Link } from "react-router-dom";

const PhoneVerification = () => {


    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="pt-8 px-4 sm:px-6 lg:px-12 h-screen overflow-auto">
                    <div className="my-5">
                        <Logo />
                    </div>
                    <div className='pt-5 ps-2 poppins-regular'>
                        <h1 className='text-3xl font-semibold'>Confirm your phone number</h1>
                        <p className='text-md pt-4'>
                            We have sent a verification code to +92 310 1234567.
                        </p>
                        <h3 className="font-bold pt-5">
                            Verification code <sup className="text-red-500">*</sup>
                        </h3>
                        <form action="">
                            <input className="rounded-lg w-[50%]" type="text" name="" id="" />
                            <div>
                                <h1 className="pt-5">You did not receive the code ?
                                    <span className="underline hover:text-purple-900 hover:cursor-pointer ml-1">Resend code</span>  or
                                    <Link to={'/phone'} className="underline hover:text-purple-900 hover:cursor-pointer ml-1">Modify phone number</Link> .</h1>
                            </div>
                            <div className='flex justify-end h-14 mt-32 mr-5'>
                                <button type='button' className='btn text-[#6359DE] font-semibold px-3 py-0.5 hover:bg-[#afa9da7d] rounded-2xl'>
                                    Back
                                </button>


                                <button type='button' className='btn rounded-2xl  bg-[#000] text-white px-3 py-2' >
                                    Continue
                                </button>


                            </div>
                        </form>
                    </div>
                </div>
                <div className=" w-full">
                    <img className="w-full h-screen object-cover" src={verifyBg} alt="" />
                </div>
            </div>
        </>
    );
}

export default PhoneVerification;