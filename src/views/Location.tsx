import { Box, ImageList, ImageListItem } from "@mui/material"
import property1 from "../resources/images/location/property1.png"
import property2 from "../resources/images/location/property2.png"
import property3 from "../resources/images/location/property3.png"
import property4 from "../resources/images/location/property4.png"
import property5 from "../resources/images/location/property5.png"
import property6 from "../resources/images/location/property6.png"
import property7 from "../resources/images/location/property7.png"
import property8 from "../resources/images/location/property8.png"
import property9 from "../resources/images/location/property9.png"
import property10 from "../resources/images/location/property10.png"
import property11 from "../resources/images/location/property11.png"
import property12 from "../resources/images/location/property12.png"
import { CanvasView } from "../components/shared/Canvas/CanvasView";
import { InfoText } from "../components/shared/InfoText";
import { CollapseContainer } from "../components/shared/CollapseContainer";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const Location = () => {
  return (
    <CanvasView>
      <Box component={"div"}>
        <InfoText
          title="Location"
          text="Montessori Skye View is located on N. Eula St., just east of Hualapai and between Dorrell Ln. and Elkhorn Rd. Our campus has a gate around it, so please arrive during designated hours."
        />
        <CollapseContainer
          title="Map"
          content={
            <div style={{ width: "100%" }}><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7060%20N%20Eula%20St+(My%20Business%20Name)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe></div>
          }
        />
        <CollapseContainer
          title="Photos"
          content={
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <ImageList
                sx={{ width: 500}}
                cols={4}
                rowHeight={121}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                      {...srcset(item.img, 121, item.rows, item.cols)}
                      alt={"School photo"}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          }
        />

      </Box>
    </CanvasView>
  )
}

const itemData = [
  {
    img: property1,
    rows: 2,
    cols: 2,
  },
  {
    img: property2,
  },
  {
    img: property3,
  },
  {
    img: property4,
    cols: 2,
  },
  {
    img: property5,
    cols: 2,
  },
  {
    img: property6,
    rows: 2,
    cols: 2,
  },
  {
    img: property7,
  },
  {
    img: property8,
  },
  {
    img: property9,
    rows: 2,
    cols: 2,
  },
  {
    img: property10,
  },
  {
    img: property11,
  },
  {
    img: property12,
    cols: 2,
  },
];