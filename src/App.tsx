import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store";

import "./App.scss";

import { router } from "./store/actors/routing";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
