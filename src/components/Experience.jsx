import { OrbitControls, Preload } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Office } from "./Office";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import { Background } from "./Background";

export const Experience = (props) => {
  const { section } = props;
  console.log('Experience component rendered', section);
  const { viewport } = useThree();

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 12;
  const officeScaleRatio = Math.max(0.3, Math.min(0.6 * responsiveRatio, 0.6));



  return (
    <>
      <ambientLight intensity={3} />
      <Background />
      <motion.group
        position={[
          isMobile ? 0 : 1.5 * officeScaleRatio,
          isMobile ? -viewport.height / 6 : 2,
          3
        ]}
        scale={[officeScaleRatio, officeScaleRatio, officeScaleRatio]}
        
        animate={{
          x: isMobile ? (section === 0 ? -0.2 : section === 1 ? undefined : section === 2 ? -0.2 : undefined) : (section === 0 ? 2 : section === 1 ? -1.5 : section === 2 ? 1 : undefined),
          z: isMobile ? (section === 0 ? 1 : section === 1 ? undefined : section === 2 ?1 : undefined) : (section === 0 ? 0 : section === 1 ? 1 : section === 2 ? 1 : undefined),
          y: isMobile ? (section === 0 ? -1.5 : section === 1 ? undefined : section === 2 ? -13.5 : undefined) : (section === 0 ? -1 : section === 1 ? -7 : section === 2 ? -13.5 : undefined),
          rotateY: isMobile ? (section === 0 ? -Math.PI / 4 : section === 1 ? undefined : section === 2 ? -Math.PI / 2.4 : undefined) : (section === 0 ?-Math.PI / 2.5 : section === 1 ?-Math.PI / 8 : section === 2 ? -Math.PI / 2 : undefined),
          rotateZ: isMobile ? (section === 0 ? 0 : section === 1 ? undefined : section === 2 ? -0 : undefined) : (section === 0 ? 0 : section === 1 ? -0.03 : section === 2 ? 0 : undefined),
        }}
      >
        <Office section={section} />
        <Preload all />
      </motion.group>
    </>
  );
};
