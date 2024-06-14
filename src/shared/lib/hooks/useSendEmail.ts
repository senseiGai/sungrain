import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export interface SendFormData {
  full_name: string;
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
          "service_wt1ct4g",
          "template_fqfziii",
          event.target,
          "LV9gYtaB2q_9ES1bV"
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
