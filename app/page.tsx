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

      <section id="section-1" className="text-lg font-semibold text-white flex flex-col relative z-10 h-screen">
        <nav className="flex justify-between  pt-16 px-16 ">
          <div>HIGH HOUSE</div>
          <div className="flex gap-3 h-full  items-center hover:cursor-pointer" onMouseEnter={() => setArrowIconAnimation("translate-x-2")} onMouseLeave={() => setArrowIconAnimation("translate-x-0")}>
            <Image alt="arrow-icon" width={12} height={12} src={"/icons/right_arrow.svg"} className={`${arrowIconAnimation} transition-all duration-500 ease-in-out`} />
            OUR SHOWREEL
          </div>
          <div className="h-full flex flex-col gap-1.5 justify-center items-end hover:cursor-pointer" onMouseEnter={() => setIconWidth("w-6")} onMouseLeave={() => setIconWidth("w-5")}>
            <div className="w-6 h-[2.3px] bg-white rounded-2xl"></div>
            <div className={`${IconWidth} transition-all duration-500 ease-in-out h-[2.3px] bg-white rounded-2xl`}></div>
            <div className="w-6 h-[2.3px] bg-white rounded-2xl"></div>

          </div>
        </nav>
        <div className="w-full h-full  flex">
          <div className="_bg-[red] flex justify-end items-center w-1/2 h-full text-white font-bold text-8xl text-right">WE <br />MAKE<br />NOTHING</div>
          <div className="_bg-[green] w-1/2 h-full flex items-end text-xl font-light pl-20">
            <div className="w-1/2 _bg-[pink] text-left">

              In a world obsessed with output,<br /> we chose silence over noise.
              No product to sell, <br />no promise to keep — just the honest admission that sometimes<br />, nothing is the most truthful thing you can make.<br />
              We are the pause between ideas,<br /> the blank canvas that refuses to pretend.
              WeMakeNothing — and in that nothing, <br />everything begins.
            </div>
          </div>
        </div>
      </section>
      <section id="section-2" className=" relative z-10 _h-screen flex justify-center items-center pt-20">
        <div className="flex flex-col justify-center items-center w-2/3 h-full px-10 gap-8">
          <div className="w-full flex">
            <div className="w-1/4 _bg-[yellow]"></div>
            <div className="w-3/4 _bg-[purple] text-base font-bold text-slate-600">
              Featured projects
            </div>
          </div>


          <div className="w-full h-28 flex items-center text-slate-600">
            <div className="w-1/4 flex justify-center text-lg font-extrabold">2015-2019</div>
            <div className="w-3/4 text-8xl font-extralight">Chaos</div>
          </div>

          <div className="w-full h-28 flex text-slate-600 items-center" >
            <div className="w-1/4 flex justify-center items-center text-lg font-extrabold">2019 — 2020</div>
            <div className="w-3/4 flex items-center text-8xl font-extralight">Pressure</div>
          </div>

          <div className="w-full h-28 flex items-center text-slate-600">
            <div className="w-1/4 flex justify-center text-lg font-extrabold">2020 — 2021</div>
            <div className="w-3/4 flex items-center text-8xl font-extralight">Survival</div>
          </div>

          <div className="w-full h-28 flex text-slate-600 items-center">
            <div className="w-1/4 flex justify-center text-lg font-extrabold">2021 — 2022</div>
            <div className="w-3/4 flex items-center text-8xl font-extralight">Awakening</div>
          </div>

          <div className="w-full h-28 flex text-slate-600 items-center">
            <div className="w-1/4 flex justify-center text-lg font-extrabold">2022 — 2023</div>
            <div className="w-3/4 flex items-center text-8xl font-extralight">Becoming</div>
          </div>

          <div className="w-full h-28 flex text-slate-600 items-center">
            <div className="w-1/4 flex justify-center text-lg font-extrabold">2023 — 2024</div>
            <div className="w-3/4 flex items-center text-8xl font-extralight">Drift</div>
          </div>

          <div className="items-center w-full h-28 flex text-slate-600">
            <div className="w-1/4 flex justify-center text-lg font-extrabold">2024 — 2025</div>
            <div className="w-3/4 flex items-center text-8xl font-extralight">Failure</div>
          </div>





        </div>
      </section>
      <section id="section-3" className="relative z-10 h-screen border border-white border-solid"></section>

    </div>
  );
}