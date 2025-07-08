
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  IconButton,
} from '@mui/material';
import { Apple, Google, Facebook } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const OnboardingPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        py: 4,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          zIndex: 1000,
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}
              >
                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  O
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: 'white',
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/')}
              >
                Oxford Global
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                onClick={() => navigate('/')}
                sx={{ color: 'white' }}
              >
                Back to Home
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 120px)' }}>
          <Box sx={{ display: 'flex', maxWidth: 1000, width: '100%', borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
            {/* Left side - Image/Branding */}
            <Box
              sx={{
                flex: 1,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9)), url("/lovable-uploads/3687a8c1-9cb2-42f1-bdea-de50ec10c79b.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                p: 4,
              }}
            >
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}>
                Welcome to Oxford Global
              </Typography>
              <Typography variant="h6" sx={{ textAlign: 'center', opacity: 0.9 }}>
                Premium chauffeur services for discerning clients
              </Typography>
            </Box>

            {/* Right side - Login Form */}
            <Paper
              sx={{
                flex: 1,
                p: 6,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '600px',
              }}
            >
              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                  Log in to continue
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 1 }}>
                  You'll be able to easily book and manage rides,
                </Typography>
                <Typography color="text.secondary">
                  and get ride status updates on the day of travel.
                </Typography>
              </Box>

              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log('Login values:', values);
                  // Handle login logic here
                  setTimeout(() => {
                    setSubmitting(false);
                    navigate('/'); // Redirect to home after login
                  }, 1000);
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                  <Form>
                    <Box sx={{ mb: 3 }}>
                      <TextField
                        fullWidth
                        name="email"
                        placeholder="Email*"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#f8f9fa',
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <TextField
                        fullWidth
                        name="password"
                        placeholder="Password*"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            backgroundColor: '#f8f9fa',
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Box>

                    <Box sx={{ mb: 3, textAlign: 'left' }}>
                      <Button
                        variant="text"
                        sx={{ p: 0, textTransform: 'none', color: 'text.secondary' }}
                      >
                        Forget password?
                      </Button>
                    </Box>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={isSubmitting}
                      sx={{
                        py: 2,
                        mb: 3,
                        backgroundColor: '#000',
                        color: 'white',
                        borderRadius: 2,
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': {
                          backgroundColor: '#333',
                        },
                      }}
                    >
                      Log in
                    </Button>

                    <Box sx={{ my: 3 }}>
                      <Divider sx={{ mb: 3 }}>
                        <Typography color="text.secondary" sx={{ px: 2 }}>
                          or
                        </Typography>
                      </Divider>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button
                          fullWidth
                          variant="outlined"
                          startIcon={<Apple />}
                          sx={{
                            py: 1.5,
                            borderRadius: 2,
                            borderColor: '#ddd',
                            color: '#000',
                            textTransform: 'none',
                            '&:hover': {
                              borderColor: '#bbb',
                              backgroundColor: '#f8f9fa',
                            },
                          }}
                        >
                          Continue with Apple
                        </Button>

                        <Button
                          fullWidth
                          variant="outlined"
                          startIcon={<Google />}
                          sx={{
                            py: 1.5,
                            borderRadius: 2,
                            borderColor: '#ddd',
                            color: '#000',
                            textTransform: 'none',
                            '&:hover': {
                              borderColor: '#bbb',
                              backgroundColor: '#f8f9fa',
                            },
                          }}
                        >
                          Continue with Google
                        </Button>

                        <Button
                          fullWidth
                          variant="outlined"
                          startIcon={<Facebook />}
                          sx={{
                            py: 1.5,
                            borderRadius: 2,
                            borderColor: '#ddd',
                            color: '#000',
                            textTransform: 'none',
                            '&:hover': {
                              borderColor: '#bbb',
                              backgroundColor: '#f8f9fa',
                            },
                          }}
                        >
                          Continue with Facebook
                        </Button>
                      </Box>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OnboardingPage;
