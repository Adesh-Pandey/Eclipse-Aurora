"use client"
// import {useGLTF} from "@react-three/drei"
import {useRef} from "react";
import {Mesh} from "three";
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";

const Sun = () => {
    const mesh = useRef<Mesh>(null!)

    const sun = useLoader(GLTFLoader, "Sun.glb");
    console.log(sun);
    try {
        return (
            <mesh ref={mesh}>
                <primitive
                    object={sun.scene}
                    // test value
                    position={[0, 0, -10]}
                    rotation={[0, -5, 0]}
                    scale={[1, 1, 1]}
                />
            </mesh>
        )
    } catch (error) {
        console.log('Error rendering sun model.', error)
        return null;
    }
}

export default Sun;