import { SxProps, Theme, Typography } from "@mui/material";
import { ContentContainer } from "./ContentContainer";

export const InfoText = ({ text, title, style }: { text: string | JSX.Element; title: string, style?: React.CSSProperties }) => {
  return (
    <ContentContainer style={style}>
      <Typography variant="h2"
        sx={{
          paddingBottom: "10px",
          color: "white",
        }}>
        {title}
      </Typography>
      {typeof text === "string" ? <Typography
        variant="body1"
        sx={{
          color: "white",
        }}
      >
        {text}
      </Typography> : text}
    </ContentContainer>
  )
}