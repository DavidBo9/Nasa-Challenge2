/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Recourse Design ltd. (https://sketchfab.com/RecourseDesign)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/venus-e8dc5d996178422fa55d7fe0174c4568
Title: Venus
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Venus(props) {
  const { nodes, materials } = useGLTF('/models/venus.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clouds_Clouds_0.geometry}
        material={materials.Clouds}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Earth_Planet_0.geometry}
        material={materials.Planet}
      />
    </group>
  )
}

useGLTF.preload('/models/venus.glb')
