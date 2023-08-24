import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Spring, animated } from "@react-spring/three";
import * as THREE from "three";

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const ref = useRef();
  const [decal] = useTexture([props.imgUrl]);
  const map = useLoader(THREE.TextureLoader, props.material);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 0.05]} intensity={5} />
      <mesh castShadow receiveShadow scale={2} ref={ref}>
        <icosahedronGeometry args={[1, 32]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          map={map}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          autoRotate
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, material }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} rotateSpeed={0.2} />
        <Ball imgUrl={icon} material={material} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
