import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export default function Model() {
  const { nodes, materials } = useGLTF('/models/sketch-transformed.glb')

  // const gltf = useLoader(DRACOLoader,process.env.PUBLIC_URL +'/models/sketch-transformed.glb')
  // useEffect(() => {
  //   if (!gltf) return

  //   // let mesh = gltf.scene.children[0]
  //   console.log(mesh);
      
    
  // },[gltf])
  return (
    <group dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.brush_Wire_g0_b0.geometry} material={materials.brush_Wire} />
      <mesh castShadow receiveShadow geometry={nodes.brush_Light_g0_b0.geometry} material={materials.brush_Light} />
      <mesh castShadow receiveShadow geometry={nodes.brush_MatteHull_g0_b0.geometry} material={materials.brush_MatteHull} />
      <mesh castShadow receiveShadow geometry={nodes.brush_Fire_g0_b0.geometry} material={materials.brush_Fire} />
      <mesh castShadow receiveShadow geometry={nodes.brush_Lofted_g0_b0.geometry} material={materials.brush_Lofted} />
      <mesh castShadow receiveShadow geometry={nodes.brush_Paper_g3_b0.geometry} material={materials.brush_Paper} />
    </group>
  )
}

useGLTF.preload('/models/sketch-transformed.glb')
