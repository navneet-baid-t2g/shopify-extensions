"use client";
import { useState, useEffect } from "react";
import AnnouncementBar from "../Announcementbar";
import Navbar from "./NavBar";
import Image from "next/image";
export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnnouncementBar />
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolling
          ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-lg"
          : "bg-white"
          }`}
      >
        <div className="container flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex-shrink-0 w-40 flex justify-center">
            <a href="/" title="Go to Home">
              <Image
                src="/MainLogo.svg"
                alt="Shopify Extensions"
                width={140}
                height={56}
                priority
              />
            </a>
          </div>


          {/* Navbar */}
          <Navbar />
        </div>
      </header>
    </>
  );
}
