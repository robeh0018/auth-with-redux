import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { FirebaseAuth } from './firebase.config.js';


const googleProvider = new GoogleAuthProvider( FirebaseAuth );

export const signInWithGoogle = async () => {
    try {
        const resp = await signInWithPopup( FirebaseAuth, googleProvider );
        const { displayName, uid, email } = resp.user;

        return {
            success: true,
            displayName, uid, email,
        };

    } catch (e) {

        return {
            success: false,
            errorMessage: e.message,
        };

    }
};
