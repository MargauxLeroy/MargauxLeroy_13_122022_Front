import React, { useEffect } from "react";
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from './store/store'

import "./App.scss";

import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Error from "./pages/Error";

function App() {
  useEffect(() => store.subscribe(() => console.log(store.getState())
  ), [])
  
/// TODO : REACT ROUTER V6 ? 
/// TODO 2 : 3 services : récup le token, log + set les infos

  return (
    <>
    
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Index />} />

            <Route path="/signIn" index element={<SignIn />} />

            <Route path="/user" index element={<User />} />

            <Route path="*" index element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
