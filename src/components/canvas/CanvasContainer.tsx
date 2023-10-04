"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import Sun from "./Sun";
import Moon from "./Moon";
import Earth from "./Earth";

const CanvasContainer = () => {
  return (
    <Canvas
      className="bg-black"
      camera={{ fov: 35, zoom: 1, near: 1, far: 10000, scale: 100 }}
    >
      <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
      <spotLight intensity={1} color={0x61dbfb} position={[-20, 50, 10]} />
      <ambientLight intensity={0.1} />
      <OrbitControls />
      <Stars count={2500} factor={4} radius={1000} depth={5} fade />
      <Sun />
      <Moon />
      <Earth />
    </Canvas>
  );
};

export default CanvasContainer;