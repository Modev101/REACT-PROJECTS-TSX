import type { DataTypes } from "./Form";

type ThankYouProps = {
  data: DataTypes;
};

export function ThankYou({ data }: ThankYouProps) {
  return (
    <>
      <div className="bg-white lg:w-full p-4 rounded-lg shadow-[2px_2px_3px_2px_grey,-2px_-2px_3px_2px_rgb(126_34_206/0.8)]">
        <p>
          Thank you for your trust{" "}
          <span className="italic font-bold">{data.firstName}</span>
        </p>
        <p>Enjoy your free trial with us</p>
        <p>
          We'll contact you at : <br />{" "}
          <span className="italic font-bold">{data.email}</span>
        </p>
      </div>
    </>
  );
}
