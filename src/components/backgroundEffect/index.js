import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";

import Sphere from "@components/Sphere";
// import * as TWEEN from "@tweenjs/tween.js";

import styles from "./BackgroundEffect.module.css";

export default function BackgroundEffect() {
  if (typeof window !== "undefined") {
  }

  const [aspect, setAspect] = useState(16 / 9);

  const { position } = useControls("Sphere", {
    position: {
      value: {
        x: 14,
        y: 11,
        z: -16,
      },
    },
  });

  useEffect(() => {
    // const rand = Math.random();
    setAspect(window.innerWidth / window.innerHeight);

    if (typeof window === "object") {
      // Check if document is finally loaded
      window.addEventListener("resize", handleResize);
      handleResize();
    }
  }, []);

  const handleResize = () => {
    setAspect(window.innerWidth / window.innerHeight);
  };

  return (
    <Canvas
      className={styles.scene}
      id="scene"
      camera={{ position: [35, aspect, 0.2, 200], isPerspectiveCamera: true }}
      // color="0x111111"
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[200, 100, 100]} intensity={0.6} />
      {/* <directionalLight position={[100, -200, -100]} intensity={0.6} /> */}
      <Sphere position={[position.x, position.y, position.z]} />
      {/* <mesh ref={mesh} geometry={new THREE.SphereBufferGeometry(20, 64, 64)} material={material} /> */}
    </Canvas>
  );
}
