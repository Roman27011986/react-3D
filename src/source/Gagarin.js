/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 scene.gltf -T --shadows
Author: briligg (https://sketchfab.com/briligg)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gagarin-station-eaa03b5cfcdd400eb01d7e75e3f83261
Title: Gagarin Station
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Gagarin(props) {
  const { nodes, materials } = useGLTF('/models/gagarin.glb')
  return (
    <group {...props} dispose={null} scale={0.00005}>
      <mesh castShadow receiveShadow geometry={nodes.Cylinder082_0.geometry} material={materials.Material} />
      <mesh castShadow receiveShadow geometry={nodes['ONeill-Cylinder_0'].geometry} material={materials.Oneills} position={[0, 0, -645]} scale={[3.125, 3.125, 5.333]} />
      <mesh castShadow receiveShadow geometry={nodes['ONeill-Cylinder_1'].geometry} material={materials.Glass} position={[0, 0, -645]} scale={[3.125, 3.125, 5.333]} />
      <mesh castShadow receiveShadow geometry={nodes['Shipyard-Trusses_0'].geometry} material={materials.Trusses} position={[205, 0, -57.95]} rotation={[-Math.PI / 2, 0, 0]} scale={[150, 2, 1]} />
      <mesh castShadow receiveShadow geometry={nodes['Outer-Sun-Mirror_0'].geometry} material={materials.MirrorBack} position={[-142.218, 693.914, 179.968]} rotation={[-Math.PI / 2, -Math.PI / 4, 0]} scale={[568.005, 502.468, 502.468]} />
      <mesh castShadow receiveShadow geometry={nodes['Outer-Sun-Mirror_1'].geometry} material={materials.Mirror} position={[-142.218, 693.914, 179.968]} rotation={[-Math.PI / 2, -Math.PI / 4, 0]} scale={[568.005, 502.468, 502.468]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane001_0.geometry} material={materials.SolarPanels} position={[205.078, 647.625, -684.025]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane001_1.geometry} material={materials.Radiators} position={[205.078, 647.625, -684.025]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cylinder_0.geometry} material={materials.Rings} position={[0, 0, -38.615]} scale={1.473} />
      <mesh castShadow receiveShadow geometry={nodes.OxyTanks_0.geometry} material={materials.Root} position={[-235.971, 181.307, -991.343]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Cylinder002_0.geometry} material={materials.Docks} position={[338.996, 150.223, -290.027]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Plane_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={[1.144, 1, 12500]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube_0.geometry} material={materials.Machinery} position={[272, 233.439, -202.124]} rotation={[-Math.PI / 2, 0, 0]} scale={1.467} />
      <mesh castShadow receiveShadow geometry={nodes.Icosphere006_0.geometry} material={materials.Asteroids} position={[-422.756, -214.062, 146.714]} rotation={[-1.523, 0.049, 1.149]} />
      <mesh castShadow receiveShadow geometry={nodes.Cylinder004_0.geometry} material={materials.MicrowaveTransmitters} position={[0, 0, -1737.032]} rotation={[Math.PI / 2, -0.421, -Math.PI]} />
    </group>
  )
}

useGLTF.preload('/models/gagarin.glb')
