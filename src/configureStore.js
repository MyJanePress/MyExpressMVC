import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import postReducer from './reducer/postReducer'
import loginWatcherSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();
export default function configureStore(initialState) {
  const store = createStore(
    postReducer, 
    initialState,
    applyMiddleware(
      sagaMiddleware
    )
  )
  sagaMiddleware.run(loginWatcherSaga);
  return store;
}
