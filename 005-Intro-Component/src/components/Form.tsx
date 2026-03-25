import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export type DataTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
type FormProps = {
  onSubmitData: (data: DataTypes) => void;
};
export function Form({ onSubmitData }: FormProps) {
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("Please Provide Your First Name!")
      .min(3, "First Name must be at least 3 characters")
      .max(20, "First Name must be at most 20 characters"),
    lastName: yup
      .string()
      .required("Please Provide Your Last Name!")
      .min(3, "Last Name must be at least 3 characters")
      .max(20, "Last Name must be at most 20 characters"),
    email: yup
      .string()
      .email("Please Provide A Valid Email!")
      .required("Please Provide Your Email!"),
    password: yup
      .string()
      .required("Please Provide A Password!")
      .min(7, "Password must be at least 7 character")
      .max(20, "Password must be at most 20 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: DataTypes) => {
    onSubmitData(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 bg-white p-7 rounded-lg mx-5 lg:mx-0 md:mx-0"
      >
        <input
          type="text"
          placeholder="First Name"
          className="border border-black rounded-md p-2"
          {...register("firstName")}
        />
        <span className=" text-sm text-red-600 italic">
          {errors.firstName?.message}
        </span>
        <input
          type="text"
          placeholder="Last Name"
          className="border border-black rounded-md p-2"
          {...register("lastName")}
        />
        <span className="text-sm text-red-600 italic">
          {errors.lastName?.message}
        </span>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-black rounded-md p-2"
          {...register("email")}
        />
        <span className="text-sm text-red-600 italic">
          {errors.email?.message}
        </span>
        <input
          type="password"
          placeholder="Password"
          className="border border-black rounded-md p-2"
          {...register("password")}
        />
        <span className="text-sm text-red-600 italic">
          {errors.password?.message}
        </span>
        <input
          type="submit"
          value="claim your free trail"
          className="bg-green-400 rounded-md py-2 uppercase text-white font-semibold hover:opacity-75"
        />
        <p className="text-sm text-center text-slate-500">
          By clicking the button.you are agreeing to our{" "}
          <span className="text-red-600 font-semibold cursor-pointer">
            Terms and Services
          </span>
        </p>
      </form>
    </>
  );
}
