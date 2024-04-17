import "./styles.css";
import { useThree, useFrame } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress } from "popmotion";
import { Icosahedron, Star } from "../../home/Shapes";

export function Scene({ numStars = 20 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(180)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.3));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} key={i} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
}