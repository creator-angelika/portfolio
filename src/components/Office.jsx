import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from "three";

export function Office(props) {
  const { nodes, materials } = useGLTF('models/gamingroom.glb');
  
  
  const sofa = useTexture("textures/sofa.jpg");
  sofa.flipY=false;
  sofa.encoding = THREE.sRGBEncoding;
  const sofaMaterial = new THREE.MeshStandardMaterial({
    map: sofa,
  })
  

  const GamingChair = useTexture("textures/gamingchair.jpg");
  GamingChair.flipY=false;
  const GamingChairMaterial = new THREE.MeshStandardMaterial({
    map: GamingChair,
  })
  

  const Table = useTexture("textures/tablee.jpg");
  Table.flipY=false;
  Table.encoding= THREE.sRGBEncoding;
  const TableMaterial = new THREE.MeshStandardMaterial({
    map: Table,
  })
  

  const RingLight = useTexture("textures/ringlight.jpg");
  RingLight.flipY=false;
  RingLight.encoding=THREE.sRGBEncoding;
  const RingLightMaterial = new THREE.MeshStandardMaterial({
    map: RingLight,
  })
  

  const Speaker = useTexture("textures/speaker.jpg");
  Speaker.flipY=false;
  Speaker.encoding=THREE.sRGBEncoding;
  const SpeakerMaterial = new THREE.MeshStandardMaterial({
    map: Speaker,
  })
  

  const Speaker2 = useTexture("textures/speaker2.jpg");
  Speaker2.flipY=false;
  Speaker2.encoding=THREE.sRGBEncoding;
  const Speaker2Material = new THREE.MeshStandardMaterial({
    map: Speaker2,
  })
  

  const Keyboard = useTexture("textures/keyboard.jpg");
  Keyboard.flipY=false;
  Keyboard.encoding=THREE.sRGBEncoding;
  const KeyboardMaterial = new THREE.MeshStandardMaterial({
    map: Keyboard,
  })
  

  const Mouse = useTexture("textures/mouse.jpg");
  Mouse.flipY=false;
  Mouse.encoding=THREE.sRGBEncoding;
  const MouseMaterial = new THREE.MeshStandardMaterial({
    map: Mouse,
  })
  

  const MousePad = useTexture("textures/mousepad.jpg");
  MousePad.flipY=false;
  MousePad.encoding = THREE.sRGBEncoding;
  const MousePadMaterial = new THREE.MeshStandardMaterial({
    map: MousePad,
  })
  

  const Floor = useTexture("textures/floor.jpg");
  Floor.flipY=false;
  Floor.encoding = THREE.sRGBEncoding;
  const FloorMaterial = new THREE.MeshStandardMaterial({
    map: Floor,
  })
  

  const Wall2 = useTexture("textures/wall2.jpg");
  Wall2.flipY=false;
  Wall2.encoding=THREE.sRGBEncoding;
  const Wall2Material = new THREE.MeshStandardMaterial({
    map: Wall2,
  })
  

  const Wall = useTexture("textures/wall.jpg");
  Wall.flipY=false;
  Wall.encoding=THREE.sRGBEncoding;
  const wallMaterial = new THREE.MeshStandardMaterial({
    map: Wall,
  })
  
  
  const plant = useTexture("textures/plant.jpg");
  plant.flipY=false;
  plant.encoding=THREE.sRGBEncoding;
  const plantMaterial = new THREE.MeshStandardMaterial({
    map: plant,
  })
  
  
  const books = useTexture("textures/books.jpg");
  books.flipY=false;
  books.encoding=THREE.sRGBEncoding;
  const booksMaterial = new THREE.MeshStandardMaterial({
    map: books,
  })
  

  const globe = useTexture("textures/globe.jpg");
  globe.flipY=false;
  globe.encoding=THREE.sRGBEncoding;
  const globeMaterial = new THREE.MeshStandardMaterial({
    map: globe,
  })
  
  
  const tvtable = useTexture("textures/tvtable.jpg");
  tvtable.flipY=false;
  tvtable.encoding=THREE.sRGBEncoding;
  const tvtableMaterial = new THREE.MeshStandardMaterial({
    map: tvtable,
  })
  

  const Docholder = useTexture("textures/docholder.jpg");
  Docholder.flipY=false;
  Docholder.encoding=THREE.sRGBEncoding;
  const DocholderMaterial = new THREE.MeshStandardMaterial({
    map: Docholder,
  })
  

  const lights = useTexture("textures/deco.jpg");
  lights.flipY=false;
  const lightsMaterial = new THREE.MeshStandardMaterial({
    map: lights,
  })
  
  
  const downlights = useTexture("textures/downlights.jpg");
  downlights.flipY=false;
  downlights.encoding=THREE.sRGBEncoding;
  const downlightsMaterial = new THREE.MeshStandardMaterial({
    map: downlights,
  })
  

  const poster = useTexture("textures/post.jpg");
  poster.flipY=false;
  poster.encoding=THREE.sRGBEncoding;
  const posterMaterial = new THREE.MeshStandardMaterial({
    map: poster,
  })
  

  const D1 = useTexture("textures/d1.jpg");
  D1.flipY=false;
  D1.encoding=THREE.sRGBEncoding;
  const D1Material = new THREE.MeshStandardMaterial({
    map: D1,
  })
  

  const D1screen = useTexture("textures/d1screen.jpg");
  D1screen.flipY=false;
  D1screen.encoding = THREE.sRGBEncoding;
  const D1screenMaterial = new THREE.MeshStandardMaterial({
    map: D1screen,
  })
  

  const D2 = useTexture("textures/d2.jpg");
  D2.flipY=false;
  D2.encoding=THREE.sRGBEncoding;
  const D2Material = new THREE.MeshStandardMaterial({
    map: D2,
  })
  

  const D2screen = useTexture("textures/d2screen.jpg");
  D2screen.flipY=false;
  D2screen.encoding=THREE.sRGBEncoding;
  const D2screenMaterial = new THREE.MeshStandardMaterial({
    map: D2screen,
  })
  

  const D3 = useTexture("textures/d3.jpg");
  D3.flipY=false;
  D3.encoding=THREE.sRGBEncoding;
  const D3Material = new THREE.MeshStandardMaterial({
    map: D3,
  })
  

  const D3screen = useTexture("textures/d3screen.jpg");
  D3screen.flipY=false;
  D3screen.encoding=THREE.sRGBEncoding;
  const D3screenMaterial = new THREE.MeshStandardMaterial({
    map: D3screen,
  })
  
  
  const TVscreen = useTexture("textures/tvscreen.jpg");
  TVscreen.flipY=false;
  TVscreen.encoding=THREE.sRGBEncoding;
  const TVscreenMaterial = new THREE.MeshStandardMaterial({
    map: TVscreen,
  })
  

  const TV = useTexture("textures/tv.jpg");
  TV.flipY=false;
  TV.encoding=THREE.sRGBEncoding;
  const TVMaterial = new THREE.MeshStandardMaterial({
    map: TV,
  })
  

  const plane = useTexture("textures/plane.jpg");
  plane.flipY=false;
  const planeMaterial = new THREE.MeshStandardMaterial({
    map: plane,
  })
  


  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={planeMaterial} position={[0, 0.092, 0]} />
      <mesh geometry={nodes.Table.geometry} material={TableMaterial} position={[0.022, 1.537, 1.359]} />
      <mesh geometry={nodes.DocHolder.geometry} material={DocholderMaterial} position={[0.022, 0.116, 1.359]} />
      <mesh geometry={nodes.TV.geometry} material={TVMaterial} position={[-3.905, 3.12, 0]} rotation={[0.004, -0.002, -0.096]} />
      <mesh geometry={nodes.Sofa.geometry} material={sofaMaterial} position={[1.536, 0.216, -3.054]} />
      <mesh geometry={nodes.Speaker1.geometry} material={SpeakerMaterial} position={[-3.999, 3.795, 3.397]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Speaker2.geometry} material={Speaker2Material} position={[-3.984, 3.795, -3.366]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.D2.geometry} material={D2Material} position={[0.018, 2.185, 1.378]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Wall2.geometry} material={Wall2Material} position={[0.012, 0.092, -0.006]} />
      <mesh geometry={nodes.LIGHTS.geometry} material={lightsMaterial} position={[0.608, 2.229, -3.911]} rotation={[-Math.PI / 2, 0, Math.PI]} />
      <mesh geometry={nodes.D1.geometry} material={D1Material} position={[0.471, 2.185, 2.598]} rotation={[0, 0.625, -Math.PI / 2]} />
      <mesh geometry={nodes.D3.geometry} material={D3Material} position={[0.358, 2.185, 0.095]} rotation={[0, -0.558, -Math.PI / 2]} />
      <mesh geometry={nodes.Mat.geometry} material={MousePadMaterial} position={[0.428, 1.545, 1.214]} />
      <mesh geometry={nodes.keyboard.geometry} material={KeyboardMaterial} position={[0.464, 1.6, 1.432]} rotation={[0, 1.571, 0]} />
      <mesh geometry={nodes.mouse.geometry} material={MouseMaterial} position={[0.268, 1.576, 0.241]} rotation={[-Math.PI / 2, 0, 1.402]} />
      <mesh geometry={nodes.DownLights.geometry} material={downlightsMaterial} position={[-3.997, 0.146, 0.02]} rotation={[0, 0, -Math.PI / 2]} scale={[0.409, 1, 1]} />
      <mesh geometry={nodes.Poster.geometry} material={posterMaterial} position={[2.579, 3.131, -3.938]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Globe.geometry} material={globeMaterial} position={[-3.31, 1.155, -1.449]} rotation={[-Math.PI / 2, 0, -1.407]} />
      <mesh geometry={nodes.sidetable.geometry} material={tvtableMaterial} position={[-3.311, 0.092, 0.027]} scale={[1, 1, 3.216]} />
      <mesh geometry={nodes.books.geometry} material={booksMaterial} position={[-3.772, 1.129, -0.068]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={1.805} />
      <mesh geometry={nodes.plant.geometry} material={plantMaterial} position={[-3.511, 1.117, 1.364]} />
      <mesh geometry={nodes.ringlight.geometry} material={RingLightMaterial} position={[-2.838, 0, 3.412]} rotation={[-Math.PI / 2, 0, -2.289]} scale={0.008} />
      <mesh geometry={nodes.Plane001.geometry} material={FloorMaterial} position={[0, 0.105, 0]} />
      <mesh geometry={nodes.Plane002.geometry} material={wallMaterial} position={[0.008, 0.092, 0]} />
      <mesh geometry={nodes.gchair.geometry} material={GamingChairMaterial} position={[2.601, 2.793, 0.293]} rotation={[Math.PI / 2, 0, 0.661]} scale={0.097} />
      <mesh geometry={nodes.D1screen.geometry} material={D1screenMaterial} position={[0.474, 2.185, 2.598]} rotation={[0, 0.625, -Math.PI / 2]} />
      <mesh geometry={nodes.D2screen.geometry} material={D2screenMaterial} position={[0.02, 2.185, 1.378]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.D3screen.geometry} material={D3screenMaterial} position={[0.36, 2.185, 0.095]} rotation={[0, -0.558, -Math.PI / 2]} />
      <mesh geometry={nodes.TVscreen.geometry} material={TVscreenMaterial} position={[-3.901, 3.12, 0]} rotation={[0.004, -0.002, -0.096]} />
    </group>
  )
}

useGLTF.preload('models/gamingroom.glb')
