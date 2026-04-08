import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export type DataTypes = {
  firstName: string;
  lastName: string;
  email: string;
  textarea: string;
  query: string;
  consent: boolean;
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
    textarea: yup.string().required("Please Provide A Message!"),
    query: yup.string().required("Please select a query type!"),
    consent: yup
      .boolean()
      .required("You must accept the consent!")
      .oneOf([true], "You must accept the consent!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataTypes>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: DataTypes) => {
    onSubmitData(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white rounded-lg shadow-2xl w-full px-6 py-3 "
      >
        <p className="capitalize font-semibold text-2xl lg:text-xl pb-3 lg:pb-1">
          contact us
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-3">
          <div className="flex flex-col">
            <p className="capitalize pb-1 text-sm">
              first name <span className="text-[#0c7d69ff]">*</span>
            </p>
            <input
              type="text"
              className="border border-black rounded-lg py-1 px-2 hover:cursor-pointer hover:border-[#0c7d69ff]"
              {...register("firstName")}
            />
            <span className="text-red-500 text-xs italic font-semibold">
              {errors.firstName?.message}
            </span>
          </div>

          <div className="flex flex-col">
            <p className="capitalize pb-1 text-sm">
              last name <span className="text-[#0c7d69ff]">*</span>
            </p>
            <input
              type="text"
              className="border border-black rounded-lg py-1 px-2 hover:cursor-pointer hover:border-[#0c7d69ff]"
              {...register("lastName")}
            />
            <span className="text-red-500 text-xs italic font-semibold">
              {errors.lastName?.message}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="capitalize py-2 lg:py-1 text-sm">
            email address <span className="text-[#0c7d69ff]">*</span>
          </p>
          <input
            type="email"
            className="pl-2 border border-black rounded-lg py-1 hover:cursor-pointer hover:border-[#0c7d69ff]"
            {...register("email")}
          />
          <span className="text-red-500 text-xs italic font-semibold">
            {errors.email?.message}
          </span>
        </div>

        <div>
          <p className="capitalize py-2 lg:py-1 text-sm">
            query type <span className="text-[#0c7d69ff]">*</span>
          </p>

          <div className="lg:flex lg:justify-between gap-3">
            <div>
              <label className="flex items-center gap-2 border border-black rounded-lg py-1 px-3 lg:px-28 cursor-pointer">
                <input
                  type="radio"
                  value="general"
                  className="size-3 hover:cursor-pointer accent-[#0c7d69ff]"
                  {...register("query")}
                />
                <span className="capitalize text-sm ">general enquiry</span>
              </label>
            </div>

            <div className="pt-3 lg:pt-0">
              <label className="flex items-center gap-2 border border-black rounded-lg py-1 px-3 lg:px-28 cursor-pointer">
                <input
                  type="radio"
                  value="support"
                  className="size-3 hover:cursor-pointer accent-[#0c7d69ff]"
                  {...register("query")}
                />
                <span className="capitalize text-sm">support request</span>
              </label>
            </div>
          </div>

          <span className="text-red-500 text-xs italic font-semibold">
            {errors.query?.message}
          </span>
        </div>

        <div className="flex flex-col">
          <p className="capitalize py-2 lg:py-1 text-sm">
            message <span className="text-[#0c7d69ff]">*</span>
          </p>
          <textarea
            className="pl-2 border border-black rounded-lg
                 min-h-[120px] lg:min-h-[80px]
                 hover:border-[#0c7d69ff] hover:cursor-pointer"
            {...register("textarea")}
          ></textarea>
          <span className="text-red-500 text-xs italic font-semibold">
            {errors.textarea?.message}
          </span>
        </div>

        <label className="pt-3 lg:pt-2 flex items-start gap-2">
          <input
            {...register("consent")}
            type="checkbox"
            className="size-3 mt-1 cursor-pointer accent-[#0c7d69ff]"
          />
          <p className="text-sm cursor-pointer">
            I consent to being contacted by the team
            <span className="text-[#0c7d69ff]">*</span>
          </p>
        </label>
        <span className="text-red-500 text-xs italic font-semibold">
          {errors.consent?.message}
        </span>

        <div className="pt-6 lg:pt-3">
          <input
            type="submit"
            className="bg-[#0c7d69ff] text-white w-full rounded-lg
                 py-4 lg:py-2 capitalize hover:bg-[#2b4246ff]"
          />
        </div>
      </form>
    </>
  );
}
