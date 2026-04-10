import icon_menu from "../assets/icons/icon-menu.svg";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import { Menu } from "../components/Menu";
import icon_cart from "../assets/icons/icon-cart.svg";
import { useState } from "react";
import { Basket } from "./Basket";
type NavbarProps = {
  basketOpen: boolean;
  setBasketOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export function Navbar({ basketOpen, setBasketOpen }: NavbarProps) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav>
        <div className="max-w-7xl mx-auto border-b flex items-center justify-between px-6 py-5">
          <div className="flex items-center justify-center lg:space-x-12 space-x-4">
            <div className="flex items-center justify-center space-x-5">
              <img
                onClick={() => setShowMenu((prev) => !prev)}
                src={icon_menu}
                alt="icon-menu"
                className="lg:hidden md:hidden h-4 cursor-pointer"
              />
              <img
                src={logo}
                alt="image-logo"
                className="w-32 lg:w-full lg:h-6"
              />
            </div>

            <ul className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
              {["Collection", "Men", "Women", "About", "Contact"].map(
                (ele, index) => (
                  <li
                    key={index}
                    className="relative cursor-pointer font-semibold hover:text-black after:absolute after:left-0 after:-bottom-[32px] after:h-[3px] after:w-full after:bg-[#ff7d1a] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {ele}
                  </li>
                ),
              )}
            </ul>

            {showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} />}
          </div>

          <div className="flex items-center lg:space-x-6 space-x-3">
            <img
              onClick={() => setBasketOpen((prev) => !prev)}
              src={icon_cart}
              alt="icon-cart"
              className="h-5 cursor-pointer"
            />

            <img
              src={avatar}
              alt="image-avatar"
              className="h-10 w-10 rounded-full cursor-pointer border-2 border-transparent hover:border-orange-500"
            />
          </div>
          {basketOpen && <Basket />}
        </div>
      </nav>
    </>
  );
}
