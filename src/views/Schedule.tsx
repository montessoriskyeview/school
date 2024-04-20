import { InfoText } from "../components/shared/InfoText"
import { CanvasView } from "../components/shared/Canvas/CanvasView"
import { ListText } from "../components/shared/ListText"

export const Schedule = () => {
  return (
    <CanvasView>
      <InfoText
        title="Schedule"
        text="We believe time can be used more effectively and efficiently for students in the classroom and offer a shortened core learning day as well as a full-time option for care. Our full-day school day is offered from 8:00 am to 4:00 pm, with our core learning day taking place between the hours of 9:00 am - 1:00 pm."
      />
      <ListText
        title="Calendar"
        items={[
          "Traditional school year: September 3rd - May 30",
          "Summer camp: June - August",
        ]}
      />
    </CanvasView>
  )
}