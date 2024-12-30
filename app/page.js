
import BlogSection from "./components/BlogSection";
import HeroSection from "./components/HeroSection";
import Link from "next/link";
import StatsSection from "./components/StatsSection";
import { FaCogs, FaStore, FaShopify, FaSearch } from "react-icons/fa";
import { SiPagespeedinsights } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import AppGrid from "./components/AppGrid";
import LogoCloudSection from "./components/LogoCloud";

export default function Home() {

  return (
    <>
      <HeroSection />
      <AppGrid />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="pl-5 relative before:absolute before:w-4 before:h-0.5 before:rounded-md before:left-0 before:top-1/2 before:bg-primary text-primary">
              Services
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl xl:text-5xl leading-tight">What We Offer</h2>
            <p className="text-gray-700">
              Discover our tailored Shopify services designed to help you create,
              optimize, and grow your online store effortlessly.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Custom App Development",
                description:
                  "Create powerful custom Shopify apps tailored to your unique business needs.",
                icon: <FaCogs className="w-6 h-6 text-blue-600" />, // Blue for development
              },
              {
                title: "Store Setup",
                description:
                  "Set up your Shopify store with a seamless user experience and robust design.",
                icon: <FaStore className="w-6 h-6 text-green-600" />, // Green for setup
              },
              {
                title: "Store Revamp",
                description:
                  "Revamp your existing store with modern design and improved functionality.",
                icon: <MdDesignServices className="w-6 h-6 text-purple-600" />, // Purple for design
              },
              {
                title: "Performance Optimization",
                description:
                  "Optimize your Shopify store for faster load times and better conversions.",
                icon: <SiPagespeedinsights className="w-6 h-6 text-red-600" />, // Red for speed
              },
              {
                title: "Migration to Shopify",
                description:
                  "Seamlessly migrate your store from another platform to Shopify.",
                icon: <FaShopify className="w-6 h-6 text-teal-600" />, // Teal for migration
              },
              {
                title: "SEO Optimization",
                description:
                  "Enhance your store’s visibility with expert Shopify SEO services.",
                icon: <FaSearch className="w-6 h-6 text-yellow-600" />, // Yellow for visibility
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-gray-200 bg-gray-100 relative overflow-hidden group"
              >
                {/* Icon */}
                <div className="rounded-xl bg-gray-200 p-3 w-max relative">
                  {service.icon}
                </div>
                {/* Service Details */}
                <div className="mt-6 space-y-4 relative" data-aos="flip-left">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-700">{service.description}</p>
                </div>
                <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-primary/10 rounded-full transition-colors duration-300 group-hover:bg-primary/40"></span>
              </div>
            ))}
          </div>

        </div>
      </section>
      <StatsSection />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="w-full relative py-8 md:py-10 px-6 md:px-8 rounded-2xl bg-gradient-to-tr from-gray-100 to-gray-200">
            <div className="absolute right-0 top-0 h-full w-full flex justify-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
              </div>
            </div>
            <div className="absolute left-0 bottom-0 h-full w-full flex items-end">
              <div className="w-28 h-28 overflow-hidden flex rounded-xl relative blur-2xl">
                <span className="absolute w-16 h-16 -top-1 -right-1 bg-blue-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -right-1 bg-teal-500 rounded-md rotate-45" />
                <span className="absolute w-16 h-16 -bottom-1 -left-1 bg-indigo-300 rounded-md rotate-45" />
              </div>
            </div>
            <div className="mx-auto text-center max-w-xl md:max-w-2xl relative space-y-8">
              <h2 className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight font-bold text-blue-950">
                Power Your <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-20% via-indigo-400 via-30% to-teal-600">Shopify Store</span> with Tailored Apps
              </h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                delectus architecto ullam earum
              </p>
              <div className="mx-auto max-w-md sm:max-w-xl flex justify-center">
                <Link href="#" className="px-5 py-2.5 rounded-xl flex items-center rounded-lg bg-primary text-white transition ease-linear hover:bg-gray-900 flex items-center gap-x-3">
                  Discover More   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogSection />
      <LogoCloudSection />
    </>
  );
}
