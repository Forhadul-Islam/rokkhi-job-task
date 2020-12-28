import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';


const middleWire = [ReduxThunk];
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWire))
)


export default store;