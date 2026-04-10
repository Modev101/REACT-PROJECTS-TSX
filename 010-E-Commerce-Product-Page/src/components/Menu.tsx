import type { Dispatch, SetStateAction } from "react";
import icon_close from "../assets/icons/icon-close.svg";

type MenuProps = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

export function Menu({ showMenu, setShowMenu }: MenuProps) {
  return (
    <div
      className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300
        ${showMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      onClick={() => setShowMenu(false)}
    >
      <div
        className={`bg-white h-screen w-1/2 shadow-xl absolute left-0 top-0
          transform transition-transform duration-500 ease-in-out
          ${showMenu ? "-translate-x-4" : "-translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <img
            src={icon_close}
            alt="icon-close"
            className="ml-6 mt-6 cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>

        <ul className="text-black space-y-4 p-6 font-semibold">
          {["Collection", "Men", "Women", "About", "Contact"].map(
            (ele, index) => (
              <li key={index} className="cursor-pointer">
                {ele}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
