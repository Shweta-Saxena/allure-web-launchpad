
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { LocationOn, CalendarToday, AccessTime } from '@mui/icons-material';

const BookingSchema = Yup.object().shape({
  from: Yup.string().required('From location is required'),
  to: Yup.string().required('To location is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
});

const HeroSection = () => {
  const [tripType, setTripType] = useState('one-way');

  const handleTripTypeChange = (event: React.MouseEvent<HTMLElement>, newTripType: string) => {
    if (newTripType !== null) {
      setTripType(newTripType);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/lovable-uploads/3687a8c1-9cb2-42f1-bdea-de50ec10c79b.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        pt: 8,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '4rem' },
                lineHeight: 1.2,
              }}
            >
              Premium Chauffeur Services
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontWeight: 300,
                maxWidth: 600,
                lineHeight: 1.6,
              }}
            >
              Experience luxury transportation with our professional chauffeur service. 
              Safe, reliable, and comfortable rides for every occasion.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={5}>
            <Paper
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                color: 'black',
              }}
            >
              <ToggleButtonGroup
                value={tripType}
                exclusive
                onChange={handleTripTypeChange}
                sx={{ mb: 3, width: '100%' }}
              >
                <ToggleButton
                  value="one-way"
                  sx={{
                    flex: 1,
                    color: tripType === 'one-way' ? 'white' : 'black',
                    backgroundColor: tripType === 'one-way' ? 'black' : 'transparent',
                    '&:hover': {
                      backgroundColor: tripType === 'one-way' ? 'black' : 'rgba(0,0,0,0.1)',
                    },
                    borderRadius: '8px 0 0 8px',
                  }}
                >
                  One way
                </ToggleButton>
                <ToggleButton
                  value="by-hour"
                  sx={{
                    flex: 1,
                    color: tripType === 'by-hour' ? 'white' : 'black',
                    backgroundColor: tripType === 'by-hour' ? 'black' : 'transparent',
                    '&:hover': {
                      backgroundColor: tripType === 'by-hour' ? 'black' : 'rgba(0,0,0,0.1)',
                    },
                    borderRadius: '0 8px 8px 0',
                  }}
                >
                  By the hour
                </ToggleButton>
              </ToggleButtonGroup>

              <Formik
                initialValues={{
                  from: '',
                  to: '',
                  date: '',
                  time: '',
                }}
                validationSchema={BookingSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log('Booking values:', values);
                  setTimeout(() => {
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                  <Form>
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        fullWidth
                        name="from"
                        placeholder="Address, airport, hotel..."
                        value={values.from}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.from && Boolean(errors.from)}
                        helperText={touched.from && errors.from}
                        InputProps={{
                          startAdornment: <LocationOn sx={{ mr: 1, color: 'gray' }} />,
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#f8f9fa',
                            borderRadius: 2,
                          },
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, ml: 1 }}>
                        From
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <TextField
                        fullWidth
                        name="to"
                        placeholder="Address, airport, hotel..."
                        value={values.to}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.to && Boolean(errors.to)}
                        helperText={touched.to && errors.to}
                        InputProps={{
                          startAdornment: <LocationOn sx={{ mr: 1, color: 'gray' }} />,
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#f8f9fa',
                            borderRadius: 2,
                          },
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, ml: 1 }}>
                        To
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <TextField
                        fullWidth
                        name="date"
                        type="date"
                        value={values.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.date && Boolean(errors.date)}
                        helperText={touched.date && errors.date}
                        InputProps={{
                          startAdornment: <CalendarToday sx={{ mr: 1, color: 'gray' }} />,
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#f8f9fa',
                            borderRadius: 2,
                          },
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, ml: 1 }}>
                        Date
                      </Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                      <TextField
                        fullWidth
                        name="time"
                        type="time"
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.time && Boolean(errors.time)}
                        helperText={touched.time && errors.time}
                        InputProps={{
                          startAdornment: <AccessTime sx={{ mr: 1, color: 'gray' }} />,
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#f8f9fa',
                            borderRadius: 2,
                          },
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, ml: 1 }}>
                        Time
                      </Typography>
                    </Box>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={isSubmitting}
                      sx={{
                        py: 2,
                        fontSize: '1.1rem',
                        backgroundColor: '#000',
                        color: 'white',
                        borderRadius: 2,
                        textTransform: 'none',
                        '&:hover': {
                          backgroundColor: '#333',
                        },
                      }}
                    >
                      Search
                    </Button>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
