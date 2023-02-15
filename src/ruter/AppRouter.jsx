import { Route, Routes, Navigate } from 'react-router-dom';

import { AuthRouter } from '../auth/router/AuthRouter';


export const AppRouter = () => {
    return (
        <Routes>

            <Route path='auth/*' element={ <AuthRouter /> }/>

            <Route path='/*' element={ <Navigate to='auth/login' /> } />

        </Routes>
    )
}