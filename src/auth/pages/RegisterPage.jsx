import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Grid, TextField } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm.js';
import { startRegisterUser } from '../../store/auth/thunks.js';


const initialState = {
    displayName: '',
    email: '',
    password: '',
};


export const RegisterPage = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { displayName, password, email,  onInputChange, formState } = useForm( initialState );

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch( startRegisterUser({ email, password, displayName }) );

    };

    const goToLogin = () => {
        navigate('/auth/login');
    };

    return (
        <>
            <AuthLayout text='Register'>
                <form onSubmit={ onSubmit }>
                    <Grid container
                        spacing={1}
                        sx={{width: {sm: 480}, backgroundColor: 'white', pt: 3, pl: 3, pr: 3}}
                        border='solid'
                        borderRadius={3}
                        borderColor='secondary.main'
                        className='box-shadow'
                    >


                        {/*TextFields for email, name, and password*/}
                        <Grid container
                            spacing={1}
                            direction='row'
                        >

                            <Grid item
                                xs={12}
                            >
                                <TextField
                                    label='User Name'
                                    type='text'
                                    placeholder='robeh00'
                                    fullWidth
                                    name='displayName'
                                    value={ displayName }
                                    onChange={ onInputChange }
                                />
                            </Grid>

                            <Grid item
                                  xs={12}
                            >
                                <TextField
                                    label='Email'
                                    type='email'
                                    placeholder='email@gmail.com'
                                    fullWidth
                                    name='email'
                                    value={ email }
                                    onChange={ onInputChange }
                                />
                            </Grid>

                            <Grid item
                                  xs={12}
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


                        {/*Buttons for Register and Back to login*/}
                        <Grid container
                            spacing={1}
                            direction='row'
                        >

                            <Grid item
                                xs={12}
                                sx={{mt: 2}}
                            >
                                <Button
                                    type='submit'
                                    variant='contained'
                                    fullWidth
                                >
                                    Register
                                </Button>
                            </Grid>

                            <Grid item
                                  xs={12}
                            >
                                <Button
                                    variant='text'
                                    fullWidth
                                    onClick={ goToLogin }
                                >
                                    Do yoy have account?
                                </Button>
                            </Grid>

                        </Grid>


                    </Grid>
                </form>
            </AuthLayout>
        </>
    )
}