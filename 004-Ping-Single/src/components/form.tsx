import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
type FormProps = {
  onSubmitEmail: (email: string) => void;
};

export const Form = ({ onSubmitEmail }: FormProps) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please Enter A Valid Email!")
      .required("Please Enter Your Email!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string }) => {
    onSubmitEmail(data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Your email address..."
        className="border border-gray-300 p-2 rounded-full"
        {...register("email")}
      />

      <input
        type="submit"
        value="Notify me"
        className="bg-blue-500 rounded-full px-3 ml-2 py-2 shadow-lg text-white hover:opacity-85"
      />

      <p className="text-red-500 italic text-sm">{errors.email?.message}</p>
    </form>
  );
};
