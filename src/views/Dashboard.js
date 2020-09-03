import React, { useEffect } from "react";
import Template from "../components/Template";
import { useDispatch, useSelector } from "react-redux";
import {dashboard} from "../config/drawer";
import LandingPage from "../components/LandingPage";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <Template selected={dashboard}>
      <LandingPage/>
    </Template>
  );
};

export default Dashboard;
