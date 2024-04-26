import Logo from "../../components/Logo";
import verifyBg from "../../assets/images/verifyBg.webp"
import { Link } from "react-router-dom";

const PhoneVerification = () => {

    return (
        <>
            <div className=" flex">
                <div className=" w-[50%]">
                    <div className="my-5">
                        <Logo />
                    </div>
                    <h1 className="text-4xl px-10 pt-10">Confirm your phone number</h1>
                    <p className="px-10 pt-3">
                        We have sent a verification code to +92 302 6660865.
                    </p>
                    <h2 className="font-bold   pt-5 px-10">
                        Verification code <sup className="text-red-500">*</sup>
                    </h2>
                    <form action="">
                        <input className="mx-10 rounded-lg w-[50%]" type="text" name="" id="" />
                        <div>
                            <h1 className="pt-5 ps-10">You did not receive the code ?
                                <span className="underline hover:text-purple-900 hover:cursor-pointer">Resend code</span>  or
                                <Link to={'/phone'} className="underline hover:text-purple-900 hover:cursor-pointer">Modify phone number</Link> .</h1>
                        </div>
                        <div className="flex gap-4 justify-end m-10" >
                            <button className="text-purple-900 px-3">Back</button>
                            <button type="button" className="btn rounded-2xl text-white bg-[#939393] px-5 py-2 cursor-not-allowed">Verify</button>
                        </div>
                    </form>
                </div>
                <div className=" w-[50%]">
                    <img className="w-full h-screen object-cover" src={verifyBg} alt="" />
                </div>
            </div>
        </>
    );
}

export default PhoneVerification;