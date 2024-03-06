import React from "react";
import { Button } from "@shared/ui/Button/index";

import Logo from "@assets/Logo/logo.svg";

import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { toggleOffModal } from "../../redux/modalSlice";

export const ModalWindow = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleOffModal());
  };

  return (
    <>
      <div className={styles.overlay} onClick={handleClose} />
      <div className={styles.modal_window}>
        <img src={Logo} alt="logo" className={styles.modal_window__logo} />
        <span className={styles.modal_window__text}>Спасибо за заявку!</span>
        <span className={styles.modal_window__sub_text}>
          Наши менеджеры свяжутся с вами в скором времени
        </span>
        <Button text="Закрыть" buttonType="filled" onClick={handleClose} />
      </div>
    </>
  );
};
