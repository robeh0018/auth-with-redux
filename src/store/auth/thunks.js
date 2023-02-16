import { checkingCredentials, login, logout } from './authSlice.js';
import {
    loginWithEmailAndPass,
    registerUserWithEmailPasswordAndDisplayName,
    signInWithGoogle
} from '../../firebase/providers.js';



export const startSignInWithGoogle = ({ email, password }) => {
    return async ( dispatch ) => {

        dispatch( await checkingCredentials() );

        const { success, uid, displayName, email, errorMessage} = await signInWithGoogle();

        if (!success) return dispatch( await logout({ errorMessage }) );

        dispatch( await login({ uid, displayName, email }));
    };
};


export const startRegisterUser = ({ email, password, displayName }) => {
    return async (dispatch) => {

        await dispatch( checkingCredentials() );

        const { success, uid,  errorMessage } = await registerUserWithEmailPasswordAndDisplayName({
            email,
            password,
            displayName,
        }
        );

        if (!success) return await dispatch(logout({ errorMessage }));

        await dispatch(login({email, uid, displayName }));

    };
};


export const startLoginWithEmailAndPass = ({ email, password }) => {
    return  async (dispatch) => {

        await dispatch( checkingCredentials() );

        const { uid ,displayName, success, errorMessage } = await loginWithEmailAndPass({ email, password });

        if ( !success ) return await dispatch( logout({ errorMessage }) );

        await dispatch( login( { uid ,displayName, email }) );

    };
};
