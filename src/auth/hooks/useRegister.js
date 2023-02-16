import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm.js';
import { startRegisterUser } from '../../store/auth/thunks.js';


export const useRegister = ( initialState= {}, validationForms= {} ) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [ formSubmitted, setFormSubmitted ] =  useState( false );

  //  const { status } = useSelector( state => state.auth );


    const { displayName, password, email,  onInputChange, formState,
        isFormValid, emailValid, passwordValid, displayNameValid,
    } = useForm( initialState, validationForms );


    const onSubmit = ( event ) => {
        event.preventDefault();

        setFormSubmitted(true);

        if ( !isFormValid ) return;

        dispatch( startRegisterUser({ email, password, displayName }) );

    };

    const goToLogin = () => {
        navigate('/auth/login');
    };


    return {
        formState,
        formSubmitted,
        onSubmit, goToLogin, onInputChange,
        displayName, password, email,
        isFormValid, emailValid, passwordValid, displayNameValid,
    };
};
