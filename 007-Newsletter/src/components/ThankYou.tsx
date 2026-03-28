import icon_success from "../assets/icon-success.svg";

type ThankYouProps = {
  email: string;
  onDismiss: () => void;
};

export function ThankYou({ email, onDismiss }: ThankYouProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-xl p-5 
      w-dvw min-h-screen 
      lg:w-fit lg:min-h-0 lg:h-fit
      md:w-fit md:min-h-0 md:h-fit"
    >
      <div className="mt-16 md:mt-0 lg:mt-0">
        <img src={icon_success} alt="icon-success" className="size-7" />

        <p className="text-slate-900 font-bold text-2xl my-5">
          Thanks for <br /> subscribing!
        </p>

        <p className="mb-7 font-semibold w-[250px] text-sm">
          A confirmation email has been sent to{" "}
          <span className="italic text-[#ff6257]">{email}</span>. Please open it
          and click the button inside to confirm your subscription
        </p>

        <button
          onClick={onDismiss}
          className="bg-slate-900 text-white w-full rounded-md py-2 
          hover:bg-[#ff6257] mt-16 md:mt-5 lg:mt-0"
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}
