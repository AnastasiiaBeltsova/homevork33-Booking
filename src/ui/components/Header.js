//Parts
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'
import { Button } from './Button';
//Engine 
import { routes } from '../../engine/config/routers';

const Wrapper = styled(Box) ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 25px',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.4)'
})

export function Header() {
    return (
        <Wrapper component="header">
            <Box component={'div'}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <Box component={'div'}
                    sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                    }}/>
            <Box component='h6' sx={{ color: 'primary.main', margin: '0', fontSize: '40px', paddingLeft: '10px'}}> Booking</Box>
            </Box>
            
            <Stack spacing={2} direction="row">
                <Button to={routes.home}>Home</Button>
                <Button to={routes.about}>About</Button>
            </Stack>
        </Wrapper>
    )
}