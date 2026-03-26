import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export type DataTypes = {
  email: string;
};
type FormProps = {
  onSubmitData: (data: DataTypes) => void;
};
export function Form({ onSubmitData }: FormProps) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Please Provide A Valid Email!")
      .required("Please Provide Your Email!"),
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
      <form onSubmit={handleSubmit(onSubmit)} className="relative mt-8 w-full">
        <input
          type="email"
          placeholder="Email Address"
          className="cursor-pointer w-full border border-[#ce9797] rounded-full py-3 pl-6 pr-24 focus:outline-none transition-colors duration-300"
          {...register("email")}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full px-8 rounded-full bg-gradient-to-r from-[#f8bfbf] to-[#ee8c8c] shadow-lg hover:opacity-75 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </button>
        <span className="mt-2 text-sm text-[#f96262ff]">
          {errors.email?.message}
        </span>
      </form>
    </>
  );
}
