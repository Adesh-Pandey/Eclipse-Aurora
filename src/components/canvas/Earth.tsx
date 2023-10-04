"use client";
// import {useGLTF} from "@react-three/drei"
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { Vector3, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const Earth = () => {
  const mesh = useRef<Mesh>(null);

  const [rotationCoord, setRotationCoord] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [positionCoord, setPositionCoord] = useState<[number, number, number]>([
    0, 0, 1000,
  ]);

  const center = [0, 0, -300];

  const [theta, setTheta] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setRotationCoord((prev) => ({
        x: prev.x + 0.002,
        y: prev.y,
        z: prev.z,
      }));

      setPositionCoord((prev) => [
        900 * Math.sin(theta / 180),
        0,
        1300 * Math.cos(theta / 180),
      ]);

      setTheta((prev) => prev + 1);
    });
  });

  const sun = useLoader(GLTFLoader, "Earth.glb");
  try {
    return (
      <mesh
        ref={mesh}
        position={positionCoord}
        rotation={[rotationCoord.x, rotationCoord.y, rotationCoord.z]}
        scale={[0.3, 0.3, 0.3]}
      >
        <primitive
          object={sun.scene}
          // test value
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
