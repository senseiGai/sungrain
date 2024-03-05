import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

import { Input } from "@shared/ui/Input/index";
import { Button } from "@shared/ui/Button/index";

import styles from "./styles.module.scss";

interface FormData {
  name: string;
  phone: string;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {},
  });

  const submit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<FormData> = (errors) => {
    console.log(errors);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit, error)}>
      <div className={styles.form__input_name}>
        <Input
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
          labelText="Ваш номер телефона"
          {...register("phone", {
            required: "Это поле обязательно к заполнению",
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
              message: "Пожалуйста введите номер телефона правильно",
            },
          })}
        />
        {errors.phone && (
          <span className={styles.error}>{errors.phone.message}</span>
        )}
      </div>
      <Button type="submit" buttonType="filled" text="Отправить" />
    </form>
  );
}

export default Form;
