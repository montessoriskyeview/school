import { ListText } from "../components/shared/ListText"
import { InfoText } from "../components/shared/InfoText"
import { CanvasView } from "../components/shared/Canvas/CanvasView"
import { CollapseContainer } from "../components/shared/CollapseContainer"

export const Tuition = () => {
  return (
    <CanvasView>
      <CollapseContainer
        title="Part-time Core Day Only"
        content={<ListText
          items={[
            "$6,750 Paid in Full",
            "Or $612.50 monthly paid over 12 months",
          ]}
        />}
      />
      <CollapseContainer
        title="Full-time School Day"
        content={<ListText
          items={[
            "$9,900 paid in full",
            "Or $875 monthly paid over 12 months",
          ]}
        />}
      />
      <CollapseContainer
        title="Deposits"
        content={<ListText
          items={[
            "$400 Deposit and Registration Fee before July 1st",
            "$500 Deposit and Registration Fee after July 1st",
          ]}
        />}

      />
      <CollapseContainer
        title="Tuition includes"
        content={
          <ListText
            items={[
              "Curriculum",
              "Fall/Spring school pictures",
              "Monthly “Fun for Everyone” activities",
              "Snacks",
              "Supplies",
            ]}
          />
        }
      />
      <InfoText
        title="School Calendar Year"
        text="September 3rd - May 30"
      />
    </CanvasView>
  )
}