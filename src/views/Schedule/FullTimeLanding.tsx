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
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import NatureIcon from '@mui/icons-material/Nature';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { getNextActiveEnrollmentPeriod } from '../../resources/enrollmentConfig';

export const FullTimeLanding = () => {
  return (
    <>
      <SEO
        title="Full-Time Montessori Program | 8AM-4PM Daily | Skye View Learning Center"
        description="Give your child the complete Montessori experience with our full-time program. Extended hours 8AM-4PM with enriched curriculum, outdoor learning, and comprehensive care. Perfect for working parents."
        keywords="full-time Montessori Las Vegas, 8AM-4PM Montessori program, extended care Montessori, working parents Montessori, complete Montessori curriculum, Las Vegas full-time learning center"
        url="/schedule/full-time"
      />
      <CanvasView extraMobileCtaMessage="If you have specific needs, contact us to see if we can provide specific accommodations.">
        {/* Hero Section */}
        <Box
          component="div"
          style={{
            background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
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
            Full-Time Montessori Excellence
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
            8:00 AM - 4:00 PM • Monday - Friday
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
            The complete Montessori experience designed for working families.
            Your child gets extended learning time, enriched curriculum, and
            comprehensive care in a nurturing environment.
          </Typography>
          <Button
            component={Link}
            to={getNextActiveEnrollmentPeriod().href}
            target="_blank"
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
                border: '2px solid var(--primary-blue)',
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
                  <AccessTimeIcon
                    sx={{
                      fontSize: 48,
                      color: 'var(--primary-blue)',
                      marginRight: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}
                  >
                    Extended Learning Hours
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  Perfect for working parents who need reliable, extended care.
                  Your child benefits from more time for deep learning, project
                  work, and skill development.
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
                  <Typography>8:00 AM - 4:00 PM daily schedule</Typography>
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
                  <Typography>Before and after care included</Typography>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <CheckCircleIcon
                    sx={{
                      color: 'var(--success-green)',
                      marginRight: 'var(--spacing-sm)',
                    }}
                  />
                  <Typography>Consistent daily routine</Typography>
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
                border: '2px solid var(--primary-blue)',
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
                      color: 'var(--primary-blue)',
                      marginRight: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}
                  >
                    Enriched Curriculum
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  Extended hours allow for deeper exploration of subjects, more
                  project-based learning, and additional enrichment activities
                  that build confidence and skills.
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
                  <Typography>Extended project time</Typography>
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
                  <Typography>Additional enrichment activities</Typography>
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
                  <Typography>Deeper subject exploration</Typography>
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
                border: '2px solid var(--primary-blue)',
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
                      color: 'var(--primary-blue)',
                      marginRight: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}
                  >
                    Extended Outdoor Learning
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  More time outdoors means more opportunities for nature
                  exploration, physical development, and environmental education
                  in our beautiful Skye Canyon setting.
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
                  <Typography>Extended nature exploration</Typography>
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
                  <Typography>More outdoor activities</Typography>
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
                  <Typography>Environmental education focus</Typography>
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
                border: '2px solid var(--primary-blue)',
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
                  <GroupsIcon
                    sx={{
                      fontSize: 48,
                      color: 'var(--primary-blue)',
                      marginRight: 'var(--spacing-md)',
                    }}
                  />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 'var(--text-xl)', fontWeight: 700 }}
                  >
                    Social Development
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: 'var(--text-base)',
                    lineHeight: 1.6,
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  Extended time with peers fosters stronger friendships, better
                  social skills, and a sense of community that supports
                  emotional development.
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
                  <Typography>Stronger peer relationships</Typography>
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
                  <Typography>Enhanced social skills</Typography>
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
                  <Typography>Community building</Typography>
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
            Full-Time Daily Schedule
          </Typography>
          <Card
            sx={{
              padding: 'var(--spacing-xl)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
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
                    color: 'var(--primary-blue)',
                  }}
                >
                  Morning (8:00 AM - 12:00 PM)
                </Typography>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    8:00 - 9:00 AM
                  </Typography>
                  <Typography>Supervised care & arrival</Typography>
                </Box>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    9:00 - 9:30 AM
                  </Typography>
                  <Typography>Greetings & morning circle</Typography>
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
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    11:00 - 12:00 PM
                  </Typography>
                  <Typography>Deep dives & project work</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 700,
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--primary-blue)',
                  }}
                >
                  Afternoon (12:00 PM - 4:00 PM)
                </Typography>
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
                    1:00 - 2:00 PM
                  </Typography>
                  <Typography>Electives & enrichment activities</Typography>
                </Box>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    2:00 - 3:00 PM
                  </Typography>
                  <Typography>Extended project time</Typography>
                </Box>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    3:00 - 3:30 PM
                  </Typography>
                  <Typography>Reflection & wrap-up</Typography>
                </Box>
                <Box component="div" sx={{ marginBottom: 'var(--spacing-md)' }}>
                  <Typography
                    sx={{ fontWeight: 600, color: 'var(--text-dark)' }}
                  >
                    3:30 - 4:00 PM
                  </Typography>
                  <Typography>Dismissal & aftercare</Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
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
            Full-Time Tuition & Payment Options
          </Typography>
          <Grid container spacing={4}>
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
                <CardContent sx={{ padding: 0, textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: 'var(--text-2xl)',
                      fontWeight: 700,
                      marginBottom: 'var(--spacing-lg)',
                      color: 'var(--primary-blue)',
                    }}
                  >
                    ☀️ Full-time Learning Day
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
                      $9,900 per learning year
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
                      $1,100 paid monthly
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
                      $850 per month
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
                  border: '2px solid var(--primary-green)',
                  background:
                    'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
                }}
              >
                <CardContent sx={{ padding: 0 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: 'var(--text-xl)',
                      fontWeight: 700,
                      marginBottom: 'var(--spacing-lg)',
                      color: 'var(--primary-green)',
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
                      Before and after care included
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
                      Extended enrichment activities
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
            background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
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
            Ready to Give Your Child the Complete Montessori Experience?
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
            Join our full-time program and watch your child thrive with extended
            learning time, enriched curriculum, and comprehensive care in our
            nurturing Montessori environment.
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
              to={getNextActiveEnrollmentPeriod().href}
              target="_blank"
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
            background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
            border: '2px solid var(--primary-green)',
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
            Looking for a Different Schedule?
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
            Our part-time program offers the perfect balance of quality
            Montessori education and family time. Perfect for families who want
            focused learning during core hours while preserving precious
            afternoon time.
          </Typography>
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
            Learn About Part-Time Program
          </Button>
        </Box>
      </CanvasView>
    </>
  );
};
