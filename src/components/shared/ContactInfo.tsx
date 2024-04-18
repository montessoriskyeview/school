import { Typography } from "@mui/material"
import { ContentContainer } from "./ContentContainer"

const PHONE = "7605340671"
const EMAIL = "NWLVMontessori@gmail.com"

export const ContactInfo = () => {
  return (
    <ContentContainer>
      <>
        <Typography>
          {"For questions or concerns, contact Hannah Olsen"}
        </Typography>
        <Typography>
          <a href={`tel:${PHONE}`}>{"(760) 534-0671"}</a>
        </Typography>
        <Typography>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </Typography>
      </>

    </ContentContainer >
  )
}