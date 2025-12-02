"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react";
import axios from "axios";

interface MessageType {
  _id: string;
  name: string;
  message: string;
}


export default function Carousel() {
  const [emblaRef, embla] = useEmblaCarousel()

  const scrollPrev = () => embla && embla.scrollPrev()
  const scrollNext = () => embla && embla.scrollNext()
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("https://kd-birthday-backend.onrender.com/api/messages");
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    fetchMessages();
  }, []);
  return (
    <div className="relative w-full">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {messages.map((msg) => (
            <div key={msg._id} className="min-w-full h-[80vh] flex-[0_0_100%] px-4 py-6">
              <div className="bg-blue-100 h-[60vh] flex flex-col items-center justify-center rounded-xl p-6 text-center text-lg font-semibold">
                <p className="mb-4">{msg.message}</p>
                <span className="text-sm font-normal italic">— {msg.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-black/30 text-white rounded-full"
      >
        <ArrowLeft size={18} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-black/30 text-white rounded-full"
      >
        <ArrowRight size={18} />
      </button>
    </div>
  )
}
