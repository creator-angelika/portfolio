import { OrbitControls } from "@react-three/drei";
import { Office } from "./Office";


export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.8} />
      <Office />
    </>
  );
};
