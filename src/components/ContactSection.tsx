
import React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid2 as Grid,
  Card,
  CardContent,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Send, LocationOn, Phone, Email } from '@mui/icons-material';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactSection = () => {
  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    console.log('Form submitted:', values);
    setTimeout(() => {
      alert('Message sent successfully!');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Get In Touch
        </Typography>

        <Grid container spacing={4}>
          <Grid xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Send us a Message
                </Typography>
                
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched, isSubmitting }) => (
                    <Form>
                      <Grid container spacing={3}>
                        <Grid xs={12} sm={6}>
                          <Field
                            as={TextField}
                            fullWidth
                            name="name"
                            label="Your Name"
                            error={touched.name && errors.name}
                            helperText={touched.name && errors.name}
                          />
                        </Grid>
                        
                        <Grid xs={12} sm={6}>
                          <Field
                            as={TextField}
                            fullWidth
                            name="email"
                            label="Email Address"
                            type="email"
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                          />
                        </Grid>
                        
                        <Grid xs={12}>
                          <Field
                            as={TextField}
                            fullWidth
                            name="subject"
                            label="Subject"
                            error={touched.subject && errors.subject}
                            helperText={touched.subject && errors.subject}
                          />
                        </Grid>
                        
                        <Grid xs={12}>
                          <Field
                            as={TextField}
                            fullWidth
                            name="message"
                            label="Your Message"
                            multiline
                            rows={4}
                            error={touched.message && errors.message}
                            helperText={touched.message && errors.message}
                          />
                        </Grid>
                        
                        <Grid xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={isSubmitting}
                            endIcon={<Send />}
                            sx={{
                              background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                              '&:hover': {
                                background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
                              },
                            }}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={12} md={6}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Contact Information
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOn sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="h6">Our Location</Typography>
                </Box>
                <Typography color="text.secondary">
                  123 Business Street, Suite 100<br />
                  New York, NY 10001
                </Typography>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="h6">Phone</Typography>
                </Box>
                <Typography color="text.secondary">
                  +1 (555) 123-4567
                </Typography>
              </Box>

              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ mr: 2, color: 'primary.main' }} />
                  <Typography variant="h6">Email</Typography>
                </Box>
                <Typography color="text.secondary">
                  contact@yourbrand.com
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
