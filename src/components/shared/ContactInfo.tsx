import { ContentContainer } from './ContentContainer';
import { Typography } from './Typography';

const PHONE = '7605340671';
const EMAIL = 'NWLVMontessori@gmail.com';

export const ContactInfo = () => {
  return (
    <ContentContainer>
      <>
        <Typography>{'Contact information (call/text/email)'}</Typography>
        <Typography>
          <a href={`tel:${PHONE}`} style={{ color: 'white' }}>
            {'(760) 534-0671'}
          </a>
        </Typography>
        <Typography>
          <a href={`mailto:${EMAIL}`} style={{ color: 'white' }}>
            {EMAIL}
          </a>
        </Typography>
      </>
    </ContentContainer>
  );
};
