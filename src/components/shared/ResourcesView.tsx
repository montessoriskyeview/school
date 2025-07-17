import React from 'react';
import { CanvasView } from './Canvas/CanvasView';
import { ContentContainer } from './ContentContainer';
import { Typography } from './Typography';
import { Box, Card, CardContent, Link, Chip } from '@mui/material';
import { getResourcesByType } from './resourceUtils';
interface IResourcesViewProps {
  userType: 'parents' | 'staff';
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'form':
      return '#2563EB'; // Blue
    case 'document':
      return '#059669'; // Green
    case 'info':
      return '#7C3AED'; // Purple
    default:
      return '#374151'; // Gray
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'form':
      return 'Form';
    case 'document':
      return 'Document';
    case 'info':
      return 'Information';
    default:
      return 'Other';
  }
};

export const ResourcesView: React.FC<IResourcesViewProps> = ({ userType }) => {
  const resources = getResourcesByType(userType);
  const title = userType === 'parents' ? 'Parent Resources' : 'Staff Resources';
  const subtitle =
    userType === 'parents'
      ? 'Important documents and forms for parents'
      : 'Essential resources for staff members';

  return (
    <CanvasView>
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--primary-yellow)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
            fontSize: 'var(--text-4xl)',
          }}
        >
          📚 {title}
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
          {subtitle}
        </Typography>
      </ContentContainer>

      <Box
        component="div"
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(auto-fit, minmax(350px, 1fr))',
          },
          gap: 'var(--spacing-xl)',
          width: '100%',
        }}
      >
        {resources.map((resource, index) => (
          <Card
            key={index}
            sx={{
              background: 'var(--white)',
              border: '2px solid var(--light-gray)',
              borderRadius: '16px',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 'var(--shadow-xl)',
                borderColor: getCategoryColor(resource.category),
              },
            }}
          >
            <CardContent
              sx={{
                padding: 'var(--spacing-xl)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-md)',
              }}
            >
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                <Box
                  component="div"
                  sx={{
                    color: getCategoryColor(resource.category),
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <resource.Icon />
                </Box>
                <Chip
                  label={getCategoryLabel(resource.category)}
                  size="small"
                  sx={{
                    backgroundColor: getCategoryColor(resource.category),
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  color: 'var(--text-dark)',
                  fontWeight: 700,
                  fontSize: 'var(--text-lg)',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                {resource.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                {resource.description}
              </Typography>

              <Link
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: getCategoryColor(resource.category),
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-xs)',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                  '&:focus': {
                    outline: `2px solid ${getCategoryColor(resource.category)}`,
                    outlineOffset: '2px',
                    borderRadius: '4px',
                  },
                }}
              >
                View Document →
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>

      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
          border: '3px solid var(--secondary-purple)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          📞 Need Help?
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
          If you can't find what you're looking for or need assistance with any
          documents, please don't hesitate to contact us directly.
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};
