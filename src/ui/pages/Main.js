//Parts
import Box from "@mui/material/Box";
import { SearchForm } from '../components/SearchForm';



export function Main() {
    return (
        <div> 
            <SearchForm/>
            <Box component='h6' sx={{fontSize: '40px', lineHeight: 1, margin: 0}}>
                Travel With 
                <Box component='span' sx={{ color: 'primary.main' }}> Booking</Box>
            </Box>
        </div>
    
    )
}