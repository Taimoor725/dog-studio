"use client"
import { useAnimations, useGLTF, useTexture } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import * as Three from "three"
import { texture } from "three/tsl"

function Dog() {




  const { scene , animations} = useGLTF("/models/dog.glb")
  const {actions } = useAnimations(animations , scene)
  useEffect(()=>{
    actions["Take 001"].play()
  },[actions])

  useThree(({camera , scene , gl})=>{
    camera.position.z=0.6;
    gl.toneMapping = Three.ReinhardToneMapping ;
    gl.outputColorSpace = Three.SRGBColorSpace;
  })




  const [normalMap , matcap] = (useTexture(["/dog_normals.jpg" , "/matCap/mat-2.png"])).map(texture=>{
      texture.flipY = false;
      texture.colorSpace = Three.SRGBColorSpace;
      return texture
  })

const DogMaterial = new Three.MeshMatcapMaterial({
        normalMap:normalMap,
        matcap:matcap
      })

  scene.traverse((parts) => {
    if (parts.name.includes("DOG")) {
      parts.material = DogMaterial;
    }
  })

  return (
    <mesh position={[0.25, -0.6, 0]} scale={[1.1, 1.1, 1.1]} rotation={[0, Math.PI / 3.8, 0]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Dog