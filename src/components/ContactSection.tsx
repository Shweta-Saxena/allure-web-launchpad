
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from '@mui/material';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  phone: Yup.string()
    .min(10, 'Too Short!')
    .required('Required'),
  subject: Yup.string()
    .min(5, 'Too Short!')
    .required('Required'),
  message: Yup.string()
    .min(10, 'Too Short!')
    .required('Required'),
});

const ContactSection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
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
            Get In Touch
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Ready to experience premium chauffeur services? Contact us today for your transportation needs.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 4, borderRadius: 3 }}>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  console.log('Form values:', values);
                  setTimeout(() => {
                    setSubmitting(false);
                    resetForm();
                  }, 400);
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                  <Form>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name="name"
                          label="Full Name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          name="email"
                          label="Email Address"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="phone"
                          label="Phone Number"
                          value={values.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.phone && Boolean(errors.phone)}
                          helperText={touched.phone && errors.phone}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="subject"
                          label="Subject"
                          value={values.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.subject && Boolean(errors.subject)}
                          helperText={touched.subject && errors.subject}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="message"
                          label="Message"
                          multiline
                          rows={4}
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.message && Boolean(errors.message)}
                          helperText={touched.message && errors.message}
                        />
                      </Grid>

                      <Grid item xs={12}>
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
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
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

export default ContactSection;
