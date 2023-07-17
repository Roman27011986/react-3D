

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/models/ship.glb')
  return (
    <group {...props} dispose={null} scale={0.05}>
      <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.PaletteMaterial001} position={[1.04, 0.209, -0.252]} rotation={[Math.PI / 2, 0, 0]} scale={1.985} />
      <mesh castShadow receiveShadow geometry={nodes.Object_31.geometry} material={materials.PaletteMaterial002} position={[0.277, -0.051, 0]} scale={1.126} />
    </group>
  )
}

useGLTF.preload('/models/ship.glb')
