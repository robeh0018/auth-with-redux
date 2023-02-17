import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector}  from "react-redux";

import { AuthRouter } from '../auth/router/AuthRouter';
import { CheckingComponent } from '../components/CheckingComponent.jsx';


export const AppRouter = () => {

    const { status } = useSelector( state => state.auth);

    if (status === 'checking') return (<CheckingComponent/>);

    return (
        <Routes>

            <Route path='auth/*' element={ <AuthRouter /> }/>

            <Route path='/*' element={ <Navigate to='auth/login' /> } />

        </Routes>
    )
}