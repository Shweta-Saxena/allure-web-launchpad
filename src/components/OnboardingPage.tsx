
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
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          background: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
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
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Button sx={{ color: 'white', textTransform: 'none' }}>Services</Button>
              <Button sx={{ color: 'white', textTransform: 'none' }}>About Us</Button>
              <Button sx={{ color: 'white', textTransform: 'none' }}>For chauffeurs</Button>
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  borderRadius: 2,
                  px: 3,
                  textTransform: 'none',
                }}
              >
                Book
              </Button>
              <Button
                variant="contained"
                sx={{
                  background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
                  borderRadius: 2,
                  px: 3,
                  textTransform: 'none',
                }}
              >
                Sign Up
              </Button>
              <Box
                sx={{
                  width: 24,
                  height: 16,
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 60 30\'%3E%3Cclippath id=\'t\'%3E%3Cpath d=\'m30,15h30v15zv15h-30zh-30v-15zv-15h30z\'/%3E%3C/clippath%3E%3Cpath d=\'m0,0v30h60v-30z\' fill=\'%23012169\'/%3E%3Cpath d=\'m0,0 60,30m0-30-60,30\' stroke=\'%23fff\' stroke-width=\'6\'/%3E%3Cpath d=\'m0,0 60,30m0-30-60,30\' clip-path=\'url(%23t)\' stroke=\'%23c8102e\' stroke-width=\'4\'/%3E%3Cpath d=\'m30,0v30m-30-15h60\' stroke=\'%23fff\' stroke-width=\'10\'/%3E%3Cpath d=\'m30,0v30m-30-15h60\' stroke=\'%23c8102e\' stroke-width=\'6\'/%3E%3C/svg%3E")',
                  backgroundSize: 'cover',
                  borderRadius: 0.5,
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', py: 8 }}>
        <Container maxWidth="sm">
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              sx={{
                p: 6,
                borderRadius: 3,
                maxWidth: 480,
                width: '100%',
                textAlign: 'center',
              }}
            >
              <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
                Log in to continue
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1 }}>
                You'll be able to easily book and manage rides,
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4 }}>
                and get ride status updates on the day of travel.
              </Typography>

              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log('Login values:', values);
                  setTimeout(() => {
                    setSubmitting(false);
                    navigate('/');
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
        </Container>
      </Box>
    </Box>
  );
};

export default OnboardingPage;
