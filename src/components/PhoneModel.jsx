import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function PhoneModel() {
  const group = useRef();
  const [hovered, setHovered] = useState(false);

  // Load your actual model
  const { scene, animations } = useGLTF("/models/smartphone.glb");
  const { actions } = useAnimations(animations, group);

  // Handle animations if available
  useEffect(() => {
    if (animations && animations.length > 0) {
      // Play the first animation if available
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  // Auto-rotation and hover effects
  useFrame((state, delta) => {
    if (group.current) {
      // Smooth rotation
      group.current.rotation.y += delta * 0.2;

      // Hover effect - subtle floating animation
      if (hovered) {
        group.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
        group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      } else {
        group.current.position.y = 0;
      }
    }
  });

  return (
    <group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={[1.5, 1.5, 1.5]} // Adjust scale as needed for your model
      position={[0, 0, 0]}
    >
      {/* Your actual 3D model */}
      <primitive object={scene} scale={1} />
    </group>
  );
}

// Preload the model for better performance
useGLTF.preload("/models/smartphone.glb");
