import { CircularProgress, Grid} from '@mui/material';


export const CheckingComponent = () => {

    return (
        <>
            <Grid container
                justifyContent='center'
                alignItems='center'
                direction='column'
                sx={ { backgroundColor: 'primary.main', height: '100vh',} }
            >
                <Grid item >
                    <CircularProgress color="error" />
                </Grid>

            </Grid>
        </>
    )
}