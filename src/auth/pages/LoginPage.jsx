import { useNavigate } from 'react-router-dom';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { Google } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm.js';
import { startSignInWithGoogle } from '../../store/auth/thunks.js';


const initialState = {
    email: '',
    password: '',
};

export const LoginPage = () => {

    const navigate = useNavigate();

    const { formState, onInputChange, email, password } = useForm( initialState );

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        console.log(formState)
    };

    const onGoogleSignIn = () => {

        dispatch( startSignInWithGoogle({ email, password }) )

    };

    const goToRegister = () => {
        navigate('/auth/register');
    };

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
                                    variant='contained'
                                    fullWidth
                                    type='submit'
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