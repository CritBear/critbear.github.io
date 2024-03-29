/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 3dtext-iiixr.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    ['3D_Text_-_I']: THREE.Mesh
    ['3D_Text_-_I_1']: THREE.Mesh
    ['3D_Text_-_I_2']: THREE.Mesh
    ['3D_Text_-_X']: THREE.Mesh
    ['3D_Text_-_R']: THREE.Mesh
    ['3D_Text_-_L']: THREE.Mesh
    ['3D_Text_-_A']: THREE.Mesh
    ['3D_Text_-_B']: THREE.Mesh
  }
  materials: {
    Masterpiece: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/3dtext-iiixr.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0}>
        <mesh geometry={nodes['3D_Text_-_I'].geometry} material={materials.Masterpiece} position={[-101.43, 7.5, 0.4]} />
        <mesh geometry={nodes['3D_Text_-_I_1'].geometry} material={materials.Masterpiece} position={[-85.9, 7.5, 0.4]} />
        <mesh geometry={nodes['3D_Text_-_I_2'].geometry} material={materials.Masterpiece} position={[-70.38, 7.5, 0.4]} />
        <mesh geometry={nodes['3D_Text_-_X'].geometry} material={materials.Masterpiece} position={[-54.85, 7.5, 0.4]} />
        <mesh geometry={nodes['3D_Text_-_R'].geometry} material={materials.Masterpiece} position={[-24.03, 7.5, 0.4]} />
        <mesh geometry={nodes['3D_Text_-_L'].geometry} material={materials.Masterpiece} position={[13.91, 7.5, 0.4]} />
        <mesh geometry={nodes['3D_Text_-_A'].geometry} material={materials.Masterpiece} position={[38.66, 7.5, 0.4]} />
        <mesh geometry={nodes['3D_Text_-_B'].geometry} material={materials.Masterpiece} position={[69.12, 7.5, 0.4]} />
      </group>
    </group>
  )
}

useGLTF.preload('/3dtext-iiixr.glb')
