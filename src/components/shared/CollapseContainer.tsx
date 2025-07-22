import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useRef } from 'react';
import { ContentContainer } from './ContentContainer';
import { Typography } from './Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CollapseContainerProps {
  title: string;
  content: string | JSX.Element;
  variant?: 'default' | 'primary' | 'secondary';
  spacing?: 'sm' | 'md' | 'lg';
  defaultExpanded?: boolean;
}

const StyledBox = styled(Box)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  justify-content: flex-start;
  gap: var(--spacing-md);
  text-transform: none;
  text-align: left;
  padding: var(--spacing-xl);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  background-color: #ffffff;
  border: 2px solid #e5e7eb;
  color: #1f2937;
  margin-bottom: var(--spacing-md);

  &:hover {
    background-color: #f3f4f6;
    border-color: #4bb4de;
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:focus {
    outline: 3px solid #4bb4de;
    outline-offset: 2px;
  }
`;

const StyledContent = styled(Box, {
  shouldForwardProp: prop => prop !== 'isExpanded',
})<{ isExpanded: boolean }>`
  max-height: ${props => (props.isExpanded ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  padding-top: ${props => (props.isExpanded ? 'var(--spacing-xl)' : '0')};
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-lg);
  padding-bottom: ${props => (props.isExpanded ? 'var(--spacing-lg)' : '0')};
`;

export const CollapseContainer = ({
  title,
  content,
  variant = 'default',
  spacing = 'md',
  defaultExpanded = false,
}: CollapseContainerProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [uniqueId] = useState(
    () => `collapse-${Math.random().toString(36).substr(2, 9)}`
  );
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <ContentContainer variant="card" spacing={spacing}>
      <StyledBox component="div">
        <StyledButton
          ref={buttonRef}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          aria-expanded={isExpanded}
          aria-controls={uniqueId}
          aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${title}`}
        >
          {isExpanded ? (
            <ExpandLessIcon
              sx={{ color: '#1F2937', fontSize: 'var(--text-xl)' }}
              aria-hidden="true"
            />
          ) : (
            <ExpandMoreIcon
              sx={{ color: '#1F2937', fontSize: 'var(--text-xl)' }}
              aria-hidden="true"
            />
          )}
          <Typography
            variant="h4"
            color="text"
            sx={{
              fontSize: 'var(--text-xl)',
              fontWeight: 600,
              color: '#1F2937',
              margin: 0,
            }}
          >
            {title}
          </Typography>
        </StyledButton>
      </StyledBox>
      <StyledContent
        id={uniqueId}
        isExpanded={isExpanded}
        role="region"
        aria-labelledby={`${uniqueId}-button`}
      >
        {typeof content === 'string' ? (
          <Typography
            variant="body1"
            color="text"
            sx={{
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-loose)',
              color: '#374151',
              margin: 0,
            }}
          >
            {content}
          </Typography>
        ) : (
          content
        )}
      </StyledContent>
    </ContentContainer>
  );
};
