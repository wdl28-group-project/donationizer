import {createStore,combineReducers,applyMiddleware} from 'redux';
import donationReducer from './reducers/donationReducer';
import authReducer from './reducers/authReducer';
import promise from 'redux-promise-middleware';

const rootReducer = combineReducers({
    donation: donationReducer,
    authReducer
});
export default createStore(
    rootReducer,
    applyMiddleware(promise)
)