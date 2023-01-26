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
    padding: '20px 25px'
})

export function Header() {
    return (
        <Wrapper component="header">
            Booking
            <Stack spacing={2} direction="row">
                <Button to={routes.home}>Home</Button>
                <Button to={routes.about}>About</Button>
            </Stack>
        </Wrapper>
    )
}