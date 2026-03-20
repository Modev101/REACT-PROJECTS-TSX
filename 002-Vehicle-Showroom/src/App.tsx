import { useEffect, useState } from "react";
import Search from "./components/search";

function App() {
  type Car = {
    make: string;
    model: string;
  };
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    window.CI_API_KEY =
      "ci_0ad8fbcada05b5a9d5f641bdeef0318f4f04f1f09480c10d1f4a4e2c";

    const script = document.createElement("script");
    script.src =
      "https://carimagesapi.com/assets/js/carimages.js?v=" +
      new Date().toISOString().slice(0, 10).replace(/-/g, "");
    script.async = true;

    document.head.appendChild(script);
  }, []);

  const handleSearch = (data) => {
    setCar(data);
  };

  useEffect(() => {
    if (car && window.CarImages?.process) {
      window.CarImages.process();
    }
  }, [car]);
  useEffect(() => {
    if (!car) return;

    const interval = setInterval(() => {
      if (window.CarImages?.process) {
        window.CarImages.process();
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [car]);

  return (
    <div>
      <h1>Car Image</h1>

      {car && (
        <img
          key={`${car.make}-${car.model}`}
          data-ci-make={car.make}
          data-ci-model={car.model}
          alt="Car"
        />
      )}

      <Search onSearch={handleSearch} />
    </div>
  );
}

export default App;
