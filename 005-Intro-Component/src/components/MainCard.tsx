import { useState } from "react";
import { Form, type DataTypes } from "./Form";
import { ThankYou } from "./ThankYou";

export function MainCard() {
  const [data, setData] = useState<DataTypes>();
  return (
    <>
      <div className="my-10 block gap-8 md:block lg:flex max-w-full md:max-w-full lg:max-w-full">
        <div className="lg:pl-16 flex flex-col justify-center">
          <h1 className="font-bold text-white text-center text-4xl lg:w-[400px] lg:text-start">
            Learn to code by watching others
          </h1>
          <p className="text-white py-5 w-fit lg:w-[500px] md:w-[500px] text-center lg:text-start">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-purple-700/80 w-[88%] lg:w-full p-2 rounded-xl shadow-lg text-center mb-3">
            <p className="text-white">
              <span className="font-bold text-white">Try it free 7 days</span>{" "}
              then $20/mo. thereafter
            </p>
          </div>
          {data ? <ThankYou data={data} /> : <Form onSubmitData={setData} />}
        </div>
      </div>
    </>
  );
}
