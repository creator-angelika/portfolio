import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Interface } from "./components/interface";
import { Suspense, useEffect, useState } from "react";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Analytics } from '@vercel/analytics/react';
import { Loading } from "./components/Loading";


function App() {
  const[section, setSection]= useState(0);
  const[started, setStarted] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
      <Loading started={started} setStarted={setStarted}/>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
      
      <Canvas shadows camera={{ position: [0, 2, 8], fov:42 }}>
        <color attach="background" args={["#fdf2f8"]} />
        <ScrollControls pages={3} damping={0.2}>
        <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface setSection={setSection} />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
      <Leva hidden />
      <Analytics />
    </>
  );
}

export default App;
