import { Canvas } from "@react-three/fiber";
import { InfoText, MapInfo } from "../components/home/Home";
import { Scene } from "../components/home/Scene";
import { useTheme } from "@mui/material";

export const Home = () => {
  const theme = useTheme();
  return (
    <>
      <Canvas
        style={{
          zIndex: -1,
          position: "fixed",
        }}
        gl={{ antialias: false }}>
        <Scene />
      </Canvas>
      <div className={"box"}>
        <MapInfo
          title="Locations"
        />
        <InfoText
          title="Montessori method"
          text="Coming soon!"
        />
        <InfoText
          title="Daily schedule"
          text="Coming soon!"
        />
        <InfoText
          title="Tuition"
          text="Coming soon!"
        />
        <InfoText
          title="Curriculum"
          text="Coming soon!"
        />
        <InfoText
          title="Empowering Minds. Embracing Innovation"
          text="Next-gen montessori education. Improving education for the betterment of society, starting with our children."
        />
        <InfoText
          title="Grow with Us: A Montessori Adventure."
          text="We recognize failure as times greatest teacher, and this is an adventure. We help children recognize failure as one of the most important ways to grow."
        />
        <InfoText
          title="Montessori:"
          text="Education philosophy and practice that fosters rigorous, self-motivated growth for children and adolescents in all areas of their development, with a goal of nurturing each child's natural desire for knowledge, understanding, and respect."
        />

      </div>
    </>
  )
}