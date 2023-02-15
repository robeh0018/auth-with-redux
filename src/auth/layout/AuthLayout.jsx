import { Grid, Typography } from '@mui/material';


export const AuthLayout = ({ children , text = '' }) => {
    return (
        <>
            <Grid container
                  maxWidth="xl"
                  spacing={0}
                  direction='column'
                  justifyContent='center'
                  alignItems='center'
                  sx={{minHeight: '100vh' ,backgroundColor: 'primary.main'}}
            >
                <Grid item
                      xl={3} sx={{mb: 3}}
                >
                    <Typography className='text-shadow' variant='h4' color='white'>{ text }</Typography>
                </Grid>

                { children }

            </Grid>
        </>
    )
}