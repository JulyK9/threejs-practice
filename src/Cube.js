import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";    

const Cube = () => {
  return (
    <div>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Cube