import { Box, Typography } from "@mui/material"
import { CanvasView } from "../components/shared/Canvas/CanvasView"

export const Registration = () => {
  return (
    <CanvasView>
      <Box component={"div"}
        sx={{
          padding: 10
        }}>
        <Typography>
          registration!
        </Typography>
      </Box>
    </CanvasView>
  )
}