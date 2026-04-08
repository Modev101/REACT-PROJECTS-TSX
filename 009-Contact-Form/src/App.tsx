import { useState } from "react";
import { Form } from "./components/Form";
import { ThankYou } from "./components/ThankYou";
import type { DataTypes } from "./components/Form";

function App() {
  const [data, setData] = useState<DataTypes | null>(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {data ? <ThankYou data={data} /> : <Form onSubmitData={setData} />}
    </div>
  );
}

export default App;