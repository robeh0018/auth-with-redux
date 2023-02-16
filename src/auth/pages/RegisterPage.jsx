import { Button, Grid, TextField } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { AuthLayout } from '../layout/AuthLayout';
import { useRegister } from '../hooks/useRegister.js';


const initialState = {
    displayName: '',
    email: '',
    password: '',
};

const validationForms = {
    displayName: [ (value) => value.length >= 2, 'Name should have 2 or more characters' ],
    email: [ (value) => value.includes('@'), 'Email should have one @' ],
    password: [ (value) => value.length >= 6, 'Password should have 6 or more characters' ],
};

export const RegisterPage = () => {

   const { formState, formSubmitted, onSubmit, goToLogin, onInputChange, displayName, password, email,
       isFormValid, emailValid, passwordValid, displayNameValid, } = useRegister(initialState, validationForms);

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
                                    error={ !!displayNameValid && formSubmitted }
                                    helperText={ displayNameValid }
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
                                    error={ !!emailValid && formSubmitted }
                                    helperText={ emailValid }
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
                                    error={ !!passwordValid && formSubmitted }
                                    helperText={ passwordValid }
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