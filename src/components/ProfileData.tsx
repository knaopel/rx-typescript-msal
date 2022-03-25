import React from "react";

interface GraphData {
  givenName: string;
  surname: string;
  userPrincipalName: string;
  id: string;
}

export const ProfileData: React.FC<{ graphData: GraphData }> = ({ graphData }) => {
  console.log(graphData);
  return (
    <div id='profile-div'>
      <p><strong>First Name:</strong> {graphData.givenName}</p>
      <p><strong>Last Name:</strong> {graphData.surname}</p>
      <p><strong>Email:</strong> {graphData.userPrincipalName}</p>
      <p><strong>Id:</strong> {graphData.id}</p>
    </div>
  );
}