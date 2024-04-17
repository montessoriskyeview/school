
import { Box, SxProps, Theme, Typography } from "@mui/material";
import { ContentContainer } from "./ContentContainer";

export const ImageContainer = ({ src, alt, title, style, imgStyle, imgSx }: { src: string; alt?: string; title?: string, style?: React.CSSProperties, imgStyle?: React.CSSProperties, imgSx?: SxProps<Theme> }) => {
  return (
    <ContentContainer style={style}>
      {title ?
        <Typography variant="h2"
          sx={{
            paddingBottom: "10px",
            color: "white",
          }}>
          {title}
        </Typography>
        : <></>}
      <Box
        component="img"
        style={imgStyle}
        sx={imgSx}
        alt={alt}
        src={src}
      />
    </ContentContainer>
  )
}
