import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { reviewContent } from '../i18n/pages/review';

export const Review = () => {
  return (
    <CanvasView>
      {/* Main H1 - Review-focused keywords */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-blue)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-4xl)',
          }}
        >
          {reviewContent.heroTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          {reviewContent.heroDescription}
        </Typography>
      </ContentContainer>

      {/* H2 Section - Review form */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          color: 'var(--text-dark)',
          textAlign: 'center',
          border: '3px solid var(--primary-green)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-xl)',
            fontWeight: 700,
          }}
        >
          {reviewContent.formTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            marginBottom: 'var(--spacing-xl)',
          }}
        >
          {reviewContent.formDescription}
        </Typography>

        {/* Google Forms Embed */}
        <div
          style={{
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            height: '600px',
            border: 'none',
            borderRadius: 'var(--border-radius-lg)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <iframe
            src={reviewContent.formUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title={reviewContent.formFrameTitle}
            aria-label={reviewContent.formAriaLabel}
          >
            {reviewContent.formLoadingLabel}
          </iframe>
        </div>
      </ContentContainer>

      {/* H3 Section - Thank you message */}
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--secondary-pink)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-xl)',
            fontWeight: 700,
          }}
        >
          {reviewContent.thanksTitle}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
          }}
        >
          {reviewContent.thanksDescription}
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};
