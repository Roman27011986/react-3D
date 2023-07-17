import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useLoader } from '@react-three/fiber';


import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Car(props) {
  // const { nodes, materials } = useGLTF('/models/car.glb')
  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + '/models/burst/scene.gltf')
  console.log(gltf);
    useEffect(() => {
      // gltf.scene.scale.set(0.005, 0.005, 0.005)
        gltf.scene.position.set(0,0.035,0)
      
    
  },[gltf])
  return (
    <primitive object={gltf.scene}/>
    // <group {...props} dispose={null}>
    //   <group position={[0, 0.048, -0.117]}>
    //     <mesh geometry={nodes.Cube001_1.geometry} material={materials.cromat} />
    //     <mesh geometry={nodes.Cube001_2.geometry} material={materials.goma} />
    //     <mesh geometry={nodes.Cube001_3.geometry} material={materials['vidre tronja']} />
    //   </group>
    //   <mesh geometry={nodes.reixeta_redidaor.geometry} material={materials.cromat} position={[0, 0, -0.083]} />
    //   <group position={[0, 0, 0.011]}>
    //     <mesh geometry={nodes.Cube004_1.geometry} material={materials['vidre vermell']} />
    //     <mesh geometry={nodes.Cube004_2.geometry} material={materials['vidre tronja']} />
    //   </group>
    //   <mesh geometry={nodes.llums.geometry} material={materials['vidre ']} position={[0, 0, -0.113]} />
    //   <group position={[0, 0.27, 0]}>
    //     <mesh geometry={nodes.Cube007.geometry} material={materials.cromat} />
    //     <mesh geometry={nodes.Cube007_1.geometry} material={materials.goma} />
    //   </group>
    //   <group position={[0.964, -0.89, -0.953]} rotation={[0, 0, -Math.PI / 2]} scale={[0.39, 0.14, 0.39]}>
    //     <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.cromat} />
    //     <mesh geometry={nodes.Cylinder004_2.geometry} material={materials.goma} />
    //     <mesh geometry={nodes.Cylinder004_3.geometry} material={materials.metall} />
    //   </group>
    //   <mesh geometry={nodes.Cube004.geometry} material={materials.cromat} position={[0, -0.01, 0]} />
    //   <mesh geometry={nodes.Cube006.geometry} material={materials.cromat} />
    //   <group position={[0.984, -0.89, 1.682]} rotation={[0, 0, -Math.PI / 2]} scale={[0.39, 0.14, 0.388]}>
    //     <mesh geometry={nodes.Cylinder001.geometry} material={materials.cromat} />
    //     <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.goma} />
    //     <mesh geometry={nodes.Cylinder001_2.geometry} material={materials.metall} />
    //   </group>
    //   <mesh geometry={nodes.porta_malaterao.geometry} material={materials.cromat} position={[0, -0.049, -2.077]} rotation={[-0.132, 0, 0]} />
    //   <mesh geometry={nodes.matrucla.geometry} material={materials.matricula} position={[0, 0.048, -0.108]} />
    //   <mesh geometry={nodes.interior.geometry} material={materials['Material.002']} />
    //   <mesh geometry={nodes.interior001.geometry} material={materials['textil seients']} position={[0, 0.193, -0.053]} />
    //   <mesh geometry={nodes.volant.geometry} material={materials.goma} position={[0.359, 0.029, 0.585]} scale={0.446} />
    //   <mesh geometry={nodes.vidres.geometry} material={materials['vidre  pla']} />
    //   <mesh geometry={nodes.cotxe_base002.geometry} material={materials.metall} />
    //   <mesh geometry={nodes.cotxe_base005.geometry} material={materials.metall} />
    //   <mesh geometry={nodes.cotxe_base006.geometry} material={materials.cromat} position={[0, 0, 0.004]} />
    //   <mesh geometry={nodes.Cube008.geometry} material={materials.matricula} position={[0, 0.27, 0]} />
    //   <mesh geometry={nodes.bulb.geometry} material={materials.M_Bulb} position={[-0.849, -0.244, 2.485]} rotation={[-Math.PI, 0, 0]} scale={0.021} />
    //   <mesh geometry={nodes.bulb001.geometry} material={materials.M_Bulb} position={[0.848, -0.244, 2.485]} rotation={[-Math.PI, 0, 0]} scale={0.021} />
    //   <group position={[0.475, -0.924, -2.094]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.363}>
    //     <mesh geometry={nodes.Cylinder005.geometry} material={materials.cromat} />
    //     <mesh geometry={nodes.Cylinder005_1.geometry} material={materials.goma} />
    //   </group>
    //   <mesh geometry={nodes.Cube.geometry} material={materials.metall} />
    //   <mesh geometry={nodes.Cube_1.geometry} material={materials.cromat} />
    //   <mesh geometry={nodes.Cube_2.geometry} material={materials['Material.002']} />
    //   <mesh geometry={nodes.Cube015.geometry} material={materials.metall} />
    //   <mesh geometry={nodes.Cube015_1.geometry} material={materials.cromat} />
    //   <mesh geometry={nodes.Cube019.geometry} material={materials.metall} />
    //   <mesh geometry={nodes.Cube019_1.geometry} material={materials['Material.002']} />
    // </group>
  )
}

useGLTF.preload('/models/car.glb')
