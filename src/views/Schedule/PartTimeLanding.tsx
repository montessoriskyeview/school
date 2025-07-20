import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { CanvasView } from '../../components/shared/Canvas/CanvasView';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/shared/SEO';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import NatureIcon from '@mui/icons-material/Nature';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SavingsIcon from '@mui/icons-material/Savings';

export const PartTimeLanding = () => {
  return (
    <>
      <SEO
        title="Part-Time Montessori Program | 9AM-1PM Daily | Skye View Learning Center"
        description="Perfect Montessori introduction with our part-time program. Core learning hours 9AM-1PM with focused academics, outdoor activities, and family time balance. Ideal for families wanting quality education with flexibility."
        keywords="part-time Montessori Las Vegas, 9AM-1PM Montessori program, half-day Montessori, flexible Montessori schedule, family-friendly Montessori, Las Vegas part-time learning center"
        url="/schedule/part-time"
      />
      <CanvasView extraMobileCtaMessage="If you have specific needs, contact us to see if we can provide specific accommodations.">
        {/* Hero Section */}
        <Box
          component="div"
          style={{
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
            color: 'white',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
            marginBottom: 'var(--spacing-3xl)',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-4xl)' },
              fontWeight: 700,
              marginBottom: 'var(--spacing-lg)',
              color: 'white',
            }}
          >
            Part-Time Montessori Excellence
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 'var(--text-xl)', md: 'var(--text-2xl)' },
              fontWeight: 600,
              marginBottom: 'var(--spacing-xl)',
              color: 'rgba(255, 255, 255, 0.95)',
            }}
          >
            9:00 AM - 1:00 PM • Monday - Thursday
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 'var(--text-lg)', md: 'var(--text-xl)' },
              lineHeight: 1.6,
              marginBottom: 'var(--spacing-xl)',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              margin: '0 auto var(--spacing-xl)',
            }}
          >
            The perfect balance of quality Montessori education and family time.
            Your child gets focused learning during core hours while maintaining
            precious afternoon time.
          </Typography>
          <Button
            component={Link}
            to="/registration"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: 'white',
              color: 'var(--primary-green)',
              fontSize: 'var(--text-lg)',
              padding: 'var(--spacing-md) var(--spacing-xl)',
              fontWeight: 700,
              '&:hover': {
                backgroundColor: '#F3F4F6',
                transform: 'translateY(-2px)',
              },
              minHeight: 56,
              minWidth: 200,
            }}
          >
            Enroll Now
          </Button>
        </Box>

        {/* Key Benefits Grid */}
        <Grid container spacing={4} sx={{ marginBottom: 'var(--spacing-3xl)' }}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '2px solid var(--primary-green)',
              }}
            >
              <CardContent sx={{ padding: 0 }}>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-lg)',
                  }}
                >
                  <FamilyRestroomIcon
                    sx={{
                      fontSize: 48,
                      color: 'var(--primary-green)',
                      marginRight: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}
                  >
                    Family Time Balance
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  Perfect for families who want quality education while
                  preserving precious afternoon time.
                </Typography>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Afternoon family time</Typography>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Flexible scheduling</Typography>
                </Box>
                <Box
                  component="div"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Reduced daily stress</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '2px solid var(--primary-green)',
              }}
            >
              <CardContent sx={{ padding: 0 }}>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-lg)',
                  }}
                >
                  <SchoolIcon
                    sx={{
                      fontSize: 48,
                      color: 'var(--primary-green)',
                      marginRight: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}
                  >
                    Focused Core Learning
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  Concentrated learning during peak attention hours. Your child
                  gets the essential Montessori curriculum without feeling
                  overwhelmed by a long day.
                </Typography>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Peak attention hours</Typography>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Essential curriculum focus</Typography>
                </Box>
                <Box
                  component="div"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Reduced overwhelm</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '2px solid var(--primary-green)',
              }}
            >
              <CardContent sx={{ padding: 0 }}>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-lg)',
                  }}
                >
                  <SavingsIcon
                    sx={{
                      fontSize: 48,
                      color: 'var(--primary-green)',
                      marginRight: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}
                  >
                    Cost-Effective Option
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  Quality Montessori education at a more affordable rate.
                  Perfect for families who want the Montessori experience
                  without the full-time commitment.
                </Typography>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Lower tuition costs</Typography>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Same quality education</Typography>
                </Box>
                <Box
                  component="div"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Flexible commitment</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '2px solid var(--primary-green)',
              }}
            >
              <CardContent sx={{ padding: 0 }}>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-lg)',
                  }}
                >
                  <NatureIcon
                    sx={{
                      fontSize: 48,
                      color: 'var(--primary-green)',
                      marginRight: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}
                  >
                    Outdoor Learning Focus
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  Morning hours are perfect for outdoor learning and nature
                  exploration. Your child gets fresh air and movement during the
                  most energetic part of their day.
                </Typography>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Morning energy utilization</Typography>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Fresh air and movement</Typography>
                </Box>
                <Box
                  component="div"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Nature exploration time</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Daily Schedule Section */}
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
            Part-Time Daily Schedule
          </Typography>
          <Card
            sx={{
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--primary-green)',
                  }}
                >
                  Morning (9:00 AM - 11:00 AM)
                </Typography>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    9:00 - 9:30 AM
                  </Typography>
                  <Typography>Arrival & morning greetings</Typography>
                </Box>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    9:30 - 10:30 AM
                  </Typography>
                  <Typography>Core academics & hands-on learning</Typography>
                </Box>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    10:30 - 11:00 AM
                  </Typography>
                  <Typography>Movement & outdoor activities</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--primary-green)',
                  }}
                >
                  Mid-Morning (11:00 AM - 1:00 PM)
                </Typography>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    11:00 - 12:00 PM
                  </Typography>
                  <Typography>Deep dives & project work</Typography>
                </Box>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    12:00 - 1:00 PM
                  </Typography>
                  <Typography>Lunch & social time</Typography>
                </Box>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    1:00 PM
                  </Typography>
                  <Typography>Dismissal - Family time begins!</Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>

        {/* Ideal For Section */}
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
            Perfect For Families Who...
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                }}
              >
                <CardContent sx={{ padding: 0 }}>
                  <FamilyRestroomIcon
                    sx={{
                      fontSize: 48,
                      color: 'var(--primary-green)',
                      marginBottom: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      marginBottom: 'var(--spacing-md)',
                    }}
                  >
                    Want Family Time
                  </Typography>
                  <Typography
                    sx={{ fontSize: 'var(--text-base)', lineHeight: 1.6 }}
                  >
                    Value afternoon time for family activities, appointments, or
                    simply spending quality time together at home.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                }}
              >
                <CardContent sx={{ padding: 0 }}>
                  <PsychologyIcon
                    sx={{
                      fontSize: 48,
                      color: 'var(--primary-green)',
                      marginBottom: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      marginBottom: 'var(--spacing-md)',
                    }}
                  >
                    Prefer Gentle Introduction
                  </Typography>
                  <Typography
                    sx={{ fontSize: 'var(--text-base)', lineHeight: 1.6 }}
                  >
                    Want to introduce Montessori gradually, especially for
                    younger children or those transitioning from home care.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                }}
              >
                <CardContent sx={{ padding: 0 }}>
                  <SavingsIcon
                    sx={{
                      fontSize: 48,
                      color: 'var(--primary-green)',
                      marginBottom: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      marginBottom: 'var(--spacing-md)',
                    }}
                  >
                    Seek Cost Efficiency
                  </Typography>
                  <Typography
                    sx={{ fontSize: 'var(--text-base)', lineHeight: 1.6 }}
                  >
                    Want quality Montessori education at a more affordable rate
                    while maintaining family budget flexibility.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Tuition Section */}
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
            Part-Time Tuition & Payment Options
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  padding: 'var(--spacing-xl)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  border: '2px solid var(--primary-green)',
                  background:
                    'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
                }}
              >
                <CardContent sx={{ padding: 0, textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: 'var(--text-2xl)',
                      fontWeight: 700,
                      marginBottom: 'var(--spacing-lg)',
                      color: 'var(--primary-green)',
                    }}
                  >
                    🌅 Part-time Core Day Only
                  </Typography>
                  <Box
                    component="div"
                    sx={{ marginBottom: 'var(--spacing-lg)' }}
                  >
                    <Typography
                      sx={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 700,
                        color: 'var(--text-dark)',
                        marginBottom: 'var(--spacing-sm)',
                      }}
                    >
                      $6,750 per learning year
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--text-secondary)',
                        fontWeight: 600,
                      }}
                    >
                      OR
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{ marginBottom: 'var(--spacing-lg)' }}
                  >
                    <Typography
                      sx={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 600,
                        color: 'var(--text-dark)',
                        marginBottom: 'var(--spacing-sm)',
                      }}
                    >
                      $750 paid monthly
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      September through May
                    </Typography>
                  </Box>
                  <Box component="div">
                    <Typography
                      sx={{
                        fontSize: 'var(--text-lg)',
                        fontWeight: 600,
                        color: 'var(--text-dark)',
                        marginBottom: 'var(--spacing-sm)',
                      }}
                    >
                      $587.50 per month
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Year round financing from September through August
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  padding: 'var(--spacing-xl)',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  border: '2px solid var(--primary-blue)',
                  background:
                    'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                }}
              >
                <CardContent sx={{ padding: 0 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      marginBottom: 'var(--spacing-lg)',
                      color: 'var(--primary-blue)',
                    }}
                  >
                    🎁 What's Included
                  </Typography>
                  <Box
                    component="div"
                    sx={{ marginBottom: 'var(--spacing-sm)' }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: 'var(--success-green)',
                        marginRight: 'var(--spacing-sm)',
                        fontSize: 20,
                      }}
                    />
                    <Typography sx={{ display: 'inline' }}>
                      Comprehensive Montessori curriculum
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{ marginBottom: 'var(--spacing-sm)' }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: 'var(--success-green)',
                        marginRight: 'var(--spacing-sm)',
                        fontSize: 20,
                      }}
                    />
                    <Typography sx={{ display: 'inline' }}>
                      Fall and Spring learning center pictures
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{ marginBottom: 'var(--spacing-sm)' }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: 'var(--success-green)',
                        marginRight: 'var(--spacing-sm)',
                        fontSize: 20,
                      }}
                    />
                    <Typography sx={{ display: 'inline' }}>
                      Monthly "Fun for Everyone" activities
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{ marginBottom: 'var(--spacing-sm)' }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: 'var(--success-green)',
                        marginRight: 'var(--spacing-sm)',
                        fontSize: 20,
                      }}
                    />
                    <Typography sx={{ display: 'inline' }}>
                      Healthy snacks and refreshments
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{ marginBottom: 'var(--spacing-sm)' }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: 'var(--success-green)',
                        marginRight: 'var(--spacing-sm)',
                        fontSize: 20,
                      }}
                    />
                    <Typography sx={{ display: 'inline' }}>
                      All educational supplies and materials
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{ marginBottom: 'var(--spacing-sm)' }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: 'var(--success-green)',
                        marginRight: 'var(--spacing-sm)',
                        fontSize: 20,
                      }}
                    />
                    <Typography sx={{ display: 'inline' }}>
                      Focused core learning hours
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{ marginBottom: 'var(--spacing-sm)' }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: 'var(--success-green)',
                        marginRight: 'var(--spacing-sm)',
                        fontSize: 20,
                      }}
                    />
                    <Typography sx={{ display: 'inline' }}>
                      Afternoon family time preserved
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Registration Fees Section */}
        <Box component="div" sx={{ marginBottom: 'var(--spacing-3xl)' }}>
          <Card
            sx={{
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '2px solid var(--secondary-pink)',
              background: 'linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: 'var(--text-xl)',
                fontWeight: 700,
                marginBottom: 'var(--spacing-lg)',
                color: 'var(--text-dark)',
                textAlign: 'center',
              }}
            >
              📝 Registration Fees
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Box component="div" sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                      marginBottom: 'var(--spacing-sm)',
                    }}
                  >
                    Early Registration
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      color: 'var(--primary-green)',
                    }}
                  >
                    $400
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    Before August 31st
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box component="div" sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 700,
                      color: 'var(--text-dark)',
                      marginBottom: 'var(--spacing-sm)',
                    }}
                  >
                    Standard Registration
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      color: 'var(--primary-blue)',
                    }}
                  >
                    $500
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 'var(--text-base)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    After August 31st
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>

        {/* CTA Section */}
        <Box
          component="div"
          style={{
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
            color: 'white',
            padding: 'var(--spacing-3xl)',
            borderRadius: 'var(--radius-xl)',
            textAlign: 'center',
            marginBottom: 'var(--spacing-3xl)',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 'var(--text-2xl)', md: 'var(--text-3xl)' },
              fontWeight: 700,
              marginBottom: 'var(--spacing-lg)',
              color: 'white',
            }}
          >
            Ready for the Perfect Balance?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 'var(--text-lg)', md: 'var(--text-xl)' },
              lineHeight: 1.6,
              marginBottom: 'var(--spacing-xl)',
              color: 'rgba(255, 255, 255, 0.95)',
              maxWidth: '600px',
              margin: '0 auto var(--spacing-xl)',
            }}
          >
            Join our part-time program and give your child quality Montessori
            education while maintaining precious family time and flexibility for
            your lifestyle.
          </Typography>
          <Box
            component="div"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 'var(--spacing-md)',
              justifyContent: 'center',
            }}
          >
            <Button
              component={Link}
              to="/registration"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: 'var(--primary-blue)',
                fontSize: 'var(--text-lg)',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#F3F4F6',
                  transform: 'translateY(-2px)',
                },
                minHeight: 56,
                minWidth: 200,
              }}
            >
              Enroll Now
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                fontSize: 'var(--text-lg)',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                fontWeight: 700,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                minHeight: 56,
                minWidth: 200,
              }}
            >
              Schedule a Tour
            </Button>
          </Box>
        </Box>

        {/* Back to Schedule Link */}
        <Box
          component="div"
          sx={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}
        >
          <Button
            component={Link}
            to="/schedule"
            variant="text"
            sx={{
              color: 'var(--primary-blue)',
              fontSize: 'var(--text-base)',
              fontWeight: 600,
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            ← Back to Schedule Overview
          </Button>
        </Box>

        {/* Alternative Schedule Option */}
        <Box
          component="div"
          sx={{
            marginTop: 'var(--spacing-3xl)',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
            border: '2px solid var(--primary-blue)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              marginBottom: 'var(--spacing-md)',
              color: 'var(--text-dark)',
            }}
          >
            Need Extended Care?
          </Typography>
          <Typography
            sx={{
              fontSize: 'var(--text-lg)',
              lineHeight: 1.6,
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto var(--spacing-lg)',
            }}
          >
            Our full-time program provides the complete Montessori experience
            with extended learning hours, enriched curriculum, and comprehensive
            care. Perfect for working families who need reliable, extended care.
          </Typography>
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
            Learn About Full-Time Program
          </Button>
        </Box>
      </CanvasView>
    </>
  );
};
