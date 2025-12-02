import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/assets/logo.jpg"
import InfiniteCarousel from './InfiniteCarousel'

const Gallery = () => {
    return (
        <div id='gallery' className=' w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
            <div className=' mb-[20px]'>
                <span className=' mt-4 mb-4 mx-auto max-w-[95%] flex items-center justify-center uppercase font-bold text-white text-2xl lg:text-6xl p-2 bg-gradient-to-tr from-[#010438] to-[#010438] w-fit rounded-xl'>
                    <Image
                        src={Logo}
                        alt="Apexium Logo"
                        className=' w-[50px] h-[50px] rounded-full mr-3'
                    />
                    A closer look at our celebrant
                </span>
                <p className=' max-w-[95%] mx-auto lg:w-[65%] text-xl font-medium mb-4 text-center'>
                    Happy birthday to an extraordinary person whose light brightens every room. Your warmth, generosity, and unwavering positivity inspire everyone around you. Today, we celebrate not only your special day but also the countless ways you make life better for those fortunate enough to know you. May this new chapter bring you joy, growth, and unforgettable moments. You deserve every bit of love and happiness coming your way. Keep shining boldly, chasing your dreams, and sharing your beautiful spirit with the world. Cheers to you, and to a year filled with hope, laughter, and meaningful adventures ahead. Enjoy your wonderful day.
                </p>
            </div>
            <InfiniteCarousel />
        </div>
    )
}

export default Gallery