import icon_cart from "./assets/icons/icon-cart.svg";
import icon_previous from "./assets/icons/icon-previous.svg";
import icon_next from "./assets/icons/icon-next.svg";
import product_1 from "./assets/images/image-product-1.jpg";
import product_2 from "./assets/images/image-product-2.jpg";
import product_3 from "./assets/images/image-product-3.jpg";
import product_4 from "./assets/images/image-product-4.jpg";
import product_1_thumbnail from "./assets/images/image-product-1-thumbnail.jpg";
import product_2_thumbnail from "./assets/images/image-product-2-thumbnail.jpg";
import product_3_thumbnail from "./assets/images/image-product-3-thumbnail.jpg";
import product_4_thumbnail from "./assets/images/image-product-4-thumbnail.jpg";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Counter } from "./components/Counter";
import { useAppSelector } from "./app/hooks";
function App() {
  const images = [product_1, product_2, product_3, product_4];
  const thumbnails = [
    product_1_thumbnail,
    product_2_thumbnail,
    product_3_thumbnail,
    product_4_thumbnail,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const [basketOpen, setBasketOpen] = useState(false);
  const count = useAppSelector((state) => state.counter.value);
  return (
    <>
      <Navbar basketOpen={basketOpen} setBasketOpen={setBasketOpen} />

      <main className="flex flex-col lg:flex-row items-center justify-center lg:gap-40 lg:p-10 mb-5 lg:mb-0">
        <div className="w-full lg:ml-40 lg:w-1/3">
          <div className="relative mb-4">
            <img
              src={images[currentIndex]}
              alt={`image-product-${currentIndex + 1}`}
              className="w-full lg:rounded-lg"
            />

            <div className="absolute inset-0 flex justify-between items-center px-4">
              <div
                onClick={handlePrevious}
                className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg lg:hidden"
              >
                <img src={icon_previous} alt="icon-previous" />
              </div>
              <div
                onClick={handleNext}
                className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-lg lg:hidden"
              >
                <img src={icon_next} alt="icon-next" />
              </div>
            </div>
          </div>

          <div className="lg:flex justify-center gap-4 px-6 items-center hidden">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`product-${index + 1}-thumbnail`}
                onClick={() => setCurrentIndex(index)}
                className={`w-1/4 rounded-lg cursor-pointer border-2 
          ${currentIndex === index ? "border-orange-500 opacity-50" : "hover:opacity-50"}
        `}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex px-10 flex-col justify-between mt-6 lg:mt-0">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#68707d] tracking-widest">
              SNEAKER COMPANY
            </h3>
            <h1 className="text-4xl font-bold text-gray-900 leading-snug">
              Fall Limited Edition <br />
              Sneakers
            </h1>
            <p className="text-gray-500 text-sm font-semibold leading-relaxed">
              These low-profile sneakers are your perfect casual wear <br />
              companion. Featuring a durable rubber outer sole, they'll <br />
              withstand everything the weather can offer.
            </p>

            <div className="flex justify-between items-center lg:flex-col lg:justify-start space-y-2 lg:items-start">
              <div className="flex items-center gap-4">
                <p className="text-2xl font-bold text-gray-900">$125.00</p>
                <span className="bg-black text-white font-semibold px-2 py-1 rounded">
                  50%
                </span>
              </div>
              <div>
                <p className="text-[#68707d] font-semibold line-through">
                  $250.00
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Counter />
            <button
              disabled={count === 0}
              onClick={() => {
                setBasketOpen(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-md w-full sm:w-auto hover:opacity-70"
            >
              <img src={icon_cart} alt="icon-cart" />
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
