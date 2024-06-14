import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@shared/ui/Input/index";
import { Button } from "@shared/ui/Button/index";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { useDispatch } from "react-redux";

import styles from "./styles.module.scss";
import { toggleOnModal } from "../../redux/modalSlice";

interface FormData {
  full_name: string;
  phone_number: string;
}

function Form() {
  const { register, handleSubmit, errors } = useSendEmail();
  const dispatch = useDispatch();

  const onFormSubmit = (data: any) => {
    handleSubmit(data);
    dispatch(toggleOnModal());
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <div className={styles.form__input_name}>
        <Input
          required
          margin="mt-8"
          type="text"
          labelText="Введите ваше имя"
          {...register("full_name", {
            required: "Это поле обязательно к заполнению",
            pattern: {
              value: /^[A-Za-zА-Яа-яёЁ]+(\s[A-Za-zА-Яа-яёЁ]+)*$/,
              message: "Пожалуйста введите ваше имя правильно",
            },
            minLength: {
              value: 2,
              message: "Имя должно содержать минимум 2 символа",
            },
          })}
        />
        {errors.full_name && (
          <span className={styles.error}>{errors.full_name.message}</span>
        )}
      </div>
      <div className={styles.form__input_phone}>
        <Input
          required
          type="phone"
          labelText="Ваш номер телефона"
          {...register("phone_number", {
            required: "Это поле обязательно к заполнению",
            pattern: {
              value: /^\+?[0-9]{6,14}$/,
              message: "Пожалуйста введите номер телефона правильно",
            },
          })}
        />
        {errors.phone_number && (
          <span className={styles.error}>{errors.phone_number.message}</span>
        )}
      </div>
      <Button buttonType="filled" text="Отправить" />
    </form>
  );
}

export default Form;
