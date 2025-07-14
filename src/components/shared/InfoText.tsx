import { Typography } from './Typography';
import { ContentContainer } from './ContentContainer';

interface InfoTextProps {
  text: string | JSX.Element;
  title?: string;
  style?: React.CSSProperties;
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  textVariant?: 'body1' | 'body2' | 'subtitle1' | 'subtitle2';
  variant?: 'default' | 'primary' | 'secondary';
  spacing?: 'sm' | 'md' | 'lg';
  containerVariant?: 'default' | 'card' | 'hero';
}

export const InfoText = ({
  text,
  title,
  style,
  titleVariant = 'h5',
  textVariant = 'body1',
  variant = 'default',
  spacing = 'md',
  containerVariant = 'default',
}: InfoTextProps) => {
  return (
    <ContentContainer
      style={style}
      variant={containerVariant}
      spacing={spacing}
    >
      {title && (
        <Typography
          variant={titleVariant}
          color={containerVariant === 'hero' ? 'white' : 'text'}
          sx={{
            marginBottom: 'var(--spacing-xl)',
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      )}
      {typeof text === 'string' ? (
        <Typography
          variant={textVariant}
          color={containerVariant === 'hero' ? 'white' : 'text'}
          sx={{
            lineHeight: 'var(--leading-loose)',
            fontSize: 'var(--text-lg)',
          }}
        >
          {text}
        </Typography>
      ) : (
        text
      )}
    </ContentContainer>
  );
};
