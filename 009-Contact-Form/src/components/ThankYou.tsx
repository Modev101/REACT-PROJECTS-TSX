import type { DataTypes } from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
type ThankYouProps = {
  data: DataTypes;
};

export function ThankYou({ data }: ThankYouProps) {
  return (
    <>
      <div className="bg-[#2b4246ff] rounded-lg p-4 shadow-xl">
        <div className="flex text-white capitalize font-semibold">
          <FontAwesomeIcon icon={faCircleCheck} className=" pr-3 pt-1" />
          <p className="pl-1">message sent!</p>
        </div>
        <div className="pt-2 text-white/75">
          <p className="">Thanks for completing the form.</p>
          <p>
            We'll contact you on:{" "}
            <span className="italic font-semibold">{data.email}</span>
          </p>
        </div>
      </div>
    </>
  );
}
