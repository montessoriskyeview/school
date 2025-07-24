import { Box } from '@mui/material';
import { getActiveEnrollmentPeriods } from '../../resources/enrollmentConfig';
import { EnrollmentButton } from './EnrollmentButton';

interface IEnrollmentButtonsProps {
  variant?: 'primary' | 'secondary' | 'dark';
  sx?: any;
  maxButtons?: number; // Limit number of buttons to show
}

export const EnrollmentButtons = ({
  variant = 'primary',
  sx = {},
  maxButtons,
}: IEnrollmentButtonsProps) => {
  const activePeriods = getActiveEnrollmentPeriods();
  const periodsToShow = maxButtons
    ? activePeriods.slice(0, maxButtons)
    : activePeriods;

  if (periodsToShow.length === 0) {
    return null;
  }

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        gap: 3,
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'flex-end' },
        width: { xs: '100%', md: 'auto' },
        flexDirection: { xs: 'column', md: 'row' },
        ...sx,
      }}
    >
      {periodsToShow.map(period => (
        <EnrollmentButton
          key={period.id}
          href={period.href}
          variant={variant}
          conversionId={period.conversionId}
        >
          {period.title}
        </EnrollmentButton>
      ))}
    </Box>
  );
};
