import FadeInFromBottom from '@/components/FadeInFromBottom';
import { Nunito_Sans, Open_Sans, Tektur } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import Logo from "@/assets/logo.jpg"


const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700'],
});

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const tektur = Tektur({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const Hero = () => {
    return (
        <div
            id='home'
            className=''
        >
            <div className=' overflow-hidden pt-[90px] lg:h-[100vh] w-screen flex flex-col items-center justify-start lg:flex-row lg:items-center lg:justify-between lg:px-[20px]'>
                <div className=' w-[95%] m-auto lg:w-[50%] h-[30%] z-[3] flex items-center justify-start text-left'>
                    <FadeInFromBottom>
                        <div className={openSans.className}>
                            <h1 className=' mb-4 flex items-center justify-center uppercase font-bold text-white text-2xl lg:text-6xl p-2 bg-gradient-to-tr from-[#010438] to-[#010438] w-full mx-auto lg:mx-0 lg:w-fit rounded-xl'>
                                <Image
                                    src={Logo}
                                    alt="Apexium Logo"
                                    className=' w-[50px] h-[50px] rounded-full mr-3'
                                />
                                Happy Birthday
                            </h1>
                            <h1 className=' font-bold text-white text-lg lg:text-4xl mb-3'>
                            <span className={tektur.className}>Happy Birthday To</span> <br /> <span className="font-extrabold"></span> <span className=' text-[#010438] font-extrabold'>FirstName LastName</span>
                            </h1>
                            <div className=' flex items-center justify-start'>
                                <Image
                                    src={Logo}
                                    alt="Apexium Logo"
                                    className=' w-[50px] h-[50px] rounded-full mr-2'
                                />
                                <div className=' bg-[#010438]/20 w-[95%] py-2 px-4'>
                                    <div className={openSans.className}>
                                        <h1 className=' capitalize font-semibold text-[#010438] text-sm lg:text-lg'>
                                            Bridging the gap between <span className='text-white'>web3 projects</span> and <span className='text-white'>quality workforce</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInFromBottom>
                </div>

                <div className=' h-[400px] w-[400px] lg:w-[600px] lg:h-[600px] bg-white relative'>
                    
                </div>
            </div>
        </div>
    )
}

export default Hero