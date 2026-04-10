import product_1_thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import { useAppSelector } from "../app/hooks";
import { useState } from "react";
import { ThankYou } from "./ThankYou";

export function Basket() {
  const count = useAppSelector((state) => state.counter.value);

  const price = 125;
  const total = price * count;

  const [thankYou, setThankYou] = useState(false);
  return (
    <div className="z-20 bg-white shadow-xl lg:w-1/4 w-full rounded-xl right-0  top-24 absolute lg:right-10">
      <h1 className="border-b pb-5 pl-4 font-bold pt-5">Cart</h1>

      {count === 0 ? (
        <p className="text-[#68707dff] text-center py-24 font-semibold">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="flex justify-center items-center p-7 space-x-4">
            <div>
              <img
                src={product_1_thumbnail}
                alt="product"
                className="h-16 w-20 rounded-md"
              />
            </div>

            <div>
              <h1 className="text-gray-500 font-medium">
                Fall Limited Edition Sneakers
              </h1>

              <p className="text-gray-500 font-medium">
                ${price}.00 x {count}{" "}
                <span className="text-black font-semibold">${total}.00</span>
              </p>
            </div>

            <div>
              <i className="fa-solid fa-trash-can hover:text-red-600 cursor-pointer"></i>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setThankYou((prev) => !prev)}
              className="bg-[#ff7d1aff] w-11/12 rounded-lg font-semibold py-2 mb-5 hover:opacity-70"
            >
              Checkout
            </button>
          </div>
          {thankYou && <ThankYou />}
        </>
      )}
    </div>
  );
}
