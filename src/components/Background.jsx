import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap/gsap-core";


export const Background = () => {
    const material = useRef();
    const color = useRef({
        color : "#020617",
    })
    const data = useScroll();
    const tl = useRef();

    useFrame(() => {
        tl.current.progress(data.scroll.current)
        material.current.color = new THREE.Color(color.current.color);
    })

    useEffect(() => {
        tl.current = gsap.timeline();
        tl.current.to(color.current, {
            color: "#f0abfc"
        })
        tl.current.to(color.current, {
            color: "#a78bfa"
        })
    }, [])
    return (<group>
        <Sphere scale={[30, 30, 30]}>
            <meshBasicMaterial ref={material} side={THREE.BackSide} toneMapped={true}/>
        </Sphere>
    </group>)
}