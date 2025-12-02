import Homepage from "@/components/Homepage/Homepage";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-[100vw] h-[100vh]">
      <Homepage />
    </div>
  );
}
