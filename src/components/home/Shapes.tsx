import "./styles.css";
import { useRef, useLayoutEffect } from "react";
import { degreesToRadians, mix } from "popmotion";
import { Object3D } from "three";

const colors = [
  "#FFFFFF",
  "#03fcfc",
  "#fc037f",
  "#fcc203",
  "#0b03fc",
  "#9403fc",
  "#fc7303",
  "#fc0303",
  "#03fc4e",
];

function getRandomColor() {
  // Return the element at the random index
  return colors[Math.floor(Math.random() * colors.length)];
}


export const Icosahedron = () => (
  <mesh rotation-x={0.35}>
    <icosahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={getRandomColor()} />
  </mesh>
);

export const Star = ({ p }: { p: number }) => {
  const ref = useRef<Object3D>(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );
    const xAngle = degreesToRadians(360) * p;
    ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={ref as any}>
      <boxGeometry args={[0.05, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={getRandomColor()} />
    </mesh>
  );
};