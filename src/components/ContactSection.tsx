
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import { Send, Email, Phone, LocationOn } from '@mui/icons-material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string()
    .min(5, 'Subject must be at least 5 characters')
    .required('Subject is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const ContactSection = () => {
  const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    console.log('Form submitted:', values);
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email Us',
      value: 'hello@yourbrand.com',
      description: 'Send us an email anytime',
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm',
    },
    {
      icon: <LocationOn />,
      title: 'Visit Us',
      value: '123 Business St, Suite 100',
      description: 'New York, NY 10001',
    },
  ];

  return (
    <Box sx={{ py: 10, background: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}
          >
            Ready to start your project? Contact us today and let's discuss how we can help you achieve your goals.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 4, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Send us a message
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
                        <Grid item xs={12} sm={6}>
                          <Field name="name">
                            {({ field }: any) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Full Name"
                                error={touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                                sx={{ mb: 2 }}
                              />
                            )}
                          </Field>
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                          <Field name="email">
                            {({ field }: any) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Email Address"
                                type="email"
                                error={touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ mb: 2 }}
                              />
                            )}
                          </Field>
                        </Grid>
                        
                        <Grid item xs={12}>
                          <Field name="subject">
                            {({ field }: any) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Subject"
                                error={touched.subject && !!errors.subject}
                                helperText={touched.subject && errors.subject}
                                sx={{ mb: 2 }}
                              />
                            )}
                          </Field>
                        </Grid>
                        
                        <Grid item xs={12}>
                          <Field name="message">
                            {({ field }: any) => (
                              <TextField
                                {...field}
                                fullWidth
                                label="Message"
                                multiline
                                rows={4}
                                error={touched.message && !!errors.message}
                                helperText={touched.message && errors.message}
                                sx={{ mb: 3 }}
                              />
                            )}
                          </Field>
                        </Grid>
                        
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            endIcon={<Send />}
                            disabled={isSubmitting}
                            sx={{
                              background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                              px: 4,
                              py: 1.5,
                              '&:hover': {
                                background: 'linear-gradient(45deg, #5a6fd8 30%, #6a4190 90%)',
                                transform: 'translateY(-2px)',
                              },
                              transition: 'all 0.3s ease',
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

          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  sx={{
                    borderRadius: 3,
                    border: '1px solid #f0f0f0',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        color: 'white',
                      }}
                    >
                      {info.icon}
                    </Box>
                    
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {info.title}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ mb: 1, fontWeight: 500 }}>
                      {info.value}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                      {info.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
