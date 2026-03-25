import logo from "../assets/logo.svg";
import illustration_dashboard from "../assets/illustration-dashboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Form } from "./form";
import { ThankYou } from "./ThankYou";
import { useState } from "react";
function MainCard() {
  const [email, setEmail] = useState<string | null>(null);
  return (
    <>
      <div className="flex-col items-center justify-center flex">
        <img src={logo} alt="logo image" />

        <p className="text-3xl text-slate-500 pt-5">
          We are lanching <span className="font-bold text-black">soon!</span>
        </p>

        <h3 className="text-slate-700 pt-2 pb-5">Subscribe and get notified</h3>
      </div>

      {email ? <ThankYou email={email} /> : <Form onSubmitEmail={setEmail} />}

      <div className="py-10">
        <img
          src={illustration_dashboard}
          alt="illustration-dashboard"
          className="h-56"
        />
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="pb-3">
          <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
          <FontAwesomeIcon icon={faTwitter} className="text-blue-500" />
          <FontAwesomeIcon icon={faInstagram} className="text-blue-500" />
        </div>

        <p className="text-slate-500">
          &copy; Copyright Ping.All rights reserved.
        </p>
      </div>
    </>
  );
}
export default MainCard;
