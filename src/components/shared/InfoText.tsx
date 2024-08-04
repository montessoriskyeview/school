import { ContentContainer } from './ContentContainer';
import { Typography } from './Typography';

export const InfoText = ({
  text,
  title,
  style,
  titleVariant = 'h5'
}: {
  text: string | JSX.Element;
  title?: string;
  style?: React.CSSProperties;
  titleVariant?: any;
}) => {
  return (
    <ContentContainer style={style}>
      <>
        {title ? (
          <Typography
            variant={titleVariant}
            sx={{
              paddingBottom: '10px'
            }}
          >
            {title}
          </Typography>
        ) : null}
        {typeof text === 'string' ? (
          <Typography variant='body1'>{text}</Typography>
        ) : (
          text
        )}
      </>
    </ContentContainer>
  );
};
