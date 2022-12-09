import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Input from "../components/input/input";
import Button from "../components/button/button";

function SignIn() {
  return (
    <>
      <Header isLoggued={false}></Header>
      <main className="page-sign-in main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <Input label={"username"}></Input>
            <Input label={"password"}></Input>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button label={"Sign In"} hugContent={false}></Button>
          </form>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SignIn;
