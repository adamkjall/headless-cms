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
        x: 22,
        y: 16,
        z: 0,
      },
    },
  });

  useEffect(() => {
    // Init
    // const rand = Math.random();
    setAspect(window.innerWidth / window.innerHeight);
    // const scene = new THREE.Scene();

    // const uniforms = THREE.UniformsUtils.merge([
    //   THREE.UniformsLib["ambient"],
    //   THREE.UniformsLib["lights"],
    //   THREE.ShaderLib.phong.uniforms,
    //   { time: { type: "f", value: 0 } },
    // ]);

    // const material = new THREE.ShaderMaterial({
    //   uniforms: uniforms,
    //   vertexShader: sphereVertShader,
    //   fragmentShader: sphereFragShader,
    //   lights: true,
    // });

    // const geometry = new THREE.SphereBufferGeometry(10, 64, 64);
    // const sphere = new THREE.Mesh(geometry, material);

    // renderer.setSize(window.innerWidth, window.innerHeight);
    // camera.position.z = 52;

    // scene.add(sphere);
    // sphere.position.z = 0;
    // sphere.modifier = rand;

    // Light

    // scene.background = new THREE.Color(0x111111);

    // const light = new THREE.DirectionalLight(0xfffffff, 0.6);
    // light.position.z = 200;
    // light.position.x = 100;
    // light.position.y = 100;
    // scene.add(light);
    // const light2 = new THREE.DirectionalLight(0xffffff, 0.6);
    // light2.position.z = 100;
    // light2.position.x = -200;
    // light2.position.y = -100;
    // scene.add(light2);

    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    // scene.add(ambientLight);

    if (typeof window === "object") {
      // Check if document is finally loaded
      window.addEventListener("resize", handleResize);
      handleResize();
    }
  }, []);

  const handleResize = () => {
    setAspect(window.innerWidth / window.innerHeight);
    // const canvasHeight = window.innerHeight;
    // const windowWidth = window.innerWidth;
    // const fullHeight = canvasHeight + canvasHeight * 0.3;
    // canvasRef.current.style.height = fullHeight;
    // renderer.setSize(windowWidth, fullHeight);
    // camera.aspect = windowWidth / fullHeight;
    // camera.updateProjectionMatrix();

    //   if (windowWidth <= 696) {
    //     sphere.position.x = 14;
    //     sphere.position.y = 10;
    //   } else if (windowWidth <= 1024) {
    //     sphere.position.x = 18;
    //     sphere.position.y = 14;
    //   } else {
    //     sphere.position.x = 22;
    //     sphere.position.y = 16;
    //   }
  };

  return (
    <Canvas
      className={styles.scene}
      id="scene"
      camera={{ position: [35, aspect, 0.2, 200], isPerspectiveCamera: true }}
      color="0x111111"
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[200, 100, 100]} intensity={0.6} />
      <directionalLight position={[100, -200, -100]} intensity={0.6} />
      <Sphere position={[position.x, position.y, position.z]} />
      {/* <mesh ref={mesh} geometry={new THREE.SphereBufferGeometry(20, 64, 64)} material={material} /> */}
    </Canvas>
  );
}
