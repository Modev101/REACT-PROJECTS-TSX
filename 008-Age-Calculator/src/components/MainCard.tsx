import { useState } from "react";
import { Form, type AgeValues } from "./Form";

export function MainCard() {
  const [age, setAge] = useState<AgeValues>();
  return (
    <>
      <div className="bg-white rounded-2xl px-6 py-8 w-[340px] sm:w-[420px] shadow-lg rounded-br-[100px]">
        <Form onChangeData={setAge} />

        <div className="space-y-2 text-4xl font-extrabold italic">
          <p>
            <span className="text-[#854dff]">{age?.years ?? "--"}</span> years
          </p>
          <p>
            <span className="text-[#854dff]">{age?.months ?? "--"}</span> months
          </p>
          <p>
            <span className="text-[#854dff]">{age?.days ?? "--"}</span> days
          </p>
        </div>
      </div>
    </>
  );
}
