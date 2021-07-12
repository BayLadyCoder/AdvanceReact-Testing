import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
import reduxPromise from "redux-promise";

export default ({ children, initialState = {} }) => {
  const middleware = applyMiddleware(reduxPromise);
  const store = createStore(reducers, initialState, middleware);

  return <Provider store={store}>{children}</Provider>;
};
