import React, { useState } from 'react'
import verifyBg from "../../assets/images/verifyBg.webp"
import { useNavigate } from 'react-router-dom'

const ProfileBasics = () => {
    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        company: "",
        website: ""
    })
    const [continueToggle, setContinueToggle] = useState(false)
    const navigate = useNavigate()

    const handleNavigate = (e) => {
        e.preventDefault()
        navigate("/")
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setProfileData({ ...profileData, [name]: value })
    }

    const { firstName, lastName, company, website } = profileData
    return (
        <>
            <section className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='pt-8 px-4 sm:px-6 lg:px-12'>
                    <div className='w-[100px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" viewBox="0 0 90 28"><path fill='#0B996F' d="M73.825 17.178c0-4.037 2.55-6.876 6.175-6.876 3.626 0 6.216 2.838 6.216 6.876 0 4.04-2.59 6.716-6.216 6.716-3.626 0-6.175-2.8-6.175-6.716Zm-3.785 0c0 5.957 4.144 10.155 9.96 10.155 5.816 0 10-4.198 10-10.155 0-5.957-4.144-10.314-10-10.314-5.857 0-9.96 4.279-9.96 10.314ZM50.717 7.104l7.81 19.989h3.665l7.81-19.99h-3.945l-5.658 15.433h-.08L54.662 7.104h-3.945Zm-15.18 9.354c.239-3.679 2.67-6.156 5.977-6.156 2.867 0 5.02 1.84 5.338 4.598h-6.614c-2.35 0-3.626.28-4.58 1.56h-.121v-.002Zm-3.784.6c0 5.957 4.183 10.274 9.96 10.274 3.904 0 7.33-1.999 8.803-5.158l-3.186-1.6c-1.115 2.079-3.267 3.318-5.618 3.318-2.83 0-5.379-2.159-5.379-4.238 0-1.078.718-1.56 1.753-1.56h12.63v-1.078c0-5.997-3.825-10.155-9.323-10.155-5.497 0-9.641 4.278-9.641 10.195M20.916 27.09h3.586V14.82c0-2.64 1.632-4.519 3.905-4.519.956 0 1.951.32 2.43.759.359-.96.917-1.918 1.753-2.878-.957-.799-2.59-1.32-4.184-1.32-4.382 0-7.49 3.278-7.49 7.956v12.274-.002ZM3.586 13.86V4.104h5.896c1.992 0 3.307 1.16 3.307 2.918 0 1.999-1.713 3.518-5.218 4.677-2.39.76-3.466 1.4-3.865 2.16l-.12.001Zm0 9.795v-4.077c0-1.8 1.514-3.558 3.626-4.238 1.873-.64 3.425-1.28 4.74-1.959 1.754 1.04 2.829 2.838 2.829 4.718 0 3.198-3.028 5.556-7.132 5.556H3.586ZM0 27.093h7.968c6.057 0 10.597-3.798 10.597-8.835 0-2.76-1.394-5.237-3.864-6.837 1.275-1.28 1.873-2.759 1.873-4.558 0-3.717-2.67-6.196-6.693-6.196H0v26.426Z"></path></svg>
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
                                            className="flex mt-3 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-blue-700"
                                            type="text"
                                            name='firstName'
                                            value={firstName}
                                            onClick={() => handleInputChange(e)}
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
                                            className="flex mt-3 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-blue-700"
                                            type="text"
                                            name='lasstName'
                                            value={lastName}
                                            onClick={() => handleInputChange(e)}
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
                                        className="flex mt-2 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-blue-700"
                                        type="text"
                                        name='company'
                                        value={company}
                                        onClick={() => handleInputChange(e)}
                                    ></input>
                                </div>
                                <div className="w-full mt-4">
                                    <label
                                        className="text-md font-semibold leading-none"
                                        htmlFor="name"
                                    >
                                        Website <span className='text-[red]'>*</span>
                                    </label>
                                    <input
                                        className="flex mt-2 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-blue-700"
                                        type="text"
                                        name='website'
                                        value={website}
                                        onClick={() => handleInputChange(e)}
                                    ></input>
                                </div>
                                <div className='mt-16 flex justify-end'>
                                    <button type='button' className='btn text-[#6359DE] font-semibold px-3 py-0.5 hover:bg-[#afa9da7d] rounded-2xl '>Answer later</button>
                                    <button type='button' className='btn rounded-2xl  bg-[#939393] text-white px-3 py-2 cursor-not-allowed' disabled onClick={handleNavigate} >Continue</button>
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

export default ProfileBasics
