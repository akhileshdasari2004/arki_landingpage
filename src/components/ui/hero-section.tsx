import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BoxProps {
  position: [number, number, number];
  rotation: [number, number, number];
}

const Box: React.FC<BoxProps> = ({ position, rotation }) => {
  const shape = new THREE.Shape();
  const angleStep = Math.PI * 0.5;
  const radius = 1;
  shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
  shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
  shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
  shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);
  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 20,
    curveSegments: 20,
  };
  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();

  return (
    <mesh position={position} rotation={rotation} geometry={geometry}>
      <meshStandardMaterial
        color="#9F5FED"
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
};

const AnimatedBoxes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_state, delta) => {
    if (groupRef.current) groupRef.current.rotation.x += delta * 0.05;
  });
  const boxes = Array.from({ length: 50 }, (_, index) => ({
    position: [(index - 25) * 0.75, 0, 0] as [number, number, number],
    rotation: [(index - 10) * 0.1, Math.PI / 2, 0] as [number, number, number],
    id: index,
  }));

  return (
    <group ref={groupRef}>
      {boxes.map((box) => (
        <Box key={box.id} position={box.position} rotation={box.rotation} />
      ))}
    </group>
  );
};

export const Scene: React.FC = () => (
  <div className="absolute inset-0 w-full h-full">
    <Canvas
      camera={{ position: [0, 0, 15], fov: 50 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#9F5FED" />
      <AnimatedBoxes />
    </Canvas>
  </div>
);
