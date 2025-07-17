import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';

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
          ⭐ Share Your Experience
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
          We value your feedback! Your review helps other families discover
          quality Montessori education in Las Vegas.
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
          📝 Montessori Skye View Review Form
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
          Please take a moment to share your experience with our Montessori
          learning center. Your feedback helps us improve and assists other
          families in making informed decisions.
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
            src="https://docs.google.com/forms/d/e/1FAIpQLSejkM6MFDbpgpMmvVobw3bYoNNKLIRh0sBFqSjkD9DUsSQMqg/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Montessori Skye View Review Form"
            aria-label="Review form for Montessori Skye View Learning Center"
          >
            Loading…
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
          🙏 Thank You for Your Feedback
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
          Your review helps us continue providing exceptional Montessori
          education and assists other families in finding the right learning
          environment for their children. We appreciate you being part of the
          Montessori Skye View family!
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};
