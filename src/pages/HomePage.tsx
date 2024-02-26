import React from "react";
import MainScreen from "@widgets/Main";
import AboutScreen from "@widgets/About";
import Products from "@widgets/Products";
import Contacts from "@widgets/Contacts";
import Header from "@features/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainScreen />
      <AboutScreen />
      <Products />
      <Contacts />
    </div>
  );
};

export default HomePage;
