import { Box, Button, Collapse } from "@mui/material";
import { ContentContainer } from "./ContentContainer"
import { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from "./Typography";

export const CollapseContainer = ({
  title,
  content
}: {
  title: string;
  content: string | JSX.Element;
}) => {
  return (
    <ContentContainer>
      <Box component='div' sx={{ width: '100%' }}>
        <Button
          variant='text'
          sx={{
            width: '100%',
            justifyContent: 'left',
            gap: 3,
            textTransform: 'none',
            textAlign: 'left'
          }}
        >
          {true ? (
            <ExpandLessIcon sx={{ fill: 'white', stroke: 'white' }} />
          ) : (
            <ExpandMoreIcon sx={{ fill: 'white', stroke: 'white' }} />
          )}
          <Typography sx={{ color: 'white', fontSize: 24 }}>{title}</Typography>
        </Button>
      </Box>
      <Collapse in={true}>
        <Box component='div' sx={{ paddingTop: '10px' }}>
          {typeof content === 'string' ? (
            <Typography>{content}</Typography>
          ) : (
            content
          )}
        </Box>
      </Collapse>
    </ContentContainer>
  );
};