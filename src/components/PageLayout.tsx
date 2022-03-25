import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { Navbar } from "react-bootstrap";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

export const PageLayout: React.FC = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <a className="navbar-brand" href="/">
          Microsoft Identity Platform
        </a>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Navbar>
      <h5>
        <center>
          Welcome to the Microsoft Authentication Library for Javascript - React
          Quickstart
        </center>
      </h5>
      {props.children}
    </>
  );
};
