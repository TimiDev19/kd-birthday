import Image from 'next/image'
import Logo from "@/assets/logo.jpg"

const Form = () => {
    return (
        <div className=' w-[100vw] h-[100vh] flex items-center justify-center'>
            <form action="" className=' w-[90%] lg:w-[60%]'>
                <input type="text" className=' p-2 border-2 border-[#010438] w-full rounded-xl mb-4 focus:outline-none' placeholder='Enter Your Name' />
                <textarea name="" id="" cols="30" rows="10" className=' p-2 border-2 border-[#010438] w-full rounded-xl focus:outline-none mb-[10px]' placeholder='Enter Your Message'></textarea>
                <button className=' focus:outline-none text-sm lg:text-lg mx-2 p-2 border border-[#010438] rounded-2xl flex items-center justify-center font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'>
                    <Image
                        src={Logo}
                        alt='Apexium Logo'
                        className=' w-[20px] h-[20px] lg:h-[30px] lg:w-[30px] rounded-full border border-[#ffffff1a] lg:mr-4 mr-2'
                    />
                    Leave A Message
                </button>
            </form>
        </div>
    )
}

export default Form