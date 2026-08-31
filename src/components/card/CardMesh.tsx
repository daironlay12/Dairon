import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { createCardFaceTexture } from "./cardTexture";

type CardMeshProps = {
  /** Mutable 0-1 scroll progress, written by PrestigeCard's ScrollTrigger. */
  progressRef: RefObject<{ value: number }>;
};

export function CardMesh({ progressRef }: CardMeshProps) {
  const group = useRef<THREE.Group>(null);
  const tilt = useRef({ x: 0, y: 0 });

  const frontTexture = useMemo(() => createCardFaceTexture("front"), []);
  const backTexture = useMemo(() => createCardFaceTexture("back"), []);

  useFrame((state) => {
    if (!group.current) return;
    const progress = progressRef.current?.value ?? 0;

    // Mouse adds a small, damped offset on top of the scroll-driven turn —
    // never enough to fight the narrative, just enough to feel alive.
    const targetX = -state.pointer.y * 0.08;
    const targetY = state.pointer.x * 0.1;
    tilt.current.x += (targetX - tilt.current.x) * 0.06;
    tilt.current.y += (targetY - tilt.current.y) * 0.06;

    group.current.rotation.y = progress * Math.PI + tilt.current.y;
    group.current.rotation.x = tilt.current.x;
    group.current.position.y = Math.sin(progress * Math.PI) * -0.08;

    const cam = state.camera;
    cam.position.z = 5.4 - progress * 0.9;
    cam.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <RoundedBox args={[3.4, 2.144, 0.05]} radius={0.09} smoothness={4}>
        <meshPhysicalMaterial
          color="#12161d"
          metalness={0.9}
          roughness={0.32}
          clearcoat={0.55}
          clearcoatRoughness={0.28}
          reflectivity={0.6}
        />
      </RoundedBox>

      <mesh position={[0, 0, 0.027]}>
        <planeGeometry args={[3.34, 2.09]} />
        <meshStandardMaterial
          map={frontTexture}
          metalness={0.35}
          roughness={0.55}
        />
      </mesh>

      <mesh position={[0, 0, -0.027]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[3.34, 2.09]} />
        <meshStandardMaterial
          map={backTexture}
          metalness={0.35}
          roughness={0.55}
        />
      </mesh>
    </group>
  );
}
