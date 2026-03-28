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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between text-sm pb-2">
          <p>Email address</p>
          <span className="text-red-500 font-semibold">
            {errors.email?.message}
          </span>
        </div>

        <input
          type="email"
          className="w-full p-3 rounded-md border border-slate-400 
                 focus:outline-none focus:ring-2 focus:ring-slate-900"
          placeholder="email@company.com"
          {...register("email")}
        />

        <button
          type="submit"
          className="mt-4 bg-slate-900 text-white rounded-md py-3 w-full font-medium hover:bg-[#ff6257] transition-colors"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
};
