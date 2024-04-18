import React, { useState } from 'react'
import verifyBg from "../../assets/images/verifyBg.webp"
import { useNavigate } from 'react-router-dom'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Logo from '../../components/Logo';

const teams = [
    { employees: "0-1 employee" },
    { employees: "2-10 employees" },
    { employees: "11-50 employees" },
    { employees: "51-250 employees" },
    { employees: "> 250 employees" },
]

const contacts = [
    { count: "1 - 300" },
    { count: "301 - 2k" },
    { count: "2001 - 5k" },
    { count: "5k - 20k" },
    { count: "20k - 100k" },
    { count: "More than 100K" },
    { count: "No contacts yet" }
]

const Business = () => {
    const [continueToggle, setContinueToggle] = useState(false)
    const [toggleTeams, setToggleTeams] = useState(false)
    const [selectedTeamCount, setSelectedTeamCount] = useState('');
    const [toggleContacts, setToggleContacts] = useState(false)
    const [selectedContactsCount, setSelectedContactsCount] = useState('');

    const handleToggleTeams = () => {
        setToggleTeams(!toggleTeams)
    }
    const handleTeamsSelect = (employees) => {
        setSelectedTeamCount(employees);
        setToggleTeams(false);
    }
    const handleToggleContacts = () => {
        setToggleContacts(!toggleContacts)
    }
    const handleContactsSelect = (count) => {
        setSelectedContactsCount(count);
        setToggleContacts(false);
    }

    const navigate = useNavigate()
    const handleNavigate = (e) => {
        e.preventDefault()
        // setContinueToggle(true)
        // navigate("/phone")
    }

    const [addressData, setAddressData] = useState({
        address: "",
        zipCode: "",
        city: "",
        country: ""
    })

    // const handleInputChange = (e) => {
    //     let { name, value } = e.target
    //     setAddressData({ ...addressData, [name]: value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(addressData)
    //     setAddressData({
    //         address: "",
    //         zipCode: "",
    //         city: "",
    //         country: null
    //     })
    //     navigate("/business")
    // }

    // const navPrev = () => {
    //     navigate("/")
    // }

    // const { address, zipCode, city } = addressData

    // useEffect(() => {
    //     if (address === "" || zipCode === "" || city === "") {
    //         setContinueToggle(false);
    //     } else {
    //         setContinueToggle(true);
    //     }
    // }, [addressData]);




    return (
        <>
            <section className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='pt-8 px-4 sm:px-6 lg:px-12'>
                    <div className="logo my-5">
                        <Logo />
                    </div>
                    <div className='pt-5 md:pt-8 poppins-regular'>
                        <p className='text-3xl font-medium'>Tell us about your organization</p>
                        <p className='text-md pt-4'>Your answers will help us recommend the best plan to support your marketing efforts.</p>
                        <div className='mt-5'>
                            <form action="">

                                {/* Teams Question */}
                                <div className="mt-4 w-full">
                                    <label
                                        className="text-md font-semibold leading-none"
                                        htmlFor="name"
                                    >
                                        How many people are on your team? <span className='text-[red]'>*</span>
                                    </label>
                                    <div className='relative'
                                        onClick={handleToggleTeams}
                                    >
                                        <input type="text" className='flex justify-between mt-2 h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:border-blue-700 cursor-pointer'
                                            readOnly
                                            value={selectedTeamCount}
                                        />
                                        {
                                            toggleTeams ?
                                                <FaAngleUp className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer" />
                                                :
                                                <FaAngleDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer" />
                                        }
                                    </div>
                                </div>

                                {/* Teams DropDown  */}
                                {
                                    toggleTeams ?
                                        <div className='flex flex-col h-50 mt-3 w-full rounded-lg border border-black/30 bg-transparent py-2 text-md placeholder:text-gray-600 z-30 '>
                                            {
                                                teams.map((team, index) => {
                                                    return (
                                                        <>
                                                            <p className='h-10 py-2 px-3 cursor-pointer hover:bg-[#d9d9d965]'
                                                                onClick={() => handleTeamsSelect(team.employees)}
                                                            >{team.employees}
                                                            </p>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div> : null
                                }

                                {/* Contacts Question */}

                                <div className="w-full mt-4">
                                    <label
                                        className="text-md font-semibold leading-none"
                                        htmlFor="name"
                                    >
                                        How many contacts do you need to have?
                                        <span className='text-[red]'>*</span>
                                    </label>
                                    <div className='relative'
                                        onClick={handleToggleContacts}
                                    >
                                        <input type="text" className='flex justify-between mt-2 h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:border-blue-700 cursor-pointer'
                                            readOnly
                                            value={selectedContactsCount}
                                        />
                                        {
                                            toggleContacts ?
                                                <FaAngleUp className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer" />
                                                :
                                                <FaAngleDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer" />
                                        }
                                    </div>
                                </div>

                                {/* Contacts DropDown  */}
                                {
                                    toggleContacts ?
                                        <div className='flex flex-col h-50 mt-3 w-full rounded-lg border border-black/30 bg-transparent py-2 text-md placeholder:text-gray-600 z-30 '>
                                            {
                                                contacts.map((contact, index) => {
                                                    return (
                                                        <>
                                                            <p className='h-10 py-2 px-3 cursor-pointer hover:bg-[#d9d9d965]'
                                                                onClick={() => handleContactsSelect(contact.count)}
                                                            >{contact.count}
                                                            </p>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div> : null
                                }

                                <div className="w-full mt-4 flex flex-col">
                                    <label
                                        className="text-md font-semibold leading-none"
                                        htmlFor="name"
                                    >
                                        Do you sell online? <span className='text-[red]'>*</span>
                                    </label>
                                    <div className='flex items-center gap-6 mt-5'>
                                        <div className="flex items-center justify-start">
                                            <input type="radio" value="" name="online" className="w-4 h-4 text-[#6359DE] bg-gray-100 border-gray-300 focus:ring-white " />
                                            <label for="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">yes</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" value="" name="online" className="w-4 h-4 text-[#6359DE] bg-gray-100 border-gray-300 focus:ring-white" />
                                            <label for="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">no</label>
                                        </div>

                                    </div>
                                </div>
                                <div className='w-full mt-4'>
                                    <div className="flex gap-2 items-center cursor-pointer">
                                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-[#6359DE] bg-gray-100 border-gray-300 focus:ring-white rounded-sm" />

                                        <label for="link-checkbox" className="ms-2 text-md text-gray-900 dark:text-gray-300">I don’t want to receive product updates, marketing tips, or promotional content from Brevo. To know more about how we process personal data please read the<a href="#" className="text-black underline ms-1">Privacy Policy</a>.</label>
                                    </div>

                                </div>
                                <div className='mt-16 flex justify-end'>
                                    <button type='button' className='btn text-[#6359DE] font-semibold px-3 py-0.5 hover:bg-[#afa9da7d] rounded-2xl '>Back</button>


                                    <button type='button' className='btn rounded-2xl  bg-[#939393] text-white px-3 py-2' onClick={handleNavigate}>
                                        Continue
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
                <div className='max-h-[100vh]'>
                    <img src={verifyBg} className='w-full h-full object-cover' alt="" />
                </div>
            </section >
        </>
    )
}

export default Business
