import { PerspectiveCamera, OrbitControls, useTexture } from "@react-three/drei"
import { angleToRadiance } from "../utils/angle"
import {  useFrame, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader" 
import Model from "../source/Sketch"
import Car from "../source/Car"
import texture from "../assets/sun.jpg"
import sceneTexture from "../assets/scTx.jpg"
import { useRef } from "react"
import { useAnimate, useMotionValue } from "framer-motion"
import { motion } from "framer-motion-3d"

export default function Section3D() {
    // const colorMap = useLoader(TextureLoader, texture)
    const colorMap = useTexture(texture)

    // const elRef = useRef(null)
    // const elRef2 = useRef(null)


    // useFrame(() => {
    //     elRef.current.rotation.y += 0.01;
    //     elRef2.current.rotation.y += 0.01;
    // });


    return (
        <>
            <PerspectiveCamera makeDefault castShadow position={[0, 1, 5]} />
            <OrbitControls />

            <motion.mesh position={[0, 0.5, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial color="#ffffff" map={colorMap} />
            </motion.mesh>

            <motion.mesh position={[0, 0.5, 0]} animate={{
                    rotateY: 360,
                    transition: {
                         duration: 1000,
                         ease:"linear",
                         repeat: Infinity
                }}}>
                {/* <sphereGeometry args={[0.5, 32, 32]} />
                <meshBasicMaterial color="#ffffff" map={colorMap} /> */}
                <pointLight args={["#0xffffff", 1, 300]} />
                <motion.mesh position={[0, 0.3, 2]} animate={{
                    rotateY: 360,
                    transition: {
                         duration: 1000,
                         ease:"linear",
                         repeat: Infinity
                }}}> 
                   <sphereGeometry args={[0.2, 22, 32]} />
                   <meshStandardMaterial color="#ffffff" map={colorMap} />
                </motion.mesh>

                <motion.mesh position={[0, -0.2, -1]} animate={{
                    rotateY: 360,
                    transition: {
                         duration: 1000,
                         ease:"linear",
                         repeat: Infinity
                }}}> 
                   <sphereGeometry args={[0.2, 22, 32]} />
                   <meshStandardMaterial color="#ffffff" map={colorMap} />
                </motion.mesh>
            </motion.mesh> 
          

            {/* <Model /> */}
            {/* <Car /> */}

            {/* <mesh rotation={[-(angleToRadiance(90)), 0, 0]}>
                <planeGeometry args={[7, 7]} />
                 <meshStandardMaterial color="#000000" />
            </mesh> */}
            
            <ambientLight args={["#000000"]} />
        </>
    )
}