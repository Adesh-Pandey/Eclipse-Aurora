"use client";
// import {useGLTF} from "@react-three/drei"
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const Earth = () => {
  const mesh = useRef<Mesh>(null);

  const [coord, setCoord] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  useEffect(() => {
    requestAnimationFrame(() => {
      setCoord((prev) => ({
        x: prev.x + 0.01,
        y: prev.y + 0.01,
        z: prev.z + 0.01,
      }));
    });
  });

  const sun = useLoader(GLTFLoader, "Earth.glb");
  try {
    return (
      <mesh
        ref={mesh}
        position={[0, 0, 1000]}
        rotation={[coord.x, coord.y, coord.z]}
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
