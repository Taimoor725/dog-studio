"use client"
import Image from "next/image";
import Dog from "../components/Dog"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <div className=" w-screen h-screen bg-black">

      <Canvas className="w-screen h-screen">
        <OrbitControls/>
        {/* <ambientLight intensity={10}/> */}
        <directionalLight intensity={10} position={[0,2,5]}/>
        <Dog/>
      </Canvas>
    </div>
  );
}
