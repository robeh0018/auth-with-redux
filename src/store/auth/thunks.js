import { checkingCredentials, login, logout } from './authSlice.js';
import { registerUserWithEmailPasswordAndDisplayName, signInWithGoogle } from '../../firebase/providers.js';


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




