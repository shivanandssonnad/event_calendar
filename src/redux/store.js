import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import eventCalendarReducer from './reducer';

function getComposeEnhancer() {
    if (
      process.env.NODE_ENV === 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) {
      return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    return compose;
}

const composeEnhancer = getComposeEnhancer();

function configureStore(initialState) {
    const store = createStore(combineReducers({
        event_calendar: eventCalendarReducer,
    }), initialState, composeEnhancer(applyMiddleware(thunk)))
    return store
}

export default configureStore;
