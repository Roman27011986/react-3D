import { PerspectiveCamera,MeshReflectorMaterial, OrbitControls, useTexture, Sky, Stars, ScreenSpace, Shadow} from "@react-three/drei"
import { angleToRadiance } from "../utils/angle"
import {  useFrame, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader" 
import Model from "../source/Sketch"
import Car from "../source/Car"
import texture from "../assets/sunmap.jpg"
import textureEartch from "../assets/earth.jpg"
import textureSaturn from "../assets/saturn.jpg"
import saturnRing from "../assets/saturnringcolor.jpg"
import sceneTexture from "../assets/scTx.jpg"
import { useEffect, useRef } from "react"
import { useAnimate, useMotionValue } from "framer-motion"
import { motion } from "framer-motion-3d"
import { BackSide, DoubleSide, CubeReflectionMapping } from "three"
import { RGBELoader } from 'three-stdlib'
import { Bloom, EffectComposer, ChromaticAberration, DepthOfField } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import Gagarin from "../source/Gagarin"

import Ship from "../source/Ship"



export default function Sun3D() {
    const colorMap = useTexture(texture)
    const textureEartchL = useTexture(textureEartch)
    const textureSaturnL = useTexture(textureSaturn)
     const saturnRingL = useTexture(saturnRing)

 
    //  const colorMap = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
    const [q] = useLoader(CubeTextureLoader, [[texture,texture,texture,texture,texture,texture]])
    const { scene } = useThree()

    scene.add()
     return (
        <>
            <PerspectiveCamera makeDefault castShadow position={[0, 1, 5]} />
             <OrbitControls />
             <color attach="background" args={['#000000']} />
             <Stars />
             <EffectComposer>
                {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480}/> */}
                <Bloom
                     blendFunction={BlendFunction.ADD}
                     intensity={1.3}
                     width={300}
                     height={300}
                     kernelSize={5}
                     luminanceThreshold={0.15}
                     luminanceSmoothing={0.025}
                 />
                
                 <ChromaticAberration
                     blendFunction={BlendFunction.NORMAL}
                     offset={[0.0001,0.0009]}
                  />
             </EffectComposer>
            
            {/* Sun */}
            <motion.mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial  map={colorMap} />
                 
                <pointLight args={["#0xffffff", 0.9, 200]} />
             </motion.mesh>
            {/* Saturn rings */}
             <motion.mesh position={[0, 0.3, 2]} initial={{rotateX:4.5}} >
                 <ringGeometry args={[0.5, 0.3, 50]} position={[-2, -8, -8]} />
                 <meshBasicMaterial color="#ffffff" map={saturnRingL} side={DoubleSide} />
            {/* Saturn */}
                 <motion.mesh position={[0, 0, 0]} initial={{rotateX:4.5}} translateY={200} animate={{
                    rotateY: 360,
                    transition: {
                         duration: 1000,
                         ease:"linear",
                         repeat: Infinity
                }}}> 
                   <sphereGeometry args={[0.2, 22, 32]} />
                   <meshStandardMaterial color="#ffffff" map={textureSaturnL} />
             </motion.mesh>
            </motion.mesh>   
            
             <Gagarin position={[0, 0.5, -0.5]}/>
            <motion.mesh position={[0, 0.5, 0]} >   
                <motion.mesh position={[0, -0.2, -1]} animate={{
                    rotateY: 360,
                    transition: {
                         duration: 1000,
                         ease:"linear",
                         repeat: Infinity
                     }
                 }}> 
                     
                     <sphereGeometry args={[0.2, 22, 32]} />
                     <meshStandardMaterial color="#ffffff" map={textureEartchL} />
                     
                 </motion.mesh>
                 
             </motion.mesh> 
             
            <Ship position={[1, -0.5, -1]}/>
            
            <ambientLight args={["#000000"]} />
        </>
    )
}