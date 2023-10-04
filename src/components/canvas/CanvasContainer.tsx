"use client"

import {Canvas} from "@react-three/fiber"
import {Stars} from "@react-three/drei"

const CanvasContainer = () => {
    return (
        <Canvas
            className="bg-black"
        >
            <pointLight intensity={2} color={0x61dbfb} position={[0, 5, 5]}/>
            <spotLight intensity={1} color={0x61dbfb} position={[-20, 50, 10]}/>
            <ambientLight intensity={0.1}/>
            <Stars
                count={2500}
                factor={4}
                radius={100}
                depth={50}
                fade
            />
        </Canvas>
    )
}

export default CanvasContainer;