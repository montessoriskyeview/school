import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface IResourceItem {
  title: string;
  description: string;
  link: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  isHighlighted?: boolean;
}

interface IResourceListItemProps {
  resource: IResourceItem;
  category: string;
  categoryColor: string;
  index: number;
}

export const ResourceListItem: React.FC<IResourceListItemProps> = ({
  resource,
  category,
  categoryColor,
  index,
}) => {
  const handleClick = () => {
    window.open(resource.link, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <ListItem
      key={index}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open ${resource.title}`}
      sx={{
        border: resource.isHighlighted
          ? `2px solid ${categoryColor}`
          : '1px solid var(--light-gray)',
        borderRadius: '12px',
        marginBottom: 'var(--spacing-sm)',
        backgroundColor: resource.isHighlighted
          ? 'var(--light-gray)'
          : 'var(--white)',
        transition: 'all 0.2s ease',
        position: 'relative',
        cursor: 'pointer',
        padding: 'var(--spacing-lg)',
        '&:hover': {
          borderColor: categoryColor,
          boxShadow: resource.isHighlighted
            ? 'var(--shadow-md)'
            : 'var(--shadow-sm)',
          backgroundColor: resource.isHighlighted
            ? 'var(--light-gray)'
            : 'var(--light-gray)',
          transform: 'translateY(-2px)',
        },
        '&:focus': {
          outline: `2px solid ${categoryColor}`,
          outlineOffset: '2px',
          borderColor: categoryColor,
        },
        '&:active': {
          transform: 'translateY(0px)',
        },
      }}
    >
      {/* NEW badge for highlighted items */}
      {resource.isHighlighted && (
        <Box
          component="div"
          sx={{
            position: 'absolute',
            top: '-8px',
            left: '16px',
            backgroundColor: categoryColor,
            color: 'white',
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            zIndex: 1,
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          NEW
        </Box>
      )}

      {/* Icon */}
      <ListItemIcon
        sx={{
          color: categoryColor,
          minWidth: '48px',
        }}
      >
        <resource.Icon />
      </ListItemIcon>

      {/* Content */}
      <ListItemText
        primary={
          <Typography
            variant="h6"
            sx={{
              color: 'var(--text-dark)',
              fontWeight: resource.isHighlighted ? 700 : 600,
              fontSize: 'var(--text-lg)',
            }}
          >
            {resource.title}
          </Typography>
        }
        secondary={
          <Box
            component="div"
            sx={{
              display: {
                xs: 'none', // hide on mobile
                sm: 'block', // show on tablets and up
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
                fontSize: 'var(--text-base)',
              }}
            >
              {resource.description}
            </Typography>
          </Box>
        }
        sx={{
          flex: 1,
          marginRight: 'var(--spacing-md)',
        }}
      />

      {/* Chevron indicator */}
      <Box
        component="div"
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: categoryColor,
          transition: 'transform 0.2s ease',
          '.MuiListItem-root:hover &': {
            transform: 'translateX(4px)',
          },
        }}
      >
        <ChevronRight
          sx={{
            fontSize: 'var(--text-xl)',
            fontWeight: 600,
          }}
        />
      </Box>
    </ListItem>
  );
};
