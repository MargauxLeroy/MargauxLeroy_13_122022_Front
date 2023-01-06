import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Button from "../components/button/button";
import Account, { AccountProps } from "../components/account/account";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/store";
import { UserData } from "../services/profil";
import { useEffect } from "react";
import { authActions } from "../store/reducers/auth";

function User() {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(authActions.profile());
  }, [dispatch]);

  const userData = useSelector<AppState, UserData | undefined>(
    (state) => state.auth.userData
  );

  return (
    <>
      <Header isLoggued={true} userName={userData?.firstName}></Header>
      <main className="page-user bg-dark main">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userData?.firstName + " " + userData?.lastName}!
          </h1>
          <Button label="Edit Name" hugContent={true}></Button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {tempData.map((e, index) => (
          <Account
            key={index}
            title={e.title}
            amount={e.amount}
            description={e.description}
          ></Account>
        ))}
      </main>
      <Footer></Footer>
    </>
  );
}

export default User;

const tempData: AccountProps[] = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "10,928.42",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "184.30",
    description: "Current Balance",
  },
];
