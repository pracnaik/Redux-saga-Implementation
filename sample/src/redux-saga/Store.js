import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './Reducer/mainReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['Reducer', 'StackNavigator'],
    // blacklist: ['Splash'],
    // stateReconciler: hardSet
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware)
)
console.log('In Store',store.getState().Reducer);

const persistor = persistStore(store);

sagaMiddleware.run(mySaga)

export {store, persistor};