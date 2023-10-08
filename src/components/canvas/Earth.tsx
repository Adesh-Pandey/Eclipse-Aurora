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

  const theta = simulationSpec.earth.theta;
  useEffect(() => {
    requestAnimationFrame(() => {
      if (simulationSpec.earth.stop_rot === false)
        setRotationCoord((prev) => ({
          x: prev.x + 0.001,
          y: prev.y + 0.01,
          z: prev.z,
        }));

      if (simulationSpec.earth.stop_rev === false)
        setSimulationSpec((prev) => {
          return {
            ...prev,
            earth: {
              theta: theta + 0.5,
              x: 1800 * Math.sin(theta / 180),
              y: 1000 * Math.sin(theta / 180),
              z: 2000 * Math.cos(theta / 180),
              stop_rev: prev.earth.stop_rev,
              stop_rot: prev.earth.stop_rot,
            },
          };
        });
    });
  }, [
    theta,
    simulationSpec.earth.stop_rev,
    simulationSpec.earth.stop_rot,
    setSimulationSpec,
  ]);

  const { earth } = simulationSpec;
  const { x, y, z } = earth;
  const glb = useLoader(GLTFLoader, 'Earth.glb');

  return (
    <mesh
      ref={mesh}
      position={[x, y, z]}
      rotation={[rotationCoord.x, rotationCoord.y, rotationCoord.z]}
      scale={[0.3, 0.3, 0.3]}
      castShadow
      receiveShadow
    >
      <primitive
        object={glb.scene}
        position={[0, 0, -10]}
        rotation={[0, -5, 0]}
      />
      <ambientLight intensity={0.5} />
    </mesh>
  );
};

export default Earth;
