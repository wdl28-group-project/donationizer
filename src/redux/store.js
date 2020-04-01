import {createStore,combineReducers,applyMiddleware} from 'redux';
import donationReducer from './reducers/donationReducer';
import promise from 'redux-promise-middleware';

const rootReducer = combineReducers({
    donation: donationReducer
});
export default createStore(
    rootReducer,
    applyMiddleware(promise)
)