import React, { useEffect, useState } from 'react'
import verifyBg from "../../assets/images/verifyBg.webp"
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'

const PhoneDetails = () => {


    const [addressData, setAddressData] = useState({
        address: "",
        zipCode: "",
        city: "",
        country: ""
    })
    const [continueToggle, setContinueToggle] = useState(false)
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setAddressData({ ...addressData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(addressData)
        setAddressData({
            address: "",
            zipCode: "",
            city: "",
            country: null
        })
        navigate("/business")
    }

    const navPrev = () => {
        navigate("/")
    }

    const { address, zipCode, city } = addressData

    useEffect(() => {
        if (address === "" || zipCode === "" || city === "") {
            setContinueToggle(false);
        } else {
            setContinueToggle(true);
        }
    }, [addressData]);

    return (
        <>
            <section className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='pt-8 px-4 sm:px-6 lg:px-12'>
                    <div className="logo my-5">
                        <Logo />
                    </div>
                    <div className='pt-5 md:pt-8 poppins-regular'>
                        <p className='text-3xl font-medium'>Validate your phone number</p>
                        <p className='text-md pt-4'>We need your phone number in order to set up a two-factor authentication, and secure your account.</p>
                        <div className='mt-5'>



                            <form action="">
                                <div className=" w-full">
                                    <label
                                        className="text-md font-semibold leading-none"
                                        htmlFor="name"
                                    >
                                        Address <span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        className="mt-3 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-blue-700"
                                        type="text"
                                        name='address'
                                        value={address}
                                        onChange={handleInputChange}
                                    ></input>
                                </div>


                                <div className='mt-16 flex justify-end'>
                                    <button type='button' className='btn text-[#6359DE] 
                                            font-semibold px-3 py-0.5 hover:bg-[#afa9da7d] rounded-2xl'
                                        onClick={navPrev}
                                    >
                                        Back
                                    </button>

                                    {
                                        continueToggle ?
                                            <button type='button' className='btn rounded-2xl  bg-[#000] text-white px-3 py-2' onClick={handleSubmit}>
                                                Continue
                                            </button> :
                                            <button type='button' className='btn rounded-2xl  bg-[#939393] text-white px-3 py-2 cursor-not-allowed' disabled>
                                                Continue
                                            </button>
                                    }

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className='max-h-[100vh]'>
                    <img src={verifyBg} className='w-full h-full object-cover' alt="" />
                </div>
            </section>
        </>
    )
}

export default PhoneDetails
