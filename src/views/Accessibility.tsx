import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';

export const Accessibility = () => {
  return (
    <CanvasView>
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
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-4xl)',
          }}
        >
          Accessibility Statement
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
          Skyeview Montessori Learning Center is committed to ensuring digital
          accessibility for people with disabilities.
        </Typography>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          color: 'var(--text-dark)',
          textAlign: 'left',
          border: '3px solid var(--primary-green)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          Our Commitment
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            marginBottom: 'var(--spacing-md)',
          }}
        >
          We are committed to making our website accessible to all users,
          including those with disabilities. We strive to ensure that our
          website conforms to the Web Content Accessibility Guidelines (WCAG)
          2.1 AA standards.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
          }}
        >
          This commitment extends to all aspects of our digital presence,
          including navigation, content, forms, and interactive elements.
        </Typography>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          color: 'var(--text-dark)',
          textAlign: 'left',
          border: '3px solid var(--secondary-pink)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          Accessibility Features
        </Typography>
        <div role="list">
          <div role="listitem" style={{ marginBottom: 'var(--spacing-md)' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-loose)',
                fontWeight: 600,
              }}
            >
              • Keyboard Navigation
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              All interactive elements can be accessed and operated using only a
              keyboard.
            </Typography>
          </div>
          <div role="listitem" style={{ marginBottom: 'var(--spacing-md)' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-loose)',
                fontWeight: 600,
              }}
            >
              • Screen Reader Compatibility
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              Our website is compatible with screen readers and other assistive
              technologies.
            </Typography>
          </div>
          <div role="listitem" style={{ marginBottom: 'var(--spacing-md)' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-loose)',
                fontWeight: 600,
              }}
            >
              • High Contrast and Focus Indicators
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              Clear focus indicators and sufficient color contrast for better
              visibility.
            </Typography>
          </div>
          <div role="listitem" style={{ marginBottom: 'var(--spacing-md)' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-loose)',
                fontWeight: 600,
              }}
            >
              • Semantic HTML Structure
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              Proper heading hierarchy and semantic markup for better
              navigation.
            </Typography>
          </div>
          <div role="listitem">
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-loose)',
                fontWeight: 600,
              }}
            >
              • Skip Navigation Links
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              Skip links allow users to jump directly to main content.
            </Typography>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          color: 'var(--text-dark)',
          textAlign: 'left',
          border: '3px solid var(--secondary-purple)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          Known Issues and Limitations
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            marginBottom: 'var(--spacing-md)',
          }}
        >
          We are continuously working to improve the accessibility of our
          website. Currently, we are aware of the following areas that may need
          improvement:
        </Typography>
        <div role="list">
          <div role="listitem" style={{ marginBottom: 'var(--spacing-md)' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              • Some decorative images may not have alternative text
              descriptions
            </Typography>
          </div>
          <div role="listitem">
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              • Color contrast ratios are being continuously evaluated and
              improved
            </Typography>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          color: 'var(--text-dark)',
          textAlign: 'left',
          border: '3px solid var(--primary-blue)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          Testing and Compliance
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            marginBottom: 'var(--spacing-md)',
          }}
        >
          Our website is regularly tested for accessibility using:
        </Typography>
        <div role="list">
          <div role="listitem" style={{ marginBottom: 'var(--spacing-md)' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              • Automated accessibility testing tools
            </Typography>
          </div>
          <div role="listitem" style={{ marginBottom: 'var(--spacing-md)' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              • Manual testing with screen readers
            </Typography>
          </div>
          <div role="listitem">
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              • Keyboard-only navigation testing
            </Typography>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          color: 'var(--text-dark)',
          textAlign: 'left',
          border: '3px solid var(--primary-green)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            marginBottom: 'var(--spacing-md)',
          }}
        >
          If you experience any accessibility barriers or have suggestions for
          improvement, please contact us:
        </Typography>
        <div role="list">
          <div role="listitem" style={{ marginBottom: 'var(--spacing-md)' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              • Email: accessibility@skyeviewmontessori.com
            </Typography>
          </div>
          <div role="listitem" style={{ marginBottom: 'var(--spacing-md)' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              • Phone: (702) 555-0123
            </Typography>
          </div>
          <div role="listitem">
            <Typography
              variant="body1"
              sx={{
                color: 'var(--text-dark)',
                fontSize: 'var(--text-base)',
                lineHeight: 'var(--leading-loose)',
                marginLeft: 'var(--spacing-md)',
              }}
            >
              • Response time: We aim to respond to accessibility feedback
              within 48 hours
            </Typography>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          background: 'var(--white)',
          color: 'var(--text-dark)',
          textAlign: 'center',
          border: '3px solid var(--secondary-pink)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-base)',
            lineHeight: 'var(--leading-loose)',
            fontStyle: 'italic',
          }}
        >
          Last updated: December 2024
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};
