//Core 
import { useSelector } from "react-redux";
//Engine 
import selectorsHotels from "../../engine/core/hotels/selectors";
//Parts
import Box from "@mui/material/Box"

export function Hotels() {
    const hotelsItems = useSelector(selectorsHotels.items);
    return (
        <Box component='div'
             sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: '30px',
                gap: '30px'
             }}>
            {hotelsItems.map((item) =>
                <Box
                    key={item.id}
                    sx={{ width: '350px', border: '1px solid black', textAlign: 'center'}}
                >
                    <Box component={'h1'} sx={{ fontSize: '24px' }}>
                        <Box component={'span'}> {item.name} </Box>
                    </Box>
                    <Box component={'p'}>
                        Address: <Box component={'span'} sx={{ fontWeight: "bold"}}> {item.address}</Box>
                    </Box>
                    <Box component={'p'}>
                        City: <Box component={'span'} sx={{ fontWeight: "bold" }}> {item.city}</Box>
                    </Box>
                    <Box component={'p'}>
                        Hotel rating: <Box component={'span'} sx={{ fontWeight: "bold"}}>{item.hotel_rating}</Box>
                    </Box>
                </Box>
            )}
        </Box>
    )
}