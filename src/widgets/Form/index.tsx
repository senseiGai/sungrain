import React from "react";

import Input from "@shared/ui/Input";

import styles from "./styles.module.scss";

function Form() {
  return (
    <section className={styles.form}>
      <div className={styles.form__input_name}>
        <Input inputType="pc" labelText="Введите ваше имя" />
      </div>
      <div className={styles.form__input_phone}>
        <Input inputType="pc" labelText="Ваш номер телефона" />
      </div>
    </section>
  );
}

export default Form;
