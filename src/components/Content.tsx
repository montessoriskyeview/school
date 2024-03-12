import { Link, Typography } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./home/Scene";
import "./style.css";

export const Content = () => {
    return (
        <>
            <Canvas
                style={{
                    zIndex: -1,
                    position: "fixed"
                }}
                gl={{ antialias: false }}>
                <Scene />
            </Canvas>
            <div className={"box"}>
                <InfoText
                    title="Empowering Minds. Embracing Innovation"
                    text="Next-gen montessori education. Privatizing education for the betterment of society, starting with our children."
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <InfoText
                    title="Grow with Us: A Montessori Adventure."
                    text="We recognize failure as times greatest teacher. Allowing children to fail is an adventure, and we recognize it as the only way to grow. We help children recognize this as one of the most crucial ways to grow."
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <InfoText
                    title="Montessori:"
                    text="Education philosophy and practice that fosters rigorous, self-motivated growth for children and adolescents in all areas of their development, with a goal of nurturing each child's natural desire for knowledge, understanding, and respect."
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Link
                    variant="h4"
                    sx={{
                        cursor: "pointer",
                        padding: "20px",
                        margin: "50px",
                        paddingBottom: "300px",
                    }}
                    href="https://google.com"
                >
                    Register today
                </Link>
            </div>
        </>
    )
}

const InfoText = ({ text, title }: { text: string; title: string }) => {
    return (
        <div>
            <Typography
                sx={{
                    backgroundColor: "#00000077",
                    padding: "20px",
                    margin: "50px",
                    borderRadius: 10,
                }}
            >
                <Typography variant="h2">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {text}
                </Typography>
            </Typography>
        </div>
    )
}

/**
 *   <Canvas gl={{ antialias: false }}>
        <Scene />
      </Canvas>
 */

/**
 

export const Content = () => {
return (
  <Box
      sx={{
          paddingX: 5,
      }}
  >
      <ScrollingText>
          <Typography
              sx={{ position: "absolute" }}
          >
              Next-gen montessori education
          </Typography>
      </ScrollingText>
      <ScrollingText>
          <Typography
              sx={{ position: "absolute" }}
          >
              Montessori: education philosophy and practice that fosters rigorous, self-motivated growth for children and adolescents in all areas of their development, with a goal of nurturing each child's natural desire for knowledge, understanding, and respect.
          </Typography>
      </ScrollingText>
      <Box
          sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center"
          }}
      >
          <Link
              variant="h4"
              sx={{
                  cursor: "pointer",
                  paddingBottom: 10,
              }}
              href="https://google.com"
          >
              Register today
          </Link>
      </Box>
  </Box>
);
}

 * 
 */

/**
 * 
 
 {/* <div style={{
                padding: "300px 50px",
                display: "grid",
                gap: "250px",
            }}> 
                {/* <InfoText
                    title="Empowering Minds. Embracing Innovation"
                    text="Next-gen montessori education. Privatizing education for the betterment of society, starting with our children."
                />
                <InfoText
                    title="Grow with Us: A Montessori Adventure."
                    text="We recognize failure as times greatest teacher. Allowing children to fail is an adventure, and we recognize it as the only way to grow. We help children recognize this as one of the most crucial ways to grow."
                /> 
    {/* <InfoText
                    title="Montessori:"
                    text="Education philosophy and practice that fosters rigorous, self-motivated growth for children and adolescents in all areas of their development, with a goal of nurturing each child's natural desire for knowledge, understanding, and respect."
                />
                <Link
                    variant="h4"
                    sx={{
                        cursor: "pointer",
                        paddingBottom: 10,
                    }}
                    href="https://google.com"
                >
                    Register today
                </Link>
            </div> 


 * 
 */