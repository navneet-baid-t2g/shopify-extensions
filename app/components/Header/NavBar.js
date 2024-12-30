"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiSolidChevronDown, BiSolidChevronsDown } from "react-icons/bi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);


  const toggleMenuItem = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  // Handle background scroll locking
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const menuItems = [
    { title: "Home", link: "/" },
    ,
    {
      title: "Apps",
      subItems: [
        { title: "Team", link: "/about-us/team" },
        { title: "Careers", link: "/about-us/careers" },
      ],
    },
    {
      title: "Services",
      subItems: [
        { title: "Web Design", link: "/services/web-design" },
        { title: "SEO", link: "/services/seo" },
        { title: "Marketing", link: "/services/marketing" },
      ],
    },
    {
      title: "Resource",
      subItems: [
        { title: "case Study", link: "#" },
        { title: "Portfolio", link: "#" },
        { title: "Testimonial", link: "#" },
        { title: "Blog", link: "#" },
        { title: "FAQ's", link: "#" },
        { title: "About Us", link: "#" },
      ],
    },
  ];

  return (
    <>
      <nav>
        <ul className="hidden lg:flex items-center justify-center font-semibold">
          <li className="relative group cursor-pointer hover:text-orange-500">
            <a href="#" className="px-3 py-2">Home
            </a>
          </li>
          <li className="relative group  cursor-pointer hover:text-orange-500">
            <button className="px-3 py-2 flex items-center">Apps <BiSolidChevronDown
              className="ml-2 transition-all duration-300 ease-in-out group-hover:hidden"
            />
              <BiSolidChevronsDown
                className="ml-2 transition-all duration-300 ease-in-out hidden group-hover:flex"
              /></button>
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px]">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div
                  className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 left-1/2 -translate-x-1/2 transition-transform duration-500 ease-in-out rounded-sm">
                </div>

                <div className="relative z-10">
                  <a
                    href="#"
                    className="block p-2 -mx-2 rounded-lg bg-gradient-to-br from-indigo-50 to-pink-50 text-orange-500 font-semibold transition ease-in-out duration-300"
                  >
                    Unlock Your Store's Potential
                    <p className="text-gray-500 font-normal">Transform your business with a custom solution today!</p>
                  </a>


                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Shopify Apps</p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Wishlist App
                            <p className="text-gray-500 font-normal">Add products to your wishlist</p>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Image Search App
                            <p className="text-gray-500 font-normal">Search by image</p>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Social Integration
                            <p className="text-gray-500 font-normal">Integrate with social media</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Shopify Apps</p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500"
                          >
                            Easy Import
                            <p className="text-gray-500 font-normal">Import products effortlessly</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500"
                          >
                            Store Notifier
                            <p className="text-gray-500 font-normal">Notify customers of updates</p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500"
                          >
                            Loyalty Program
                            <p className="text-gray-500 font-normal">Reward your loyal customers</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group  cursor-pointer hover:text-orange-500">
            <button className="px-3 py-2 flex items-center">Services <BiSolidChevronDown
              className="ml-2 transition-all duration-300 ease-in-out group-hover:hidden"
            />
              <BiSolidChevronsDown
                className="ml-2 transition-all duration-300 ease-in-out hidden group-hover:flex"
              /></button>
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-full sm:min-w-[500px] md:min-w-[700px] lg:min-w-[990px]">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div
                  className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 left-1/2 -translate-x-1/2 transition-transform duration-500 ease-in-out rounded-sm">
                </div>

                <div className="relative z-10">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Marketing</p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Course Editor
                            <p className="text-gray-500 font-normal">Create and customize courses effortlessly.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Accept Payments
                            <p className="text-gray-500 font-normal">Set up seamless payment processing.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            AI Captions
                            <p className="text-gray-500 font-normal">Automatically generate captions for your videos.</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Store Setup</p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Custom Plugins
                            <p className="text-gray-500 font-normal">Enhance your store functionality with plugins.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Bulk Uploads
                            <p className="text-gray-500 font-normal">Easily upload large amounts of content.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Social Media Integration
                            <p className="text-gray-500 font-normal">Connect your store to social media for easy sharing.</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Design & Optimization</p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Website Design
                            <p className="text-gray-500 font-normal">Responsive designs for all devices.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            SEO Optimization
                            <p className="text-gray-500 font-normal">Improve search engine visibility.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Performance Boost
                            <p className="text-gray-500 font-normal">Optimize loading speed and performance.</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">Development</p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            Custom Integrations
                            <p className="text-gray-500 font-normal">Seamlessly connect your platform with other tools.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            API Development
                            <p className="text-gray-500 font-normal">Develop custom APIs for unique features.</p>
                          </a>
                        </li>
                        <li>
                          <a href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                            E-commerce Solutions
                            <p className="text-gray-500 font-normal">Build scalable e-commerce platforms.</p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group  cursor-pointer hover:text-orange-500">
            <button className="px-3 py-2 flex items-center">
              Resource
              <BiSolidChevronDown
                className="ml-2 transition-all duration-300 ease-in-out group-hover:hidden"
              />
              <BiSolidChevronsDown
                className="ml-2 transition-all duration-300 ease-in-out hidden group-hover:flex"
              />
            </button>

            <div
              className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div
                  className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm">
                </div>
                <div className="relative z-10">
                  <ul className="text-[15px]">
                    <li>
                      <a href="#"
                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                        Case Study
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                        Testimonial
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a href="#"
                        className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-orange-500">
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {isMenuOpen && (
          <>            <div className="absolute top-0 right-0 h-screen  inset-0 bg-black opacity-50 z-40" onClick={() => setIsMenuOpen(false)} />
            <div
              className={`absolute top-0 right-0 h-screen w-8/12 bg-white shadow-lg transform transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                } z-50`}
            >

              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Menu</h2>
                  <button
                    className="lg:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                      />
                    </svg>
                  </button>
                </div>
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index} className="mb-2">
                      <div
                        onClick={() => toggleMenuItem(index)}
                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${activeItem === index
                          ? "bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold text-orange-500"
                          : "bg-gray-100 hover:bg-gray-200"
                          }`}
                      >

                        <Link href={item.link || "#"} className="w-full">
                          <span>{item.title}</span>
                        </Link>
                        {item.subItems && (
                          <svg
                            className={`w-5 h-5 transform transition-transform ${activeItem === index ? "rotate-180" : "rotate-0"
                              }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </div>
                      {activeItem === index && item.subItems && (
                        <ul className="mt-2 ml-4">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.link}
                                className="block p-2 text-sm text-gray-700 hover:text-blue-600"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div></>
        )}

      </nav>
      <div className="hidden lg:flex flex-shrink-0 flex justify-center">
        <Link
          href="#"
          className="hidden lg:flex px-6 py-2 duration-300 ease-linear justify-center w-full sm:w-auto border border-blue-600 text-blue-600 hover:text-white hover:bg-blue-700 hover:scale-105 dark:bg-gray-900 dark:text-white dark:border-gray-800 dark:hover:bg-gray-950 rounded-lg"
        >
          Hire Us
        </Link>

      </div>
    </>
  );
}
