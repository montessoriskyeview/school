
import { Box, SxProps, Theme } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ContentContainer } from "./ContentContainer";
import { Typography } from "./Typography";

interface ImageContainerProps {
  src: string;
  alt?: string;
  title?: string;
  variant?: 'default' | 'rounded' | 'circle';
  size?: 'sm' | 'md' | 'lg' | 'full';
  aspectRatio?: 'square' | '16:9' | '4:3' | 'auto';
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
  imgSx?: SxProps<Theme>;
}

interface StyledImageProps {
  variant?: 'default' | 'rounded' | 'circle';
  size?: 'sm' | 'md' | 'lg' | 'full';
  aspectRatio?: 'square' | '16:9' | '4:3' | 'auto';
}

const StyledImage = styled('img')<StyledImageProps>`
  width: ${props => {
    switch (props.size) {
      case 'sm':
        return '200px';
      case 'md':
        return '400px';
      case 'lg':
        return '600px';
      case 'full':
        return '100%';
      default:
        return '100%';
    }
  }};

  height: ${props => {
    switch (props.aspectRatio) {
      case 'square':
        return '100%';
      case '16:9':
        return '56.25%';
      case '4:3':
        return '75%';
      case 'auto':
        return 'auto';
      default:
        return 'auto';
    }
  }};

  border-radius: ${props => {
    switch (props.variant) {
      case 'rounded':
        return 'var(--radius-lg)';
      case 'circle':
        return 'var(--radius-full)';
      default:
        return 'var(--radius-md)';
    }
  }};

  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-lg);
  }
`;

export const ImageContainer = ({
  src,
  alt,
  title,
  variant = 'default',
  size = 'full',
  aspectRatio = 'auto',
  style,
  imgStyle,
  imgSx,
}: ImageContainerProps) => {
  return (
    <ContentContainer style={style} variant="default" spacing="sm">
      {title && (
        <Typography
          variant="h2"
          color="primary"
          sx={{ marginBottom: 'var(--spacing-md)' }}
        >
          {title}
        </Typography>
      )}
      <StyledImage
        variant={variant}
        size={size}
        aspectRatio={aspectRatio}
        style={{
          ...imgStyle,
          boxShadow: 'var(--shadow-md)',
          ...(imgSx as any),
        }}
        alt={alt || title || 'Image'}
        src={src}
      />
    </ContentContainer>
  );
};
