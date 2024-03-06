import React from "react";
import { useSelector } from "react-redux";
import useScrollOpacity from "@shared/lib/hooks/useScrollOpacity";

import MainScreen from "@widgets/Main";
import AboutScreen from "@widgets/About";
import Products from "@widgets/Products";
import Contacts from "@widgets/Contacts";
import Header from "@features/Header";
import { ModalWindow } from "@entities/ModalWindow";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface RootState {
  modalSlice: {
    isShown: boolean;
  };
}

const HomePage = () => {
  const scrollOpacity = useScrollOpacity();

  const isModalVisible = useSelector(
    (state: RootState) => state.modalSlice.isShown
  );
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: `rgba(26, 38, 43, ${scrollOpacity})` }}>
        <Header textColor="" />
        <MainScreen />
        <AboutScreen />
        <Products />
        <Contacts />
        {isModalVisible && <ModalWindow />}
      </div>
    </Provider>
  );
};

export default HomePage;
