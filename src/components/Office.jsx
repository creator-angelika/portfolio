import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from "three";


export function Office(props) {
  const { nodes, materials } = useGLTF('models/room.gltf');
  const sofa = useTexture("textures/bakum.jpg");
  const sofaMaterial = new THREE.MeshStandardMaterial({
    map: sofa,
  })
  sofa.flipY=false;

  const table = useTexture("textures/table.jpg");
  const tableMaterial = new THREE.MeshStandardMaterial({
    map: table,
  })
  table.flipY=false;

  const keyboard = useTexture("textures/keyboard.jpg");
  const keyboardMaterial = new THREE.MeshStandardMaterial({
    map: keyboard,
  })
  keyboard.flipY=false;

  const plane = useTexture("textures/plane.jpg");
  const planeMaterial = new THREE.MeshStandardMaterial({
    map: plane,
  })
  plane.flipY=false;

  const plane2 = useTexture("textures/plane2.jpg");
  const plane2Material = new THREE.MeshStandardMaterial({
    map: plane2,
  })
  plane2.flipY=false;

  const speaker = useTexture("textures/speaker.jpg");
  const speakerMaterial = new THREE.MeshStandardMaterial({
    map: speaker,
  })
  speaker.flipY=false;

  const speaker2 = useTexture("textures/speaker2.jpg");
  const speaker2Material = new THREE.MeshStandardMaterial({
    map: speaker2,
  })
  speaker2.flipY=false;

  const chair = useTexture("textures/chair.jpg");
  const chairMaterial = new THREE.MeshStandardMaterial({
    map: chair,
  })
  chair.flipY=false;

  const poster = useTexture("textures/paris.jpg");
  const posterMaterial = new THREE.MeshStandardMaterial({
    map: poster,
  })
  poster.flipY=false;

  const mouse = useTexture("textures/mouse.jpg");
  const mouseMaterial = new THREE.MeshStandardMaterial({
    map: mouse,
  })
  mouse.flipY=false;

  const marble = useTexture("textures/marble.jpg");
  const marbleMaterial = new THREE.MeshStandardMaterial({
    map: marble,
  })
  marble.flipY=false;

  const docholder = useTexture("textures/docholder.jpg");
  const docholderMaterial = new THREE.MeshStandardMaterial({
    map: docholder,
  })
  docholder.flipY=false;

  const screen1 = useTexture("textures/screen1.jpg");
  const screen1Material = new THREE.MeshStandardMaterial({
    map: screen1,
  })
  screen1Material.flipY=false;

  const d111 = useTexture("textures/d111.jpg");
  const d111Material = new THREE.MeshStandardMaterial({
    map: d111,
  })
  d111.flipY=false;

  const d2 = useTexture("textures/d2.jpg");
  const d2Material = new THREE.MeshStandardMaterial({
    map: d2,
  })
  d2.flipY=false;

  const d3 = useTexture("textures/d3.jpg");
  const d3Material = new THREE.MeshStandardMaterial({
    map: d3,
  })
  d3.flipY=false;

  // const l = useTexture("textures/l.jpg");
  // const lMaterial = new THREE.MeshStandardMaterial({
  //   map: l,
  // })
  // l.flipY=false;

  const ttv = useTexture("textures/ttv.png");
  const ttvMaterial = new THREE.MeshStandardMaterial({
    map: ttv,
  })
  ttv.flipY=false;

  const s1 = useTexture("textures/s1.png");
  const s1Material = new THREE.MeshStandardMaterial({
    map: s1,
  })
  s1.flipY=false;

  const s2 = useTexture("textures/s2.jpg");
  const s2Material = new THREE.MeshStandardMaterial({
    map: s2,
  })
  s2.flipY=false;

  const s3 = useTexture("textures/s3.jpg");
  const s3Material = new THREE.MeshStandardMaterial({
    map: s3,
  })
  s3.flipY=false;


  return (
    <group {...props} dispose={null}>
      <mesh name="Table" geometry={nodes.Table.geometry} material={tableMaterial} position={[0.022, 0.024, 1.359]} />
      <group name="DocHolder" position={[0.022, 0.024, 1.359]}>
        <mesh name="Plane007" geometry={nodes.Plane007.geometry} material={docholderMaterial} />
        <mesh name="Plane007_1" geometry={nodes.Plane007_1.geometry} material={docholderMaterial} />
      </group>
      <group name="TV" position={[-3.905, 3.028, 0]} rotation={[0.004, -0.002, -0.096]}>
        <mesh name="Plane011" geometry={nodes.Plane011.geometry} material={speakerMaterial} />
        <mesh name="Plane011_1" geometry={nodes.Plane011_1.geometry} material={ttvMaterial} />
      </group>
      <group name="Sofa" position={[1.536, 0.124, -3.054]}>
        <mesh name="Plane015" geometry={nodes.Plane015.geometry} material={sofaMaterial} />
        <mesh name="Plane015_1" geometry={nodes.Plane015_1.geometry} material={materials['iron_shiny_(1)']} />
      </group>
      <group name="SideTable" position={[-3.261, 0, 3.043]}>
        <mesh name="Plane023" geometry={nodes.Plane023.geometry} material={marbleMaterial} />
        <mesh name="Plane023_1" geometry={nodes.Plane023_1.geometry} material={marbleMaterial} />
      </group>
      <mesh name="Speakers" geometry={nodes.Speakers.geometry} material={speakerMaterial} position={[-3.999, 3.703, 3.397]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh name="Speaker2" geometry={nodes.Speaker2.geometry} material={speaker2Material} position={[-3.984, 3.703, -3.366]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh name="Wall2" geometry={nodes.Wall2.geometry} material={plane2Material} position={[0.012, 0, -0.006]} />
      <mesh name="Light" geometry={nodes.Light.geometry} material={materials['Light.001']} position={[0.608, 2.137, -3.911]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <group name="D3" position={[0.441, 2.093, 0.076]} rotation={[0, -0.558, -Math.PI / 2]}>
        <mesh name="Plane031" geometry={nodes.Plane031.geometry} material={d3Material} />
        <mesh name="Plane031_1" geometry={nodes.Plane031_1.geometry} material={s3Material} />
      </group>
      <mesh name="Mat" geometry={nodes.Mat.geometry} material={materials['Material.005']} position={[0.428, 1.453, 1.214]} />
      <mesh name="Keyboard" geometry={nodes.Keyboard.geometry} material={keyboardMaterial} position={[0.464, 1.509, 1.432]} rotation={[0, 1.571, 0]} />
      <mesh name="Mouse" geometry={nodes.Mouse.geometry} material={mouseMaterial} position={[0.268, 1.485, 0.241]} rotation={[-Math.PI / 2, 0, 1.402]} />
      <mesh name="DownLights" geometry={nodes.DownLights.geometry} material={materials.Light} position={[-3.997, 0.166, 0.02]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh name="Poster" geometry={nodes.Poster.geometry} material={posterMaterial} position={[2.579, 3.039, -3.938]} rotation={[Math.PI / 2, 0, 0]} />
      <group name="Gaming_Chair" position={[2.505, 0, 0.983]} rotation={[-Math.PI / 2, 0, -0.923]}>
        <mesh name="Object_0" geometry={nodes.Object_0.geometry} material={chairMaterial} />
        <mesh name="Object_0_1" geometry={nodes.Object_0_1.geometry} material={chairMaterial} />
        <mesh name="Object_0_2" geometry={nodes.Object_0_2.geometry} material={chairMaterial} />
        <mesh name="Object_0_3" geometry={nodes.Object_0_3.geometry} material={chairMaterial} />
      </group>
      <group name="D3001" position={[0.066, 2.093, 1.404]} rotation={[0, -0.015, -Math.PI / 2]}>
        <mesh name="Plane010" geometry={nodes.Plane010.geometry} material={d2Material} />
        <mesh name="Plane010_1" geometry={nodes.Plane010_1.geometry} material={s2Material} />
      </group>
      <group name="D3002" position={[0.406, 2.093, 2.728]} rotation={[0, 0.497, -Math.PI / 2]}>
        <mesh name="Plane013" geometry={nodes.Plane013.geometry} material={d111Material} />
        <mesh name="Plane013_1" geometry={nodes.Plane013_1.geometry} material={s1Material} />
      </group>
      <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={planeMaterial} />
      <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={planeMaterial} />
      <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={planeMaterial} />
    </group>
  )
}

useGLTF.preload('models/room.gltf')