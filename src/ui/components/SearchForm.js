//Core 
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//Parts
import Box from "@mui/material/Box";
import { Grid } from '@mui/material';
import { DataPicker } from '../components/_Form/DataPicker';
import { TextField } from '../components/_Form/TextField';
import { Button } from '../components/Button';
import { Select } from '../components/_Form/Select';
//Engine 
import { getDestinationsAsync } from '../../engine/core/destination/saga/asyncActions';
import selectorsDestination from '../../engine/core/destination/selectors';
import { getHotelsAsync } from '../../engine/core/hotels/saga/asyncActions';


export function SearchForm() {
    const dispatch = useDispatch(); 
    const destinationItems = useSelector(selectorsDestination.items);
    const destinationLoading = useSelector(selectorsDestination.loading);
    const onSubmit = (values) => {
        dispatch(getHotelsAsync(values));
    }
    useEffect(() => {
        dispatch(getDestinationsAsync());
    }, [dispatch]);
    return (
        <div> 
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => {
                    return (
                        <Box component="form" sx={{ margin: '30px 0' }} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Field disabled={destinationLoading} name="destination" label="Destination" options={destinationItems} component={Select}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <Field name="check_in" label="Check in" component={DataPicker}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <Field name="check_out" label="Check out" component={DataPicker}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <Field name="children" label="Children" component={TextField}/>
                                </Grid>
                                <Grid item xs={1}>
                                    <Button type="submit">Send</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                }}
            />
        </div>
    )
}