import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  Tab,
  Tabs,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Search, CalendarToday, AccessTime, LocationOn } from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  from: Yup.string().required('From location is required'),
  to: Yup.string().required('To location is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
});

const HeroSection = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSubmit = (values: any) => {
    console.log('Search submitted:', values);
    alert('Search functionality would be implemented here!');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(/lovable-uploads/3687a8c1-9cb2-42f1-bdea-de50ec10c79b.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ color: 'white', textAlign: isMobile ? 'center' : 'left' }}>
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  fontWeight: 700,
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                Premium 
                <br />
                <span style={{ 
                  background: 'linear-gradient(45deg, #f093fb 30%, #f5576c 70%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Transportation
                </span>
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.95,
                  lineHeight: 1.6,
                  fontSize: '1.25rem',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                Experience luxury and comfort with our professional chauffeur services. 
                Book your premium ride today.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  maxWidth: 450,
                  width: '100%',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: 3,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    sx={{
                      mb: 3,
                      '& .MuiTab-root': {
                        minHeight: 48,
                        borderRadius: 2,
                        mx: 0.5,
                        '&.Mui-selected': {
                          backgroundColor: 'primary.main',
                          color: 'white',
                        },
                      },
                    }}
                  >
                    <Tab label="One way" />
                    <Tab label="By the hour" />
                  </Tabs>

                  <Formik
                    initialValues={{
                      from: '',
                      to: '',
                      date: '',
                      time: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <Box sx={{ mb: 2 }}>
                          <Field
                            as={TextField}
                            fullWidth
                            name="from"
                            placeholder="Address, airport, hotel..."
                            InputProps={{
                              startAdornment: <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />,
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: '#f5f5f5',
                                borderRadius: 2,
                              },
                            }}
                            error={touched.from && errors.from}
                            helperText={touched.from && errors.from}
                          />
                          <Typography variant="caption" sx={{ color: 'text.secondary', ml: 1 }}>
                            From
                          </Typography>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                          <Field
                            as={TextField}
                            fullWidth
                            name="to"
                            placeholder="Address, airport, hotel..."
                            InputProps={{
                              startAdornment: <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />,
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                backgroundColor: '#f5f5f5',
                                borderRadius: 2,
                              },
                            }}
                            error={touched.to && errors.to}
                            helperText={touched.to && errors.to}
                          />
                          <Typography variant="caption" sx={{ color: 'text.secondary', ml: 1 }}>
                            To
                          </Typography>
                        </Box>

                        <Grid container spacing={2} sx={{ mb: 3 }}>
                          <Grid item xs={6}>
                            <Field
                              as={TextField}
                              fullWidth
                              name="date"
                              type="date"
                              InputProps={{
                                startAdornment: <CalendarToday sx={{ mr: 1, color: 'text.secondary' }} />,
                              }}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  backgroundColor: '#f5f5f5',
                                  borderRadius: 2,
                                },
                              }}
                              error={touched.date && errors.date}
                              helperText={touched.date && errors.date}
                            />
                            <Typography variant="caption" sx={{ color: 'text.secondary', ml: 1 }}>
                              Date
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Field
                              as={TextField}
                              fullWidth
                              name="time"
                              type="time"
                              InputProps={{
                                startAdornment: <AccessTime sx={{ mr: 1, color: 'text.secondary' }} />,
                              }}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  backgroundColor: '#f5f5f5',
                                  borderRadius: 2,
                                },
                              }}
                              error={touched.time && errors.time}
                              helperText={touched.time && errors.time}
                            />
                            <Typography variant="caption" sx={{ color: 'text.secondary', ml: 1 }}>
                              Time
                            </Typography>
                          </Grid>
                        </Grid>

                        <Button
                          type="submit"
                          variant="contained"
                          fullWidth
                          size="large"
                          endIcon={<Search />}
                          sx={{
                            background: 'linear-gradient(45deg, #2c2c2c 30%, #1a1a1a 90%)',
                            color: 'white',
                            py: 1.5,
                            borderRadius: 2,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            '&:hover': {
                              background: 'linear-gradient(45deg, #1a1a1a 30%, #000000 90%)',
                              transform: 'translateY(-1px)',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Search
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box sx={{ mt: 8, textAlign: 'center', color: 'white' }}>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 600 }}>
            Be unique with
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 4 }}>
            Oxford Global
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', opacity: 0.9 }}>
            Our purpose goes beyond transportation. We craft experiences that evoke emotion, build
            lasting memories, and connect people to what matters most.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
