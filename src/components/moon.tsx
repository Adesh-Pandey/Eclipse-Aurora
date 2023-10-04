import "./styles.css";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

function Scene() {
  const obj = useLoader(GLTFLoader, "/Poimandres.obj");
  return <primitive object={obj} />;
}

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
