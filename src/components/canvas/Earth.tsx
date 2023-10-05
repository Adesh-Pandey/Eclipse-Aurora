'use client';

import { useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { useSimulationSpecs } from '@/contexts';

const Earth = () => {
  const mesh = useRef<Mesh>(null);

  const [rotationCoord, setRotationCoord] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const { simulationSpec, setSimulationSpec } = useSimulationSpecs();

  const [theta, setTheta] = useState(simulationSpec.earth.theta);

  const thetaFromSpec = simulationSpec.earth.theta;

  useEffect(() => {
    setTheta(thetaFromSpec);
  }, [thetaFromSpec]);

  useEffect(() => {
    requestAnimationFrame(() => {
      setRotationCoord((prev) => ({
        x: prev.x + 0.001,
        y: prev.y + 0.01,
        z: prev.z,
      }));

      setSimulationSpec((prev) => {
        return {
          ...prev,
          earth: {
            theta: theta + 0.1,
            x: 900 * Math.sin(theta / 180),
            y: 500 * Math.sin(theta / 180),
            z: 1300 * Math.cos(theta / 180),
          },
        };
      });
    });
  });

  const { earth } = simulationSpec;
  const { x, y, z } = earth;
  const glb = useLoader(GLTFLoader, 'Earth.glb');

  return (
    <mesh
      ref={mesh}
      position={[x, y, z]}
      rotation={[rotationCoord.x, rotationCoord.y, rotationCoord.z]}
      scale={[0.3, 0.3, 0.3]}
    >
      <primitive
        object={glb.scene}
        position={[0, 0, -10]}
        rotation={[0, -5, 0]}
      />
      <ambientLight intensity={10} />
    </mesh>
  );
};

export default Earth;
