import { Canvas } from "@react-three/fiber";
import { Box } from "@mui/material";
import { Scene } from "./Scene";

export const CanvasView = ({ children }: { children: React.ReactNode }) => {
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
      <Box component="div">
        {children}
      </Box>
    </>
  )
}