"use client";
// import {useGLTF} from "@react-three/drei"
import { useContext, useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { Vector3, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { SimulationContext } from "@/contexts";
import {
  SimulationSpecificationProps,
  useSimulationSpecs,
} from "@/contexts/SimulationContext";

const Earth = () => {
  const mesh = useRef<Mesh>(null);

  const [rotationCoord, setRotationCoord] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const { simulationSpec, setSimulationSpec } = useSimulationSpecs();

  const [theta, setTheta] = useState(0);

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
            x: 900 * Math.sin(theta / 180),
            y: 500 * Math.sin(theta / 180),
            z: 1300 * Math.cos(theta / 180),
          },
        };
      });

      setTheta((prev) => prev + 0.1);
    });
  });

  const { earth } = simulationSpec;
  const { x, y, z } = earth;
  const sun = useLoader(GLTFLoader, "Earth.glb");
  try {
    return (
      <mesh
        ref={mesh}
        position={[x, y, z]}
        rotation={[rotationCoord.x, rotationCoord.y, rotationCoord.z]}
        scale={[0.3, 0.3, 0.3]}
      >
        <primitive
          object={sun.scene}
          position={[0, 0, -10]}
          rotation={[0, -5, 0]}
        />
        <ambientLight intensity={10} />
      </mesh>
    );
  } catch (error) {
    console.log("Error rendering sun model.", error);
    return null;
  }
};

export default Earth;
