//Core 
import { delay, put, call } from "redux-saga/effects";
import { push } from "redux-first-history";
import { routes } from "../../../../config/routers";
//Parts 
import { setItems, setLoading } from "../../slice";
import api from "../../../../config/axios";

export function* callGetHotelsWorker(action) {
    const { payload } = action;
    yield put(setLoading(true));
    const response = yield call(api.getHotels, { payload });
    if (response.status === 200) {
        yield put(setItems(response.data));
        console.log(payload);
    }
    yield delay(2000); 
    yield put(setLoading(false));
    yield put(push(routes.hotels));
    
}