import { Route } from "react-router-dom";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
import Error from "./pages/Error";

export function getRoutes() {
  return (
    <>
      <Route path="/" index element={<Index />} />
      <Route path="/signIn" index element={<SignIn />} />
      <Route path="/user" index element={<User />} />
      <Route path="*" index element={<Error />} />
    </>
  );
}
