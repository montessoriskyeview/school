import { Box, Link, useTheme } from "@mui/material"
import { CanvasView } from "../components/shared/Canvas/CanvasView"
import { ImageContainer } from "../components/shared/ImageContainer"
import flyer from "../resources/images/Colorful Playful Simple Illustrated Kids Summer Camp Flyer.png";
import { SchoolList } from "../components/shared/ListText";
import { SUMMER_CAMP_LINK, FALL_2024_LINK } from "../resources/links";
import { CollapseContainer } from "../components/shared/CollapseContainer";
import { InfoText } from "../components/shared/InfoText";

export const Registration = () => {
  const theme = useTheme();
  return (
    <CanvasView>
      <Box component={"div"}>
        <InfoText
          text={"Reservations and payments are currently accepted through the individual forms found in the sections below"}
        />
        <CollapseContainer
          title="Current registration - Summer camp"
          content={
            <>
              <SchoolList
                items={
                  [
                    "Unleash your child's inner explorer at our action-packed summer camp! Make new friends, discover new talents, and create lasting memories through exciting activities and outdoor adventures. Arts and crafts supplies, sports games, musical workshops, snacks, and water activities all included with weekly fees. Classes are held from M-TR, 9:00 am - 1:00 pm. Please pack a lunch and water bottle for your child.",
                    "Program costs are $125/week and enrollment is on a first-come, first-serve basis. Spots will be held as registration and form of payment is provided. 10% discounts applied for siblings.",
                    <Link
                      variant="body1"
                      sx={{
                        cursor: "pointer",
                        color: "#09559f"
                      }}
                      href={SUMMER_CAMP_LINK}
                    >
                      Register here
                    </Link>
                  ]
                }
              />
              <ImageContainer
                style={{
                  padding: 10,
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                src={flyer}
                alt="Registration image"
                imgSx={{
                  [theme.breakpoints.down('md')]: {
                    height: "400px",
                    width: "350px",
                  },
                  [theme.breakpoints.up('md')]: {
                    height: "700px",
                    width: "600px",
                  },
                }}
              />
            </>
          }
        />
        <CollapseContainer
          title="Fall 2024"
          content={
            <SchoolList
              items={[
                "Starting September 3rd",
                "$400 Deposit Fee (includes registration) before July 1st",
                "$500 Deposit Fee (includes registration) after July 1st",
                "Current limit: 45 total students",
                <Link
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    color: "#09559f",
                  }}
                  href={FALL_2024_LINK}
                >
                  Register here
                </Link>
              ]}
            />
          }
        />
      </Box>
    </CanvasView>
  )
}