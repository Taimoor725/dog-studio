"use client"
import Image from "next/image";
import Dog from "../components/Dog"
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

export default function Home() {

  const [IconWidth, setIconWidth] = useState("w-5")
  const [arrowIconAnimation, setArrowIconAnimation] = useState("translate-x-0")

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full h-screen fixed">
      <Canvas className="fixed top-0 left-0 w-full h-screen z-0 bg-[url('/background-l.png')] bg-cover bg-no-repeat">
        <Dog />
      </Canvas>
      </div>

      <section id="section-1" className="text-lg font-semibold text-white flex flex-col relative z-10 h-screen border border-white border-solid">
          <nav className="flex justify-between  pt-16 px-16 ">
              <div>HIGH HOUSE</div>
              <div className="flex gap-3 h-full  items-center hover:cursor-pointer" onMouseEnter={()=>setArrowIconAnimation("translate-x-2")} onMouseLeave={()=>setArrowIconAnimation("translate-x-0")}>
                <Image alt="arrow-icon" width={9} height={9} src={"/icons/right_arrow.svg"} className={`${arrowIconAnimation} transition-all duration-500 ease-in-out`}/>
                OUR SHOWREEL
              </div>
              <div className="h-full flex flex-col gap-1.5 justify-center items-end hover:cursor-pointer"  onMouseEnter={()=>setIconWidth("w-6")} onMouseLeave={()=>setIconWidth("w-5")}>
                  <div className="w-6 h-[2.3px] bg-white rounded-2xl"></div>
                  <div className={`${IconWidth} transition-all duration-500 ease-in-out h-[2.3px] bg-white rounded-2xl`}></div>
                  <div className="w-6 h-[2.3px] bg-white rounded-2xl"></div>

              </div>
          </nav>
          <div className="w-full h-full  flex">
              <div className="flex justify-end items-center w-1/2 h-full text-white font-bold text-8xl text-right">WE <br/>MAKE<br/>NOTHING</div>
              <div></div>
          </div>
      </section>
      <section id="section-2" className="relative z-10 h-screen border border-white border-solid"></section>
      <section id="section-3" className="relative z-10 h-screen border border-white border-solid"></section>

    </div>
  );
}