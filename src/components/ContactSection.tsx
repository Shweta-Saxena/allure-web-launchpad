
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from '@mui/material';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  pickup: Yup.string().required('Pickup location is required'),
  dropoff: Yup.string().required('Drop-off location is required'),
  date: Yup.string().required('Date is required'),
  time: Yup.string().required('Time is required'),
  message: Yup.string(),
});

const ContactSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Book Your Ride
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Experience luxury transportation with our premium chauffeur service
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Quick Booking
              </Typography>
              
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  pickup: '',
                  dropoff: '',
                  date: '',
                  time: '',
                  message: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, handleChange, handleBlur, values }) => (
                  <Form>
                    <Grid container spacing={3}>
                      <Grid xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name="name"
                          label="Full Name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant="outlined"
                        />
                        <ErrorMessage name="name" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
                      </Grid>
                      
                      <Grid xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name="email"
                          label="Email Address"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant="outlined"
                        />
                        <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
                      </Grid>
                      
                      <Grid xs={12}>
                        <TextField
                          fullWidth
                          name="phone"
                          label="Phone Number"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant="outlined"
                        />
                        <ErrorMessage name="phone" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
                      </Grid>
                      
                      <Grid xs={12}>
                        <TextField
                          fullWidth
                          name="pickup"
                          label="Pickup Location"
                          value={values.pickup}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant="outlined"
                        />
                        <ErrorMessage name="pickup" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
                      </Grid>
                      
                      <Grid xs={12}>
                        <TextField
                          fullWidth
                          name="dropoff"
                          label="Drop-off Location"
                          value={values.dropoff}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          variant="outlined"
                        />
                        <ErrorMessage name="dropoff" component="div" style={{ color: 'red', fontSize: '0.8rem' }} />
                      </Grid>

                      <Grid xs={12}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          disabled={isSubmitting}
                          sx={{
                            py: 2,
                            background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
                            },
                          }}
                        >
                          Book Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Grid>

          <Grid xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Why Choose Oxford Global?
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                  Professional Chauffeurs
                </Typography>
                <Typography color="text.secondary">
                  Experienced, licensed, and vetted drivers ensuring your safety and comfort.
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                  Luxury Fleet
                </Typography>
                <Typography color="text.secondary">
                  Premium vehicles maintained to the highest standards for your journey.
                </Typography>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                  24/7 Service
                </Typography>
                <Typography color="text.secondary">
                  Available round the clock for all your transportation needs.
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 500 }}>
                  Competitive Rates
                </Typography>
                <Typography color="text.secondary">
                  Transparent pricing with no hidden fees, premium service at fair rates.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
