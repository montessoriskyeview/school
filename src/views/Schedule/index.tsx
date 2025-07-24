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

export const Schedule = () => {
  return (
    <CanvasView
      extraMobileCtaTitle="Want different hours?"
      extraMobileCtaMessage="If you have specific needs, contact us to see if we can provide specific accommodations."
    >
      <InfoText
        title="Schedule"
        text="We believe time can be used more effectively and efficiently for students in the classroom and offer a shortened core learning day as well as a full-time option for care. Our full-day learning day is offered from 8:00 am to 4:00 pm, with our core learning day taking place between the hours of 9:00 am - 1:00 pm."
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
          Choose Your Program
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
                  Full-Time Program
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--text-dark)',
                  }}
                >
                  8:00 AM - 4:00 PM
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-xl)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Complete Montessori experience with extended learning time,
                  enriched curriculum, and comprehensive care. Perfect for
                  working families who need reliable, extended care.
                </Typography>

                {/* Full-Time Daily Schedule */}
                <Box
                  component="div"
                  sx={{ marginBottom: 'var(--spacing-xl)', textAlign: 'left' }}
                >
                  <CollapseContainer
                    title="Daily Schedule"
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
                          This flexible framework can be tailored to different
                          age groups and learning objectives.
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
                  Learn More
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
                  Part-Time Program
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 600,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--text-dark)',
                  }}
                >
                  9:00 AM - 1:00 PM
                </Typography>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-xl)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  Perfect balance of quality Montessori education and family
                  time. Focused learning during core hours while maintaining
                  precious afternoon time.
                </Typography>

                {/* Part-Time Daily Schedule */}
                <Box
                  component="div"
                  sx={{ marginBottom: 'var(--spacing-xl)', textAlign: 'left' }}
                >
                  <CollapseContainer
                    title="Daily Schedule"
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
                          Core learning hours focused on essential Montessori
                          activities and foundational skills.
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
                  Learn More
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
        <Typography variant="h2">Enroll Today</Typography>
        <EnrollmentButtons variant="dark" />
      </Box>

      <CollapseContainer
        title="2025-2026 Learning Year"
        testId="yearly-schedule"
        content={<YearlySchedule items={YEARLY_SCHEDULE_ITEMS} />}
      />

      <ListText
        title="Weekly schedule"
        items={[
          'Full time: Monday through Friday - 8am to 4pm',
          'Part time: Monday through Thursday - 9am to 1pm',
        ]}
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
          Want different hours? 📱
        </Typography>
        <Typography
          style={{
            color: 'var(--white)',
            fontSize: 'var(--text-base)',
            lineHeight: 1.6,
            opacity: 0.95,
          }}
        >
          We understand every family has unique scheduling needs. Contact us to
          discuss flexible arrangements that work for your family.
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
