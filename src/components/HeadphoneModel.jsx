import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const model = useGLTF("/src/assets/Headphones.glb");

  return (
    <primitive
      object={model.scene}
      scale={0.06}
      position={[0, -0.5, 0]}
    />
  );
}

function HeadphoneModel() {
  return (
    <div className="w-full h-full">

      <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>

        <ambientLight intensity={1.8} />

        <directionalLight position={[2, 2, 2]} intensity={2} />

        <Model />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
        />

      </Canvas>

    </div>
  );
}

export default HeadphoneModel;