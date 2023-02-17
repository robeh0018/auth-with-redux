import { Grid, Typography, TextField, Button, Alert } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import { AuthLayout } from '../layout/AuthLayout';
import { useLogin } from '../hooks/useLogin.js';


const initialState = {
    email: '',
    password: '',
};

export const LoginPage = () => {

    const { errorMessage } = useSelector( state => state.auth );

    const { formState, goToRegister , onGoogleSignIn, onSubmit,  onInputChange, email, password } = useLogin( initialState );

    return (
        <>
            <AuthLayout text= 'Login'>

                <form onSubmit={ onSubmit }>
                    <Grid container
                          spacing={1}
                          sx={{backgroundColor: 'white', width: {sm: 480}}}
                          borderRadius={3}
                          border='solid'
                          borderColor='secondary.main'
                          className='box-shadow'
                    >

                        {/* TextFields for email and password */}
                        <Grid container>
                            <Grid item
                                  xs={12} sx={{mt: 2, ml: 2, mr: 2}}
                            >
                                <TextField
                                    label='Email'
                                    type='email'
                                    placeholder='correo@gmail.com'
                                    fullWidth
                                    name='email'
                                    value={ email }
                                    onChange={ onInputChange }
                                />
                            </Grid>

                            <Grid item
                                xs={12}
                                sx={{mt: 2, ml: 2, mr: 2}}
                            >
                                <TextField
                                    label='Password'
                                    type='password'
                                    placeholder='123456'
                                    fullWidth
                                    name='password'
                                    value={ password }
                                    onChange={ onInputChange }
                                />
                            </Grid>
                        </Grid>


                        <Grid container
                              marginX={2}
                        >
                            <Grid item
                                  xs={12}
                                  sx={{mt: 1}}
                                  display={ !!errorMessage ? '' : 'none'}
                            >
                                <Alert severity='error'>
                                    { errorMessage }
                                </Alert>
                            </Grid>
                        </Grid>


                        {/* Buttons for Sign In and Google login */}
                        <Grid container
                          direction='row'
                          spacing={1}
                          sx={{padding: 2}}
                        >
                            <Grid item
                              sm={6}
                              xs={12}
                            >
                                <Button
                                    type='submit'
                                    variant='contained'
                                    fullWidth
                                >
                                    Sign In
                                </Button>
                            </Grid>

                            <Grid item
                                sm={6}
                                xs={12}
                            >
                                <Button
                                  variant='contained'
                                  fullWidth
                                  onClick={ onGoogleSignIn }
                                  >
                                    <Typography fontSize={14}>Sign In with </Typography>
                                    <Google/>
                                    <Typography fontSize={14}>oogle</Typography>
                                </Button>
                            </Grid>
                        </Grid>


                        {/* Button for go to register */}
                        <Grid container>
                            <Grid item
                              xs={12}
                            >
                                <Button
                                    variant='text'
                                    fullWidth
                                    onClick={ goToRegister }
                                >
                                    Do you not have account?
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </form>

            </AuthLayout>
        </>
    )

}