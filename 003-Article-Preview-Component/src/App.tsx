import { useState } from "react";
import MainCard from "./components/MainCard";
import Share from "./components/share";

export default function App() {
  const [showShare, setShowShare] = useState(false);

  return (
    <>
      <MainCard onShareClick={() => setShowShare((prev) => !prev)} />
      {showShare && <Share />}
    </>
  );
}
