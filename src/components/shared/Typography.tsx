import {Typography as MuiTypography, TypographyProps} from "@mui/material";

export const Typography = (props: TypographyProps) => {
  return <MuiTypography {...props} sx={{...props.sx, color: "white"}} />
}