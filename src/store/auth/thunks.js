import { checkingCredentials, login, logout } from './authSlice.js';
import { signInWithGoogle } from '../../firebase/providers.js';


export const startSignInWithGoogle = ({ email, password }) => {
    return async ( dispatch ) => {

        dispatch( await checkingCredentials() );

        const { success, uid, displayName, email, errorMessage} = await signInWithGoogle();

        if (!success) return dispatch( await logout({ errorMessage }) );

        dispatch( await login({ uid, displayName, email }));
    };
};




