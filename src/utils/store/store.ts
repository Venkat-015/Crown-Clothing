import {compose,createStore,applyMiddleware,Middleware} from 'redux';
import {persistStore,persistReducer,PersistConfig}from 'redux-persist';
import { rootReducer } from './root-reducer';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from './root-saga';
export type RootState=ReturnType<typeof rootReducer>
declare global{
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:typeof compose
    }
}
type ExtendedPersistCongig=PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
}
const persistConfig:ExtendedPersistCongig={
    key:'root',
    storage:storage,
    whitelist:['cart'],
};
const sagaMiddleWare=createSagaMiddleWare()
const persistedReducer=persistReducer(persistConfig,rootReducer);

const middleWares=[
    process.env.NODE_ENV === 'development'&& logger,
    sagaMiddleWare,
].filter((middleware):middleware is Middleware=>Boolean(middleware));
const composeEnhancer=
(process.env.NODE_ENV !== 'production' && 
window && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
||compose;
const composedEnhancers=composeEnhancer(applyMiddleware(...middleWares));

export const store=createStore(persistedReducer,undefined,composedEnhancers);
sagaMiddleWare.run(rootSaga);
export const persistor=persistStore(store);