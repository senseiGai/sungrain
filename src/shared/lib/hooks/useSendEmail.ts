import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export interface SendFormData {
  name: string;
  phone_number: string;
}

export function useSendEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendFormData>({
    mode: "onChange",
  });

  const onSubmit = (data: SendFormData, event?: React.BaseSyntheticEvent) => {
    if (event) {
      event.preventDefault();

      emailjs
        .sendForm(
          "service_zo7ktme",
          "template_wls321b",
          event.target,
          "4JH0nukWpbbxqO4Tw"
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            reset();
          },
          (error) => {
            console.error("Failed to send email:", error.text);
          }
        );
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
  };
}
