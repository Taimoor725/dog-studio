"use client"
import { useGSAP } from "@gsap/react"
import { useAnimations, useGLTF, useTexture } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import * as Three from "three"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

function Dog() {

    gsap.registerPlugin(useGSAP());
    gsap.registerPlugin(ScrollTrigger);




  const modalRef = useRef();
  const { scene , animations} = useGLTF("/models/dog.glb")
  const {actions } = useAnimations(animations , scene)
  useEffect(()=>{
    actions["Take 001"].play()
  },[actions])


    useGSAP(()=>{
      const tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#section-1",
            endTrigger:"#section-3",
            start:"top top",
            end:"bottom bottom",
            markers:true,
            scrub:true,
        }
      })
      tl.
      to(modalRef.current.position , {
        z:"-0.45",
        y:"-0.55"
      })
      .to(modalRef.current.rotation , {
        x:`${Math.PI/17}`
      })
      .to(modalRef.current.rotation , {
        y:`-=${Math.PI}`,
        x:`+=${Math.PI/13}`,
        z:`+=${Math.PI/15}`
      },"thired")
      .to(modalRef.current.position , {
        x:"-0.4",
        z:"-0.1",
        // y:`-=0.01`
      },"thired")
    },[])



  useThree(({camera , scene , gl})=>{
    camera.position.z=0.6;
    gl.toneMapping = Three.ReinhardToneMapping ;
    gl.outputColorSpace = Three.SRGBColorSpace;
  })

  const [normalMap , matcap , branchNormalMap , branchMatCap] = (useTexture(["/dog_normals.jpg" , "/matCap/mat-2.png","/branches_normals.jpg","/branches_diffuse.jpg"])).map(texture=>{
      texture.flipY = false;
      texture.colorSpace = Three.SRGBColorSpace;
      return texture
  })



  

const DogMaterial = new Three.MeshMatcapMaterial({
        normalMap:normalMap,
        matcap:matcap
      })

  const branchMaterial = new Three.MeshMatcapMaterial({
    normalMap : branchNormalMap,  
    map : branchMatCap
  })

  scene.traverse((parts) => {
    if (parts.name.includes("DOG")) {
      parts.material = DogMaterial;
    }
    else{
      parts.material = branchMaterial;
    }
  })

  return (
    <mesh ref={modalRef} position={[0.25, -0.6, 0]} scale={[1.1, 1.1, 1.1]} rotation={[0, Math.PI / 3.8, 0]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Dog