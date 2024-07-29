"use client";

import { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import CartSection from "../sections/CartSection";
import { RemoveScroll } from "react-remove-scroll";
import { useAtomValue } from "jotai";
import { cartAtom } from "@/storage/jotai";
import { Badge } from "../ui/badge";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [showCart, setshowCart] = useState(false);

  const cartValue = useAtomValue(cartAtom);
  const links = [
    {
      title: "Home",
      link: "/"
    },
    {
      title: "Shop",
      link: "/shop"
    },
    {
      title: "About",
      link: "/about"
    },
    {
      title: "Contact",
      link: "/contact"
    }
  ];

  const icons = [
    {
      iconUrl: "/images/user_icon.png",
      action: () => console.log("You just clicked on the user icon"),
      alt: "user icon"
    },
    {
      iconUrl: "/images/search_icon.png",
      action: () => console.log("You just clicked on the search icon"),
      alt: "search icon"
    },
    {
      iconUrl: "/images/heart_icon.png",
      action: () => console.log("You just clicked on the heart icon"),
      alt: "heart icon"
    },
    {
      iconUrl: "/images/cart_icon.png",
      action: () => setshowCart(!showCart),
      alt: "cart icon",
      badgeValue: cartValue?.length
    }
  ];
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="relative">
      <div className="md:sticky md:top-0   md:shadow-none z-20 relative">
        {/* DESKTOP */}
        <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4">
          <div className="flex justify-between mx-[41px] items-center">
            <div>
              <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
              {links.map((link, index) => (
                <Link
                  href={link.link}
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                  key={index}
                >
                  <p>{link.title}</p>
                </Link>

              ))}

              {/* Add more links here */}
            </div>
            <div className="flex items-center gap-[40px] select-none">
              {icons.map((icon, index) => (
                <div key={index} className="relative">
                  <img
                    src={icon.iconUrl}
                    onClick={icon.action}
                    alt={icon.alt}
                    className="cursor-pointer"
                  />
                  {icon?.badgeValue ? (
                    <Badge variant="destructive" className="absolute -top-3 -right-5">
                      {icon?.badgeValue}
                    </Badge>
                  ) : (
                    <div></div>
                  )}
                </div>

              ))}
            </div>
          </div>
        </div>
        {/* MOBILE */}
        <div
          className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${menu ? " !bg-[#FFF3E3] py-2" : ""
            } `}
        >
          <div className="flex justify-between mx-[10px]">
            <div className="flex gap-[50px] text-[16px] items-center select-none">
              <img src="/svgs/sf_logo.svg" alt="logo" className="w-[7rem]" />
            </div>
            <div className="flex items-center gap-[40px]">
              {menu ? (
                <X
                  className="cursor-pointer animate-in fade-in zoom-in text-black"
                  onClick={toggleMenu}
                />
              ) : (
                /*<img
                  src="/svgs/hamburger.svg"
                  alt="logo"
                  className="cursor-pointer animate-in fade-in zoom-in"
                  onClick={toggleMenu}
                />*/
                <MenuIcon
                  className="cursor-pointer animate-in fade-in zoom-in"
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
          {menu ? (
            <div className="my-8 select-none animate-in slide-in-from-right">
              <div className="flex flex-col gap-8 mt-8 mx-4">

                {/* Add more links here */}
                {links.map((link, index) => (
                  <Link
                    href={link.link}
                    className="text-black cursor-pointer"
                    key={index}
                  >
                    <p>{link.title}</p>
                  </Link>

                ))}

                <div className="flex flex-col gap-[40px] select-none">
                  {icons.map((icon, index) => (
                    <img
                      src={icon.iconUrl}
                      onClick={icon.action}
                      alt={icon.alt}
                      key={index}
                      className="cursor-pointer w-[28px] h-[28px] object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {showCart && (<div
        className="hidden md:block absolute left-0 right-0 top-0 h-screen bg-black/20 z-[99]"
        onClick={() => setshowCart(!showCart)}></div>
      )}
      <div className="hidden md:block md:absolute top-0 right-0 z-[100]">
        {showCart && <RemoveScroll>
          <CartSection toggleShowCart={() => setshowCart(!showCart)} />
        </RemoveScroll>}
      </div>
    </div>

  );
}

export default NavBar;
