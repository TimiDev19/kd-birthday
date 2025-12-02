"use client";
import React, { useState } from 'react'
import { Nunito_Sans, Tektur } from 'next/font/google';
import Logo from "@/assets/logo.jpg"
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from './FadeIn';
import { motion } from "framer-motion";
// import XIcon from '@mui/icons-material/X';
// import TelegramIcon from '@mui/icons-material/Telegram';

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className=' fixed z-50 w-screen h-[80px]'>
            <FadeIn>
                <div className=' w-full h-[80px] flex items-center justify-between px-[10px] bg-[#010438]/10 backdrop-blur-sm'>
                    {/* Left Container */}
                    <div className=' w-[30%]'>
                        <div className={nunitoSans.className}>
                            <div className=' flex items-center justify-start'>
                                <Image
                                    src={Logo}
                                    alt='Apexium Logo'
                                    className=' w-[50px] h-[50px] rounded-full'
                                />
                                <h1 className=' uppercase font-semibold text-xl lg:text-2xl ml-3 hidden lg:block'>Happy Birthday</h1>
                            </div>
                        </div>
                    </div>

                    {/* Middle Container */}
                    <div className=' w-[30%] hidden lg:flex items-center justify-center'>
                        <div className={nunitoSans.className}>
                            <div className={'flex items-center justify-center'}>
                                <nav className="space-x-4">
                                    <Link
                                        href="/#home"
                                        className="relative group"
                                    >
                                        Home
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#010438] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#gallery"
                                        className="relative group"
                                    >
                                        Gallery
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#010438] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#messages"
                                        className="relative group"
                                    >
                                        Messages
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#010438] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </nav>

                            </div>
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className=' lg:w-[30%] flex items-center justify-end'>
                        <div className={nunitoSans.className}>
                            <div className=' flex items-center justify-center'>
                                <Link target='blank' href={"https://t.me/ApexiumWorkforce"} className=' focus:outline-none text-sm lg:text-lg mx-2 p-2 border border-[#010438] rounded-2xl flex items-center justify-center font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'>
                                    <Image
                                        src={Logo}
                                        alt='Apexium Logo'
                                        className=' w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] rounded-full border border-[#ffffff1a] lg:mr-4 mr-2'
                                    />
                                    Leave A Message
                                </Link>
                            </div>
                        </div>
                    </div>

                    <button
                        aria-label="Open menu"
                        className="relative w-12 h-12 flex items-center justify-center cursor-pointer lg:hidden"
                        onClick={toggleSidebar}
                    >
                        {/* Top Line */}
                        <div
                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"
                                }`}
                        ></div>

                        {/* Bottom Line */}
                        <div
                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"
                                }`}
                        ></div>
                    </button>

                    <motion.div
                        initial={{ width: 0 }} // Initial width of sidebar when closed
                        animate={{ width: isOpen ? "85vw" : 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            duration: 0.5,
                        }} // Smooth transition
                        style={{
                            height: "100vh",
                            backgroundColor: "",
                            color: "black",
                            overflow: "hidden",
                            position: "fixed",
                            top: 0,
                            left: 0,
                        }}
                        className=' shadow-md shadow-black bg-blue-600 navbar-bg text-white'
                    >
                        {/* Sidebar content */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isOpen ? 1 : 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ padding: "20px" }}
                        >
                            <div className={nunitoSans.className}>
                                <div className=' flex w-full items-center justify-between mb-8 text-[#010438]'>
                                    <h3 className=' text-xl text-[#010438] font-bold'>
                                        <Image
                                            src={Logo}
                                            alt='Apexium Logo'
                                            className=' w-[50px] h-[50px] rounded-full'
                                        />
                                    </h3>
                                    <button
                                        aria-label="Open menu"
                                        className="relative w-12 h-12 flex items-center justify-center cursor-pointer lg:hidden"
                                        onClick={toggleSidebar}
                                    >
                                        {/* Top Line */}
                                        <div
                                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45" : "-translate-y-1.5"
                                                }`}
                                        ></div>

                                        {/* Bottom Line */}
                                        <div
                                            className={`absolute w-6 h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45" : "translate-y-1.5"
                                                }`}
                                        ></div>
                                    </button>
                                </div>
                            </div>
                            <div className={nunitoSans.className}>
                                <ul style={{ listStyle: "none", padding: 0 }}>
                                    <Link
                                        href="/#home"
                                        className="relative group text-[#010438] block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Home
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#010438] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#gallery"
                                        className="relative group text-[#010438] block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Gallery
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#010438] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                    <Link
                                        href="/#messages"
                                        className="relative group text-[#010438] block w-fit mb-4 text-3xl"
                                        onClick={toggleSidebar}
                                    >
                                        Messages
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-[#010438] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                    </Link>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </FadeIn>
        </div>
    )
}

export default Navbar
