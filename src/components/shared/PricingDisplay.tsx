import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Typography } from './Typography';

interface PricingOption {
  label: string;
  amount: string;
  description?: string;
}

interface PricingDisplayProps {
  yearlyPrice: PricingOption;
  monthlyOptions: PricingOption[];
  hint?: string;
}

const PricingContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
`;

const YearlyPriceSection = styled(Box)`
  text-align: center;
  padding: var(--spacing-lg);
  background: linear-gradient(
    135deg,
    var(--primary-green-light) 0%,
    var(--primary-green-lighter) 100%
  );
  border-radius: var(--border-radius-lg);
  border: 2px solid var(--primary-green);
  box-shadow: var(--shadow-md);
`;

const MonthlyOptionsSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const MonthlyOption = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
  background: var(--white);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--primary-green);
    box-shadow: var(--shadow-sm);
  }
`;

const HintText = styled(Typography)`
  text-align: center;
  font-style: italic;
  color: var(--text-muted);
  font-size: var(--text-sm);
  margin-top: var(--spacing-md);
  padding: var(--spacing-sm);
  background: var(--background-light);
  border-radius: var(--border-radius-sm);
  border-left: 3px solid var(--primary-green);
`;

export const PricingDisplay = ({
  yearlyPrice,
  monthlyOptions,
  hint = '💡 Suggested annual donations help simplify planning for the school year',
}: PricingDisplayProps) => {
  return (
    <PricingContainer component="div">
      {/* Suggested Annual Donation - Most Prominent */}
      <YearlyPriceSection component="div">
        <Typography
          variant="h4"
          sx={{
            color: 'var(--text-dark)',
            fontWeight: 700,
            marginBottom: 'var(--spacing-sm)',
          }}
        >
          {yearlyPrice.label}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: 'var(--primary-green)',
            fontWeight: 800,
            fontSize: 'var(--text-3xl)',
            marginBottom: 'var(--spacing-sm)',
          }}
        >
          {yearlyPrice.amount}
        </Typography>
        {yearlyPrice.description && (
          <Typography
            variant="body2"
            sx={{
              color: 'var(--text-muted)',
              fontWeight: 500,
            }}
          >
            {yearlyPrice.description}
          </Typography>
        )}
      </YearlyPriceSection>

      {/* Monthly Donation Options */}
      <MonthlyOptionsSection>
        <Typography
          variant="h5"
          sx={{
            color: 'var(--text-dark)',
            fontWeight: 600,
            marginBottom: 'var(--spacing-sm)',
            textAlign: 'center',
          }}
        >
          💳 Monthly Donation Options
        </Typography>

        {monthlyOptions.map((option, index) => (
          <MonthlyOption key={index}>
            <Box component="div">
              <Typography
                variant="body1"
                sx={{
                  color: 'var(--text-dark)',
                  fontWeight: 500,
                }}
              >
                {option.label}
              </Typography>
              {option.description && (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'var(--text-muted)',
                    marginTop: 'var(--spacing-xs)',
                  }}
                >
                  {option.description}
                </Typography>
              )}
            </Box>
            <Typography
              variant="h6"
              sx={{
                color: 'var(--primary-green)',
                fontWeight: 700,
                fontSize: 'var(--text-xl)',
              }}
            >
              {option.amount}
            </Typography>
          </MonthlyOption>
        ))}
      </MonthlyOptionsSection>

      {/* Subtle Hint */}
      <HintText variant="body2">{hint}</HintText>
    </PricingContainer>
  );
};
