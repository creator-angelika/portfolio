import { OrbitControls, Preload } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Office } from "./Office";
import { Projects } from "./Projects";
import { MyLoader } from "./MLoader";
import { useThree } from "@react-three/fiber";
import { Background } from "./Background";

export const Experience = (props) => {
  const { section } = props;
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
          x: isMobile ? (section === 1 ? 0 : 0) : (section === 1 ? -1.5 : 2),
          z: isMobile ? (section === 1 ? 0 : 0) : (section === 1 ? 1 : 0),
          y: isMobile ? (section === 1 ? -3 : -2) : (section === 1 ? -7 : -1),
          rotateY: isMobile ? (section === 1 ? -Math.PI / 8 : -Math.PI / 3) : (section === 1 ? -Math.PI / 8 : -Math.PI / 2.5),
          rotateZ: isMobile ? (section === 1 ? -0.03 : 0) : (section === 1 ? -0.03 : 0),
        }}
      >
        <Office section={section} />
        <Preload all />
      </motion.group>
      <Projects />
    </>
  );
};
