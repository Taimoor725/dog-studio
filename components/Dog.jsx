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
  const { scene, animations } = useGLTF("/models/dog.glb")
  const { actions } = useAnimations(animations, scene)
  useEffect(() => {
    actions["Take 001"].play()
  }, [actions])


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-1",
        endTrigger: "#section-3",
        start: "top top",
        end: "bottom bottom",
        markers: true,
        scrub: true,
      }
    })
    tl.
      to(modalRef.current.position, {
        z: "-0.45",
        y: "-0.55"
      })
      .to(modalRef.current.rotation, {
        x: `${Math.PI / 17}`
      })
      .to(modalRef.current.rotation, {
        y: `-=${Math.PI}`,
        x: `+=${Math.PI / 13}`,
        z: `+=${Math.PI / 15}`
      }, "thired")
      .to(modalRef.current.position, {
        x: "-0.4",
        z: "-0.1",
        // y:`-=0.01`
      }, "thired")
  }, [])



  useThree(({ camera, scene, gl }) => {
    camera.position.z = 0.6;
    gl.toneMapping = Three.ReinhardToneMapping;
    gl.outputColorSpace = Three.SRGBColorSpace;
  })

  const [normalMap, matcap, branchNormalMap, branchMatCap] = (useTexture(["/dog_normals.jpg", "/matCap/mat-2.png", "/branches_normals.jpg", "/branches_diffuse.jpg"])).map(texture => {
    texture.flipY = false;
    texture.colorSpace = Three.SRGBColorSpace;
    return texture
  })


  const [
    mat1,
    mat2,
    mat3,
    mat4,
    mat5,
    mat6,
    mat7,
    mat8,
    mat9,
    mat10,
    mat11,
    mat12,
    mat13,
    mat14,
    mat15,
    mat16,
    mat17,
    mat18,
    mat19,
    mat20,

  ] = (useTexture([
    "/matCap/mat-1.png",
    "/matCap/mat-2.png",
    "/matCap/mat-3.png",
    "/matCap/mat-4.png",
    "/matCap/mat-5.png",
    "/matCap/mat-6.png",
    "/matCap/mat-7.png",
    "/matCap/mat-8.png",
    "/matCap/mat-9.png",
    "/matCap/mat-10.png",
    "/matCap/mat-11.png",
    "/matCap/mat-12.png",
    "/matCap/mat-13.png",
    "/matCap/mat-14.png",
    "/matCap/mat-15.png",
    "/matCap/mat-16.png",
    "/matCap/mat-17.png",
    "/matCap/mat-18.png",
    "/matCap/mat-19.png",
    "/matCap/mat-20.png",

  ])).map(texture => {
    texture.flipY = false;
    texture.colorSpace = Three.SRGBColorSpace;
    return texture
  })


  const materialRef = useRef({
    uMatcap1 : {value :mat12},
    uMatcap2 : {value :mat19},
    uProgress : {value : 0.9},
  })


  const DogMaterial = new Three.MeshMatcapMaterial({
    normalMap: normalMap,
    matcap: mat1
  })

  DogMaterial.onBeforeCompile = onBeforeCompile


  const branchMaterial = new Three.MeshMatcapMaterial({
    normalMap: branchNormalMap,
    map: branchMatCap
  })




  function onBeforeCompile(shader) {
    shader.uniforms.uMatcapTexture1 = materialRef.current.uMatcap1
    shader.uniforms.uMatcapTexture2 = materialRef.current.uMatcap2
    shader.uniforms.uProgress = materialRef.current.uProgress

    // Store reference to shader uniforms for GSAP animation

    shader.fragmentShader = shader.fragmentShader.replace(
      "void main() {",
      `
        uniform sampler2D uMatcapTexture1;
        uniform sampler2D uMatcapTexture2;
        uniform float uProgress;

        void main() {
        `
    )

    shader.fragmentShader = shader.fragmentShader.replace(
      "vec4 matcapColor = texture2D( matcap, uv );",
      `
          vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
          vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
          float transitionFactor  = 0.2;
          
          float progress = smoothstep(uProgress - transitionFactor,uProgress, (vViewPosition.x+vViewPosition.y)*0.5 + 0.5);

          vec4 matcapColor = mix(matcapColor2, matcapColor1, progress );
        `
    )
  }




  scene.traverse((parts) => {
    if (parts.name.includes("DOG")) {
      parts.material = DogMaterial;
    }
    else {
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