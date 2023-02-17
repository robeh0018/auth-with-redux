import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector}  from "react-redux";

import { AuthRouter } from '../auth/router/AuthRouter';
import { CheckingView } from '../components/CheckingView';


export const AppRouter = () => {

    const { status } = useSelector( state => state.auth);

    if (status === 'checking') return (<CheckingView/>);

    return (
        <Routes>

            <Route path='auth/*' element={ <AuthRouter /> }/>

            <Route path='/*' element={ <Navigate to='auth/login' /> } />

        </Routes>
    )
}