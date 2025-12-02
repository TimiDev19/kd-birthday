"use client"
import Image from 'next/image'
import Logo from "@/assets/logo.jpg"
import { useState } from 'react';
import axios from 'axios';
import { h1 } from 'framer-motion/client';

const Form = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reload

        if (!name || !message) return alert('Please fill all fields');

        try {
            const res = await axios.post('https://kd-birthday-backend.onrender.com/api/messages', {
                name,
                message,
            });
            console.log('Message sent:', res.data);

            // Reset form
            setName('');
            setMessage('');
            setIsSent(true)
            // Optional: show a success toast or update a message list
        } catch (err) {
            console.error('Error sending message:', err);
        }
    };
    return (
        <div id="form" className=' w-[100vw] h-[100vh] flex items-center justify-center'>
            <form onSubmit={handleSubmit} className=' w-[90%] lg:w-[60%]'>
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} className=' p-2 border-2 border-[#010438] w-full rounded-xl mb-4 focus:outline-none' placeholder='Enter Your Name' />
                <textarea value={message}
                    onChange={(e) => setMessage(e.target.value)} name="" id="" cols={30} rows={10} className=' p-2 border-2 border-[#010438] w-full rounded-xl focus:outline-none mb-[10px] resize-none' placeholder='Enter Your Message'></textarea>
                    {isSent && <h1 className=' text-green-500 mb-[10px]'>Message Sent Successfully!</h1>}
                <button type='submit' className=' focus:outline-none text-sm lg:text-lg mx-2 p-2 border border-[#010438] rounded-2xl flex items-center justify-center font-extrabold bg-white/10 backdrop-blur-lg hover:bg-white/0 duration-700'>
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