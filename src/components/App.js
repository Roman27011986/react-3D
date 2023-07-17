import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section3D from "./Section3D";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Sun3D from "./Sun3D";
import '../App.css';


function App() {

  return (
    // <div className="wrapper">
    //   <Section1 />
    //   <Section2 />
    //   <Section3 />
    // </div>
    <Canvas className="h-screen w-full">
      <Suspense fullback={null}>
        {/* <Section3D /> */}
        <Sun3D />
      </Suspense>
    </Canvas>
  );
}

export default App;
