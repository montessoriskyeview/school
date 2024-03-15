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
        <div className="info-text">
            <Typography variant="h2"
                sx={{
                    paddingBottom: "10px",
                    color: "white",
                }}>
                {title}
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    color: "white",
                }}
            >
                {text}
            </Typography>
        </div>
    )
}