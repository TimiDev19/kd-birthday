import Carousel from '@/components/Carousel'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/assets/logo.jpg"

const Messages = () => {
    return (
        <div id="messages" className=' w-[100vw] h-[100vh]'>
            <Carousel />
            <Link href={"/#form"} className=' focus:outline-none text-sm lg:text-lg mx-2 p-2 border border-[#010438] rounded-2xl flex items-center justify-center font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700 w-fit mx-auto'>
                <Image
                    src={Logo}
                    alt='Apexium Logo'
                    className=' w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] rounded-full border border-[#ffffff1a] lg:mr-4 mr-2'
                />
                Leave A Message
            </Link>
        </div>
    )
}

export default Messages