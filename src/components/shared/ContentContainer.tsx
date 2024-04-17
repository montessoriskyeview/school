import { Box, useTheme, BoxProps } from "@mui/material";

export const ContentContainer = ({ children, ...rest }: { children: JSX.Element | JSX.Element[] } & BoxProps) => {
  const theme = useTheme();
  return (
    <Box
      {...rest}
      sx={{
        backgroundColor: "#00000077",
        borderRadius: "10px",
        [theme.breakpoints.down('md')]: {
          padding: "10px",
          margin: "10px",
        },
        [theme.breakpoints.up('md')]: {
          padding: "20px",
          margin: "50px",
        },
        display: "flex",
        flexDirection: "column",
        ...rest.sx,
      }}
      component={"div"}
    >
      {children}
    </Box>
  )
}