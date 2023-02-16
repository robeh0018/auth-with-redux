import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

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


export const registerUserWithEmailPasswordAndDisplayName = async ({ email, password, displayName }) => {

    try {

        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password  );
        const { uid } = resp.user;

        await updateProfile( FirebaseAuth.currentUser, { displayName } );

        return {
          success: true,
          uid, email, password, displayName,
          errorMessage: null,
        };

    } catch (e) {

        return {
            success: false,
            errorMessage: e.message,
        };

    }
};
