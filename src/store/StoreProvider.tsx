import rootReducer from './reducers/rootReducer';
import { createStore } from 'redux';
import { FC } from 'react';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer,
  {},
  (window as any)['__REDUX_DEVTOOLS_EXTENSION__'] &&
    (window as any)['__REDUX_DEVTOOLS_EXTENSION__']()
);
const StoreProvider: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default StoreProvider;
