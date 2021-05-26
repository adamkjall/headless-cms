import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

import { sphereFragShader, sphereVertShader } from "./shaders";

function Sphere(props) {
  const start = useRef(Date.now());
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef();

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

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    material.current.uniforms.time.value =
      0.00001 * (Date.now() - start.current);
    mesh.current.rotation.y += rotationSpeed;
  });

  const { radius, heightSegments, widthSegments, rotationSpeed } = useControls(
    "Sphere",
    {
      widthSegments: { value: 64 },
      heightSegments: { value: 64 },
      radius: { value: 10 },
      rotationSpeed: { value: 0.00035, min: -0.06, max: 0.06 },
    }
  );

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
