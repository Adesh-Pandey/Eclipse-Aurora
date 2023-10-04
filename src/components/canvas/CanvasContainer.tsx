"use client";

import {Canvas} from "@react-three/fiber"
import {Stars, OrbitControls} from "@react-three/drei"
import Sun from "./Sun";

const CanvasContainer = () => {
    return (
        <Canvas
            className="bg-black"
            camera={{position: [20, 3, 5], fov: 25}}
        >
            <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]}/>
            <spotLight intensity={1} color={0x61dbfb} position={[-20, 50, 10]}/>
            <ambientLight intensity={0.1}/>
            <OrbitControls/>
            <Stars
                count={2500}
                factor={4}
                radius={100}
                depth={50}
                fade
            />
            <Sun/>
        </Canvas>
    )
}

export default CanvasContainer;