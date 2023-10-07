'use client';

import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, CatmullRomLine } from '@react-three/drei';
import Sun from './Sun';
import Moon from './Moon';
import Earth from './Earth';

const CanvasContainer = () => {
  return (
    <Canvas
      className='bg-black'
      camera={{
        fov: 35,
        position: [5000, 1000, -2100],
        zoom: 1,
        near: 1,
        far: 10000,
        scale: 100,
      }}
    >
      <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]} />
      <spotLight intensity={1} color={0x61dbfb} position={[-20, 50, 10]} />
      <ambientLight intensity={0.1} />
      <OrbitControls maxDistance={30000} />
      <Stars count={2500} factor={10} radius={10000} depth={50} fade />
      <Sun />
      <Moon />
      <Earth />
    </Canvas>
  );
};

export default CanvasContainer;
