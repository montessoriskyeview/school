import { ContentContainer } from "./ContentContainer"
import { Typography } from "./Typography"

const PHONE = "7605340671"
const EMAIL = "NWLVMontessori@gmail.com"

export const ContactInfo = () => {
  return (
    <ContentContainer>
      <>
        <Typography>
          {"For questions or concerns, contact Hannah Olsen (call/text/email)"}
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