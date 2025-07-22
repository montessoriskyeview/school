import { SchoolList } from '../components/shared/ListText';
import { CanvasView } from '../components/shared/Canvas/CanvasView';
import { CollapseContainer } from '../components/shared/CollapseContainer';
import { ContentContainer } from '../components/shared/ContentContainer';
import { Typography } from '../components/shared/Typography';
import { PricingDisplay } from '../components/shared/PricingDisplay';

export const Tuition = () => {
  return (
    <CanvasView>
      <ContentContainer
        variant="card"
        spacing="lg"
        style={{
          textAlign: 'center',
          background: 'var(--white)',
          color: 'var(--text-dark)',
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
            fontSize: 'var(--text-4xl)',
          }}
        >
          💰 Tuition & Payment Information
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
          We offer flexible payment options to make quality Montessori education
          accessible to families. Payment is currently accepted through the
          forms in the registration page (from the menu).
        </Typography>
      </ContentContainer>

      <CollapseContainer
        title="🌅 Part-time Core Day Only"
        content={
          <PricingDisplay
            yearlyPrice={{
              label: 'Full Year Payment',
              amount: '$6,750',
              description: 'Pay once for the entire learning year',
            }}
            monthlyOptions={[
              {
                label: 'Monthly Payment (Sept-May)',
                amount: '$750',
                description: '9 monthly payments',
              },
              {
                label: 'Year-round Financing',
                amount: '$587.50',
                description: '12 monthly payments (Sept-Aug)',
              },
            ]}
          />
        }
        spacing="lg"
      />

      <CollapseContainer
        title="☀️ Full-time Learning Day"
        content={
          <PricingDisplay
            yearlyPrice={{
              label: 'Full Year Payment',
              amount: '$9,900',
              description: 'Pay once for the entire learning year',
            }}
            monthlyOptions={[
              {
                label: 'Monthly Payment (Sept-May)',
                amount: '$1,100',
                description: '9 monthly payments',
              },
              {
                label: 'Year-round Financing',
                amount: '$850',
                description: '12 monthly payments (Sept-Aug)',
              },
            ]}
          />
        }
        spacing="lg"
      />

      <CollapseContainer
        title="📝 Registration Fees"
        content={
          <SchoolList
            items={[
              '$400 Registration Fee before August 31st',
              '$500 Registration Fee after August 31st',
            ]}
            emphasized={true}
          />
        }
        spacing="lg"
      />
      <CollapseContainer
        title="🎁 What Tuition Includes"
        content={
          <SchoolList
            items={[
              'Comprehensive Montessori curriculum',
              'Fall and Spring learning center pictures',
              'Monthly "Fun for Everyone" activities',
              'Healthy snacks and refreshments',
              'All educational supplies and materials',
            ]}
            emphasized={true}
          />
        }
        spacing="lg"
      />

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
          variant="h4"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          💳 Payment Processing
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'var(--text-dark)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-loose)',
            fontWeight: 500,
            fontStyle: 'italic',
          }}
        >
          Please note that processing fees are not included in the total cost
          and range from 1% to 5% depending on your selected payment method.
        </Typography>
      </ContentContainer>

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
          variant="h3"
          sx={{
            color: 'var(--text-dark)',
            marginBottom: 'var(--spacing-lg)',
            fontWeight: 700,
          }}
        >
          🎯 Ready to Get Started?
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
          Contact us today to discuss payment options and begin your child's
          Montessori journey!
        </Typography>
      </ContentContainer>
    </CanvasView>
  );
};
