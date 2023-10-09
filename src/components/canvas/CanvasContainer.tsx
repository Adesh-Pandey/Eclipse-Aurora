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
      shadows
    >
      <directionalLight
        visible={true}
        position={[0, 0, 0]}
        castShadow={true}
        color={0x61dbfb}
        intensity={20} // Adjust the intensity as needed
      />

      <ambientLight intensity={0.1} />
      <OrbitControls maxDistance={30000} minDistance={1000} />
      <Stars count={2500} factor={10} radius={10000} depth={50} fade />
      <Sun />
      <Moon />
      <Earth />
    </Canvas>
  );
};

export default CanvasContainer;
