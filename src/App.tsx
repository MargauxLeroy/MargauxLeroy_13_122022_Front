import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";

import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Index />} />

          <Route path="/signIn" index element={<SignIn />} />

          <Route path="/user" index element={<User />} />

          <Route path="*" index element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
