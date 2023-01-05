import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./store/store";

import "./App.scss";

import { router } from "./store/actors/routing";

function App() {
  /// TODO : Router v6 -> ok

  /// TODO :
  /// 1. Récup le token -> ok
  /// 2. Log
  /// 3. Set les infos

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
