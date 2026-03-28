import icon_list from "../assets/icon-list.svg";
import ill_desktop from "../assets/illustration-sign-up-desktop.svg";
import ill_tablet from "../assets/illustration-sign-up-tablet.svg";
import ill_mobile from "../assets/illustration-sign-up-mobile.svg";
import { Form } from "./Form";

type Props = {
  onSubmitEmail: (email: string) => void;
};

export function MainCard({ onSubmitEmail }: Props) {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row items-center justify-center 
      bg-white rounded-lg p-3 shadow-xl 
      max-w-4xl mx-auto my-5"
    >
      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className="text-3xl lg:text-4xl text-slate-900 font-bold">
          Stay updated!
        </h1>

        <h5 className="py-4 text-sm lg:text-base">
          Join 60,000+ product managers receiving monthly updates on:
        </h5>

        <div className="space-y-3 pb-6">
          <div className="flex items-start gap-3">
            <img src={icon_list} alt="icon-list" className="mt-1" />
            <p>Product discovery and building what matters</p>
          </div>

          <div className="flex items-start gap-3">
            <img src={icon_list} alt="icon-list" className="mt-1" />
            <p>Measuring to ensure updates are a success</p>
          </div>

          <div className="flex items-start gap-3">
            <img src={icon_list} alt="icon-list" className="mt-1" />
            <p>And much more!</p>
          </div>
        </div>

        <Form onSubmitEmail={onSubmitEmail} />
      </div>

      <div className="w-full lg:w-2/5 mb-6 lg:mb-0 lg:pl-8">
        <picture>
          <source media="(min-width: 1024px)" srcSet={ill_desktop} />
          <source media="(min-width: 640px)" srcSet={ill_tablet} />
          <img
            src={ill_mobile}
            alt="illustration-sign-up"
            className="w-full h-auto object-cover rounded-lg"
          />
        </picture>
      </div>
    </div>
  );
}
