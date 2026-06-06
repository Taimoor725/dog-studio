"use client"
import Dog from "../components/Dog"
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full h-screen fixed">
      <Canvas className="fixed top-0 left-0 w-full h-screen z-0 bg-[url('/background-l.png')] bg-cover bg-no-repeat">
        <Dog />
      </Canvas>
      </div>

      <section id="section-1" className="relative z-10 h-screen border border-white border-solid"></section>
      <section id="section-2" className="relative z-10 h-screen border border-white border-solid"></section>
      <section id="section-3" className="relative z-10 h-screen border border-white border-solid"></section>

    </div>
  );
}