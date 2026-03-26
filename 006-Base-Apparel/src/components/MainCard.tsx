import { Form, type DataTypes } from "./Form";
import logo from "../assets/logo.svg";
import hero_desktop from "../assets/hero-desktop.jpg";
import hero_mobile from "../assets/hero-mobile.jpg";
import { useState } from "react";
import { ThankYou } from "./ThankYou";
export function MainCard() {
  const [data, setData] = useState<DataTypes>();
  return (
    <>
      <main className="lg:grid lg:grid-cols-2 lg:min-h-screen lg:gap-x-[250px] mb-10 lg:mb-0">
        <section className="flex flex-col items-center lg:items-start px-6 lg:px-24">
          <div className="py-8">
            <img src={logo} alt="Base Apparel" />
          </div>

          <img
            src={hero_mobile}
            alt="Hero mobile"
            className="lg:hidden w-full"
          />

          <div className="text-center lg:text-left mt-12 max-w-md">
            <h1 className="uppercase tracking-[8px] text-4xl lg:text-6xl leading-tight">
              <span className="block font-light text-[#ce9797]">we're</span>
              <span className="block font-semibold">coming</span>
              <span className="block font-semibold">soon</span>
            </h1>

            <p className="mt-6 text-[#ce9797] leading-6">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>

            {data ? <ThankYou data={data} /> : <Form onSubmitData={setData} />}
          </div>
        </section>
        <section className="hidden lg:block h-screen">
          <img src={hero_desktop} alt="Hero desktop" className=" h-full " />
        </section>
      </main>
    </>
  );
}
