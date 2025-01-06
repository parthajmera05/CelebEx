import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function MacCanvas() {
    return (
        <Canvas>
            <OrbitControls />
            <mesh>
                <boxGeometry />
                
            </mesh>
        </Canvas>
    )
}

export default MacCanvas