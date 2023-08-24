import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load">
        <p className="text-black mt-15 text-[12px] font-bold">Loading...</p>
      </span>
    </Html>
  );
};

export default Loader;
