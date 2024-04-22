import { List, ListItem } from "@mui/material"
import { InfoText } from "./InfoText"
import { Typography } from "./Typography"

export interface ListProps { title?: string, items: (string | JSX.Element)[], style?: React.CSSProperties };

export const ListText = ({ title, items, style }: ListProps) => {
  return (
    <InfoText
      title={title}
      text={
        <List sx={{ listStyleType: 'disc', marginLeft: "40px" }}>
          {items.map((item, i) =>
            <ListItem key={i} sx={{ display: 'list-item' }}>
              {typeof item === "string" ? <Typography
                sx={{
                  color: "white"
                }}
              >
                {item}
              </Typography> : item}
            </ListItem>
          )}
        </List>
      }
      style={style}
    />
  )
}

export const SchoolList = ({ items }: Omit<ListProps, "title" | "style">) => {
  return (
    <List sx={{ listStyleType: 'disc', marginLeft: "40px" }}>
      {items.map((item, i) =>
        <ListItem key={i} sx={{ display: 'list-item' }}>
          {typeof item === "string" ? <Typography
            sx={{
              color: "white"
            }}
          >
            {item}
          </Typography> : item}
        </ListItem>
      )}
    </List>
  )
}