"use client";
// import {useGLTF} from "@react-three/drei"
import { useRef } from "react";
import { Mesh } from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const Moon = () => {
  const mesh = useRef<Mesh>(null!);

  const moon = useLoader(GLTFLoader, "Moon.glb");
  try {
    return (
      <mesh ref={mesh} position={[0, 0, 700]} scale={[0.1, 0.1, 0.1]}>
        <primitive
          object={moon.scene}
          // test value

          rotation={[30, 30, 30]}
        />
        <ambientLight intensity={10} />
      </mesh>
    );
  } catch (error) {
    console.log("Error rendering sun model.", error);
    return null;
  }
};

export default Moon;
