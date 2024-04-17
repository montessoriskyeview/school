import { List, ListItem, Typography } from "@mui/material"
import { InfoText } from "./InfoText"

export const ListText = ({ title, items }: { title: string, items: string[] }) => {
  return (
    <InfoText
      title={title}
      text={
        <List sx={{ listStyleType: 'disc', marginLeft: "40px" }}>
          {items.map(item =>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography>
                {item}
              </Typography>
            </ListItem>
          )}
        </List>
      }
    />
  )
}