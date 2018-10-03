import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { error, loading } from '../components/app/reducers';

const rootReducer = combineReducers({
  error,
  loading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
    )
  )
);

export default store;