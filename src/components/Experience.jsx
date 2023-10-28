
import { Preload } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { Office } from "./Office";
import { Projects } from "./Projects";
import { MyLoader } from "./MLoader";

export const Experience = (props) => {
  const { section, menuOpened } = props;




  return (
    <>
      <ambientLight intensity={2} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.6, 0.6, 0.6]}
        animate={{
          x: section === 1 ? -1.5 : 2,
          z: section === 1 ? 1 : 0,
          y: section === 1 ? -7 : -1,
          rotateY: section === 1 ? -Math.PI / 8 : -Math.PI / 2.5,
          rotateZ: section === 1 ? -0.03 : 0,
        }}
      >

        <Office section={section} />
        <Preload all />
      </motion.group>
      <Projects />
    </>
  );
};