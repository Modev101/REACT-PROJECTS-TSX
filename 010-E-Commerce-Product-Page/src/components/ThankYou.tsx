import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export function ThankYou() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-[90%] max-w-md rounded-xl shadow-2xl p-8 text-center animate-fadeIn">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="text-orange-500 text-5xl mb-4"
        />

        <h1 className="text-2xl font-bold mb-2">
          Thank You <br /> For Your Purchase!
        </h1>

        <h2 className="text-gray-600 italic font-semibold font-mono">
          {time.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          <br /> {time.toLocaleTimeString()}
        </h2>
        <button
          onClick={() => window.location.reload()}
          className="font-semibold bg-orange-500 text-white px-6 py-3 rounded-md w-full sm:w-auto hover:opacity-70 hover:text-black mt-2"
        >
          Order Again!
        </button>
      </div>
    </div>
  );
}
