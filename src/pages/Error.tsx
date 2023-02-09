import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function Error() {
  return (
    <>
      <Header isLoggued={false}></Header>
      <main className="page-sign-in main bg-dark">
        <h1>Erreur</h1>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Error;
