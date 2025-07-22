import { List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { InfoText } from './InfoText';
import { Typography } from './Typography';

export interface ListProps {
  title?: string;
  items: (string | JSX.Element)[];
  style?: React.CSSProperties;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  spacing?: 'sm' | 'md' | 'lg';
}

const StyledList = styled(List)<{ spacing?: string }>`
  list-style-type: disc;
  margin-left: ${props => {
    switch (props.spacing) {
      case 'sm':
        return 'var(--spacing-lg)';
      case 'lg':
        return 'var(--spacing-2xl)';
      default:
        return 'var(--spacing-xl)';
    }
  }};
  padding: ${props => {
    switch (props.spacing) {
      case 'sm':
        return 'var(--spacing-sm)';
      case 'lg':
        return 'var(--spacing-lg)';
      default:
        return 'var(--spacing-md)';
    }
  }};
`;

const StyledListItem = styled(ListItem)<{ size?: string }>`
  display: list-item;
  padding: ${props => {
    switch (props.size) {
      case 'sm':
        return 'var(--spacing-xs) 0';
      case 'lg':
        return 'var(--spacing-md) 0';
      default:
        return 'var(--spacing-sm) 0';
    }
  }};
`;

export const ListText = ({
  title,
  items,
  style,
  variant = 'default',
  size = 'md',
  spacing = 'md',
}: ListProps) => {
  return (
    <InfoText
      title={title}
      text={
        <StyledList spacing={spacing}>
          {items.map((item, i) => (
            <StyledListItem key={i} size={size}>
              {typeof item === 'string' ? (
                <Typography
                  color={variant === 'default' ? 'text' : variant}
                  variant="body1"
                >
                  {item}
                </Typography>
              ) : (
                item
              )}
            </StyledListItem>
          ))}
        </StyledList>
      }
      style={style}
    />
  );
};

export const SchoolList = ({
  items,
  variant = 'default',
  size = 'md',
  spacing = 'md',
  emphasized = false,
}: Omit<ListProps, 'title' | 'style'> & { emphasized?: boolean }) => {
  return (
    <StyledList spacing={spacing}>
      {items.map((item, i) =>
        item === 'OR' ? (
          <Typography
            key={i}
            variant="body1"
            color={variant === 'default' ? 'text' : variant}
            sx={{
              textAlign: 'center',
              padding: 'var(--spacing-sm) 0',
              fontWeight: emphasized ? 700 : 600,
              fontSize: emphasized ? 'var(--text-lg)' : 'var(--text-base)',
            }}
          >
            {item}
          </Typography>
        ) : (
          <StyledListItem key={i} size={size}>
            {typeof item === 'string' ? (
              <Typography
                variant="body1"
                color={variant === 'default' ? 'text' : variant}
                sx={{
                  fontWeight: emphasized ? 600 : 400,
                  fontSize: emphasized ? 'var(--text-lg)' : 'var(--text-base)',
                  lineHeight: emphasized
                    ? 'var(--leading-relaxed)'
                    : 'var(--leading-normal)',
                }}
              >
                {item}
              </Typography>
            ) : (
              item
            )}
          </StyledListItem>
        )
      )}
    </StyledList>
  );
};
