import React from "react";
import MainScreen from "@widgets/Main";
import AboutScreen from "@widgets/About";
import Contacts from "@widgets/Contacts";

const HomePage = () => {
  return (
    <div>
      <MainScreen />
      <AboutScreen />
      <Contacts />
    </div>
  );
};

export default HomePage;
