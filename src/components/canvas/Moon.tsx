'use client';
import { useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useSimulationSpecs } from '@/contexts';

const Moon = () => {
  const mesh = useRef<Mesh>(null!);

  const [rotationCoord, setRotationCoord] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    requestAnimationFrame(() => {
      setRotationCoord((prev) => ({
        x: prev.x + 0.002,
        y: prev.y,
        z: prev.z,
      }));
    });
  });

  const [theta, setTheta] = useState(0);

  const [positionCoordinates, setPositionCoordinates] = useState<
    [number, number, number]
  >([0, 0, 700]);

  const { simulationSpec, setSimulationSpec } = useSimulationSpecs();

  useEffect(() => {
    requestAnimationFrame(() => {
      setPositionCoordinates((prev) => [
        200 * Math.sin(theta / 180) + simulationSpec.earth.x,
        200 * Math.sin(theta / 180) + simulationSpec.earth.y,
        300 * Math.cos(theta / 180) + simulationSpec.earth.z,
      ]);

      setTheta((prev) => prev + 1);
    });
  });

  const moon = useLoader(GLTFLoader, 'Moon.glb');
  return (
    <mesh
      rotation={[rotationCoord.x, rotationCoord.y, rotationCoord.z]}
      ref={mesh}
      position={positionCoordinates}
      scale={[0.1, 0.1, 0.1]}
    >
      <primitive object={moon.scene} rotation={[30, 30, 30]} />
      <ambientLight intensity={10} />
    </mesh>
  );
};

export default Moon;
