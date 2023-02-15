import { AppRouter } from './ruter/AppRouter';
import { AppTheme } from './theme/AppTheme.jsx';


export const App = () => {

    return (
        <>
            <AppTheme>
                <AppRouter />
            </AppTheme>
        </>
    )
}