import { Box } from "@mui/material"
import { ListText } from "../components/shared/ListText"
import { InfoText } from "../components/shared/InfoText"
import { CanvasView } from "../components/shared/Canvas/CanvasView"

export const Tuition = () => {
  return (
    <CanvasView>
      <Box component={"div"}
        sx={{
          padding: 10
        }}>
        <ListText
          title="Tuition"
          items={[
            "$400 Deposit and Registration Fee before July 1st",
            "$500 Deposit and Registration Fee after July 1st",
          ]}
        />
        <ListText
          title="Part-time Core Day Only"
          items={[
            "$6,750 Paid in Full",
            "Or $612.50 monthly paid over 12 months",
          ]}
        />
        <ListText
          title="Full-time School Day"
          items={[
            "$9,900 paid in full",
            "Or $875 monthly paid over 12 months",
          ]}
        />
        <InfoText
          title="School Calendar"
          text="September 3rd - May 30"
        />
        <ListText
          title="Tuition includes"
          items={[
            "Curriculum",
            "Fall/Spring school pictures",
            "Monthly “Fun for Everyone” activities",
            "Snacks",
            "Supplies",
          ]}
        />
      </Box>
    </CanvasView>
  )
}