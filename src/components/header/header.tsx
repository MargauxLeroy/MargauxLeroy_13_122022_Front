import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import AppLogo from "../../assets/logo.png";
import { authActions } from "../../store/reducers/auth";

import "./header.scss";

type HeaderProps = {
  isLoggued: boolean;
  userName?: string;
};

function Header({ isLoggued, userName }: HeaderProps) {
  const dispatch = useDispatch();

  return (
    <nav className="main-nav">
      <Link className="logo" to="/">
        <img src={AppLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isLoggued ? (
          <>
            <Link className="item" to="#">
              <i className="fa fa-user-circle"></i>
              {userName!}
            </Link>
            <div
              className="item"
              onClick={() => dispatch(authActions.logout())}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </div>
          </>
        ) : (
          <Link className="item" to="/signIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
