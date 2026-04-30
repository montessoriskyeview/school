import { InfoText } from '../../components/shared/InfoText';
import { CanvasView } from '../../components/shared/Canvas/CanvasView';
import { ListText } from '../../components/shared/ListText';
import {
  DailyScheduleProps,
  YearlyScheduleProps,
  YEARLY_SCHEDULE_ITEMS,
  FULL_TIME_SCHEDULE_ITEMS,
  PART_TIME_SCHEDULE_ITEMS,
} from './items';
import { NestedListItem } from '../../components/shared/NestedListItem';
import { CollapseContainer } from '../../components/shared/CollapseContainer';
import { Typography } from '../../components/shared/Typography';
import { Box, Button, Card, CardContent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { EnrollmentButtons } from '../../components/shared/EnrollmentButtons';
import { schedulePageContent } from '../../i18n/pages/schedule';

export const Schedule = () => {
  return (
    <CanvasView
      extraMobileCtaTitle={schedulePageContent.extraMobileCtaTitle}
      extraMobileCtaMessage={schedulePageContent.extraMobileCtaMessage}
    >
      <InfoText
        title={schedulePageContent.title}
        text={schedulePageContent.intro}
      />

      {/* Program Options Cards */}
      <Box component="div" sx={{ marginBottom: 'var(--spacing-3xl)' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' },
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-dark)',
          }}
        >
          {schedulePageContent.chooseProgramTitle}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '2px solid var(--primary-blue)',
                background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                transition:
                  'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 30px rgba(37, 99, 235, 0.2)',
                },
              }}
            >
              <CardContent sx={{ padding: 0, textAlign: 'center' }}>
                <AccessTimeIcon
                  sx={{
                    fontSize: 64,
                    color: 'var(--primary-blue)',
                    marginBottom: 'var(--spacing-lg)',
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-md)',
                    color: 'var(--primary-blue)',
                  }}
                >
                  {schedulePageContent.fullTimeProgramTitle}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--text-dark)',
                  }}
                >
                  {schedulePageContent.fullTimeProgramHours}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-xl)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {schedulePageContent.fullTimeProgramDescription}
                </Typography>

                {/* Full-Time Daily Schedule */}
                <Box
                  component="div"
                  sx={{ marginBottom: 'var(--spacing-xl)', textAlign: 'left' }}
                >
                  <CollapseContainer
                    title={schedulePageContent.fullTimeProgramScheduleTitle}
                    testId="full-time-daily-schedule"
                    content={
                      <>
                        <DailySchedule items={FULL_TIME_SCHEDULE_ITEMS} />
                        <Typography
                          sx={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)',
                            fontStyle: 'italic',
                            marginTop: 'var(--spacing-md)',
                          }}
                        >
                          {schedulePageContent.fullTimeProgramScheduleFooter}
                        </Typography>
                      </>
                    }
                  />
                </Box>

                <Button
                  component={Link}
                  to="/schedule/full-time"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'var(--primary-blue)',
                    color: 'white',
                    fontSize: 'var(--text-lg)',
                    padding: 'var(--spacing-md) var(--spacing-xl)',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: '#1D4ED8',
                      transform: 'translateY(-2px)',
                    },
                    minHeight: 56,
                    minWidth: 200,
                  }}
                >
                  {schedulePageContent.learnMoreLabel}
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '2px solid var(--primary-green)',
                background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
                transition:
                  'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 30px rgba(5, 150, 105, 0.2)',
                },
              }}
            >
              <CardContent sx={{ padding: 0, textAlign: 'center' }}>
                <FamilyRestroomIcon
                  sx={{
                    fontSize: 64,
                    color: 'var(--primary-green)',
                    marginBottom: 'var(--spacing-lg)',
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-md)',
                    color: 'var(--primary-green)',
                  }}
                >
                  {schedulePageContent.partTimeProgramTitle}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--text-dark)',
                  }}
                >
                  {schedulePageContent.partTimeProgramHours}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-xl)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {schedulePageContent.partTimeProgramDescription}
                </Typography>

                {/* Part-Time Daily Schedule */}
                <Box
                  component="div"
                  sx={{ marginBottom: 'var(--spacing-xl)', textAlign: 'left' }}
                >
                  <CollapseContainer
                    title={schedulePageContent.partTimeProgramScheduleTitle}
                    testId="part-time-daily-schedule"
                    content={
                      <>
                        <DailySchedule items={PART_TIME_SCHEDULE_ITEMS} />
                        <Typography
                          sx={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)',
                            fontStyle: 'italic',
                            marginTop: 'var(--spacing-md)',
                          }}
                        >
                          {schedulePageContent.partTimeProgramScheduleFooter}
                        </Typography>
                      </>
                    }
                  />
                </Box>

                <Button
                  component={Link}
                  to="/schedule/part-time"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'var(--primary-green)',
                    color: 'white',
                    fontSize: 'var(--text-lg)',
                    padding: 'var(--spacing-md) var(--spacing-xl)',
                    fontWeight: 700,
                    '&:hover': {
                      backgroundColor: '#059669',
                      transform: 'translateY(-2px)',
                    },
                    minHeight: 56,
                    minWidth: 200,
                  }}
                >
                  {schedulePageContent.learnMoreLabel}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box
        component="div"
        sx={{
          marginBottom: 'var(--spacing-3xl)',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h2">{schedulePageContent.enrollTitle}</Typography>
        <EnrollmentButtons variant="dark" />
      </Box>

      <CollapseContainer
        title={schedulePageContent.yearlyScheduleTitle}
        testId="yearly-schedule"
        content={<YearlySchedule items={YEARLY_SCHEDULE_ITEMS} />}
      />

      <ListText
        title={schedulePageContent.weeklyScheduleTitle}
        items={schedulePageContent.weeklyScheduleItems}
      />

      {/* Want different hours section */}
      <div
        style={{
          marginTop: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--primary-blue)',
          borderRadius: 'var(--radius-lg)',
          color: 'var(--white)',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          style={{
            color: 'var(--white)',
            marginBottom: 'var(--spacing-md)',
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
          }}
        >
          {schedulePageContent.flexibleSectionTitle}
        </Typography>
        <Typography
          style={{
            color: 'var(--white)',
            fontSize: 'var(--text-base)',
            lineHeight: 1.6,
            opacity: 0.95,
          }}
        >
          {schedulePageContent.flexibleSectionDescription}
        </Typography>
      </div>
    </CanvasView>
  );
};

const DailySchedule = ({ items }: DailyScheduleProps) => {
  return (
    <>
      {items.map(i => (
        <NestedListItem
          key={i.title}
          title={`${i.startTime} - ${i.endTime}`}
          description={[i.title, i.detail]}
        />
      ))}
    </>
  );
};

const YearlySchedule = ({ items }: YearlyScheduleProps) => {
  return (
    <>
      {items.map(i => (
        <NestedListItem
          key={i.startDate + i.endDate}
          title={`${i.startDate}${i.endDate ? ` - ${i.endDate}` : ''}`}
          description={[i.detail]}
        />
      ))}
    </>
  );
};

export { FullTimeLanding } from './FullTimeLanding';
export { PartTimeLanding } from './PartTimeLanding';
