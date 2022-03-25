import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal
} from "@azure/msal-react";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { loginReqest } from "./authConfig";
import { callMsGraph } from "./graph";
import { PageLayout } from "./components";
import "./styles/App.css";

const ProfileContent: React.FC = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState();

  const requestForfileData = () => {
    instance
      .acquireTokenSilent({
        ...loginReqest,
        account: accounts[0]
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) =>
          setGraphData(response)
        );
      });
  };

  return (
    <>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      {graphData ? (
        <div>ProfileData here</div>
      ) : (
        <Button variant="secondary" onClick={requestForfileData}>
          Request Profile Information
        </Button>
      )}
    </>
  );
};

const MainContent: React.FC = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <h5 className="card-title">
          Please sign-in to see your profile information.
        </h5>
      </UnauthenticatedTemplate>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <PageLayout>
      {" "}
      <MainContent />
    </PageLayout>
  );
};

export default App;
