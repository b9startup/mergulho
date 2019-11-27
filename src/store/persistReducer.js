import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'b9startup',
            storage,
            whitelist: ['auth'],
        },
        reducers
    );
    return persistedReducer;
};
