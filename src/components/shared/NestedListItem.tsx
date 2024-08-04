import * as React from 'react';
import {List, ListItemText} from '@mui/material';

interface NestedListItemProps {
  title: string;
  description: string | string[];
}

export const NestedListItem: React.FC<NestedListItemProps> = ({title, description}) => {
  return (
    <List sx={{ listStyleType: 'disc', marginLeft: '40px' }}>
      <ListItemText
        primary={title}
        sx={{ display: 'list-item', color: 'black' }}
      />
      <List sx={{ listStyleType: 'disc', marginLeft: '40px' }}>
        {typeof description === 'string' ? (
          <ListItemText
            primary={description}
            sx={{ display: 'list-item', color: 'black' }}
          />
        ) : (
          description.map(d => (
            <ListItemText
              primary={d}
              sx={{ display: 'list-item', color: 'black' }}
              key={d}
            />
          ))
        )}
      </List>
    </List>
  );
};
