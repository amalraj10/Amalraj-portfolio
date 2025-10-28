import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Trail } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
  count?: number;
}

export const ParticleField = ({ count = 2000 }: ParticleFieldProps) => {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const temp = [];
    const colors = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 80;
      temp.push(x, y, z);
      
      // Add color variation
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors.push(0, 0.83, 1); // cyan
      } else if (colorChoice < 0.66) {
        colors.push(0.75, 0.5, 1); // purple
      } else {
        colors.push(1, 0.4, 0.8); // pink
      }
    }
    return { positions: new Float32Array(temp), colors: new Float32Array(colors) };
  }, [count]);
  
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.03;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      mesh.current.scale.set(scale, scale, scale);
    }
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const FloatingOrb = ({ position = [0, 0, 0], color = "#00d4ff" }: { position?: [number, number, number]; color?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.6) * 0.3;
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
    }
  });
  
  return (
    <Sphere ref={meshRef} args={[1.2, 64, 64]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2.5}
        roughness={0.1}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </Sphere>
  );
};

export const AnimatedRing = ({ radius = 2, position = [0, 0, 0] }: { radius?: number; position?: [number, number, number] }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  
  return (
    <mesh ref={ringRef} position={position}>
      <torusGeometry args={[radius, 0.1, 16, 100]} />
      <meshStandardMaterial
        color="#ff00ff"
        emissive="#ff00ff"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

export const TechCube = ({ position = [0, 0, 0], speed = 1 }: { position?: [number, number, number]; speed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed) * 2;
    }
  });
  
  return (
    <Trail
      width={2}
      length={8}
      color="#00d4ff"
      attenuation={(t) => t * t}
    >
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Trail>
  );
};
