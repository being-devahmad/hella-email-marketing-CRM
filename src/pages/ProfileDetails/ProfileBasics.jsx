import React, { useEffect, useState } from 'react'
import verifyBg from "../../assets/images/verifyBg.webp"
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'

const ProfileBasics = () => {
    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        website: ""
    })
    const [continueToggle, setContinueToggle] = useState(false)
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setProfileData({ ...profileData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(profileData)
        setProfileData({
            firstName: "",
            lastName: "",
            company: "",
            website: ""
        })
        navigate("/address")
    }

    const { firstName, lastName, company, website } = profileData

    useEffect(() => {
        if (firstName === "" || lastName === "" || company === "") {
            setContinueToggle(false);
        } else {
            setContinueToggle(true);
        }
    }, [profileData]);

    return (
        <>
            <section className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='pt-8 px-4 sm:px-6 lg:px-12'>
                    <div className="logo my-5">
                        <Logo />
                    </div>
                    <div className='pt-5 md:pt-8 poppins-regular'>
                        <p className='text-3xl font-medium'>Let’s start with the basics.</p>
                        <p className='text-md pt-4'>First, we need to know a few things about you.</p>
                        <div className='mt-5'>
                            <form action="">
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                                    <div className="w-full">
                                        <label
                                            className="text-md font-semibold leading-none"
                                            htmlFor="name"
                                        >
                                            First name <span className='text-[red]'>*</span>
                                        </label>
                                        <input
                                            className='flex mt-2 h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:border-blue-700 '
                                            type="text"
                                            name='firstName'
                                            value={firstName}
                                            onChange={handleInputChange}
                                        ></input>

                                    </div>
                                    <div className="w-full">
                                        <label
                                            className="text-md font-semibold leading-none"
                                            htmlFor="name"
                                        >
                                            Last name <span className='text-[red]'>*</span>
                                        </label>
                                        <input
                                            className='flex mt-2 h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:border-blue-700 '
                                            type="text"
                                            name='lastName'
                                            value={lastName}
                                            onChange={handleInputChange}
                                        ></input>
                                    </div>
                                </div>
                                <div className="mt-4 w-full">
                                    <label
                                        className="text-md font-semibold leading-none"
                                        htmlFor="name"
                                    >
                                        Company name <span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        className='flex mt-2 h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:border-blue-700 '
                                        type="text"
                                        name='company'
                                        value={company}
                                        onChange={handleInputChange}
                                    ></input>
                                </div>
                                <div className="w-full mt-4">
                                    <label
                                        className="text-md font-semibold leading-none"
                                        htmlFor="name"
                                    >
                                        Website
                                    </label>
                                    <input
                                        className='flex mt-2 h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:border-blue-700 '
                                        type="text"
                                        name='website'
                                        value={website}
                                        onChange={handleInputChange}
                                    ></input>
                                </div>

                                {
                                    continueToggle ?
                                        <div className='mt-16 flex justify-end'>
                                            <button type='button' className='btn rounded-2xl  bg-[#000] text-white px-3 py-2' onClick={handleSubmit}>Continue</button>
                                        </div>
                                        :
                                        <div className='mt-16 flex justify-end'>
                                            <button type='button' className='btn text-[#6359DE] 
                                            font-semibold px-3 py-0.5 hover:bg-[#afa9da7d] rounded-2xl'>
                                                Answer later
                                            </button>
                                            <button type='button' className='btn rounded-2xl  bg-[#939393] text-white px-3 py-2 cursor-not-allowed' disabled>Continue</button>
                                        </div>
                                }
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

export default ProfileBasics
