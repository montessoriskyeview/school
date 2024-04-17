import { List, ListItem, Typography } from "@mui/material"
import { InfoText } from "./InfoText"

export const ListText = ({ title, items, style }: { title: string, items: (string | JSX.Element)[], style?: React.CSSProperties }) => {
  return (
    <InfoText
      title={title}
      text={
        <List sx={{ listStyleType: 'disc', marginLeft: "40px" }}>
          {items.map(item =>
            <ListItem sx={{ display: 'list-item' }}>
              {typeof item === "string" ? <Typography>
                {item}
              </Typography> : item }
            </ListItem>
          )}
        </List>
      }
      style={style}
    />
  )
}