import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    status: 'not-authenticated', // authenticated  not-authenticated checking
    uid: '',
    displayName: '',
    email: '',
    errorMessage: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        checkingCredentials: (state) => {
            state.status = 'checking'
            state.uid = null;
            state.displayName = null;
            state.email = null;
            state.errorMessage = null;
        },

        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.errorMessage = null;
        },

        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.displayName = null;
            state.email = null;
            state.errorMessage = payload?.errorMessage;
        },
    },
});

export const { checkingCredentials, login, logout } = authSlice.actions;
