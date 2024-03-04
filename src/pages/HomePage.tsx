import React from "react";
import useScrollOpacity from "@shared/lib/hooks/useScrollOpacity";

import MainScreen from "@widgets/Main";
import AboutScreen from "@widgets/About";
import Products from "@widgets/Products";
import Contacts from "@widgets/Contacts";
import Header from "@features/Header";

const HomePage = () => {
  const scrollOpacity = useScrollOpacity();

  return (
    <div style={{ backgroundColor: `rgba(26, 38, 43, ${scrollOpacity})` }}>
      <Header textColor="" />
      <MainScreen />
      <AboutScreen />
      <Products />
      <Contacts />
    </div>
  );
};

export default HomePage;
