import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import _ from "lodash";

import { sphereFragShader, sphereVertShader } from "./shaders";

function Sphere(props) {
  const start = useRef(Date.now());
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef();
  const ticking = useRef(false);
  const mousePos = useRef(null);

  const uniforms = useRef(
    THREE.UniformsUtils.merge([
      THREE.UniformsLib["ambient"],
      THREE.UniformsLib["lights"],
      THREE.ShaderLib.phong.uniforms,
      { time: { type: "f", value: 0 } },
    ])
  );

  const material = useRef(
    new THREE.ShaderMaterial({
      uniforms: uniforms.current,
      vertexShader: sphereVertShader,
      fragmentShader: sphereFragShader,
      lights: true,
    })
  );

  // const { radius, heightSegments, widthSegments, rotationSpeed, noise } =
  //   useControls("Sphere", {
  //     widthSegments: { value: 512 },
  //     heightSegments: { value: 512 },
  //     radius: { value: 28 },
  //     rotationSpeed: { value: 0.00025, min: -0.06, max: 0.06 },
  //     noise: { value: 0.00003, min: 0.000001, max: 0.0001 },
  //   });

  const widthSegments = 256;
  const heightSegments = 256;
  const radius = 28;
  const rotationSpeed = 0.00025;
  const noise = 0.00003;

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    material.current.uniforms.time.value = noise * (Date.now() - start.current);
    mesh.current.rotation.y += rotationSpeed;
    mesh.current.rotation.x += rotationSpeed / 2;
    // console.log(mesh.current.rotation);
    if (ticking.current) {
      animate();
    }
    TWEEN.update();
  });

  useEffect(() => {
    window.addEventListener("mousemove", _.throttle(onMouseMove, 200));
  }, []);

  const onMouseMove = (event) => {
    if (ticking.current) return;

    const position = {
      x: event.clientX / window.innerWidth,
      y: event.clientY / window.innerHeight,
    };

    mousePos.current = position;

    ticking.current = true;
  };

  const animate = () => {
    const pos = mousePos.current;
    if (!pos) return;

    new TWEEN.Tween(mesh.current.rotation)
      .to({ x: pos.y / 2, y: pos.x / 2 }, 2000)
      .easing(TWEEN.Easing.Quartic.Out)
      .start();

    ticking.current = false;
  };

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      // geometry={new THREE.SphereBufferGeometry(20, 64, 64)}
      material={material.current}

      // scale={active ? 1.5 : 1}

      // onClick={(event) => setActive(!active)}
      // onPointerOver={(event) => setHover(true)}
      // onPointerOut={(event) => setHover(false)}
    >
      <sphereBufferGeometry args={[radius, widthSegments, heightSegments]} />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
    </mesh>
  );
}

export default Sphere;
