import * as React from 'react';
import { Box, Typography } from '@mui/material';

interface NestedListItemProps {
  title: string;
  description: string | string[];
}

export const NestedListItem: React.FC<NestedListItemProps> = ({
  title,
  description,
}) => {
  return (
    <Box
      component="div"
      sx={{
        marginBottom: 'var(--spacing-md)',
        paddingLeft: 'var(--spacing-lg)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 'var(--spacing-sm)',
          top: '0.75rem',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: 'var(--primary-green)',
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 600,
          color: 'var(--text-dark)',
          marginBottom: 'var(--spacing-xs)',
          lineHeight: 'var(--leading-relaxed)',
        }}
      >
        {title}
      </Typography>

      <Box
        component="div"
        sx={{
          paddingLeft: 'var(--spacing-md)',
        }}
      >
        {typeof description === 'string' ? (
          <Typography
            variant="body2"
            sx={{
              color: 'var(--text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              marginBottom: 'var(--spacing-xs)',
            }}
          >
            {description}
          </Typography>
        ) : (
          description.map((item, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--spacing-xs)',
                position: 'relative',
                paddingLeft: 'var(--spacing-md)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 'var(--spacing-xs)',
                  top: '0.5rem',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--text-secondary)',
                },
              }}
            >
              {item}
            </Typography>
          ))
        )}
      </Box>
    </Box>
  );
};
