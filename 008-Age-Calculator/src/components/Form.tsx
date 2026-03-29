import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
export type FormValues = {
  day: string;
  month: string;
  year: string;
};

export type AgeValues = {
  years: number;
  months: number;
  days: number;
};
export type FormProps = {
  onChangeData?: (age: AgeValues) => void;
};
export function Form({ onChangeData }: FormProps) {
  const schema = yup
    .object({
      day: yup
        .string()
        .required("Required")
        .matches(/^\d{2}$/, "Must be 2 digits Number"),

      month: yup
        .string()
        .required("Required")
        .matches(/^\d{2}$/, "Must be 2 digits Number"),

      year: yup
        .string()
        .required("Required")
        .matches(/^\d{4}$/, "Must be 4 digits Number"),
    })
    .test("valid-date", "Invalid date", function (values) {
      const { day, month, year } = values;

      if (!day || !month || !year) return true;

      const d = Number(day);
      const m = Number(month);
      const y = Number(year);

      if (m < 1 || m > 12) {
        return this.createError({
          path: "month",
          message: "Invalid month",
        });
      }

      const daysInMonth = new Date(y, m, 0).getDate();

      if (d < 1 || d > daysInMonth) {
        return this.createError({
          path: "day",
          message: "Invalid date",
        });
      }

      return true;
    });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const values = watch();
  function calculateAge(birth: Date) {
    const today = new Date();
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  }
  useEffect(() => {
    if (
      values.day?.length === 2 &&
      values.month?.length === 2 &&
      values.year?.length === 4 &&
      Object.keys(errors).length === 0
    ) {
      const birthDate = new Date(
        Number(values.year),
        Number(values.month) - 1,
        Number(values.day),
      );

      const age = calculateAge(birthDate);

      onChangeData?.(age);
    }
  }, [values, errors, onChangeData]);
  const onSubmit = (data: FormValues) => {
    const birthDate = new Date(
      Number(data.year),
      Number(data.month) - 1,
      Number(data.day),
    );

    const age = calculateAge(birthDate);

    onChangeData?.(age);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="flex flex-col w-[80px] shrink-0">
            <label className="uppercase text-xs tracking-widest font-semibold text-gray-500 mb-1">
              <h1>Day</h1>
              <input
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="DD"
                {...register("day")}
                className={`mt-1 w-full rounded-lg px-3 py-2 text-xl font-bold focus:outline-none ${
                  errors.day
                    ? "border border-red-500"
                    : "border border-gray-400 focus:border-[#854dff]"
                }`}
              />

              <span className="text-xs pt-1 text-red-500">
                {errors.day?.message}
              </span>
            </label>
          </div>

          <div className="flex flex-col w-[80px] shrink-0">
            <label className="uppercase text-xs tracking-widest font-semibold text-gray-500 mb-1">
              <h1>Month</h1>
              <input
                type="text"
                inputMode="numeric"
                maxLength={2}
                placeholder="MM"
                {...register("month")}
                className={`mt-1 w-full rounded-lg px-3 py-2 text-xl font-bold focus:outline-none ${
                  errors.month
                    ? "border border-red-500"
                    : "border border-gray-400 focus:border-[#854dff]"
                }`}
              />
              <span className="text-xs pt-1 text-red-500">
                {errors.month?.message}
              </span>
            </label>
          </div>

          <div className="flex flex-col w-[110px] shrink-0">
            <label className="uppercase text-xs tracking-widest font-semibold text-gray-500 mb-1">
              <h1>Year</h1>
              <input
                type="text"
                inputMode="numeric"
                maxLength={4}
                placeholder="YYYY"
                {...register("year")}
                className={`mt-1 w-full rounded-lg px-3 py-2 text-xl font-bold focus:outline-none ${
                  errors.year
                    ? "border border-red-500"
                    : "border border-gray-400 focus:border-[#854dff]"
                }`}
              />
              <span className="text-xs pt-1 text-red-500">
                {errors.year?.message}
              </span>
            </label>
          </div>
        </div>

        <div className="relative my-8">
          <div className="border-t border-gray-300"></div>
        </div>
      </form>
    </>
  );
}
