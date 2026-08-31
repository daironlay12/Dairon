import type { RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { CardMesh } from "./CardMesh";

type CardSceneProps = {
  progressRef: RefObject<{ value: number }>;
};

/**
 * The actual WebGL canvas — split out from PrestigeCard so it can be
 * dynamically imported and kept out of the initial bundle entirely.
 */
export default function CardScene({ progressRef }: CardSceneProps) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.4], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 5]} intensity={0.6} color="#f5f3ee" />
      <spotLight
        position={[-3, 2, 4]}
        angle={0.5}
        penumbra={0.8}
        intensity={2.2}
        color="#e4c989"
      />
      {/* Procedural environment (no remote HDRI fetch) — a few soft
          rectangular light panels give the metal card real reflections
          without depending on an external asset host at runtime. */}
      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={2.2}
          color="#f5f3ee"
          position={[-4, 3, 3]}
          scale={[4, 3, 1]}
        />
        <Lightformer
          form="rect"
          intensity={1.4}
          color="#e4c989"
          position={[4, -2, 2]}
          scale={[3, 4, 1]}
        />
        <Lightformer
          form="ring"
          intensity={1.6}
          color="#c9cdd3"
          position={[0, 0, -5]}
          scale={6}
        />
      </Environment>
      <CardMesh progressRef={progressRef} />
    </Canvas>
  );
}
