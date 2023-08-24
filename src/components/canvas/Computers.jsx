import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./office/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="white" />

      <spotLight
        position={[-4, 3, -1.5]}
        intensity={200}
        castShadow
        shadow-mapSize={1024}
        penumbra={0.5}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.45 : 1}
        position={isMobile ? [-5, 2, -0.8] : [-5, 1, -1.5]}
        rotation={[0, 1.7, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      style={{
        pointerEvents: isMobile ? "none" : "auto",
      }}
      // style={{ zIndex: 0, height: "100%", width: "100%" }}
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 28 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={(2 * Math.PI) / 5}
          rotateSpeed={0.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;
