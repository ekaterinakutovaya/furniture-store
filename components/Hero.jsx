"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Chair001 } from "@/components/items/Chair001";
import {
  Center,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="w-full lg:h-[750px] bg-baseColor relative">
      <span className="hidden lg:block text-[144px] font-[900] text-dimGrayColor vertical-rl absolute -bottom-[0.5%] left-0">
        COMFORT
      </span>

      <div className="container lg:h-[750px] flex flex-col justify-center">
        <div className="w-full flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 ">
            <h2 className="whitespace-pre text-accentColor text-[22px] lg:text-[36px]">
              Best Collection
            </h2>
            <h1 className=" text-[40px] lg:text-[72px] font-semibold leading-[40px] lg:leading-[72px]">
              Best Online Furniture{" "}
              <span className="text-accentColor">Shop</span>
            </h1>
            <p className="py-[20px] lg:py-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Explicabo, nostrum.
            </p>

            <Button variant="default">Explore more</Button>
          </div>

          <div className="lg:w-1/2 flex items-center justify-center h-[350px] lg:h-[750px]">
            <Canvas shadows camera={{ position: [10, 10, 20], fov: 30 }}>
              <color attach="background" args={["#f6f5f8"]} />
              <ambientLight intensity={0.5} />
              <Environment preset="city" />

              <OrbitControls autoRotate makeDefault enableZoom={false} />

              <Chair001 scale={0.1} position={[0, -3, 0]} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
