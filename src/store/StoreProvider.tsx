import rootReducer from './reducers/rootReducer';
import { createStore } from 'redux';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { loadState, saveState } from '../localStorage/localStorage';

const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  (window as any)['__REDUX_DEVTOOLS_EXTENSION__'] &&
    (window as any)['__REDUX_DEVTOOLS_EXTENSION__']()
);
store.subscribe(() => {
  saveState(store.getState());
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

const StoreProvider: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default StoreProvider;
