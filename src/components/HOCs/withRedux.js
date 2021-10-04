import { store } from "store";
import { Provider } from "react-redux";

function withRedux(Component) {
  return (props) => {
    return (
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    );
  };
}

export default withRedux;
