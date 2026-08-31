import { SplineSceneBasic } from "@/components/spline-scene-demo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8 dark:bg-black">
      <div className="w-full max-w-4xl">
        <SplineSceneBasic />
      </div>
    </div>
  );
}
