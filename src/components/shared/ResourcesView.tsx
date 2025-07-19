import React, { useState } from 'react';
import { CanvasView } from './Canvas/CanvasView';
import { ContentContainer } from './ContentContainer';
import { Typography } from './Typography';
import {
  Box,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
} from '@mui/material';
import { ExpandMore, Assignment, Description, Info } from '@mui/icons-material';
import { getResourcesByType } from './resourceUtils';
import { ResourceListItem } from './ResourceListItem';

interface IResourcesViewProps {
  userType: 'parents' | 'staff';
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'forms':
      return '#2563EB'; // Blue
    case 'documents':
      return '#059669'; // Green
    case 'information':
      return '#7C3AED'; // Purple
    default:
      return '#374151'; // Gray
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'forms':
      return <Assignment />;
    case 'documents':
      return <Description />;
    case 'information':
      return <Info />;
    default:
      return <Description />;
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'forms':
      return 'Forms';
    case 'documents':
      return 'Documents';
    case 'information':
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

  const [expanded, setExpanded] = useState<string | false>('forms');

  // Get all highlighted items from all categories
  const highlightedItems = [
    ...resources.forms.filter(item => item.isHighlighted),
    ...resources.documents.filter(item => item.isHighlighted),
    ...resources.information.filter(item => item.isHighlighted),
  ];

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const renderResourceList = (resourceList: any[], category: string) => (
    <List sx={{ width: '100%' }}>
      {resourceList.map((resource, index) => (
        <ResourceListItem
          key={index}
          resource={resource}
          category={category}
          categoryColor={getCategoryColor(category)}
          index={index}
        />
      ))}
    </List>
  );

  const renderHighlightedList = (highlightedList: any[]) => (
    <List sx={{ width: '100%' }}>
      {highlightedList.map((resource, index) => {
        // Determine category for color coding
        const category = resources.forms.includes(resource)
          ? 'forms'
          : resources.documents.includes(resource)
          ? 'documents'
          : 'information';

        return (
          <ResourceListItem
            key={`highlighted-${index}`}
            resource={resource}
            category={category}
            categoryColor={getCategoryColor(category)}
            index={index}
          />
        );
      })}
    </List>
  );

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

      {/* Highlighted Items Section */}
      {highlightedItems.length > 0 && (
        <ContentContainer
          variant="card"
          spacing="lg"
          style={{
            background: 'var(--white)',
            color: 'var(--text-dark)',
            border: '3px solid var(--primary-blue)',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: 'var(--text-dark)',
              marginBottom: 'var(--spacing-lg)',
              fontWeight: 700,
              fontSize: 'var(--text-2xl)',
              textAlign: 'center',
            }}
          >
            ⭐ Featured Resources
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-loose)',
              textAlign: 'center',
              marginBottom: 'var(--spacing-xl)',
            }}
          >
            Important and recently updated resources
          </Typography>
          {renderHighlightedList(highlightedItems)}
        </ContentContainer>
      )}

      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-lg)',
          width: '100%',
        }}
      >
        {/* Forms Section */}
        {resources.forms.length > 0 && (
          <Accordion
            expanded={expanded === 'forms'}
            onChange={handleAccordionChange('forms')}
            sx={{
              backgroundColor: 'var(--white)',
              border: '2px solid var(--light-gray)',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-sm)',
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                borderColor: getCategoryColor('forms'),
                boxShadow: 'var(--shadow-md)',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                backgroundColor: 'var(--light-gray)',
                borderRadius: '10px',
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                },
              }}
            >
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                }}
              >
                <Box
                  component="div"
                  sx={{
                    color: getCategoryColor('forms'),
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {getCategoryIcon('forms')}
                </Box>
                <Chip
                  label={`${resources.forms.length} ${getCategoryLabel(
                    'forms'
                  )}`}
                  size="small"
                  sx={{
                    backgroundColor: getCategoryColor('forms'),
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: 'var(--text-dark)',
                    fontWeight: 700,
                    fontSize: 'var(--text-xl)',
                    marginBottom: 0,
                  }}
                >
                  Forms & Applications
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 'var(--spacing-xl)' }}>
              {renderResourceList(resources.forms, 'forms')}
            </AccordionDetails>
          </Accordion>
        )}

        {/* Documents Section */}
        {resources.documents.length > 0 && (
          <Accordion
            expanded={expanded === 'documents'}
            onChange={handleAccordionChange('documents')}
            sx={{
              backgroundColor: 'var(--white)',
              border: '2px solid var(--light-gray)',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-sm)',
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                borderColor: getCategoryColor('documents'),
                boxShadow: 'var(--shadow-md)',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                backgroundColor: 'var(--light-gray)',
                borderRadius: '10px',
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                },
              }}
            >
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                }}
              >
                <Box
                  component="div"
                  sx={{
                    color: getCategoryColor('documents'),
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {getCategoryIcon('documents')}
                </Box>
                <Chip
                  label={`${resources.documents.length} ${getCategoryLabel(
                    'documents'
                  )}`}
                  size="small"
                  sx={{
                    backgroundColor: getCategoryColor('documents'),
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: 'var(--text-dark)',
                    fontWeight: 700,
                    fontSize: 'var(--text-xl)',
                  }}
                >
                  Documents & Handbooks
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 'var(--spacing-xl)' }}>
              {renderResourceList(resources.documents, 'documents')}
            </AccordionDetails>
          </Accordion>
        )}

        {/* Information Section */}
        {resources.information.length > 0 && (
          <Accordion
            expanded={expanded === 'information'}
            onChange={handleAccordionChange('information')}
            sx={{
              backgroundColor: 'var(--white)',
              border: '2px solid var(--light-gray)',
              borderRadius: '12px',
              boxShadow: 'var(--shadow-sm)',
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                borderColor: getCategoryColor('information'),
                boxShadow: 'var(--shadow-md)',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                backgroundColor: 'var(--light-gray)',
                borderRadius: '10px',
                '& .MuiAccordionSummary-content': {
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                },
              }}
            >
              <Box
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                }}
              >
                <Box
                  component="div"
                  sx={{
                    color: getCategoryColor('information'),
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {getCategoryIcon('information')}
                </Box>
                <Chip
                  label={`${resources.information.length} ${getCategoryLabel(
                    'information'
                  )}`}
                  size="small"
                  sx={{
                    backgroundColor: getCategoryColor('information'),
                    color: 'white',
                    fontWeight: 600,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    color: 'var(--text-dark)',
                    fontWeight: 700,
                    fontSize: 'var(--text-xl)',
                  }}
                >
                  Information & Guidelines
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 'var(--spacing-xl)' }}>
              {renderResourceList(resources.information, 'information')}
            </AccordionDetails>
          </Accordion>
        )}
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
