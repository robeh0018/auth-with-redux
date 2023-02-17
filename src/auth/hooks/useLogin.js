import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm.js';
import { useDispatch } from 'react-redux';

import { startLoginWithEmailAndPass, startSignInWithGoogle } from '../../store/auth/thunks.js';


export const useLogin = ( initialState = {} ) => {

    const navigate = useNavigate();

    const { formState, onInputChange, email, password } = useForm( initialState );

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch( startLoginWithEmailAndPass({email , password}) );

    };

    const onGoogleSignIn = () => {

        dispatch( startSignInWithGoogle({ email, password }) )

    };

    const goToRegister = () => {
        navigate('/auth/register');
    };

    return {
        ...formState,
        formState,
        onSubmit,
        onGoogleSignIn,
        goToRegister,
        onInputChange,
    };
};
