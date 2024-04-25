import React, { useState, useEffect } from "react";
import hellaLogo1 from "../assets/hella logo bg-white.png";
import { HiArrowRight, HiArrowSmLeft } from "react-icons/hi";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navListMenuItemsResources = [
  {
    title: "Resource center",
    descriptions: ["Case studies", "Blog", "Academy", "Events"],
  },
  {
    title: "Company",
    descriptions: ["Why Brevo?", "About us", "Leadership", "Careers", "Press"],
  },
  {
    title: "Using Brevo",
    descriptions: [
      "Community",
      "Developer tools",
      "Partner programs",
      "Integrations",
      "Product updates",
    ],
  },
  {
    title: "Support",
    descriptions: [
      "Help center",
      "Contact us",
      "Find an expert",
      "Platform status",
    ],
  },
];
const navListMenuItemsProducts = [
  {
    title: "Marketing Platform",

    descriptions:
      "Increase conversions with email, SMS, WhatsApp campaigns and automations",
  },
  {
    title: "Sales Platform",

    descriptions:
      "Manage your pipeline and accelerate revenue growth across the entire sales cycle",
  },
  {
    title: "Conversations Platform",

    descriptions:
      " Enable superb customer service with our multi-channel communication solution",
  },
  {
    title: "Messaging API",

    descriptions:
      " Deliver individual messages at scale and on time with our powerful API",
  },
  {
    title: "Customer Data Platform",

    descriptions:
      " Unify customer data under a single source of truth to accelerate your time-to-value",
  },
];
const navListMenuItemsSolution = [
  {
    title: "Small Business Solution",

    descriptions:
      " Leverage all-in-one capabilities for all your marketing, chat and sales needs",
  },
  {
    title: "Enterprise Solution",

    descriptions: " Scale your business with our powerful marketing solution",
  },
  {
    title: "Retail & E-commerce",

    descriptions: " Elevate engagement and expand insights across channels",
  },
  {
    title: "Smart Automation",

    descriptions:
      " Scale your demand generation and maximize your marketing ROI",
  },
  {
    title: "Developer Solution",

    descriptions:
      "Develop integrations to build stronger customer relationships",
  },
];

const navListMenuItemsResourcesToggle = [
  {
    title: "Resource center",
    descriptions: ["Case studies", "Blog", "Academy", "Events"],
  },
  {
    title: "Company",
    descriptions: ["Why Brevo?", "About us", "Leadership", "Careers", "Press"],
  },
  {
    title: "Using Brevo",
    descriptions: [
      "Community",
      "Developer tools",
      "Partner programs",
      "Integrations",
      "Product updates",
    ],
  },
  {
    title: "Support",
    descriptions: [
      "Help center",
      "Contact us",
      "Find an expert",
      "Platform status",
    ],
  },
];

const navListMenuItemsProductsToggle = [
  {
    title: [
      "Marketing Platform",
      "Sales Platform",
      "Conversations Platform",
      "Messaging API",
      "Customer Data Platform",
    ],
  },
];

const navListMenuItemsSolutionToggle = [
  {
    title: [
      "Small Business Solution",
      "Enterprise Solution",
      "Retail & E-commerce",
      "Smart Automation",
      "Developer Solution",
    ],
  },
];

function NavListMenuResources() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItemsResources.map(
    ({ title, descriptions }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex gap-3 rounded-lg px-10">
          <div className="flex flex-col text-start rounded-lg  transition-transform duration-200 transform hover:translate-x-6 my-7">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex text-lg font-bold px-6"
            >
                 <div className="text-[#006A43]"> {title}</div>
            </Typography>
            {descriptions.map((description, index) => (
              <Typography
                key={index}
                variant="paragraph"
                className="text-lg   px-6 transition-transform duration-200 transform hover:translate-x-6 relative group"
              >
                <div>
                {description}
                <span className="absolute top-1/2 left-0  transform -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-100 ">
                                                <HiArrowRight />
                                              </span>
                </div>
               
              </Typography>
              
            ))}
            
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Resources
              <span className="ml-1 ">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M8.98781 9.33325C8.98781 4.95499 5.41045 1.41353 0.987793 1.41353M8.98778 9.25297C8.98778 4.87471 12.5651 1.33325 16.9878 1.33325"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 ">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M8.98781 9.33325C8.98781 4.95499 5.41045 1.41353 0.987793 1.41353M8.98778 9.25297C8.98778 4.87471 12.5651 1.33325 16.9878 1.33325"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-full rounded-xl lg:block">
          <ul className="grid grid-cols-4 my-10 "  style={{
                                borderTop: "2px solid green ",
                                borderTopRightRadius: "50px",
                              }}>{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavListMenuProducts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItemsProducts.map(
    ({ title, descriptions }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex gap-3 rounded-lg px-10">
          <div className="flex flex-col text-start rounded-lg px-6 transition-transform duration-200 transform hover:translate-x-6 relative group my-7">
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex text-lg font-bold "
            >
                <div className="text-[#006A43]"> {title}</div>
            </Typography>

            <Typography
              variant="paragraph"
              className="text-lg text-blue-gray-500"
            >
              {descriptions}
            </Typography>
            <span className="absolute top-6 left-0  transform -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-100 ">
                                                <HiArrowRight />
                                              </span>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Products
              <span className="ml-1 ">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M8.98781 9.33325C8.98781 4.95499 5.41045 1.41353 0.987793 1.41353M8.98778 9.25297C8.98778 4.87471 12.5651 1.33325 16.9878 1.33325"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 ">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M8.98781 9.33325C8.98781 4.95499 5.41045 1.41353 0.987793 1.41353M8.98778 9.25297C8.98778 4.87471 12.5651 1.33325 16.9878 1.33325"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-full rounded-xl lg:block">
          <ul className="grid grid-cols-5 my-10 "  style={{
                                borderTop: "2px solid green ",
                                borderTopRightRadius: "50px",
                              }}>{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
function NavListMenuSolution() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = navListMenuItemsSolution.map(
    ({ title, descriptions }, key) => (
      <a href="#" key={key} style={{ textDecoration: 'none', outline: 'none'  }}>
        <MenuItem className="flex gap-4 px-10 rounded-lg">
          <div className="flex flex-col text-start rounded-lg  px-6 transition-transform duration-200 transform hover:translate-x-6 relative group my-7">
            <Typography
              variant="h6"
              color="blue-gray" 
              className="flex text-lg font-bold "
            >
             <div className="text-[#006A43]"> {title}
             
            
             </div>
           
            </Typography>

            <Typography
              variant="paragraph"
              className="text-lg text-blue-gray-500"
            >
              {descriptions}
            </Typography>
            <span className="absolute top-6 left-0  transform -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-100 ">
                                                <HiArrowRight />
                                              </span>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Solutions
              <span className="ml-1 ">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`hidden h-3 w-3 transition-transform lg:block ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M8.98781 9.33325C8.98781 4.95499 5.41045 1.41353 0.987793 1.41353M8.98778 9.25297C8.98778 4.87471 12.5651 1.33325 16.9878 1.33325"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
              <span className="ml-2 ">
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`block h-3 w-3 transition-transform lg:hidden ${
                    isMobileMenuOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M8.98781 9.33325C8.98781 4.95499 5.41045 1.41353 0.987793 1.41353M8.98778 9.25297C8.98778 4.87471 12.5651 1.33325 16.9878 1.33325"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-full rounded-xl lg:block">
          <ul className="grid grid-cols-5  my-10"  style={{
                                borderTop: "2px solid green ",
                                borderTopRightRadius: "50px",
                              }}>{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenuProducts />
      <NavListMenuSolution />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-black">
          Pricing
        </ListItem>
      </Typography>
      <NavListMenuResources />
    </List>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showData, setShowData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  // const [showBox, setShowBox] = useState(false);
  // Manage showBox state for each dropdown individually
  const [showBoxProducts, setShowBoxProducts] = useState(false);
  const [showBoxSolutions, setShowBoxSolutions] = useState(false);
  const [showBoxResources, setShowBoxResources] = useState(false);
  const toggleDropdown = (dropdown) => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
    setIsOpen1((prev) => !prev);
    
    // Toggle the corresponding showBox state based on the dropdown
    if (dropdown === 'products') {
      setShowBoxProducts(true);
      setShowBoxSolutions(false);
      setShowBoxResources(false);
    } else if (dropdown === 'solutions') {
      setShowBoxProducts(false);
      setShowBoxSolutions(true);
      setShowBoxResources(false);
    } else if (dropdown === 'resources') {
      setShowBoxProducts(false);
      setShowBoxSolutions(false);
      setShowBoxResources(true);
    }
  };

  const closeBox = () => {
    setShowBoxProducts(false);
    setShowBoxSolutions(false);
    setShowBoxResources(false);
  };

  const calculatedHeight = "calc(100vh - 104px)";
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto w-full px-3  bg-[#D7FEC8]  "  >
      <div className="flex items-center justify-between text-blue-gray-900 h-[100px]">
        <div className="md:w-[16%] w-[40%]">
          <img src={hellaLogo1} className="" alt="logo" />
        </div>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden  lg:block">
          <div className="flex justify-center items-center space-x-2">
            <div className="w-[2px] h-[21px] bg-[#10754D] "></div>

            <a href="">
              <button
                type="button"
                className="rounded-md bg-transparent px-3 py-2 text-medium font-semibold text-[#10754D]  border-0"
              >
                <u>Log in</u>
              </button>
            </a>

            <button
              type="button"
              className="rounded-lg border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-3 py-2 text-medium font-semibold text-white hover:text-[#10754D]  "
            >
              Sign Up Free
            </button>
            <button
              type="button"
              className="rounded-lg border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-3 py-2 text-medium font-semibold text-white hover:text-[#10754D]  "
            >
              Get a Demo
            </button>
          </div>
        </div>
        <Button
          variant="text"
          color="black"
          className="lg:hidden"
          onClick={() => {
            setOpenNav(!openNav);
            setShowData(!showData);
          }}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </Button>
      </div>
      {/* Conditionally render data based on openNav state */}
      {openNav && (
        <div className="">
          {/* Your data to be displayed when openNav is true */}
          {showData && (
            <div className="h-screen "style={{ height: calculatedHeight }}>
              <div className="px-5  pt-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2"></div>
                  <div className="mr-2"></div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4 ">
                    <div>
                      <span
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="flex items-center text-2xl text-[#10754D]  hover:cursor-pointer hover:underline"
                        onClick={() => toggleDropdown('products')}

                      >
                        Products
                        <HiArrowRight className={`ms-3 `} />
                      </span>
                      {showBoxProducts && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white shadow-lg z-10">
                          <div className="fixed top-0 md:w-[16%] w-[40%] px-3 flex bg-white z-50">
                            <img
                              src={hellaLogo1}
                              className=" bg-white"
                              alt="logo"
                            />
                            <button
                              className=" text-black flex  p-4 fixed right-6   bg-white"
                              onClick={closeBox}
                            >
                              <HiArrowSmLeft className="text-2xl  " /> Back
                            </button>
                          </div>
                          <div className="mt-20">
                            <p className=" text-2xl my-4 px-6 text-[#10754D] hover:cursor-pointer hover:underline font-semibold">
                              Products
                            </p>
                          </div>

                          <div id="dropdown">
                            <ul
                              aria-labelledby="dropdownDefaultButton py-"
                              style={{
                                borderTop: "2px solid green ",
                                borderTopRightRadius: "50px",
                              }}
                            >
                              {navListMenuItemsProductsToggle.map(
                                (item, index) => (
                                  <div key={index} className="mt-9">
                                    {item.title.map((title, subIndex) => (
                                      <div
                                        key={subIndex}
                                        className="relative group text-black px-6 transition-transform duration-200 transform hover:translate-x-6 my-4 "
                                      >
                                        <li className="text-black text-lg hover:cursor-pointer ml-4 hover:underline">
                                          {title}
                                        </li>
                                        <span className="absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-100 ">
                                          <HiArrowRight />
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <span
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="flex items-center text-2xl text-[#10754D]  hover:cursor-pointer hover:underline"
                        onClick={() => toggleDropdown('solutions')}
                      >
                        Solutions
                        <HiArrowRight className={`ms-3 `} />
                      </span>
                      {showBoxSolutions && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white   shadow-lg z-10">
                          <div className="fixed top-0 md:w-[16%] w-[40%] px-3 flex bg-white z-50">
                            <img
                              src={hellaLogo1}
                              className=" bg-white"
                              alt="logo"
                            />
                            <button
                              className=" text-black flex  p-4 fixed right-6   bg-white"
                              onClick={closeBox}
                            >
                              <HiArrowSmLeft className="text-2xl  " /> Back
                            </button>
                          </div>
                          <div className="mt-20">
                            <p className=" text-2xl my-4 px-6 text-[#10754D] hover:cursor-pointer hover:underline font-semibold">
                              Solutions
                            </p>
                          </div>

                          <div id="dropdown">
                            <ul
                              aria-labelledby="dropdownDefaultButton py-"
                              style={{
                                borderTop: "2px solid green ",
                                borderTopRightRadius: "50px",
                              }}
                            >
                              {navListMenuItemsSolutionToggle.map(
                                (item, index) => (
                                  <div key={index} className="mt-9">
                                    {item.title.map((title, subIndex) => (
                                      <div
                                        key={subIndex}
                                        className="relative group text-black px-6 transition-transform duration-200 transform hover:translate-x-6 my-4"
                                      >
                                        <li className="text-black text-lg hover:cursor-pointer ml-4 hover:underline">
                                          {title}
                                        </li>
                                        <span className="absolute  top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-100">
                                          <HiArrowRight />
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <div>
                      <span
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="flex items-center text-2xl text-[#10754D]  hover:cursor-pointer hover:underline"
                      >
                        Pricing
                        <HiArrowRight className={`ms-3 `} />
                      </span>
                    </div>
                    <div>
                      <span
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="flex items-center text-2xl text-[#10754D]  hover:cursor-pointer hover:underline"
                        onClick={() => toggleDropdown('resources')}
                      >
                        Resources
                        <HiArrowRight className={`ms-3 `} />
                      </span>
                      {showBoxResources && (
                        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white   shadow-lg overflow-auto z-10">
                          <div className="fixed top-0 md:w-[16%] w-[40%] px-3 flex bg-white z-50">
                            <img
                              src={hellaLogo1}
                              className=" bg-white"
                              alt="logo"
                            />
                            <button
                              className=" text-black flex  p-4 fixed right-6   bg-white"
                              onClick={closeBox}
                            >
                              <HiArrowSmLeft className="text-2xl  " /> Back
                            </button>
                          </div>

                          <div className=" mt-20">
                            <p className=" text-2xl my-4 px-6 text-[#10754D] hover:cursor-pointer hover:underline font-semibold">
                              Resources
                            </p>
                          </div>

                          <div id="dropdown">
                            <ul aria-labelledby="dropdownDefaultButton py-">
                              {navListMenuItemsResourcesToggle.map(
                                (item, index) => (
                                  <div key={index} className="mt-9">
                                    <div className=" text-black px-6">
                                      <li className="text-2xl my-4 px-6 text-[#10754D] hover:cursor-pointer hover:underline font-semibold ">
                                        {item.title}
                                      </li>
                                      <ul
                                        style={{
                                          borderTop: "2px solid green",
                                          borderTopRightRadius: "50px",
                                        }}
                                      >
                                        {item.descriptions.map(
                                          (description, subIndex) => (
                                            <div
                                              key={subIndex}
                                              className="relative group text-black px-6 transition-transform duration-200 transform hover:translate-x-6 my-4"
                                            >
                                              <li className="ml-4 ">
                                                {description}
                                              </li>
                                              <span className="absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 duration-100 ">
                                                <HiArrowRight />
                                              </span>
                                            </div>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </nav>
                </div>
                <div className="mt-2 space-y-2 flex flex-col justify-center items-center bottom-4 absolute w-full left-0 px-6 "
               
                >
                  <button
                    type="button"
                    className="w-full rounded-lg border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-3 py-2 text-medium font-semibold text-white hover:text-[#10754D]  "
                  >
                    Sign Up Free
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-lg border-2 border-[#006A43] bg-[#10754D]  hover:bg-white px-3 py-2 text-medium font-semibold text-white hover:text-[#10754D]  "
                  >
                    Get a Demo
                  </button>
                  <a href="">
                    <button
                      type="button"
                      className="rounded-md bg-transparent px-3 py-2 text-medium font-semibold text-[#10754D]  border-0"
                    >
                      <u>Log in</u>
                    </button>
                  </a>
                  <button>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="dist_marketing-btn-icon__x_9O_"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12ZM13.0033 22.3936C12.574 22.8778 12.2326 23 12 23C11.7674 23 11.426 22.8778 10.9967 22.3936C10.5683 21.9105 10.1369 21.1543 9.75435 20.1342C9.3566 19.0735 9.03245 17.7835 8.81337 16.3341C9.8819 16.1055 10.9934 15.9922 12.1138 16.0004C13.1578 16.0081 14.1912 16.1211 15.1866 16.3341C14.9675 17.7835 14.6434 19.0735 14.2457 20.1342C13.8631 21.1543 13.4317 21.9105 13.0033 22.3936ZM15.3174 15.3396C14.2782 15.1229 13.2039 15.0084 12.1211 15.0004C10.9572 14.9919 9.7999 15.1066 8.68263 15.3396C8.58137 14.4389 8.51961 13.4874 8.50396 12.5H15.496C15.4804 13.4875 15.4186 14.4389 15.3174 15.3396ZM16.1609 16.5779C15.736 19.3214 14.9407 21.5529 13.9411 22.8293C16.6214 22.3521 18.9658 20.9042 20.5978 18.862C19.6345 18.0597 18.4693 17.3939 17.1586 16.9062C16.8326 16.7849 16.4997 16.6754 16.1609 16.5779ZM21.1871 18.0517C20.1389 17.1891 18.8906 16.4837 17.5074 15.969C17.1122 15.822 16.708 15.6912 16.2967 15.5771C16.411 14.5992 16.4798 13.5676 16.4962 12.5H22.9888C22.8973 14.5456 22.2471 16.4458 21.1871 18.0517ZM7.70333 15.5771C7.58896 14.5992 7.52024 13.5676 7.50384 12.5H1.01116C1.10267 14.5456 1.75288 16.4458 2.81287 18.0517C3.91698 17.1431 5.24216 16.4096 6.71159 15.8895C7.0368 15.7744 7.3677 15.6702 7.70333 15.5771ZM3.40224 18.862C5.03424 20.9042 7.37862 22.3521 10.0589 22.8293C9.05934 21.5529 8.26398 19.3214 7.83906 16.5779C7.57069 16.6552 7.3059 16.74 7.04526 16.8322C5.65305 17.325 4.41634 18.0173 3.40224 18.862ZM15.496 11.5H8.50396C8.51961 10.5126 8.58136 9.56113 8.68263 8.66039C9.84251 8.90232 11.0448 9.01653 12.2521 8.99807C13.2906 8.9822 14.3202 8.86837 15.3174 8.66039C15.4186 9.56113 15.4804 10.5126 15.496 11.5ZM9.75435 3.86584C9.3566 4.9265 9.03245 6.21653 8.81337 7.66594C9.92191 7.90306 11.0758 8.01594 12.2369 7.99819C13.2391 7.98287 14.2304 7.87047 15.1866 7.66594C14.9675 6.21653 14.6434 4.9265 14.2457 3.86584C13.8631 2.84566 13.4317 2.08954 13.0033 1.60643C12.574 1.12215 12.2326 1 12 1C11.7674 1 11.426 1.12215 10.9967 1.60643C10.5683 2.08954 10.1369 2.84566 9.75435 3.86584ZM16.4962 11.5C16.4798 10.4324 16.411 9.40077 16.2967 8.42286C16.6839 8.31543 17.0648 8.19328 17.4378 8.05666C18.848 7.54016 20.1208 6.82586 21.1871 5.94826C22.2471 7.55418 22.8973 9.4544 22.9888 11.5H16.4962ZM17.0939 7.11766C18.4298 6.62836 19.6178 5.95419 20.5978 5.13796C18.9658 3.09584 16.6214 1.64793 13.9411 1.17072C14.9407 2.44711 15.736 4.67864 16.1609 7.42207C16.4773 7.33102 16.7886 7.22949 17.0939 7.11766ZM7.33412 7.26641C7.50092 7.32131 7.66929 7.37321 7.83905 7.42207C8.26398 4.67864 9.05934 2.44711 10.0589 1.17072C7.37862 1.64793 5.03423 3.09584 3.40224 5.13796C4.48835 6.04266 5.82734 6.77048 7.33412 7.26641ZM7.02148 8.21629C5.4308 7.69274 3.99599 6.92195 2.81287 5.94826C1.75288 7.55418 1.10267 9.4544 1.01116 11.5H7.50384C7.52024 10.4324 7.58896 9.40077 7.70333 8.42286C7.47376 8.35918 7.24638 8.29031 7.02148 8.21629Z"
                        fill="#10754D"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Navbar>
  );
};

export default Header;
