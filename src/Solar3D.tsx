import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

/* --- ⚡ NEW: ENERGY PARTICLE FLOW ANIMATION --- */
const EnergyParticles = ({ position }: any) => {
  const groupRef = useRef<any>();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.children.forEach((child: any, i: number) => {
        // Particles float upward and loop back to the bottom
        const speed = 1.2;
        const offset = i * 1.5; 
        child.position.y = ((t * speed) + offset) % 3; // Loop height up to 3 units
        
        // Fade out as they get higher so they disappear smoothly
        child.material.opacity = Math.max(0, 1 - (child.position.y / 2.5));
      });
    }
  });

  return (
    <group ref={groupRef} position={[position[0], 0.2, position[2]]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          {/* Glowing Amber color to match your new theme */}
          <meshBasicMaterial color="#f59e0b" transparent opacity={0.8} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
};

/* --- SOLAR PANEL WITH DEPLOYMENT ANIMATION --- */
const SolarPanel = ({ position, delayIndex }: any) => {
  const ref = useRef<any>();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const delay = delayIndex * 0.1; // Stagger the animation start times

    if (ref.current) {
      const targetAngle = -Math.PI / 6; // Ideal sun-facing angle

      // 1. Installation Animation Phase
      if (t > delay && t < delay + 1.5) {
        const progress = (t - delay) / 1.5;
        // Smoothly fold up from flat (-90 deg) to target angle
        ref.current.rotation.x = THREE.MathUtils.lerp(-Math.PI / 2, targetAngle, progress);
        // Rise up slightly from the ground
        ref.current.position.y = THREE.MathUtils.lerp(-0.5, position[1], progress);
      } 
      // 2. Active Phase (Subtle Sun Tracking)
      else if (t >= delay + 1.5) {
        ref.current.rotation.x = targetAngle + Math.sin(t) * 0.05;
        ref.current.position.y = position[1]; // Lock height
      } 
      // 3. Waiting Phase (Hidden/Flat before animation starts)
      else {
        ref.current.rotation.x = -Math.PI / 2;
        ref.current.position.y = -0.5;
      }
    }
  });

  return (
    <group>
      <mesh ref={ref} position={position} castShadow>
        <boxGeometry args={[2.2, 0.12, 1.2]} />
        <meshPhysicalMaterial
          color="#0ea5e9" // Deep sky blue panel
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.05}
          reflectivity={1}
        />
      </mesh>
      
      {/* Attach the energy flow animation to each panel */}
      <EnergyParticles position={position} />
    </group>
  );
};

/* --- SOLAR FARM GRID (WITH STAGGERED INDEXING) --- */
const SolarFarm = () => {
  const panels = [];
  let index = 0;

  for (let x = -8; x <= 8; x += 2.8) {
    for (let z = -8; z <= 8; z += 2.2) {
      panels.push(
        <SolarPanel key={`${x}-${z}`} position={[x, 0.5, z]} delayIndex={index} />
      );
      index++; // Increment index to stagger the unfolding animation
    }
  }

  return <group>{panels}</group>;
};

/* --- SUN LIGHT + MOTION --- */
const Sun = () => {
  const lightRef = useRef<any>();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.15;
    if (lightRef.current) {
      lightRef.current.position.set(
        Math.sin(t) * 15,
        10,
        Math.cos(t) * 15
      );
    }
  });

  return (
    <>
      <directionalLight
        ref={lightRef}
        intensity={3}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <ambientLight intensity={0.4} />
    </>
  );
};

/* --- GROUND --- */
const Ground = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
      <planeGeometry args={[200, 200]} />
      <meshStandardMaterial color="#0f172a" /> {/* Switched to dark slate to match theme */}
    </mesh>
  );
};

/* --- MAIN SCENE --- */
const SolarScene = () => {
  return (
    // Set canvas height if this is going inside a hero section container
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        shadows
        camera={{ position: [14, 8, 14], fov: 45 }}
        dpr={[1, 2]}
      >
        {/* 🌅 REAL SKY LIGHTING */}
        <Environment preset="sunset" />

        {/* 🌫️ FOG FOR DEPTH */}
        <fog attach="fog" args={["#0f172a", 15, 45]} />

        <Sun />
        <SolarFarm />
        <Ground />

        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.1} // Prevent looking directly under the ground
        />
      </Canvas>
    </div>
  );
};

export default SolarScene;