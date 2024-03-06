import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@shared/ui/Input/index";
import { Button } from "@shared/ui/Button/index";
import { useSendEmail } from "@shared/lib/hooks/useSendEmail";
import { useDispatch } from "react-redux";

import styles from "./styles.module.scss";
import { toggleOnModal } from "../../redux/modalSlice";

interface FormData {
  name: string;
  phone: string;
}

function Form() {
  const { register, handleSubmit, errors } = useSendEmail();
  const dispatch = useDispatch();

  const submit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<FormData> = (errors) => {
    console.log(errors);
  };

  const onFormSubmit = (data: any) => {
    handleSubmit(data);
    dispatch(toggleOnModal());
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <div className={styles.form__input_name}>
        <Input
          required
          type="text"
          labelText="Введите ваше имя"
          {...register("name", {
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
        {errors.name && (
          <span className={styles.error}>{errors.name.message}</span>
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
