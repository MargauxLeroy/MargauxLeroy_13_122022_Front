import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Input from "../components/input/input";
import Button from "../components/button/button";
import { useSelector } from "react-redux";
import { authActions } from "../store/reducers/auth";
import { Credentials } from "../services/login";
import { useState } from "react";
import { AppState, useAppDispatch } from "../store/store";

function SignIn() {
  const dispatch = useAppDispatch();

  const errorMessage = useSelector<AppState, string | null>((state) => {
    if (state.auth.login.status === "DISCONNECTED") {
      return state.auth.login.error || null;
    }

    return null;
  });

  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  return (
    <>
      <Header isLoggued={false}></Header>
      <main className="page-sign-in main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <Input
              label="username"
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            ></Input>
            <Input
              label="password"
              type="password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            ></Input>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button
              onClick={async (e) => {
                e.preventDefault();
                dispatch(authActions.login(credentials));
              }}
              label={"Sign In"}
              hugContent={false}
            ></Button>
            {errorMessage != null && <p className="error">{errorMessage}</p>}
          </form>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SignIn;
