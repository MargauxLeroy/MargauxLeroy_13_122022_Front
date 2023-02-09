import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Button from "../components/button/button";
import Account, { AccountProps } from "../components/account/account";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/store";
import { UserData } from "../services/profil";
import { useEffect, useState } from "react";
import { authActions } from "../store/reducers/auth";
import Input from "../components/input/input";

function Profile() {
  const dispatch = useDispatch();

  const stateUserData = useSelector<AppState, UserData | undefined>(
    (state) => state.auth.userData
  );

  console.log("stateUserData", stateUserData);

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // @ts-ignore
    dispatch(authActions.profile());
  }, [dispatch]);

  useEffect(() => {
    if (!stateUserData) return;

    setUserData(stateUserData);
  }, [stateUserData]);

  let updateFirstName: string, updateLastName: string;

  const [isBeingUpdated, setIsBeingUpdated] = useState(false);

  return (
    <>
      <Header isLoggued={true} userName={userData?.firstName}></Header>
      <main className="page-user bg-dark main">
        <div className="header">
          <h1>Welcome back</h1>
          {isBeingUpdated ? (
            <form className="form">
              <div className="inputs">
                <Input
                  placeholder={userData?.firstName}
                  withLabel={false}
                  onChange={(e) => (updateFirstName = e.target.value)}
                ></Input>
                <Input
                  placeholder={userData?.lastName}
                  withLabel={false}
                  onChange={(e) => (updateLastName = e.target.value)}
                ></Input>
              </div>
              <div className="actions">
                <Button
                  label={"Save"}
                  hugContent={true}
                  isPrimary={false}
                  onClick={async (e) => {
                    e.preventDefault();

                    const newProfile = {
                      firstName: updateFirstName,
                      lastName: updateLastName,
                    };

                    // @ts-ignore
                    dispatch(authActions.updateProfile(newProfile));

                    // @ts-ignore
                    dispatch(authActions.profile());

                    setIsBeingUpdated(false);
                  }}
                ></Button>
                <Button
                  label={"Cancel"}
                  hugContent={true}
                  isPrimary={false}
                  onClick={async (e) => {
                    e.preventDefault();
                    setIsBeingUpdated(false);
                  }}
                ></Button>
              </div>
            </form>
          ) : (
            <>
              <h2>
                {userData
                  ? `${userData.firstName} ${userData.lastName} !`
                  : `Prénom Nom !`}
              </h2>
              <Button
                label="Edit Name"
                hugContent={true}
                onClick={() => {
                  setIsBeingUpdated(!isBeingUpdated);
                }}
              ></Button>
            </>
          )}
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

export default Profile;

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
