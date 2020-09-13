import React from "react";
import Template from "../components/Template";
import { dashboard } from "../config/drawer";
import LandingPage from "../components/LandingPage";

const Dashboard = () => {
  return (
    <Template selected={dashboard}>
      <LandingPage />
    </Template>
  );
};

export default Dashboard;
