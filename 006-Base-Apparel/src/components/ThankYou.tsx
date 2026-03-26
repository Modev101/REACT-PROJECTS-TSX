import type { DataTypes } from "./Form";

type ThankYouProps = {
  data: DataTypes;
};

export function ThankYou({ data }: ThankYouProps) {
  return (
    <>
      <div className="mt-3 bg-white lg:w-full p-4 rounded-lg shadow-[2px_2px_3px_2px_rgb(178_115_108),-2px_-2px_3px_2px_rgb(243_184_156)]">
        <p>Thank you for your trust </p>
        <p>You will be notified as soon as we launch!</p>
        <p>
          We'll contact you at : <br />{" "}
          <span className="italic font-bold">{data.email}</span>
        </p>
      </div>
    </>
  );
}
