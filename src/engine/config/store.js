//Core
import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { createReduxHistoryContext } from "redux-first-history";
//Engine
import destination from "../core/destination/slice";
import rootSaga from "./rootSaga";
import hotels from "../core/hotels/slice";

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
} = createReduxHistoryContext({
    history: createBrowserHistory()
})

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        router: routerReducer,
        hotels, 
        destination,
    },
    middleware: () => [sagaMiddleware, routerMiddleware]
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export default store; 